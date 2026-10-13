// Link checking for the exported site. Pure functions over strings and a
// "does this file exist" callback, so the rules can be unit tested without
// a build.

const ATTR = /\s(?:href|src|poster|action)=["']([^"']*)["']/g
const SRCSET = /\ssrcset=["']([^"']*)["']/g
const CSS_URL = /url\(\s*["']?([^"')]+)["']?\s*\)/g

/** Every URL referenced from a piece of HTML. */
export function refsInHtml(html) {
  const refs = []
  for (const m of html.matchAll(ATTR)) refs.push(m[1])
  for (const m of html.matchAll(SRCSET)) {
    for (const part of m[1].split(',')) {
      const url = part.trim().split(/\s+/)[0]
      if (url) refs.push(url)
    }
  }
  return refs.map((r) => r.replace(/&amp;/g, '&'))
}

/** Every url(...) referenced from a stylesheet, ignoring data URIs. */
export function refsInCss(css) {
  // Remove quoted data URIs whole first: an inline SVG can itself contain
  // url(#id) references, which are not files.
  const stripped = css.replace(/url\(\s*("|')data:[\s\S]*?\1\s*\)/g, '')
  return [...stripped.matchAll(CSS_URL)].map((m) => m[1]).filter((u) => !u.startsWith('data:'))
}

/**
 * Classify one reference found in the file at `fromPath` (a path inside the
 * export, with forward slashes, e.g. "about/index.html").
 *
 * Returns { ok: true } or { ok: false, reason }.
 *
 * @param {string} ref
 * @param {{ fromPath: string, basePath: string, siteUrl: string, exists: (p: string) => boolean, ids?: Set<string> }} ctx
 */
export function checkRef(ref, { fromPath, basePath, siteUrl, exists, ids }) {
  if (ref === '#' || ref === '') return { ok: false, reason: 'dead link (empty or "#")' }
  if (/^javascript:/i.test(ref)) return { ok: false, reason: 'javascript: link' }
  if (/^(mailto|tel):/i.test(ref)) return { ok: false, reason: 'contact link on a site with no contact details' }
  if (ref.startsWith('data:')) return { ok: true }

  if (ref.startsWith('#')) {
    if (ids && !ids.has(ref.slice(1))) return { ok: false, reason: `no element with id "${ref.slice(1)}"` }
    return { ok: true }
  }

  let path
  if (/^https?:\/\//i.test(ref) || ref.startsWith('//')) {
    // Absolute URLs back to this site (the Open Graph image) are checked;
    // other origins are outside the scope of a build-time check.
    if (!ref.startsWith(siteUrl)) return { ok: true }
    path = new URL(ref).pathname
  } else if (ref.startsWith('/')) {
    path = ref
  } else {
    // Relative: resolve against the directory of the referring file.
    const dir = fromPath.includes('/') ? fromPath.slice(0, fromPath.lastIndexOf('/') + 1) : ''
    path = new URL(ref, `http://x${basePath}/${dir}`).pathname
  }

  path = decodeURIComponent(path.split('?')[0].split('#')[0])

  if (basePath && path !== basePath && !path.startsWith(basePath + '/')) {
    return { ok: false, reason: `not under the base path ${basePath}` }
  }
  let rel = path.slice(basePath.length).replace(/^\//, '')

  if (rel === '' || rel.endsWith('/')) rel += 'index.html'
  if (exists(rel)) return { ok: true }
  // A static host serves <dir>/index.html for a path without the slash,
  // after a redirect. Internal links should not rely on that.
  if (exists(rel + '/index.html')) return { ok: false, reason: 'missing trailing slash (would redirect)' }
  return { ok: false, reason: 'target does not exist in the export' }
}
