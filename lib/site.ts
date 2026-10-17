// Site-wide constants. The base path comes from the environment so the same
// code runs at the root in development and under /diplotech-website on Pages.

export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
export const SITE_ORIGIN = 'https://nathankagoro.github.io'
export const SITE_URL = `${SITE_ORIGIN}/diplotech-website`

export const DISCLOSURE =
  'Concept site designed for a prospective client. Diplotech Solutions is not a trading company.'

export type TabId =
  | 'cover'
  | 'about'
  | 'services'
  | 'sectors'
  | 'partnerships'
  | 'briefings'
  | 'careers'
  | 'contact'

export const TABS: { id: TabId; label: string; href: string; code: string }[] = [
  { id: 'cover', label: 'Cover', href: '/', code: 'CVR' },
  { id: 'about', label: 'About', href: '/about/', code: 'ABT' },
  { id: 'services', label: 'Services', href: '/services/', code: 'SVC' },
  { id: 'sectors', label: 'Sectors', href: '/industries/', code: 'SEC' },
  { id: 'partnerships', label: 'Partnerships', href: '/partners/', code: 'PTN' },
  { id: 'briefings', label: 'Briefings', href: '/insights/', code: 'BRF' },
  { id: 'careers', label: 'Careers', href: '/careers/', code: 'CAR' },
  { id: 'contact', label: 'Contact', href: '/contact/', code: 'CON' },
]

export const SERVICES = [
  {
    slug: 'software-development',
    annex: 'A',
    title: 'Software development and consultancy',
    short: 'Software',
    line: 'Custom systems and advice on how to plan, buy and run them.',
  },
  {
    slug: 'it-recruitment',
    annex: 'B',
    title: 'IT recruitment and project management',
    short: 'Recruitment',
    line: 'Finding technical staff and keeping the work they join on course.',
  },
  {
    slug: 'client-support',
    annex: 'C',
    title: 'Client support and call centre',
    short: 'Support',
    line: 'Help desks and enquiry lines run to an agreed standard.',
  },
] as const
