// Builds the site exactly as it is published: under /diplotech-website.
// A script rather than an inline environment variable so the same command
// works in PowerShell, Git Bash (which rewrites values starting with "/")
// and on the CI runner.
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const next = fileURLToPath(new URL('../node_modules/next/dist/bin/next', import.meta.url))
const basePath = process.argv[2] ?? '/diplotech-website'

const result = spawnSync(process.execPath, [next, 'build'], {
  cwd: root,
  stdio: 'inherit',
  env: { ...process.env, NEXT_PUBLIC_BASE_PATH: basePath },
})
process.exit(result.status ?? 1)
