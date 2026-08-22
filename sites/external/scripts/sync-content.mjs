/**
 * Copy the repo's `docs/` tree into Starlight's content collection.
 *
 * The approved docs live at the repo root (that is where the agent pushes them),
 * outside this site directory, so the build starts by mirroring them into
 * `src/content/docs/`. Symlinks are deliberately not used: Vercel's build clone
 * does not reliably preserve them.
 *
 * The destination is cleared first — a doc removed from `docs/` must disappear
 * from the built site, not linger from a previous build.
 */
import { cp, mkdir, readdir, rm, writeFile } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const siteDir = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const source = resolve(siteDir, "../../docs")
const destination = resolve(siteDir, "src/content/docs")

let entries
try {
  entries = await readdir(source, { withFileTypes: true })
} catch (error) {
  console.error(
    `[sync-content] cannot read the docs tree at ${source}\n` +
      `  ${error.message}\n\n` +
      `  On Vercel this almost always means the project is missing the setting\n` +
      `  "Include source files outside of the Root Directory in the Build Step".\n` +
      `  Enable it (Settings -> Build and Deployment) and redeploy.`,
  )
  process.exit(1)
}

const pages = entries.filter((entry) => entry.isFile() && /\.mdx?$/.test(entry.name))
if (pages.length === 0 && !entries.some((entry) => entry.isDirectory())) {
  console.error(`[sync-content] ${source} contains no markdown pages — nothing to publish.`)
  process.exit(1)
}

await rm(destination, { recursive: true, force: true })
await mkdir(destination, { recursive: true })
await cp(source, destination, { recursive: true, dereference: true })

// Starlight routes the collection's `index` entry to `/`. Until the agent
// publishes a `docs/index.md`, generate a minimal landing page so the site root
// is a page rather than a 404.
const hasHomepage = pages.some((entry) => /^index\.mdx?$/.test(entry.name))
if (!hasHomepage) {
  const links = pages
    .map((entry) => `- [${entry.name.replace(/\.mdx?$/, "")}](/${entry.name.replace(/\.mdx?$/, "")}/)`)
    .join("\n")
  await writeFile(
    resolve(destination, "index.md"),
    [
      "---",
      "title: Beacon documentation",
      "description: Product documentation for Beacon.",
      "---",
      "",
      "Published documentation for Beacon. Use the sidebar, or start here:",
      "",
      links,
      "",
    ].join("\n"),
  )
  console.log("[sync-content] no docs/index.md — generated a placeholder homepage")
}

console.log(`[sync-content] ${source} -> ${destination}`)
