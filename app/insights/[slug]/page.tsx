import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Dossier, Paras } from '@/components/Dossier'
import { BRIEFINGS } from '@/content/briefings.mjs'

export const dynamicParams = false

export function generateStaticParams() {
  return BRIEFINGS.map((b) => ({ slug: b.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const b = BRIEFINGS.find((x) => x.slug === params.slug)
  if (!b) return {}
  return { title: `Briefing No. ${b.n}: ${b.title}`, description: b.summary }
}

export default function BriefingPage({ params }: { params: { slug: string } }) {
  const index = BRIEFINGS.findIndex((x) => x.slug === params.slug)
  if (index < 0) notFound()
  const b = BRIEFINGS[index]
  const prev = BRIEFINGS[index - 1]
  const next = BRIEFINGS[index + 1]

  return (
    <Dossier
      tab="briefings"
      cable={{
        reference: `DTS/BRF/006-${b.n}`,
        to: 'General distribution',
        subject: b.title,
      }}
    >
      <article>
        <p className="slip__meta">
          <span>
            Briefing No. {b.n} of {BRIEFINGS.length}
          </span>
          <span>{b.topic}</span>
        </p>
        <h1>{b.title}</h1>
        <p className="byline">By the Diplotech concept desk</p>
        <Paras items={b.paras} />
      </article>

      <div className="ends">
        <p className="ends__mark" aria-hidden="true">
          ENDS
        </p>
        <nav className="pager" aria-label="Briefings">
          {prev ? (
            <Link href={`/insights/${prev.slug}/`} prefetch={false} className="button button--quiet">
              Previous: No. {prev.n}
            </Link>
          ) : (
            <span />
          )}
          <Link href="/insights/" prefetch={false} className="button button--quiet">
            Register of briefings
          </Link>
          {next ? (
            <Link href={`/insights/${next.slug}/`} prefetch={false} className="button">
              Next: No. {next.n}
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </div>
    </Dossier>
  )
}
