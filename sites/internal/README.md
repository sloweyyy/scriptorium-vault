# Why this stub exists

The internal site lives on `vault-live`; this branch does not carry it. But Vercel
clones the internal project for *every* push — including pushes to `main` and to the
agent's per-ticket `docs/*` branches — and a project whose Root Directory is missing
fails the build before any ignore rule can run.

So the directory exists everywhere, and on every branch except `vault-live` this
config is what it holds: deployments off. The real site config lives in this same
path on `vault-live`.
