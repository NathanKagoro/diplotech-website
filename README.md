# Diplotech Solutions (concept site)

A website concept for a consultancy that would build, staff and support software for ministries,
missions and international bodies, laid out as a diplomatic dossier: a folder with tabbed dividers, and one typewritten cable per page.

It was designed for a prospective client who did not go ahead. **Diplotech Solutions is not a
trading company.** The site says so at the top of every page.

Hosted at <https://nathankagoro.github.io/diplotech-website/> (once GitHub Pages is switched on,
see below).

## What is real and what is illustrative

| Part | Status |
| --- | --- |
| The design, code, drawings and copy | Real work, by Nathan Kagoro |
| The firm | A concept. It has no clients, partners, staff, offices or contact details |
| Services, sectors, partnerships, careers | Describe what such a practice would offer. Nothing is claimed as done |
| The six briefings | Written for the concept. Method and opinion only: no statistics, quotations or dates |
| The message form | A demonstration. It validates in the browser and sends nothing anywhere |
| The globe | Drawn by `scripts/make-map.mjs` from hand-plotted outlines. Approximate, as its caption says |

An earlier draft carried invented figures ("50+ engagements", "15+ countries"), a real-looking
email address and stock photographs of unknown licence. All have been removed, and
`tests/content.test.mjs` fails the build if anything similar returns.

## How it is built

- Next.js 14 (app router) with `output: 'export'`: plain static files in `out/`.
- `trailingSlash: true`, and a base path read from `NEXT_PUBLIC_BASE_PATH`, so the same code runs
  at `/` in development and under `/diplotech-website` on GitHub Pages.
- Plain CSS in `app/globals.css`. The laid paper, desk grain and worn stamp ink are CSS gradients
  and small inline SVG filters; there are no texture images.
- Two self-hosted font families (Courier Prime, Libre Caslon Text; both SIL Open Font License),
  Latin subsets, loaded with `next/font/local`.
- No cookies, analytics or third-party requests.

```
app/                 pages; one cable each
components/          Dossier (page frame), Marks (crest, seal, stamps), IndexDialog, MessageForm
content/briefings.mjs  the six briefings
lib/validate.mjs     form validation (pure, unit tested)
scripts/             map generator, link checker, screenshots, preview image
tests/               node:test suites
```

## Run, build, test

Needs Node 20 or later (CI uses 22).

```bash
npm install
npm run dev            # http://localhost:4330 at the root path
npm test               # 37 unit tests
npm run build:pages    # export to out/ exactly as published, under /diplotech-website
npm run check          # every internal link and asset in out/ must resolve; no href="#"
npm run shots          # screenshots at 1440, 390 and 360 px into shots/, plus dialog and form checks
```

To look at the export locally the way Pages will serve it:

```bash
node scripts/lib/static-server.mjs out 4330 /diplotech-website
# then open http://127.0.0.1:4330/diplotech-website/
```

`npm run shots` needs Chrome. It looks in the usual places; set `CHROME_PATH` if yours is elsewhere.

Other scripts:

- `npm run map` regenerates `public/globe.svg` after a change to `scripts/land.mjs` or the view centre.
- `npm run og` re-photographs the cover into `public/og.png` (run after a build, then build again).
- `npm run build` builds at the root path, with no base path.

## Tests

`npm test` runs four suites with Node's built-in runner:

- `validate.test.mjs`: the message form's rules and which field receives focus.
- `projection.test.mjs`: the orthographic projection behind the globe.
- `links.test.mjs`: the link checker's own rules (base path, trailing slash, dead links).
- `content.test.mjs`: six briefings of 300 to 450 words with no figures or quotations; no contact
  details, dead links or track-record claims anywhere in the source.

## Deployment

`.github/workflows/pages.yml` builds and deploys on every push to `main`. One setting has to be
switched on by hand, once: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

`.github/workflows/ci.yml` runs on every push and pull request: tests, the published build, the
link check, and screenshots uploaded as the `screenshots` artifact.
