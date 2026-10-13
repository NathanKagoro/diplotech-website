// A small static file server that mounts a directory under a base path,
// the way GitHub Pages serves a project site. Used by the screenshot and
// Open Graph scripts, and handy for a local preview:
//
//   node scripts/lib/static-server.mjs out 4330 /diplotech-website
import { createServer } from 'node:http'
import { createReadStream, existsSync, readFileSync, statSync } from 'node:fs'
import { extname, join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
}

export function serve(dir, port, basePath = '') {
  const root = resolve(dir)
  const server = createServer((req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0])
    if (basePath) {
      if (p !== basePath && !p.startsWith(basePath + '/')) {
        res.writeHead(404)
        return res.end('outside base path')
      }
      p = p.slice(basePath.length) || '/'
    }
    let file = join(root, p)
    if (!file.startsWith(root)) {
      res.writeHead(403)
      return res.end()
    }
    if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html')
    if (!existsSync(file)) {
      const nf = join(root, '404.html')
      res.writeHead(404, { 'content-type': TYPES['.html'] })
      return res.end(existsSync(nf) ? readFileSync(nf) : 'not found')
    }
    res.writeHead(200, { 'content-type': TYPES[extname(file).toLowerCase()] ?? 'application/octet-stream' })
    createReadStream(file).pipe(res)
  })
  return new Promise((ok) => server.listen(port, '127.0.0.1', () => ok(server)))
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [dir = 'out', port = '4330', basePath = '/diplotech-website'] = process.argv.slice(2)
  await serve(dir, Number(port), basePath)
  console.log(`http://127.0.0.1:${port}${basePath}/`)
}
