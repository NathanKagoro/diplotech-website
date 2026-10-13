import { Dossier, Enclosure, Ends, Paras, Schedule } from '@/components/Dossier'

export const metadata = {
  title: 'Annex B: IT recruitment and project management',
  description:
    'Annex B of the Diplotech concept: technical recruitment and project management for government and institutional work.',
}

export default function ITRecruitmentPage() {
  return (
    <Dossier
      tab="services"
      annex="it-recruitment"
      cable={{
        reference: 'DTS/SVC/003-B',
        to: 'Heads of delivery, HR directors',
        subject: 'Annex B. IT recruitment and project management',
      }}
    >
      <h1>IT recruitment and project management</h1>
      <p className="standfirst">
        Finding technical staff for institutional work, and managing the delivery they join so that
        a good hire is not wasted on a drifting project.
      </p>

      <section className="block" aria-labelledby="pillars">
        <h2 id="pillars">What would be delivered</h2>
        <Schedule
          rows={[
            { term: 'Technical recruitment', detail: 'Finding specialists for environments with vetting, protocol and long timescales.' },
            { term: 'Project coordination', detail: 'Planning and scheduling from start to handover.' },
            { term: 'Delivery oversight', detail: 'Checking quality and keeping the parties aligned.' },
            { term: 'Stakeholder reporting', detail: 'Status reports written to be read by a busy principal.' },
            { term: 'Team scaling', detail: 'Adding and releasing people as the work requires.' },
          ]}
        />
      </section>

      <section className="block" aria-labelledby="options">
        <h2 id="options">Forms of engagement</h2>
        <div className="enclosures">
          <Enclosure
            label="Option 1"
            title="Contract staffing"
            note="Short-term or project placements for particular skills."
            items={['Agreed duration', 'Quick start', 'Matched to a specific need']}
          />
          <Enclosure
            label="Option 2"
            title="Permanent placement"
            note="Search and selection for established posts."
            items={['Vetting of candidates', 'Help with induction', 'Follow-up after the start date']}
          />
          <Enclosure
            label="Option 3"
            title="Project management"
            note="A project manager for the length of the project, without a permanent hire."
            items={['Delivery oversight', 'A maintained risk register', 'A realistic timetable']}
          />
          <Enclosure
            label="Option 4"
            title="Combined delivery"
            note="Recruitment, project management and technical support under one agreement."
            items={['One point of contact', 'Fewer hand-offs', 'Accountability from start to finish']}
          />
        </div>
      </section>

      <section className="block" aria-labelledby="why">
        <h2 id="why">Why the two belong together</h2>
        <Paras
          items={[
            {
              lead: 'Observation',
              text: 'Projects more often fail on people and coordination than on technology: the wrong skills, unclear roles, nobody watching the dates.',
            },
            {
              lead: 'Consequence',
              text: 'A recruiter who is also answerable for delivery has a reason to place people who will succeed in the role, and to notice early when they are not being given the means.',
            },
            {
              lead: 'Undertaking',
              text: 'Candidates assessed on their skills and on how they work with others. Risks raised before they become delays. Reports that say plainly where things stand.',
            },
          ]}
        />
      </section>

      <Ends href="/services/client-support/" label="Turn to Annex C: Support" />
    </Dossier>
  )
}
