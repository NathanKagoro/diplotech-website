import Image from 'next/image'

interface HeroProps {
  eyebrow?: string
  heading: string
  subheading?: string
  cta1?: { text: string; href: string; variant?: 'primary' | 'secondary' }
  cta2?: { text: string; href: string; variant?: 'primary' | 'secondary' }
  background?: 'white' | 'teal' | 'dark'
  imageSrc?: string
  imageAlt?: string
  imagePriority?: boolean
}

// Renders the reusable hero banner with optional media.
export function Hero({ eyebrow, heading, subheading, cta1, cta2, background = 'white', imageSrc, imageAlt, imagePriority = false }: HeroProps) {
  const bgClasses = {
    white: 'bg-white',
    teal: 'bg-brand-softer',
    dark: 'bg-heading text-white',
  }

  const hasImage = Boolean(imageSrc)
  const headingColor = background === 'dark' || hasImage ? 'text-white' : 'text-heading'

  const getCtaClass = (variant?: 'primary' | 'secondary') => {
    if (!hasImage) {
      return variant === 'secondary' ? 'btn-secondary' : 'btn-primary'
    }

    return variant === 'secondary'
      ? 'btn-secondary !bg-white/90 !text-heading !border-white hover:!bg-white'
      : 'btn-gold'
  }

  return (
    <section className={`${hasImage ? 'relative overflow-hidden' : bgClasses[background]} pt-32 pb-16 md:pb-24`}>
      {imageSrc && (
        <>
          <Image
            src={imageSrc}
            alt={imageAlt || heading}
            fill
            priority={imagePriority}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-heading/80 via-heading/65 to-heading/80" aria-hidden="true"></div>
        </>
      )}

      <div className="container-x relative z-10">
        <div className={`max-w-3xl mx-auto text-center ${hasImage ? 'bg-black/20 backdrop-blur-[2px] border border-white/20 rounded-2xl px-6 py-8 md:px-10 md:py-10 shadow-2xl' : ''}`}>
          {eyebrow && <div className={`mb-4 ${hasImage ? 'eyebrow-gold' : 'eyebrow'}`}>{eyebrow}</div>}
          <h1 className={`${headingColor} mb-6`}>{heading}</h1>
          {subheading && (
            <p className={`text-xl mb-8 ${background === 'dark' || hasImage ? 'text-gray-100' : 'text-body'}`}>
              {subheading}
            </p>
          )}
          {(cta1 || cta2) && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {cta1 && (
                <a
                  href={cta1.href}
                  className={getCtaClass(cta1.variant)}
                >
                  {cta1.text}
                </a>
              )}
              {cta2 && (
                <a
                  href={cta2.href}
                  className={getCtaClass(cta2.variant)}
                >
                  {cta2.text}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
