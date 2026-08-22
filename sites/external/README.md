# Why this stub exists

The public site lives on `main`; this branch does not carry it. Vercel clones the
external project for every push to `vault-live` too, and errors on the missing Root
Directory before any ignore rule runs. The directory therefore exists here holding
one thing: deployments off. The real site lives at this path on `main`.
