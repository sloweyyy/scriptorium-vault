import { defineCollection } from "astro:content"
import { docsLoader } from "@astrojs/starlight/loaders"
import { docsSchema } from "@astrojs/starlight/schema"

// docsLoader() reads src/content/docs, which scripts/sync-content.mjs fills from
// the repo-root `docs/` tree before every build.
export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
}
