// The six briefings filed under the Briefings tab. Each is written as a short
// cable: a subject line and numbered paragraphs with a run-in heading.
// They are opinion and method, not reporting: no statistics, no quotations,
// no named organisations. tests/briefings.test.mjs holds them to that.

/**
 * @typedef {{ lead: string, text: string }} Para
 * @typedef {{ n: number, slug: string, title: string, topic: string, summary: string, paras: Para[] }} Briefing
 */

/** @type {Briefing[]} */
export const BRIEFINGS = [
  {
    n: 1,
    slug: 'decision-support-in-government',
    title: 'Decision support in government: decide what the machine is for',
    topic: 'AI and policy',
    summary:
      'Before a ministry buys an analytical or AI system, it should be able to say which decision the system informs, who still signs, and what happens when it is wrong.',
    paras: [
      {
        lead: 'Summary',
        text: 'Most disappointment with decision-support systems in government starts before procurement. The department knows it wants better use of data, but has not named the decision the tool is meant to inform. This briefing sets out the questions worth settling first. None of them is technical.',
      },
      {
        lead: 'Name the decision',
        text: 'A dashboard that serves everyone serves nobody in particular. Pick one recurring decision, such as which applications get a second review or where inspectors go next month. Write down who takes it today, what they look at, and how long it takes. That description is the specification. If nobody can write it, the project is not ready, however good the software looks in a demonstration.',
      },
      {
        lead: 'Keep the signature human',
        text: 'A system that ranks, scores or drafts is giving advice. The official who signs remains answerable, and the design should make that easy rather than awkward. In practice this means the reasons behind a recommendation are shown in plain language, the official can disagree in one step, and disagreements are recorded and read by someone. A tool that is tiresome to overrule will be obeyed out of fatigue.',
      },
      {
        lead: 'Plan for the wrong answer',
        text: 'Every model is wrong some of the time. The useful question is who bears the cost. A missed fraud case and a wrongly delayed pension are different kinds of error and deserve different thresholds. Agree in advance how a member of the public can ask for a person to look again, and how long that should take. Publish it.',
      },
      {
        lead: 'Own the data and the exit',
        text: 'Check where the data will sit, who may train on it, and what the department receives if the contract ends. An export in an open format, the documentation, and the right to keep running the last version are reasonable requests. Suppliers who resist them are telling you something about the relationship they have in mind.',
      },
      {
        lead: 'Start small and say so',
        text: 'A pilot in one office, with a comparison against the old way of working, will teach more than a national launch. Say publicly that it is a pilot, say what is being measured, and report what happened, including the parts that did not work. Candour at this stage buys patience later.',
      },
      {
        lead: 'Comment',
        text: 'None of this slows a serious project down. It moves the difficult conversations to the point where changing course is still cheap.',
      },
    ],
  },
  {
    n: 2,
    slug: 'technology-for-ngos',
    title: 'Technology for NGOs: buy less, finish more',
    topic: 'Digital transformation',
    summary:
      'Small organisations rarely fail for lack of software. They fail for lack of time to run it. A short method for choosing what to adopt and what to leave alone.',
    paras: [
      {
        lead: 'Summary',
        text: 'Non-governmental organisations are offered more software than they can use, much of it free at the start. The constraint is staff attention. This briefing suggests a way to choose, built around what the organisation already has to do for its beneficiaries and its funders.',
      },
      {
        lead: 'Begin with the obligations',
        text: 'List what must be produced whatever happens: the beneficiary register, the donor report, the accounts, the safeguarding log. These are the processes that justify a system, because the work exists with or without one. Anything that does not shorten or steady one of these should wait.',
      },
      {
        lead: 'Count the running cost in hours',
        text: 'Licence fees are the visible cost. The larger one is the person who adds users, fixes the form that broke, and answers questions from the field. Before adopting a tool, name that person and estimate their hours each month. If there is no name, there is no system, only an installation.',
      },
      {
        lead: 'Collect less',
        text: 'Every field on a form is a promise to store it safely and a burden on whoever fills it in. Programmes that work with vulnerable people should be able to justify each item. A good test is to ask which decision would change if the field were blank. Where the honest answer is none, remove it.',
      },
      {
        lead: 'Design for the weak connection',
        text: 'Field staff often work on old phones with patchy coverage. Tools that need a constant connection will be replaced, quietly, by paper and a messaging group. Choose software that works offline and synchronises later, and test it in the place where it will be used, not in the head office.',
      },
      {
        lead: 'Share before you build',
        text: 'Peer organisations have usually solved the same problem. A shared template, a common data standard or a jointly funded administrator is often worth more than a bespoke platform. Donors can help by funding maintenance as readily as they fund launches.',
      },
      {
        lead: 'Comment',
        text: 'The measure of success is dull: the monthly report takes a day less, and nobody needed a consultant to produce it. That is the outcome to aim for.',
      },
    ],
  },
  {
    n: 3,
    slug: 'planning-under-uncertainty',
    title: 'Planning under uncertainty: fewer forecasts, more options',
    topic: 'Strategy and governance',
    summary:
      'Institutions cannot predict the next shock. They can decide in advance what they would do, keep their systems loosely coupled, and rehearse.',
    paras: [
      {
        lead: 'Summary',
        text: 'Strategic plans tend to assume the world will hold still for their duration. It rarely does. This briefing argues for plans that describe choices under several futures, and for technology decisions that keep those choices open.',
      },
      {
        lead: 'Replace the single forecast',
        text: 'A plan built on one forecast breaks when the forecast does. Three or four plainly different scenarios are more useful, provided each is specific enough to act on: a funding cut, a sudden surge in demand, the loss of a key supplier, a change of political direction. The aim is to be less surprised, since prediction is out of reach.',
      },
      {
        lead: 'Write the triggers down',
        text: 'For each scenario, agree what evidence would show it is arriving and what the institution would then do. A trigger is a fact that can be observed, such as waiting times passing an agreed level for two months. Decisions made calmly in advance are better than those made at midnight during the event.',
      },
      {
        lead: 'Keep systems loosely coupled',
        text: 'Technology can lock a strategy in place. A single platform that does everything is efficient until one part must change quickly. Smaller components with documented interfaces cost a little more to run and a great deal less to alter. The same holds for contracts: shorter terms and clear exit clauses are a form of resilience.',
      },
      {
        lead: 'Protect the people who know',
        text: 'In a disruption the scarce resource is staff who understand how things really work. Record that knowledge while it is not urgent. Short written procedures, tested by someone other than the author, outlast any reorganisation.',
      },
      {
        lead: 'Rehearse',
        text: 'A plan that has never been exercised is a hope. Half a day spent walking through one scenario with the people who would have to respond will expose the missing telephone number, the approval that takes a week, and the system only one person can restart.',
      },
      {
        lead: 'Comment',
        text: 'Resilience is mostly housekeeping done early. It is unglamorous, it is cheap, and it is usually the first thing cut from a budget.',
      },
    ],
  },
  {
    n: 4,
    slug: 'public-private-partnerships',
    title: 'Public-private partnerships: write the handover first',
    topic: 'Partnerships',
    summary:
      'A technology partnership between a public body and a firm should be judged by what the public side can do alone when it ends.',
    paras: [
      {
        lead: 'Summary',
        text: 'Partnerships between public bodies and technology firms are often described in terms of what will be delivered. This briefing suggests a different test: what the public body will be able to do for itself afterwards. Building capacity should be a term of the agreement.',
      },
      {
        lead: 'Start from the end',
        text: 'Before discussing features, describe the day the supplier leaves. Who operates the service? Who can change it? Where are the source code, the data and the passwords? Working backwards from that day turns vague talk of knowledge transfer into tasks with dates.',
      },
      {
        lead: 'Pair people, not only organisations',
        text: 'Skills move between individuals who work side by side. An agreement can require that each supplier role has a named counterpart in the public body, that they share the same tools, and that the counterpart leads by an agreed stage. Training courses help, but they are a supplement to doing the work.',
      },
      {
        lead: 'Share the risk honestly',
        text: 'A contract that places every risk on the supplier will be priced accordingly, or signed by a firm that has not read it. One that places every risk on the public side invites drift. Decide which party is best placed to manage each risk and let the payment terms follow.',
      },
      {
        lead: 'Make openness the default',
        text: 'Documentation, interface specifications and data formats should belong to the public body from the start. Where software is paid for with public money, there is a good case for publishing it. Openness lets a second supplier take over, which keeps the first one attentive.',
      },
      {
        lead: 'Measure what the public notices',
        text: 'Milestones such as modules delivered say little. Better measures are the ones a citizen would recognise: time to a decision, the share of applications completed without a visit, the number of complaints. Agree a small set and report them jointly.',
      },
      {
        lead: 'Comment',
        text: 'The best partnerships make themselves progressively less necessary. A supplier willing to plan for that is usually one worth keeping for the next piece of work.',
      },
    ],
  },
  {
    n: 5,
    slug: 'government-service-delivery',
    title: 'Government service delivery: fix the process before the portal',
    topic: 'Digital transformation',
    summary:
      'Putting a form online does not make a service digital. The gain comes from removing steps, and from saying clearly what happens next.',
    paras: [
      {
        lead: 'Summary',
        text: 'Many public services have been moved online without being changed. The citizen types into a web page what used to be written on paper, and the same queue forms behind it. This briefing describes where the real improvements tend to come from.',
      },
      {
        lead: 'Follow one case',
        text: 'Take a single real application and trace it from first enquiry to final decision. Note each desk it crosses, each wait, and each time the applicant is asked for something already held elsewhere in government. The map is usually a surprise to everyone, including those who run the service.',
      },
      {
        lead: 'Remove steps',
        text: 'The cheapest improvement is a requirement that is dropped. Certified copies, repeat visits and signatures that nobody checks all deserve a challenge. Where a rule stands in the way, raise it with those who own the rule. Software cannot repeal a regulation, but a clear case sometimes can.',
      },
      {
        lead: 'Tell people where they stand',
        text: 'Uncertainty generates more contact than delay does. A message that says what has been received, what happens next and roughly when will take pressure off counters and telephone lines. It costs little and is noticed immediately.',
      },
      {
        lead: 'Keep another door open',
        text: 'Not everyone can or will use an online service. An assisted route, by telephone or in person, should use the same system and give the same outcome. Designing for the least confident user generally improves the service for all the others.',
      },
      {
        lead: 'Build for change',
        text: 'Fees, rules and ministers change. A service whose wording, fees and eligibility rules can be amended by its own staff will stay accurate. One that needs a contract variation for each change will fall behind the law it implements.',
      },
      {
        lead: 'Comment',
        text: 'Administrations that do this well tend to have done the dull work first: shared registers, clear ownership and plain language. The portal is the last step, and the smallest.',
      },
    ],
  },
  {
    n: 6,
    slug: 'trust-and-transparency',
    title: 'Trust and transparency: show the working',
    topic: 'Strategy and governance',
    summary:
      'Publishing more data does not by itself build trust. Institutions earn it by explaining decisions, admitting errors and making records easy to check.',
    paras: [
      {
        lead: 'Summary',
        text: 'Institutions often answer a loss of public trust by publishing more. Volume is seldom the problem. This briefing looks at the kinds of openness that people can use, and at how technology can support them without becoming a performance.',
      },
      {
        lead: 'Explain decisions, not only outcomes',
        text: 'A published figure says what happened. Trust depends more on why. For decisions that affect individuals, give the reasons in language the person can follow and say how to challenge them. For decisions of policy, publish the options that were considered and the grounds for the choice.',
      },
      {
        lead: 'Make records checkable',
        text: 'A spreadsheet released once a year in a new layout cannot be compared with the last one. Stable formats, consistent definitions and a note of what changed allow journalists, researchers and other departments to verify claims for themselves. Being checked, and passing, is what builds credibility.',
      },
      {
        lead: 'Keep an honest log',
        text: 'Systems should record who did what and when, in a form that cannot be quietly edited. This protects staff as much as the public. When something goes wrong, a reliable record shortens the argument about facts and leaves more time for putting it right.',
      },
      {
        lead: 'Admit error early',
        text: 'Every institution makes mistakes. Those that say so promptly, explain the cause and describe the remedy tend to keep their standing. Those that are found out lose it twice. A standing page of corrections is a modest tool that signals a serious attitude.',
      },
      {
        lead: 'Be open about automation',
        text: 'Where software helps to make or shape decisions, say so, and describe in general terms what it does and who oversees it. Secrecy on this point is brittle. Disclosure invites scrutiny, and scrutiny, though uncomfortable, generally improves the system.',
      },
      {
        lead: 'Comment',
        text: 'Transparency works when it is routine. Arrangements that depend on a crisis to prompt disclosure arrive too late to help.',
      },
    ],
  },
]

/** Words in the body of a briefing, counted the way a reader would. */
export function wordCount(briefing) {
  return briefing.paras
    .map((p) => `${p.lead} ${p.text}`)
    .join(' ')
    .split(/\s+/)
    .filter(Boolean).length
}
