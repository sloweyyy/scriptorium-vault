# scriptorium-vault

**The internal half of scriptorium's knowledge plane.** PRDs, gap notes, the agent's
house rules ("lessons") and an untransformed copy of every published doc — the material
Curator answers from and Scribe drafts with. An agent writes here by pushing markdown; one
access-controlled site builds from it. There is no application code here.

This repository is private and stays private. The public half — approved product docs,
published only through human-merged pull requests — is
**[`sloweyyy/scriptorium-docs`](https://github.com/sloweyyy/scriptorium-docs)**. The two
live in separate repositories so that nothing in this one can ever reach the public site
by a merge, a stray branch, or a misconfigured build.

| Repository | What it holds | Who writes it |
|---|---|---|
| `sloweyyy/scriptorium` | Scribe (Jira) and Curator (Slack), the pipeline, the eval suite, the deployment | humans |
| **`sloweyyy/scriptorium-vault`** (this repo, private) | `internal/` and the internal site | the agent, by `git push` to `vault-live` |
| [`sloweyyy/scriptorium-docs`](https://github.com/sloweyyy/scriptorium-docs) (public) | `docs/` and the public site | the agent, by pull request — merged by a human |

An agent that could push to the repository holding its own code could change its own
guardrails; here its credential is a deploy key scoped to this one repository.

## Live

| | Where | |
|---|---|---|
| Internal vault site | https://scriptorium-vault-internal.vercel.app/ | built from `vault-live`; HTTP Basic, credentials are not in this repo |
| Public docs site | https://scriptorium-docs.vercel.app/ | built from `scriptorium-docs` |

## What to look at first

- **`internal/_lessons/`** — every house rule the system proposed, with the human verdict
  in its frontmatter: `approved`, `rejected` (naming who rejected it and when), or still
  `proposed`. A rejected rule stays on the shelf as evidence it was judged. This is what
  "the system learned something" looks like when it is auditable rather than opaque.
- **`internal/_gaps/`** — questions Curator refused to answer because it could not cite
  anything. Each one carries the Jira ticket it opened, which is Scribe's next job.
- **`internal/prd/`** — the PRDs each doc was drafted from.
- **`internal/docs/`** — the vault's own copy of every published doc, wikilinks intact.
  The agent restores its vault from this tree when a fresh container starts.
- **`git log`** — every push names the ticket or decision it came from.

## Branch

`vault-live` is the only branch and the internal Vercel project's production branch, so a
push is live immediately. There is no merge gate here on purpose: the audience is internal,
and losing a lesson approval or a gap note between deploys is the failure this repository
exists to prevent.

## `sites/internal` — Quartz v4

Quartz is not an npm package; it is consumed by vendoring its repository. This directory
is a copy of `jackyzha0/quartz` branch `v4` at commit
**`d25a6eabf96751ffca56f8a8139272def7a65041`** (package version `4.5.2`, 2026-04-20),
with `.git/`, `.github/`, and Quartz's own `docs/` removed. Upstream `LICENSE.txt` is
kept. To upgrade, re-vendor from that repo and re-apply the local changes, all of which
carry a comment saying so:

- the `build` / `serve` scripts in `package.json`, and `scripts/sync-content.mjs`
- `vercel.json`
- `quartz.config.ts`: `pageTitle`, `analytics`, `baseUrl`, `ignorePatterns`, and
  dropping `"git"` from `CreatedModifiedDate`'s priority list
- `quartz/util/glob.ts`: `gitignore: false`. Upstream globs content with
  `gitignore: true`, which finds **zero** files here — `content/` is a build-time mirror
  and is gitignored on purpose. Without this the internal site builds successfully and
  publishes nothing. `ignorePatterns` still applies.

Quartz is used because it is Obsidian-native: it renders `[[wikilinks]]`, backlinks, and
the graph view from the markdown as-is, which is what makes the internal tree navigable.

- The build copies `../../internal` into `content/` (`scripts/sync-content.mjs`, chained
  into `build` so no host can skip it). The destination is cleared first, so a deleted note
  disappears from the site instead of lingering.
- It fails loudly if that tree is missing or has no top-level markdown — a silently empty
  internal site would be worse than a red build.

## Vercel

| Setting | Value |
| --- | --- |
| Root Directory | `sites/internal` |
| Framework Preset | Other |
| Install / Build / Output | from `vercel.json` (`npm ci`, `npm run build`, `public`) |
| Node.js Version | 22.x |
| Include source files outside of the Root Directory | **ON (required)** — the build reads `../../internal` |
| Production branch | `vault-live` |

`vercel.json` carries `ignoreCommand: git diff --quiet HEAD^ HEAD -- ../../internal .`,
so only a change to the content or the site rebuilds. Anything other than exit 0 builds,
so an error deploys rather than silently skipping.

## The internal site is behind Basic auth

`sites/internal/middleware.ts` is a Vercel Routing Middleware that demands HTTP Basic
authentication on **every** request. It is the only thing keeping `internal/` off the
open web — Vercel's Deployment Protection is a paid feature on this account, so the gate
lives in the project instead. It must sit at the root of the project directory, next to
`package.json`; moving it elsewhere silently disables it.

| Variable (on the Vercel project) | Meaning |
| --- | --- |
| `INTERNAL_SITE_USER` | the username the site prompts for |
| `INTERNAL_SITE_PASSWORD` | the password |

Nothing is hardcoded and there is no default. **The gate fails closed:** if either
variable is unset or empty, the middleware serves no content and answers `503`. A wrong or
absent `Authorization` header gets a `401` with `WWW-Authenticate: Basic`. Credentials are
compared in constant time. `/robots.txt` is the one ungated path, served as `Disallow: /`.

- **Rotating the password needs a redeploy.** Vercel injects the variables into the
  middleware bundle at build time; the old password keeps working until the next build.
- **Preview deployments need the variables too.** They are set for Production and
  Preview, so a preview is gated by the same credentials instead of answering 503.

## Local build

```bash
cd sites/internal && npm ci && npm run build   # -> sites/internal/public
```

Node 22+ (the vendored Quartz `.npmrc` sets `engine-strict=true`). The build needs no
network once dependencies are installed: Quartz's `CustomOgImages` emitter is disabled in
`quartz.config.ts` because it fetches webfonts at build time.

## Commit identity is load-bearing

Vercel refuses to build a commit whose author email GitHub cannot associate with a user
(`COMMIT_AUTHOR_REQUIRED`), which would leave a green pipeline and a stale site. The agent
therefore commits as a GitHub noreply identity (`<id>+<login>@users.noreply.github.com`).
If you push here by hand, use an email verified on your GitHub account.
