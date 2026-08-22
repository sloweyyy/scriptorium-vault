import path from "path"
import { FilePath } from "./path"
import { globby } from "globby"

export function toPosixPath(fp: string): string {
  return fp.split(path.sep).join("/")
}

export async function glob(
  pattern: string,
  cwd: string,
  ignorePatterns: string[],
): Promise<FilePath[]> {
  const fps = (
    await globby(pattern, {
      cwd,
      ignore: ignorePatterns,
      // LOCAL CHANGE (docloop-vault): upstream passes `gitignore: true`.
      // `content/` here is a build-time mirror of the repo's `internal/` tree and
      // is deliberately gitignored, so honouring .gitignore would make Quartz
      // find zero input files. `ignorePatterns` from quartz.config.ts still applies.
      gitignore: false,
    })
  ).map(toPosixPath)
  return fps as FilePath[]
}
