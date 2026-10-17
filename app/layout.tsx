import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import { SITE_ORIGIN, SITE_URL } from '@/lib/site'
import './globals.css'

// Two families, self-hosted and subset to Latin: a typewriter face for the
// body of each cable and a formal serif for headings.
const typewriter = localFont({
  src: [
    { path: './fonts/courier-prime-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/courier-prime-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-type',
  display: 'swap',
  fallback: ['Courier New', 'Courier', 'monospace'],
})

const serif = localFont({
  src: [
    { path: './fonts/libre-caslon-text-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/libre-caslon-text-latin-400-italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-serif',
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})

const description =
  'A concept site for a consultancy that would build, staff and support software for ministries, missions and international bodies, laid out as a diplomatic dossier. Designed for a prospective client; not a trading company.'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#16323A',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: 'Diplotech Solutions: a concept dossier',
    template: '%s | Diplotech Solutions (concept)',
  },
  description,
  openGraph: {
    type: 'website',
    siteName: 'Diplotech Solutions (concept)',
    title: 'Diplotech Solutions: a concept dossier',
    description,
    url: `${SITE_URL}/`,
    images: [
      {
        url: `${SITE_URL}/og.png`,
        width: 1200,
        height: 630,
        alt: 'A typewritten cable headed Diplotech Solutions beside a line-drawn globe and a gold wax seal.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Diplotech Solutions: a concept dossier',
    description,
    images: [`${SITE_URL}/og.png`],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${typewriter.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
