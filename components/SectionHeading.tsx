interface SectionHeadingProps {
  eyebrow: string
  heading: string
  description?: string
  centered?: boolean
}

// Renders section heading blocks with consistent spacing.
export function SectionHeading({ eyebrow, heading, description, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center max-w-2xl mx-auto' : ''}`}>
      <div className="eyebrow mb-3">{eyebrow}</div>
      <h2 className="text-heading mb-4 accent-divider inline-block">{heading}</h2>
      {description && <p className="text-lg text-body">{description}</p>}
    </div>
  )
}
