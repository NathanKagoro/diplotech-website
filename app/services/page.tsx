import Link from 'next/link'
import { Dossier, Ends, Paras, Schedule } from '@/components/Dossier'
import { SERVICES } from '@/lib/site'

export const metadata = {
  title: 'Services',
  description:
    'The three services in the Diplotech concept: software development and consultancy, IT recruitment and project management, and client support.',
}

const CAPABILITIES: Record<string, string[]> = {
  'software-development': [
    'Bespoke software for complicated casework',
    'Systems planning and transformation advice',
    'AI-assisted workflows and decision support',
    'Reporting tools and process design',
  ],
  'it-recruitment': [
    'Technical recruitment and placement',
    'Project coordination and delivery oversight',
    'Stakeholder reporting',
    'Team scaling, on site or remote',
  ],
  'client-support': [
    'Help desk and enquiry handling',
    'Support in more than one language',
    'Routing and escalation',
    'Service reporting against agreed levels',
  ],
}

export default function ServicesPage() {
  return (
    <Dossier
      tab="services"
      cable={{
        reference: 'DTS/SVC/003',
        to: 'Ministries, missions, NGOs and institutions',
        subject: 'Services offered, with three annexes',
      }}
    >
      <h1>Services</h1>
      <p className="standfirst">
        Three services, meant to be taken together: the system, the people who run it and the desk
        that answers for it.
      </p>

      <div className="annex-list">
        {SERVICES.map((s) => (
          <section key={s.slug} className="enclosure enclosure--link">
            <p className="enclosure__label">Annex {s.annex}</p>
            <h2>{s.title}</h2>
            <p className="enclosure__note">{s.line}</p>
            <ul>
              {CAPABILITIES[s.slug].map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
            <Link href={`/services/${s.slug}/`} prefetch={false} className="button button--quiet">
              Open Annex {s.annex}
            </Link>
          </section>
        ))}
      </div>

      <section className="block" aria-labelledby="fit">
        <h2 id="fit">How the three fit together</h2>
        <Schedule
          rows={[
            { term: 'Strategy', detail: 'Establish the mandate and the outcome before anything is built.' },
            { term: 'Build', detail: 'Deliver the system, in stages, with the people who will use it.' },
            { term: 'People', detail: 'Recruit and manage the team that will own it afterwards.' },
            { term: 'Support', detail: 'Keep it answering, and report honestly on how it performs.' },
          ]}
        />
      </section>

      <section className="block" aria-labelledby="terms">
        <h2 id="terms">Terms of engagement</h2>
        <Paras
          items={[
            { lead: 'By project', text: 'A defined piece of work with agreed deliverables and dates.' },
            { lead: 'Embedded', text: 'Diplotech staff working inside the client’s team for a fixed period.' },
            { lead: 'Managed service', text: 'Continuing operation and improvement of a system or a support desk.' },
            { lead: 'Staff augmentation', text: 'Recruitment and project management added to a team the client already has.' },
          ]}
        />
      </section>

      <Ends href="/contact/" label="Turn to Tab 8: Contact" note="Each service is described in its own annex." />
    </Dossier>
  )
}
