import { Dossier, Enclosure, Ends, Schedule } from '@/components/Dossier'

export const metadata = {
  title: 'Annex A: Software development and consultancy',
  description:
    'Annex A of the Diplotech concept: custom software and transformation advice for governments and institutions.',
}

export default function SoftwareDevelopmentPage() {
  return (
    <Dossier
      tab="services"
      annex="software-development"
      cable={{
        reference: 'DTS/SVC/003-A',
        to: 'Heads of digital, programme directors',
        subject: 'Annex A. Software development and consultancy',
      }}
    >
      <h1>Software development and consultancy</h1>
      <p className="standfirst">
        Custom systems for institutions whose work does not fit a product off the shelf, and advice
        on what to build, buy or leave alone.
      </p>

      <section className="block" aria-labelledby="deliver">
        <h2 id="deliver">What would be delivered</h2>
        <Schedule
          rows={[
            { term: 'Custom software', detail: 'Applications shaped to the client’s casework and its security requirements.' },
            { term: 'Systems planning', detail: 'Architecture and sequencing for systems that have to work together.' },
            { term: 'Transformation advice', detail: 'Guidance on modernising systems and the ways of working around them.' },
            { term: 'AI-assisted workflows', detail: 'Automation and decision support, with a named person accountable for each decision.' },
            { term: 'Data and reporting', detail: 'Reporting tools that answer the questions managers ask in practice.' },
            { term: 'Service and process design', detail: 'Research with the people who will use the system, before and during the build.' },
          ]}
        />
      </section>

      <section className="block" aria-labelledby="examples">
        <h2 id="examples">Illustrative applications</h2>
        <p>Examples of the kind of work intended. None has been carried out.</p>
        <div className="enclosures">
          <Enclosure
            label="Example 1"
            title="Visa processing"
            note="Case handling for consular sections."
            items={['Custom development', 'Security designed in from the start', 'Rules for more than one jurisdiction']}
          />
          <Enclosure
            label="Example 2"
            title="Decision support"
            note="Bringing an institution’s own data to the people who decide."
            items={['Connections to existing data', 'Reporting dashboards', 'Clear provenance for every figure']}
          />
          <Enclosure
            label="Example 3"
            title="Back-office digitisation"
            note="Replacing paper and spreadsheets in internal processes."
            items={['Process mapping', 'Automation of routine steps', 'Links to older systems']}
          />
          <Enclosure
            label="Example 4"
            title="Stakeholder communication"
            note="Shared working space for several organisations."
            items={['Multi-party access', 'Secure messaging', 'Agreed workflows']}
          />
        </div>
      </section>

      <section className="block" aria-labelledby="approach">
        <h2 id="approach">Order of work</h2>
        <ol className="steps">
          <li>
            <h3>Discover</h3>
            <p>Learn the context, the constraints and the existing systems.</p>
          </li>
          <li>
            <h3>Design</h3>
            <p>Agree the architecture and the first release with the client.</p>
          </li>
          <li>
            <h3>Develop</h3>
            <p>Build in short stages and show working software at the end of each.</p>
          </li>
          <li>
            <h3>Deploy</h3>
            <p>Roll out carefully, train the users and stay for the first months.</p>
          </li>
        </ol>
      </section>

      <section className="block" aria-labelledby="undertakings">
        <h2 id="undertakings">Undertakings</h2>
        <Schedule
          rows={[
            { term: 'Security first', detail: 'Designed to the client’s own standard and reviewed against it.' },
            { term: 'Plain reporting', detail: 'Regular updates that say what is late as well as what is done.' },
            { term: 'Maintainability', detail: 'Documented, tested and built so that another team could take it over.' },
            { term: 'Flexibility', detail: 'Plans revised openly when needs or dates change.' },
          ]}
        />
      </section>

      <Ends href="/services/it-recruitment/" label="Turn to Annex B: Recruitment" />
    </Dossier>
  )
}
