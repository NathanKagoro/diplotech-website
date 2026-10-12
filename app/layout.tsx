import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Diplotech Solutions - Bridging Diplomacy and Technology',
  description:
    'Strategic consultancy at the intersection of diplomacy, technology, and innovation. Serving governments, NGOs, and private sector.',
  keywords:
    'consultancy, digital transformation, government, AI, strategic planning',
  robots: 'index, follow',
  openGraph: {
    title: 'Diplotech Solutions',
    description: 'Bridging diplomacy and technology for global impact',
    type: 'website',
  },
}

// Provides the global app shell and metadata.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white">{children}</body>
    </html>
  )
}
