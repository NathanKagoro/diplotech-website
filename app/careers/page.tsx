import { Dossier, Ends, Paras, Schedule } from '@/components/Dossier'

export const metadata = {
  title: 'Careers',
  description:
    'Who the Diplotech concept would hire and how its team would work. No posts are open: this is a concept site.',
}

export default function CareersPage() {
  return (
    <Dossier
      tab="careers"
      cable={{
        reference: 'DTS/CAR/007',
        to: 'Prospective applicants',
        subject: 'Staffing intentions. No posts open',
      }}
    >
      <h1>Careers</h1>
      <p className="standfirst">
        How the practice would staff itself, set down so the concept is complete.
      </p>

      <section className="block block--notice" aria-labelledby="vacancies">
        <h2 id="vacancies">Vacancies</h2>
        <p>
          None. Diplotech is a concept and employs nobody. Please do not send a CV: there is no one
          to read it and no address to send it to.
        </p>
      </section>

      <section className="block" aria-labelledby="offer">
        <h2 id="offer">What the work would offer</h2>
        <Schedule
          rows={[
            { term: 'Consequence', detail: 'Projects that change how an institution serves people.' },
            { term: 'Range', detail: 'Colleagues and clients in several countries and traditions of government.' },
            { term: 'Flexibility', detail: 'Remote by default, with time together when the work needs it.' },
            { term: 'Latitude', detail: 'Room to test a new method, and to say when it did not work.' },
          ]}
        />
      </section>

      <section className="block" aria-labelledby="culture">
        <h2 id="culture">Working arrangements</h2>
        <Paras
          items={[
            { lead: 'Hours', text: 'A team spread across time zones, working partly together and partly by written handover.' },
            { lead: 'Conduct', text: 'Courtesy in disagreement. Credit shared. Problems raised early.' },
            { lead: 'Development', text: 'Time set aside for learning, and paid for.' },
            { lead: 'Measure', text: 'People judged on what was achieved for the client, not on hours logged.' },
          ]}
        />
      </section>

      <section className="block" aria-labelledby="roles">
        <h2 id="roles">Posts the practice would fill first</h2>
        <ul className="dash-list dash-list--columns">
          <li>Software engineers and architects</li>
          <li>Strategy consultants and advisers</li>
          <li>Project managers and delivery leads</li>
          <li>Product managers and service designers</li>
          <li>HR and operations specialists</li>
          <li>Business development managers</li>
        </ul>
      </section>

      <Ends href="/contact/" label="Turn to Tab 8: Contact" />
    </Dossier>
  )
}
