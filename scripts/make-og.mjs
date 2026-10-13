// Makes public/og.png (1200x630), the link-preview image, by photographing
// the top of the real cover page from the export. Run after a build when the
// cover design changes, then rebuild so the new image is copied into out/:
//
//   npm run build:pages && npm run og && npm run build:pages
import { copyFileSync, existsSync, statSync } from 'node:fs'
import { resolve } from 'node:path'
import puppeteer from 'puppeteer-core'
import sharp from 'sharp'
import { serve } from './lib/static-server.mjs'

const outDir = resolve('out')
const basePath = '/diplotech-website'
const PORT = 4338

const chrome =
  process.env.CHROME_PATH ??
  ['C:/Program Files/Google/Chrome/Application/chrome.exe', '/usr/bin/google-chrome'].find((p) => existsSync(p))
if (!chrome) throw new Error('Chrome not found. Set CHROME_PATH.')

const server = await serve(outDir, PORT, basePath)
const browser = await puppeteer.launch({ executablePath: chrome, headless: true, args: ['--no-sandbox', '--hide-scrollbars'] })
try {
  const page = await browser.newPage()
  await page.setViewport({ width: 1200, height: 900, deviceScaleFactor: 1 })
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }])
  await page.goto(`http://127.0.0.1:${PORT}${basePath}/`, { waitUntil: 'networkidle0' })
  // Tighten the frame: drop the page chrome above the tabs and trim the
  // routing block so the title, globe and seal all sit inside 630 px.
  await page.addStyleTag({
    content: `
      .topline, .masthead, .skip { display: none !important; }
      .desk { padding-top: 26px !important; }
      .sheet__body { padding-top: 26px !important; }
      .routing dl > div:nth-child(2), .routing dl > div:nth-child(3) { display: none !important; }
      .cover__title { margin-top: 26px !important; }
      .cover__plate { margin-top: 6px !important; }
      .cover__paras, .cover__caption { display: none !important; }
    `,
  })
  const shot = await page.screenshot({ clip: { x: 0, y: 0, width: 1200, height: 630 } })
  await sharp(shot).png({ palette: true, quality: 90, effort: 10 }).toFile('public/og.png')
  copyFileSync('public/og.png', resolve(outDir, 'og.png'))
  console.log(`public/og.png written (${Math.round(statSync('public/og.png').size / 1024)} KB)`)
} finally {
  await browser.close()
  server.close()
}
