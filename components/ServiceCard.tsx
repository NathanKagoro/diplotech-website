import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  capabilities: string[]
  href: string
  highlight?: boolean
}

// Renders a service summary card.
export function ServiceCard({ title, description, capabilities, href, highlight }: ServiceCardProps) {
  return (
    <div className={`p-8 rounded-lg border-2 transition-all hover:shadow-xl card-lift surface-pattern info-card ${
      highlight ? 'border-brand-gold bg-surface-light' : 'border-border bg-white'
    }`}>
      <h3 className="text-heading mb-3 font-display font-bold">{title}</h3>
      <p className="text-body mb-6 text-callout">{description}</p>
      
      <ul className="space-y-2 mb-8">
        {capabilities.map((cap, i) => (
          <li key={i} className="flex items-start gap-3 text-body">
            <span className="text-brand-dark font-bold mt-1">•</span>
            <span>{cap}</span>
          </li>
        ))}
      </ul>

      <Link href={href} className="inline-flex items-center gap-2 text-brand-dark hover:text-brand-dark-hover font-semibold transition-colors">
        Learn more →
      </Link>
    </div>
  )
}
