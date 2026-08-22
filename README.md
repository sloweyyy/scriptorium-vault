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
changes: the `build`/`serve` scripts in `package.json`, `scripts/sync-content.mjs`,
`vercel.json`, and the `pageTitle` / `analytics` / `baseUrl` / `ignorePatterns`
edits in `quartz.config.ts`.

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

## Local builds

Node 22+ (Quartz requires `>=22`; both builds were verified on Node 24.10).

```bash
cd sites/external && npm ci && npm run build   # -> sites/external/dist
cd sites/internal && npm ci && npm run build   # -> sites/internal/public
```

Both are offline builds once dependencies are installed.

## No secrets

Nothing in this repo is a credential, and nothing here should become one. The
sites are static and read no environment variables beyond the `VERCEL_*` values
Vercel injects to derive the canonical site URL.
