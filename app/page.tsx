import Link from 'next/link'
import { Dossier, Paras } from '@/components/Dossier'
import { Globe } from '@/components/Globe'
import { Stamp, WaxSeal } from '@/components/Marks'
import { TABS } from '@/lib/site'

const CONTENTS: Record<string, string> = {
  about: 'The premise, the method and what this file does not claim',
  services: 'Software, recruitment and support, with three annexes',
  sectors: 'Government, NGOs, enterprise and international bodies',
  partnerships: 'The kinds of partnership the practice would seek',
  briefings: 'Six short cables on technology in public institutions',
  careers: 'Who the practice would hire. No posts are open',
  contact: 'A message form that checks your entries and sends nothing',
}

export default function CoverPage() {
  return (
    <Dossier
      tab="cover"
      wide
      cable={{
        reference: 'DTS/CVR/001',
        to: 'All readers',
        subject: 'Cover note to the Diplotech Solutions dossier',
      }}
    >
      <div className="cover">
        <div className="cover__head">
          <h1 className="cover__title">
            Diplotech
            <br />
            Solutions
          </h1>
          <p className="standfirst">
            A consultancy for diplomatic and public institutions that need technology, set out as the
            file a desk officer would hand you.
          </p>
        </div>

        <div className="cover__paras">
          <Paras
            items={[
              {
                lead: 'Summary',
                text: 'Ministries, missions, NGOs and international bodies need software and the people to run it, and they need both to respect how institutions work. Diplotech is a proposal for a practice that supplies the two together.',
              },
              {
                lead: 'Status',
                text: 'This is a concept. It was designed for a prospective client and never went into business. Nothing in this file describes work that has been done.',
              },
              {
                lead: 'Action',
                text: 'Read the tabs in any order. Each is a single cable.',
              },
            ]}
          />
        </div>

        <div className="cover__plate">
          <Globe className="cover__globe" />
          <WaxSeal className="cover__seal" />
          <Stamp lines={['Registry copy', 'Not for action']} tone="teal" className="cover__stamp" />
          <p className="cover__caption">
            Fig. 1. Orthographic projection centred on 14&deg;N 22&deg;E, graticule at 15&deg;.
            Outlines are approximate.
          </p>
        </div>
      </div>

      <section className="block" aria-labelledby="contents">
        <h2 id="contents">Contents of this file</h2>
        <ol className="contents">
          {TABS.filter((t) => t.id !== 'cover').map((t, i) => (
            <li key={t.id}>
              <Link href={t.href} prefetch={false}>
                <span className="contents__no">Tab {i + 2}</span>
                <span className="contents__label">{t.label}</span>
                <span className="contents__note">{CONTENTS[t.id]}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="block" aria-labelledby="proposal">
        <h2 id="proposal">The proposal in three lines</h2>
        <Paras
          start={4}
          items={[
            {
              lead: 'Build',
              text: 'Design and deliver the systems an institution runs on: case handling, consular processing, reporting, secure communication.',
            },
            {
              lead: 'Staff',
              text: 'Find the engineers and project managers to keep those systems going, and stay accountable for the delivery they join.',
            },
            {
              lead: 'Support',
              text: 'Run the help desk and enquiry lines that the public and partner organisations meet first.',
            },
          ]}
        />
        <p className="minute">
          The detail is under <Link href="/services/" prefetch={false} className="inline-link">Tab 3, Services</Link>.
        </p>
      </section>
    </Dossier>
  )
}
