/**
 * Copy the repo's `internal/` tree into Quartz's `content/` directory.
 *
 * Quartz only builds what is inside its own project directory, and the source of
 * truth (`internal/`) lives at the repo root where the agent pushes it. So the
 * build starts by mirroring one into the other. Symlinks are deliberately not
 * used: Vercel's build clone does not reliably preserve them.
 *
 * The destination is cleared first — a doc removed from `internal/` must
 * disappear from the built site, not linger from a previous build.
 */
import { cp, mkdir, rm, readdir } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const siteDir = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const source = resolve(siteDir, "../../internal")
const destination = resolve(siteDir, "content")

let entries
try {
  entries = await readdir(source)
} catch (error) {
  console.error(
    `[sync-content] cannot read the internal content tree at ${source}\n` +
      `  ${error.message}\n\n` +
      `  On Vercel this almost always means the project is missing the setting\n` +
      `  "Include source files outside of the Root Directory in the Build Step".\n` +
      `  Enable it (Settings -> Build and Deployment) and redeploy.`,
  )
  process.exit(1)
}

const pages = entries.filter((name) => name.endsWith(".md"))
if (pages.length === 0) {
  console.error(
    `[sync-content] ${source} contains no markdown pages at its top level.\n` +
      `  Quartz needs at least content/index.md to build a landing page.`,
  )
  process.exit(1)
}

await rm(destination, { recursive: true, force: true })
await mkdir(destination, { recursive: true })
await cp(source, destination, { recursive: true, dereference: true, preserveTimestamps: true })
console.log(`[sync-content] ${source} -> ${destination}`)
