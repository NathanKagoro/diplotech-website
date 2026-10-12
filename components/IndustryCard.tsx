interface IndustryCardProps {
  title: string
  description: string
  items: string[]
}

// Renders an industry capability grouping.
export function IndustryCard({ title, description, items }: IndustryCardProps) {
  return (
    <div className="bg-surface-light p-8 rounded-lg border border-border hover:border-brand-gold transition-all info-card card-lift">
      <h3 className="text-heading font-display font-bold mb-3">{title}</h3>
      <p className="text-body mb-6">{description}</p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-body">
            <span className="text-brand-gold font-bold">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
