import { Dossier, Enclosure, Ends, Paras, Schedule } from '@/components/Dossier'

export const metadata = {
  title: 'Annex C: Client support and call centre',
  description:
    'Annex C of the Diplotech concept: help desks and enquiry lines for public services, NGO programmes and internal IT.',
}

export default function ClientSupportPage() {
  return (
    <Dossier
      tab="services"
      annex="client-support"
      cable={{
        reference: 'DTS/SVC/003-C',
        to: 'Service owners, operations managers',
        subject: 'Annex C. Client support and call centre',
      }}
    >
      <h1>Client support and call centre</h1>
      <p className="standfirst">
        The desk that answers when a member of the public, a partner or a colleague needs help with
        a service, run to a standard agreed in advance.
      </p>

      <section className="block" aria-labelledby="capabilities">
        <h2 id="capabilities">What would be delivered</h2>
        <Schedule
          rows={[
            { term: 'Enquiry handling', detail: 'Courteous, accurate answers by telephone, email and chat.' },
            { term: 'Help desk coordination', detail: 'Tickets logged, owned and closed, with nothing left unassigned.' },
            { term: 'Languages', detail: 'Support in the languages the service’s users speak.' },
            { term: 'Routing and escalation', detail: 'Clear paths to the person who can resolve the matter.' },
            { term: 'Reporting', detail: 'Regular figures on volume, waiting time and recurring problems.' },
          ]}
        />
      </section>

      <section className="block" aria-labelledby="model">
        <h2 id="model">Operating model</h2>
        <Paras
          items={[
            { lead: 'Remote by default', text: 'Agents would work from more than one location, so that a local outage does not close the desk.' },
            { lead: 'Agreed service levels', text: 'Opening hours, response times and escalation limits are written into the agreement and reported against.' },
            { lead: 'Sized to demand', text: 'The team grows for a launch or a deadline and shrinks afterwards.' },
          ]}
        />
      </section>

      <section className="block" aria-labelledby="uses">
        <h2 id="uses">Where it would apply</h2>
        <div className="enclosures">
          <Enclosure
            label="Use 1"
            title="Public services"
            note="Help for people using a government service online."
            items={['High volumes', 'Several languages', 'Public-sector rules on records']}
          />
          <Enclosure
            label="Use 2"
            title="NGO programmes"
            note="A contact point for beneficiaries and partner organisations."
            items={['Programme enquiries', 'Beneficiary support', 'Partner coordination']}
          />
          <Enclosure
            label="Use 3"
            title="Technical support"
            note="Help for users of a platform or application."
            items={['Troubleshooting', 'Onboarding new users', 'A maintained knowledge base']}
          />
          <Enclosure
            label="Use 4"
            title="Internal service desks"
            note="IT and operational help for staff of a large organisation."
            items={['Staff requests', 'Equipment records', 'Incident tracking']}
          />
        </div>
      </section>

      <Ends href="/industries/" label="Turn to Tab 4: Sectors" />
    </Dossier>
  )
}
