# scriptorium-vault

The content repository for scriptorium's two-agent documentation pipeline. An agent
writes into this repo by pushing markdown; two static sites build from it.

There is no application code here — only content and the two site builds around
it.

## The two content trees

| Tree | Audience | Written by | Served by |
| --- | --- | --- | --- |
| `docs/` | **Public.** Approved, human-gated product documentation for Beacon. | the agent, after a human approves the draft | `sites/external` |
| `internal/` | **Internal only.** PRDs, gap notes, and approved house rules ("lessons"), plus the index that links them. | the agent | `sites/internal` |

Both trees arrive by `git push` from the agent. Editing them by hand works the
same way — they are plain markdown directories.

`internal/` is never served by the external site. The external build copies
`docs/` and only `docs/`; nothing in `internal/` is reachable from the public
site. Keep it that way: publishing internal notes publicly is the one failure
mode this split exists to prevent.

## The two sites

Each site lives in `sites/*` and builds from the tree above it. Content lives
outside the site directory, so **every build starts by copying it in** —
`scripts/sync-content.mjs`, chained into the `build` script rather than run as an
npm `prebuild` hook so it cannot be skipped by whatever command the host runs.
Symlinks are deliberately not used: Vercel's build clone does not reliably
preserve them. The script clears its destination first, so a doc deleted from
`docs/` or `internal/` disappears from the built site instead of lingering.

### `sites/external` — Astro + Starlight

- Astro `7.2.4`, `@astrojs/starlight` `0.41.7` (pinned exactly; `package-lock.json` committed).
- Copies `../../docs` into `src/content/docs/`. The sidebar is derived from that
  file tree, so a doc the agent publishes appears with no config change.
- Static output, no Vercel adapter.
- Unresolved `[[wikilinks]]` render as literal text and cannot break the build.
  `docs/scheduled-maintenance.md` links to a target that does not exist, on
  purpose, to hold that guarantee. **Do not add `remark-wiki-link` or a similar
  plugin** — resolving wikilinks is what would make an unresolved one fail.
- Until the agent publishes a `docs/index.md`, the sync script generates a
  placeholder homepage listing the top-level docs, so `/` is a page and not a 404.

### `sites/internal` — Quartz v4

Quartz is not an npm package; it is consumed by vendoring its repository. This
directory is a copy of `jackyzha0/quartz` branch `v4` at commit
**`d25a6eabf96751ffca56f8a8139272def7a65041`** (package version `4.5.2`,
2026-04-20), with `.git/`, `.github/`, and Quartz's own `docs/` removed. Upstream
`LICENSE.txt` is kept. To upgrade, re-vendor from that repo and re-apply the local
changes, all of which carry a comment saying so:

- the `build` / `serve` scripts in `package.json`, and `scripts/sync-content.mjs`
- `vercel.json`
- `quartz.config.ts`: `pageTitle`, `analytics`, `baseUrl`, `ignorePatterns`, and
  dropping `"git"` from `CreatedModifiedDate`'s priority list
- `quartz/util/glob.ts`: `gitignore: false`. Upstream globs content with
  `gitignore: true`, which finds **zero** files here — `content/` is a build-time
  mirror and is gitignored on purpose. Without this the internal site builds
  successfully and publishes nothing. `ignorePatterns` still applies.

Quartz is used here specifically because it is Obsidian-native: it renders
`[[wikilinks]]`, backlinks, and the graph view from the markdown as-is, which is
what makes the internal tree navigable.

- Copies `../../internal` into `content/`.
- Fails the build loudly if that tree is missing or has no top-level markdown —
  a silently empty internal site would be worse than a red build.

## Vercel

Two Vercel projects, both importing **this same repository**, each with a
different Root Directory. Each site's `vercel.json` already carries its install
command, build command, output directory, and framework preset, so an import
needs almost nothing set by hand.

| Setting | External site | Internal site |
| --- | --- | --- |
| Root Directory | `sites/external` | `sites/internal` |
| Framework Preset | Astro | Other |
| Install Command | `npm ci` | `npm ci` |
| Build Command | `npm run build` | `npm run build` |
| Output Directory | `dist` | `public` |
| Node.js Version | 22.x | 22.x |
| Include source files outside of the Root Directory | **ON (required)** | **ON (required)** |

### Which pushes deploy which site

The agent pushes with a repo-scoped deploy key. Approved external docs land on a
per-ticket branch and reach `main` only when a human merges the pull request, so
the public site moves on merge, never on the agent's push — Vercel builds each of
those branches as a **preview deployment**, which is the reviewable artifact for
the PR. The internal tree is pushed straight to `main` and is live immediately.

Because both projects watch the same `main`, each site declares an
`ignoreCommand` in its `vercel.json` so it rebuilds only when its own tree or its
own site directory changed:

```
external:  git diff --quiet HEAD^ HEAD -- ../../docs .
internal:  git diff --quiet HEAD^ HEAD -- ../../internal .
```

Exit 1 means build, exit 0 means skip. Anything else — no `HEAD^` on a root
commit, a shallow clone — is non-zero, so an error deploys rather than silently
skipping. Do not delete these: a Root Directory alone does not reliably tell
Vercel that a change *above* it should trigger a build, and the failure mode is
the agent publishing a doc that never appears on the site.

### Steps that need a human in the Vercel UI

1. **Set the Root Directory** for each project (Settings → Build and Deployment →
   Root Directory). This is the only thing that distinguishes the two projects.
2. **Enable "Include source files outside of the Root Directory in the Build
   Step"** on both. Each build reads a tree above its root (`../../docs`,
   `../../internal`); without this the sync script finds nothing and exits with
   the reason printed in the build log.
3. **Protect the internal project.** `internal/` is not public content. Turn on
   Deployment Protection (Vercel Authentication, or a password) for the internal
   project. Nothing in this repo can enforce that for you.
4. Leave install/build/output unset in the UI — `vercel.json` supplies them.
5. If `npm ci` fails on the internal project with an engine error, pick the
   newest available Node 22.x: the vendored Quartz `.npmrc` sets
   `engine-strict=true` and its `engines` field requires `npm >=10.9.2`.
6. On the first deploy of each project, confirm Vercel's system environment
   variables are exposed — both sites derive their canonical URL from
   `VERCEL_PROJECT_PRODUCTION_URL` and silently fall back to `localhost` without
   it. Check `sitemap-0.xml` on the external site and any page's canonical tag on
   the internal one.

## Local builds

Node 22+ (Quartz requires `>=22`; both builds were verified on Node 24.10).

```bash
cd sites/external && npm ci && npm run build   # -> sites/external/dist
cd sites/internal && npm ci && npm run build   # -> sites/internal/public
```

Both build with no network access once dependencies are installed (verified with
outbound connections blocked). Quartz's `CustomOgImages` emitter is disabled in
`quartz.config.ts` for exactly that reason — it fetches webfonts from Google to
render social-preview images and fails the entire build if it cannot, which is a
poor trade for a deployment-protected internal site. Pages still link the Google
Fonts stylesheet at *view* time; that is a runtime request, not a build one.

## No secrets

Nothing in this repo is a credential, and nothing here should become one. The
sites are static and read no environment variables beyond the `VERCEL_*` values
Vercel injects to derive the canonical site URL.
