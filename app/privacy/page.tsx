import { Dossier, Ends, Paras } from '@/components/Dossier'

export const metadata = {
  title: 'Privacy',
  description:
    'Privacy note for the Diplotech concept site: static pages, no cookies, no analytics, and a form that sends nothing.',
}

export default function PrivacyPage() {
  return (
    <Dossier
      tab="contact"
      cable={{
        reference: 'DTS/CON/008-P',
        to: 'All readers',
        subject: 'Privacy note',
      }}
    >
      <h1>Privacy</h1>
      <p className="standfirst">A short note, because there is little to report.</p>

      <Paras
        items={[
          {
            lead: 'The site',
            text: 'These are static pages. They set no cookies, run no analytics and load nothing from third parties. The fonts are served from the same place as the pages.',
          },
          {
            lead: 'The form',
            text: 'The message form on the Contact tab is a demonstration. What you type is checked in your browser and goes no further. It is not sent, stored or logged.',
          },
          {
            lead: 'The host',
            text: 'The pages are served by GitHub Pages. Like any web host, GitHub may record technical details of requests, such as IP addresses, under its own privacy statement. The author of this site has no access to those records.',
          },
          {
            lead: 'The author',
            text: 'The site was designed and built by Nathan Kagoro as a concept for a prospective client. Questions about it can be raised through nathankagoro.com.',
          },
        ]}
      />

      <Ends href="/" label="Return to the cover" />
    </Dossier>
  )
}
