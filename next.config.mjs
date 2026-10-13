// Static export for GitHub Pages. The site is served from /diplotech-website
// there, so the base path is read from the environment: leave it unset for
// local development at the root, set NEXT_PUBLIC_BASE_PATH=/diplotech-website
// for the build that is published.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Every route becomes <route>/index.html, so /services/ and
  // /services/software-development/ can both exist on a plain file host.
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
}

export default nextConfig
