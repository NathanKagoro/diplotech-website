import { Dossier, Enclosure, Ends, Schedule } from '@/components/Dossier'

export const metadata = {
  title: 'Sectors',
  description:
    'The four sectors the Diplotech concept addresses: government, NGOs and development, private enterprise, and international institutions.',
}

const SECTORS = [
  {
    id: 'government',
    title: 'Government and public sector',
    note: 'Modernising how services reach the public and how departments decide and operate.',
    groups: [
      {
        title: 'Digital service delivery',
        note: 'Public-facing services.',
        items: ['Visa and immigration platforms', 'Permits and licensing', 'Public information portals', 'Joining services up'],
      },
      {
        title: 'Internal operations',
        note: 'Back-office and administrative work.',
        items: ['Workflow automation', 'Decision-support systems', 'Links between departments', 'Performance reporting'],
      },
      {
        title: 'Strategic planning',
        note: 'Policy and organisational development.',
        items: ['Transformation roadmaps', 'Technology strategy', 'Change management', 'Training and adoption'],
      },
    ],
  },
  {
    id: 'ngo',
    title: 'NGOs and development organisations',
    note: 'Technology that serves the mission, strengthens accountability and makes joint work easier.',
    groups: [
      {
        title: 'Programme management',
        note: 'Programmes run with several partners.',
        items: ['Beneficiary registers', 'Partner coordination', 'Results monitoring', 'Donor reporting'],
      },
      {
        title: 'Organisational systems',
        note: 'The machinery of the organisation itself.',
        items: ['Finance and grant management', 'HR and team administration', 'Knowledge management', 'Management reporting'],
      },
      {
        title: 'Advocacy and communication',
        note: 'Reaching communities and the public.',
        items: ['Community engagement tools', 'Data visualisation', 'Campaign support', 'Public reporting'],
      },
    ],
  },
  {
    id: 'enterprise',
    title: 'Private sector and enterprise',
    note: 'For firms that work with public institutions or in regulated, cross-border settings.',
    groups: [
      {
        title: 'Digital transformation',
        note: 'Operations and customer service.',
        items: ['Replacing legacy systems', 'Customer service platforms', 'Data analysis', 'Automation'],
      },
      {
        title: 'Strategic consulting',
        note: 'Responding to shifts in markets and technology.',
        items: ['Business model review', 'Technology strategy', 'Entering new markets', 'Risk management'],
      },
      {
        title: 'Talent and scaling',
        note: 'Building teams.',
        items: ['Technical recruitment', 'Team formation', 'Project leadership', 'Organisational development'],
      },
    ],
  },
  {
    id: 'international',
    title: 'International institutions and diplomatic bodies',
    note: 'Systems, strategy and operations for organisations that answer to many states at once.',
    groups: [
      {
        title: 'Institutional systems',
        note: 'Infrastructure for multinational operations.',
        items: ['Secure communication', 'Working in several languages', 'Compliance records', 'Stakeholder engagement'],
      },
      {
        title: 'Governance and transparency',
        note: 'Supporting accountability.',
        items: ['Public reporting platforms', 'Open data', 'Records of decisions', 'Audit trails'],
      },
      {
        title: 'Collaboration',
        note: 'Work between institutions.',
        items: ['Shared platforms', 'Knowledge exchange', 'Programme coordination', 'Measuring results'],
      },
    ],
  },
]

export default function SectorsPage() {
  return (
    <Dossier
      tab="sectors"
      cable={{
        reference: 'DTS/SEC/004',
        to: 'Sector leads',
        subject: 'Sectors addressed and the work intended in each',
      }}
    >
      <h1>Sectors</h1>
      <p className="standfirst">
        Four kinds of organisation, each with its own stakeholders, rules and pace. The work is
        shaped to the sector before it is shaped to the technology.
      </p>

      {SECTORS.map((sector, i) => (
        <section className="block" key={sector.id} aria-labelledby={sector.id}>
          <h2 id={sector.id}>{sector.title}</h2>
          <p>{sector.note}</p>
          <div className="enclosures enclosures--three">
            {sector.groups.map((g, j) => (
              <Enclosure
                key={g.title}
                label={`Encl. ${i + 1}.${j + 1}`}
                title={g.title}
                note={g.note}
                items={g.items}
              />
            ))}
          </div>
        </section>
      ))}

      <section className="block" aria-labelledby="aims">
        <h2 id="aims">What the work is meant to change</h2>
        <Schedule
          rows={[
            { term: 'Decisions', detail: 'Taken with better evidence, and recorded.' },
            { term: 'Operations', detail: 'Efficient, secure and open to inspection.' },
            { term: 'Service', detail: 'Better results for citizens, beneficiaries and partners.' },
            { term: 'Technology', detail: 'Chosen to serve the institution’s mandate and values.' },
          ]}
        />
      </section>

      <Ends href="/partners/" label="Turn to Tab 5: Partnerships" />
    </Dossier>
  )
}
