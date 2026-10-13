import test from 'node:test'
import assert from 'node:assert/strict'
import { checkRef, refsInCss, refsInHtml } from '../scripts/lib/links.mjs'

const files = new Set([
  'index.html',
  'about/index.html',
  'services/index.html',
  'services/software-development/index.html',
  'og.png',
  '_next/static/css/app.css',
  '_next/static/media/font.woff2',
])
const ctx = (fromPath = 'index.html', ids) => ({
  fromPath,
  basePath: '/diplotech-website',
  siteUrl: 'https://nathankagoro.github.io/diplotech-website',
  exists: (p) => files.has(p),
  ids,
})

test('refsInHtml finds href, src and srcset values', () => {
  const html = '<a href="/a/">x</a><img src="/b.png" srcset="/c.png 1x, /d.png 2x"><link href="/e.css?v=1&amp;x=2">'
  assert.deepEqual(refsInHtml(html), ['/a/', '/b.png', '/e.css?v=1&x=2', '/c.png', '/d.png'])
})

test('refsInCss finds url() values and skips data URIs', () => {
  assert.deepEqual(
    refsInCss(`a{background:url("/x.png")}b{src:url(../media/f.woff2)}c{background:url("data:image/svg+xml,%3Crect filter='url(%23n)'/%3E")}`),
    ['/x.png', '../media/f.woff2'],
  )
})

test('a bare "#" is always a failure', () => {
  assert.equal(checkRef('#', ctx()).ok, false)
  assert.equal(checkRef('', ctx()).ok, false)
})

test('mailto and tel links fail: the site has no contact details', () => {
  assert.equal(checkRef('mailto:someone@example.org', ctx()).ok, false)
  assert.equal(checkRef('tel:+440000', ctx()).ok, false)
})

test('routes under the base path resolve to index.html', () => {
  assert.equal(checkRef('/diplotech-website/', ctx()).ok, true)
  assert.equal(checkRef('/diplotech-website/about/', ctx()).ok, true)
  assert.equal(checkRef('/diplotech-website/services/software-development/', ctx()).ok, true)
})

test('a link that forgets the base path fails', () => {
  const r = checkRef('/about/', ctx())
  assert.equal(r.ok, false)
  assert.match(r.reason, /base path/)
})

test('a route without its trailing slash fails', () => {
  const r = checkRef('/diplotech-website/services', ctx())
  assert.equal(r.ok, false)
  assert.match(r.reason, /trailing slash/)
})

test('a missing target fails', () => {
  assert.equal(checkRef('/diplotech-website/insights/', ctx()).ok, false)
  assert.equal(checkRef('/diplotech-website/headers/about.jpg', ctx()).ok, false)
})

test('query strings and fragments are ignored when resolving files', () => {
  assert.equal(checkRef('/diplotech-website/og.png?v=2', ctx()).ok, true)
  assert.equal(checkRef('/diplotech-website/about/#method', ctx()).ok, true)
})

test('relative references resolve against the referring file', () => {
  assert.equal(checkRef('../media/font.woff2', ctx('_next/static/css/app.css')).ok, true)
  assert.equal(checkRef('../media/missing.woff2', ctx('_next/static/css/app.css')).ok, false)
})

test('absolute URLs to this site are checked, other origins are not', () => {
  assert.equal(checkRef('https://nathankagoro.github.io/diplotech-website/og.png', ctx()).ok, true)
  assert.equal(checkRef('https://nathankagoro.github.io/diplotech-website/nope.png', ctx()).ok, false)
  assert.equal(checkRef('https://nathankagoro.com', ctx()).ok, true)
})

test('in-page fragments must match an id on the page', () => {
  assert.equal(checkRef('#sheet', ctx('index.html', new Set(['sheet']))).ok, true)
  assert.equal(checkRef('#nowhere', ctx('index.html', new Set(['sheet']))).ok, false)
})
