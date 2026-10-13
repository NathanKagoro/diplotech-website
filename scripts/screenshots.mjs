// Serves the export under the base path and saves full-page screenshots of
// every route at 1440, 390 and 360 px into shots/. Also exercises the two
// interactive pieces (file index dialog, message form) and fails if they
// misbehave, so CI catches a broken dialog or form as well as a broken page.
//
//   node scripts/screenshots.mjs out [/diplotech-website]
import { existsSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { join, relative, resolve } from 'node:path'
import puppeteer from 'puppeteer-core'
import { serve } from './lib/static-server.mjs'

const outDir = resolve(process.argv[2] ?? 'out')
const basePath = process.argv[3] ?? '/diplotech-website'
const PORT = 4339
const WIDTHS = [1440, 390, 360]

const chrome =
  process.env.CHROME_PATH ??
  [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ].find((p) => existsSync(p))
if (!chrome) throw new Error('Chrome not found. Set CHROME_PATH.')

function routes(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name)
    if (statSync(full).isDirectory()) return name === '_next' ? [] : routes(full)
    return name === 'index.html' ? [relative(outDir, dir).replace(/\\/g, '/')] : []
  })
}

const server = await serve(outDir, PORT, basePath)
const browser = await puppeteer.launch({ executablePath: chrome, headless: true, args: ['--no-sandbox', '--hide-scrollbars'] })
const origin = `http://127.0.0.1:${PORT}${basePath}`
const failures = []
mkdirSync('shots', { recursive: true })

try {
  const page = await browser.newPage()
  page.on('pageerror', (e) => failures.push(`page error: ${e.message}`))
  page.on('response', (r) => {
    if (r.status() >= 400) failures.push(`${r.status()} ${r.url()}`)
  })

  for (const route of routes(outDir).filter((r) => r !== '404')) {
    const name = route === '' ? 'cover' : route.replace(/\//g, '_')
    for (const width of WIDTHS) {
      await page.setViewport({ width, height: 900, deviceScaleFactor: 1 })
      await page.goto(`${origin}/${route}${route ? '/' : ''}`, { waitUntil: 'networkidle0' })
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
      if (overflow > 1) failures.push(`${route || '/'} overflows by ${overflow}px at ${width}`)
      await page.screenshot({ path: `shots/${name}-${width}.png`, fullPage: true })
    }
  }

  // File index: opens as a modal, Escape closes it, focus returns.
  await page.setViewport({ width: 360, height: 800, deviceScaleFactor: 1 })
  await page.goto(`${origin}/about/`, { waitUntil: 'networkidle0' })
  await page.click('.index-button')
  const opened = await page.evaluate(() => ({
    open: document.querySelector('dialog.index-card').open,
    locked: getComputedStyle(document.documentElement).overflow === 'hidden',
    inside: document.querySelector('dialog.index-card').contains(document.activeElement),
  }))
  await page.screenshot({ path: 'shots/index-dialog-360.png' })
  // Tab more times than there are links: focus must never land on the page behind.
  let escaped = false
  for (let i = 0; i < 16; i++) {
    await page.keyboard.press('Tab')
    escaped ||= await page.evaluate(() => {
      const a = document.activeElement
      return a !== document.body && !document.querySelector('dialog.index-card').contains(a)
    })
  }
  await page.keyboard.press('Escape')
  // The dialog's "close" event, which releases the scroll lock, is queued
  // after the key press; give it a moment before reading the result.
  await page
    .waitForFunction(() => !document.documentElement.classList.contains('index-open'), { timeout: 2000 })
    .catch(() => {})
  const closed = await page.evaluate(() => ({
    open: document.querySelector('dialog.index-card').open,
    locked: getComputedStyle(document.documentElement).overflow === 'hidden',
    returned: document.activeElement?.classList.contains('index-button'),
  }))
  if (!opened.open || !opened.locked || !opened.inside) failures.push(`index dialog did not open correctly: ${JSON.stringify(opened)}`)
  if (escaped) failures.push('focus left the index dialog while it was open')
  if (closed.open || closed.locked || !closed.returned) failures.push(`index dialog did not close correctly: ${JSON.stringify(closed)}`)

  // Message form: an empty submit focuses the first field; a valid one
  // shows the demonstration notice without leaving the page.
  await page.goto(`${origin}/contact/`, { waitUntil: 'networkidle0' })
  await page.click('.msgform button[type=submit]')
  const invalid = await page.evaluate(() => ({
    focused: document.activeElement?.id,
    errors: document.querySelectorAll('.field__error').length,
  }))
  await page.screenshot({ path: 'shots/contact-errors-360.png', fullPage: true })
  if (invalid.focused !== 'f-name' || invalid.errors !== 5) failures.push(`empty form: ${JSON.stringify(invalid)}`)

  await page.type('#f-name', 'A. Reader')
  await page.type('#f-organisation', 'Ministry of Examples')
  await page.type('#f-email', 'reader@example.org')
  await page.select('#f-enquiry', 'general')
  await page.type('#f-message', 'Testing the demonstration form.')
  const urlBefore = page.url()
  await page.click('.msgform button[type=submit]')
  await page.waitForSelector('.msgform__result')
  const sent = await page.evaluate(() => ({
    text: document.querySelector('.msgform__result').innerText,
    focused: document.activeElement?.classList.contains('msgform__result'),
  }))
  await page.screenshot({ path: 'shots/contact-result-360.png', fullPage: true })
  if (!sent.text.includes('This is a demonstration form. Nothing was sent.')) failures.push('demonstration notice missing')
  if (!sent.focused) failures.push('focus did not move to the form result')
  if (page.url() !== urlBefore) failures.push('form submission changed the URL')
} finally {
  await browser.close()
  server.close()
}

if (failures.length) {
  console.error(failures.join('\n'))
  process.exit(1)
}
console.log(`Screenshots saved to shots/ at ${WIDTHS.join(', ')} px. Dialog and form checks passed.`)
