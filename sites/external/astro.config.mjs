import { defineConfig } from "astro/config"
import starlight from "@astrojs/starlight"

// Static output — no Vercel adapter needed. `dist/` is served as plain files.
export default defineConfig({
  site: process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:4321",
  integrations: [
    starlight({
      title: "Beacon documentation",
      description: "Product documentation for Beacon.",
      // No `sidebar` key on purpose: Starlight then derives the whole sidebar
      // from the synced file tree, so a doc the agent publishes appears with no
      // config change here.
      pagination: false,
    }),
  ],
})
