import { Dossier, Ends } from '@/components/Dossier'

export const metadata = { title: 'Not on file' }

export default function NotFound() {
  return (
    <Dossier
      tab="cover"
      cable={{
        reference: 'DTS/REG/404',
        to: 'The reader',
        subject: 'Document not on file',
      }}
    >
      <h1>Not on file</h1>
      <p className="standfirst">
        The registry holds no document at this address. It may have been moved, or the reference
        may be mistyped.
      </p>
      <Ends href="/" label="Return to the cover" />
    </Dossier>
  )
}
