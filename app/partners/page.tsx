import { Dossier, Enclosure, Ends, Paras, Schedule } from '@/components/Dossier'

export const metadata = {
  title: 'Partnerships',
  description:
    'The kinds of partnership the Diplotech concept would offer: technology alliances, research collaboration and institutional ties. No partners exist.',
}

const KINDS = [
  {
    id: 'technology',
    title: 'Technology alliances',
    groups: [
      {
        title: 'Platform providers',
        note: 'For the infrastructure a solution runs on.',
        items: ['Cloud platforms and hosting', 'Enterprise software', 'AI and analytical tools'],
      },
      {
        title: 'Integrators',
        note: 'For joint delivery of larger systems.',
        items: ['Systems integration', 'Custom development capacity', 'Implementation support'],
      },
      {
        title: 'Specialist firms',
        note: 'For technologies that need testing before they are relied on.',
        items: ['Machine learning', 'Security', 'Trials of new methods'],
      },
    ],
  },
  {
    id: 'research',
    title: 'Academic and research collaboration',
    groups: [
      {
        title: 'Universities',
        note: 'For research and for finding new staff.',
        items: ['Joint research', 'Policy studies', 'Internships and placements'],
      },
      {
        title: 'Policy institutes',
        note: 'For analysis that reaches decision-makers.',
        items: ['Policy research', 'Strategic analysis', 'Joint publication'],
      },
      {
        title: 'Professional networks',
        note: 'For shared practice.',
        items: ['Sector associations', 'Professional bodies', 'Communities of practice'],
      },
    ],
  },
  {
    id: 'institutional',
    title: 'Government and diplomatic ties',
    groups: [
      {
        title: 'Ministries and agencies',
        note: 'Working arrangements with departments.',
        items: ['Transformation programmes', 'Advisory assignments', 'Service modernisation'],
      },
      {
        title: 'International institutions',
        note: 'Work with multilateral bodies.',
        items: ['Support for institutional systems', 'Capacity building', 'Long-term cooperation'],
      },
      {
        title: 'Development partners',
        note: 'Work alongside development agencies.',
        items: ['Development programmes', 'Diplomatic engagement', 'Strengthening local capacity'],
      },
    ],
  },
]

export default function PartnersPage() {
  return (
    <Dossier
      tab="partnerships"
      cable={{
        reference: 'DTS/PTN/005',
        to: 'Prospective partners',
        subject: 'Kinds of partnership offered',
      }}
    >
      <h1>Partnerships</h1>
      <p className="standfirst">
        No single firm holds every skill an institution needs. This tab sets out the kinds of
        partnership the practice would seek, and on what terms.
      </p>

      <Paras
        items={[
          {
            lead: 'Status',
            text: 'Diplotech has no partners. What follows describes the arrangements it would propose, so that a reader can judge the intent.',
          },
          {
            lead: 'Purpose',
            text: 'A partnership should add a capability the client needs, bring independent scrutiny to the work, or connect sectors that seldom talk: government, universities and industry.',
          },
        ]}
      />

      {KINDS.map((kind, i) => (
        <section className="block" key={kind.id} aria-labelledby={kind.id}>
          <h2 id={kind.id}>{kind.title}</h2>
          <div className="enclosures enclosures--three">
            {kind.groups.map((g, j) => (
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

      <section className="block" aria-labelledby="models">
        <h2 id="models">Forms of agreement</h2>
        <Schedule
          rows={[
            { term: 'Implementation', detail: 'Joint delivery of a project, with responsibilities divided in writing.' },
            { term: 'Research', detail: 'Shared research and publication.' },
            { term: 'Advisory', detail: 'Advice given or received on a defined question.' },
            { term: 'Institutional', detail: 'A standing arrangement between organisations, reviewed at set intervals.' },
          ]}
        />
      </section>

      <Ends href="/insights/" label="Turn to Tab 6: Briefings" />
    </Dossier>
  )
}
