// Holds the written content to the promises the site makes about itself.
import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { BRIEFINGS, wordCount } from '../content/briefings.mjs'

const root = fileURLToPath(new URL('..', import.meta.url))

function sources(dir) {
  return readdirSync(join(root, dir)).flatMap((name) => {
    const rel = `${dir}/${name}`
    if (statSync(join(root, rel)).isDirectory()) return sources(rel)
    return /\.(tsx?|mjs|css)$/.test(name) && name !== 'globe-data.ts' ? [rel] : []
  })
}
const FILES = ['app', 'components', 'content', 'lib'].flatMap(sources)
const read = (rel) => readFileSync(join(root, rel), 'utf8')

test('there are six briefings, numbered 1 to 6, with unique slugs', () => {
  assert.deepEqual(BRIEFINGS.map((b) => b.n), [1, 2, 3, 4, 5, 6])
  assert.equal(new Set(BRIEFINGS.map((b) => b.slug)).size, 6)
  for (const b of BRIEFINGS) assert.match(b.slug, /^[a-z0-9-]+$/)
})

test('each briefing runs to between 300 and 450 words', () => {
  for (const b of BRIEFINGS) {
    const words = wordCount(b)
    assert.ok(words >= 300 && words <= 450, `No. ${b.n} has ${words} words`)
  }
})

test('briefings contain no figures, percentages, quotations or dates', () => {
  for (const b of BRIEFINGS) {
    const text = [b.title, b.summary, ...b.paras.map((p) => `${p.lead} ${p.text}`)].join(' ')
    assert.doesNotMatch(text, /\d/, `No. ${b.n} contains a digit`)
    assert.doesNotMatch(text, /per ?cent|%/i, `No. ${b.n} contains a percentage`)
    assert.doesNotMatch(text, /["“”]/, `No. ${b.n} contains a quotation`)
    assert.doesNotMatch(
      text,
      /\b(January|February|April|June|July|August|September|October|November|December)\b/,
      `No. ${b.n} names a month`,
    )
  }
})

test('briefings use no em-dash asides', () => {
  for (const b of BRIEFINGS) {
    for (const p of b.paras) assert.doesNotMatch(p.text, /—/, `No. ${b.n}`)
  }
})

test('no source file carries contact details or dead links', () => {
  for (const rel of FILES) {
    const src = read(rel)
    assert.doesNotMatch(src, /mailto:|tel:\+?\d/, `${rel} has a contact link`)
    assert.doesNotMatch(src, /@diplotech|diplotech\.solutions/i, `${rel} has a Diplotech address`)
    assert.doesNotMatch(src, /href=["']#["']/, `${rel} has a dead link`)
    assert.doesNotMatch(src, /linkedin|twitter\.com|client portal/i, `${rel} points at a profile or portal that does not exist`)
  }
})

test('no page claims a track record', () => {
  for (const rel of FILES.filter((f) => f.startsWith('app/') && f.endsWith('.tsx'))) {
    const src = read(rel)
    assert.doesNotMatch(src, /\d+\s*\+/, `${rel} has an "N+" figure`)
    assert.doesNotMatch(src, /\d+\s*%/, `${rel} has a percentage`)
    assert.doesNotMatch(src, /trusted by|our clients|our partners|24\/7|years of experience/i, `${rel} implies a track record`)
  }
})

test('the concept disclosure is defined once and shown by the page frame', () => {
  assert.match(
    read('lib/site.ts'),
    /Concept site designed for a prospective client\. Diplotech Solutions is not a trading company\./,
  )
  assert.match(read('components/Dossier.tsx'), /\{DISCLOSURE\}/)
})
