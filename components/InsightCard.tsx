import Image from 'next/image'
import Link from 'next/link'

interface InsightCardProps {
  title: string
  description: string
  category: string
  href: string
  date?: string
  imageSrc?: string
  imageAlt?: string
}

// Renders an insight/article preview card.
export function InsightCard({ title, description, category, href, date, imageSrc, imageAlt }: InsightCardProps) {
  return (
    <Link href={href}>
      <div className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all group info-card card-lift">
        <div className="relative h-48 bg-gradient-to-br from-brand-light to-brand-softer overflow-hidden">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-heading/35 to-transparent" aria-hidden="true"></div>
        </div>
        
        <div className="p-6 content-theme-panel-soft">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold text-brand-gold uppercase">{category}</span>
            {date && <span className="text-xs text-body">{date}</span>}
          </div>
          
          <h3 className="text-heading font-display font-bold mb-3 group-hover:text-brand-dark transition-colors">
            {title}
          </h3>
          
          <p className="text-body text-sm mb-4 line-clamp-2">{description}</p>
          
          <span className="inline-flex items-center gap-2 text-brand-dark font-semibold group-hover:gap-3 transition-all">
            Read article →
          </span>
        </div>
      </div>
    </Link>
  )
}
