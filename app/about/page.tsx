import { Dossier, Ends, Paras, Schedule } from '@/components/Dossier'

export const metadata = {
  title: 'About',
  description:
    'The premise behind the Diplotech concept: institutions need technology delivered by people who understand how institutions work.',
}

export default function AboutPage() {
  return (
    <Dossier
      tab="about"
      cable={{
        reference: 'DTS/ABT/002',
        to: 'Readers new to the file',
        subject: 'What Diplotech is, and what it is not',
      }}
    >
      <h1>About the practice</h1>
      <p className="standfirst">
        Diplotech rests on one observation: the hard problems of governments, NGOs and international
        bodies are seldom only technical, and seldom only political.
      </p>

      <Paras
        items={[
          {
            lead: 'Premise',
            text: 'A visa system, a grant register or a secure channel between missions is a piece of software and also a piece of policy. It carries rules, protocol and the habits of the people who use it. Suppliers who treat it as software alone tend to deliver something correct that nobody adopts.',
          },
          {
            lead: 'Proposal',
            text: 'The practice would put consultants, engineers and delivery managers in the same team from the first conversation, so that the system, the staffing and the support desk are planned as one piece of work.',
          },
          {
            lead: 'Temper',
            text: 'Discreet, plain-spoken and slow to promise. The model is the desk officer who reads the whole file before replying.',
          },
        ]}
      />

      <section className="block" aria-labelledby="method">
        <h2 id="method">Method</h2>
        <p>Four stages, taken in order. Each ends with something written down and agreed.</p>
        <ol className="steps">
          <li>
            <h3>Understand</h3>
            <p>Read the context: the mandate, the constraints, who decides and who is affected.</p>
          </li>
          <li>
            <h3>Define</h3>
            <p>Agree the outcome with the client in a page, including what is out of scope.</p>
          </li>
          <li>
            <h3>Design</h3>
            <p>Shape a solution that fits the institution as it is, with the people who will use it.</p>
          </li>
          <li>
            <h3>Deliver</h3>
            <p>Build, hand over and stay long enough to see it working without us.</p>
          </li>
        </ol>
      </section>

      <section className="block" aria-labelledby="principles">
        <h2 id="principles">Standing instructions</h2>
        <Schedule
          rows={[
            { term: 'Integrity', detail: 'Say what is known, what is guessed and what went wrong.' },
            { term: 'Care', detail: 'Hold work to a standard the client could publish.' },
            { term: 'Curiosity', detail: 'Use new methods where they help. Leave them alone where they do not.' },
            { term: 'Collaboration', detail: 'Work as part of the client’s team, and leave their staff more capable.' },
            { term: 'Perspective', detail: 'Assume the context differs from the last one. Ask before advising.' },
          ]}
        />
      </section>

      <section className="block block--notice" aria-labelledby="disclaimer">
        <h2 id="disclaimer">What this file does not claim</h2>
        <Paras
          start={4}
          items={[
            { lead: 'No clients', text: 'Diplotech has no clients, past or present, and no engagements to count.' },
            { lead: 'No offices', text: 'It has no premises, staff, telephone line or email address.' },
            {
              lead: 'No record',
              text: 'An earlier draft of this site carried round numbers for engagements and countries. They were placeholders and have been removed.',
            },
          ]}
        />
      </section>

      <Ends href="/services/" label="Turn to Tab 3: Services" />
    </Dossier>
  )
}
