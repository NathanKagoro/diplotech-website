import Link from 'next/link'
import { Dossier, Schedule } from '@/components/Dossier'
import { MessageForm } from '@/components/MessageForm'

export const metadata = {
  title: 'Contact',
  description:
    'A demonstration message form for the Diplotech concept. It checks your entries and sends nothing.',
}

export default function ContactPage() {
  return (
    <Dossier
      tab="contact"
      cable={{
        reference: 'DTS/CON/008',
        to: 'Anyone wishing to write',
        subject: 'Message form (demonstration)',
      }}
    >
      <h1>Contact</h1>
      <p className="standfirst">
        A working practice would answer enquiries here. This one cannot: the form below checks what
        you type and then tells you, truthfully, that nothing was sent.
      </p>

      <div className="contact">
        <MessageForm />

        <aside className="contact__notes" aria-labelledby="notes">
          <h2 id="notes">Notes on this form</h2>
          <Schedule
            rows={[
              { term: 'Destination', detail: 'None. There is no inbox, server or third-party service behind it.' },
              { term: 'Storage', detail: 'Nothing is saved. Reload the page and your entries are gone.' },
              { term: 'Purpose', detail: 'To show how the form would validate and respond.' },
            ]}
          />
          <h3>Types of enquiry</h3>
          <ul className="dash-list">
            <li>Services: software, recruitment, support</li>
            <li>Partnership: technology, research, institutional</li>
            <li>Careers: no posts are open</li>
            <li>General: anything else</li>
          </ul>
          <Link href="/privacy/" prefetch={false} className="button button--quiet">
            Read the privacy note
          </Link>
        </aside>
      </div>
    </Dossier>
  )
}
