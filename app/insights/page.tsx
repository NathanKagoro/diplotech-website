import Link from 'next/link'
import { Dossier, Ends } from '@/components/Dossier'
import { BRIEFINGS } from '@/content/briefings.mjs'

export const metadata = {
  title: 'Briefings',
  description:
    'Six short briefings from the Diplotech concept desk on decision support, NGOs, planning, partnerships, service delivery and public trust.',
}

export default function BriefingsPage() {
  const [lead, ...rest] = BRIEFINGS
  return (
    <Dossier
      tab="briefings"
      cable={{
        reference: 'DTS/BRF/006',
        to: 'General distribution',
        subject: 'Register of briefings Nos. 1 to 6',
      }}
    >
      <h1>Briefings</h1>
      <p className="standfirst">
        Six short cables on technology in public institutions. They set out method and opinion.
        They were written for this concept and cite no clients, because there are none.
      </p>

      <article className="lead-briefing">
        <p className="slip__meta">
          <span>Briefing No. {lead.n}</span>
          <span>{lead.topic}</span>
        </p>
        <h2>
          <Link href={`/insights/${lead.slug}/`} prefetch={false}>
            {lead.title}
          </Link>
        </h2>
        <p>{lead.summary}</p>
        <p className="slip__by">Diplotech concept desk</p>
      </article>

      <section className="block" aria-labelledby="register">
        <h2 id="register">Also on file</h2>
        <ol className="slips" start={2}>
          {rest.map((b) => (
            <li key={b.slug} className="slip">
              <p className="slip__meta">
                <span>Briefing No. {b.n}</span>
                <span>{b.topic}</span>
              </p>
              <h3>
                <Link href={`/insights/${b.slug}/`} prefetch={false}>
                  {b.title}
                </Link>
              </h3>
              <p>{b.summary}</p>
            </li>
          ))}
        </ol>
      </section>

      <Ends href="/careers/" label="Turn to Tab 7: Careers" />
    </Dossier>
  )
}
