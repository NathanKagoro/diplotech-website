interface CTABannerProps {
  headline: string
  subheading?: string
  buttonText: string
  buttonHref: string
  background?: 'dark' | 'gold'
}

// Renders the shared call-to-action banner.
export function CTABanner({ headline, subheading, buttonText, buttonHref, background = 'dark' }: CTABannerProps) {
  const bgClass = background === 'gold' ? 'bg-brand-gold' : 'bg-heading'
  
  return (
    <section className={`${bgClass} cta-pattern text-white py-16 md:py-20`}>
      <div className="container-x text-center">
        <h2 className="text-white mb-4 text-4xl md:text-5xl">{headline}</h2>
        {subheading && <p className="text-lg mb-8 text-gray-100 max-w-2xl mx-auto">{subheading}</p>}
        <a href={buttonHref} className="btn-secondary bg-white text-heading border-white hover:bg-gray-100">
          {buttonText}
        </a>
      </div>
    </section>
  )
}
