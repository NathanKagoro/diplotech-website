// Walks the exported site and fails if any internal link or asset reference
// does not resolve under the base path, or if any href is "#".
//
//   node scripts/check-export.mjs out [/diplotech-website]
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import { checkRef, refsInCss, refsInHtml } from './lib/links.mjs'

const outDir = resolve(process.argv[2] ?? 'out')
const basePath = process.argv[3] ?? '/diplotech-website'
const siteUrl = 'https://nathankagoro.github.io' + basePath

if (!existsSync(outDir)) {
  console.error(`No export at ${outDir}. Run "npm run build:pages" first.`)
  process.exit(1)
}

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name)
    return statSync(full).isDirectory() ? walk(full) : [full]
  })
}

const exists = (rel) => {
  const full = join(outDir, rel)
  return existsSync(full) && statSync(full).isFile()
}

const files = walk(outDir)
const problems = []
let checked = 0
let pages = 0

for (const file of files) {
  const fromPath = relative(outDir, file).replace(/\\/g, '/')
  let refs
  let ids
  if (file.endsWith('.html')) {
    pages++
    const html = readFileSync(file, 'utf8')
    refs = refsInHtml(html)
    ids = new Set([...html.matchAll(/\sid=["']([^"']+)["']/g)].map((m) => m[1]))
  } else if (file.endsWith('.css')) {
    refs = refsInCss(readFileSync(file, 'utf8'))
  } else continue

  for (const ref of refs) {
    checked++
    const result = checkRef(ref, { fromPath, basePath, siteUrl, exists, ids })
    if (!result.ok) problems.push(`${fromPath}: "${ref}" ${result.reason}`)
  }
}

if (problems.length) {
  console.error(`${problems.length} broken reference(s):`)
  for (const p of [...new Set(problems)]) console.error('  ' + p)
  process.exit(1)
}
console.log(`${pages} pages, ${checked} references checked under ${basePath || '/'}: all resolve.`)
