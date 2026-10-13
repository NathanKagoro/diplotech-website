import Link from 'next/link'
import type { ReactNode } from 'react'
import { DISCLOSURE, SERVICES, TABS, type TabId } from '@/lib/site'
import { Crest, Stamp, WaxSeal } from './Marks'
import { IndexDialog } from './IndexDialog'

export type CableHeader = {
  /** Registry reference, e.g. DTS/ABT/002 */
  reference: string
  to: string
  subject: string
}

/**
 * The frame every page sits in: the desk, the slim disclosure line, the
 * masthead, the tabbed dividers, one sheet of paper with a cable header,
 * and the footer.
 */
export function Dossier({
  tab,
  cable,
  children,
  annex,
  wide = false,
}: {
  tab: TabId
  cable: CableHeader
  children: ReactNode
  /** Current service annex slug, when on a service page. */
  annex?: string
  wide?: boolean
}) {
  const current = TABS.find((t) => t.id === tab)!
  const position = TABS.indexOf(current) + 1

  return (
    <div className="desk">
      <a className="skip" href="#sheet">
        Skip to the document
      </a>

      <div className="topline">
        <a className="topline__back" href="https://nathankagoro.com">
          <span aria-hidden="true">&larr;</span> nathankagoro.com
        </a>
        <p className="topline__note">{DISCLOSURE}</p>
      </div>

      <header className="masthead">
        <Link href="/" prefetch={false} className="masthead__name">
          <Crest className="masthead__crest" />
          <span>
            Diplotech Solutions
            <small>Diplomacy and technology, on file</small>
          </span>
        </Link>
        <IndexDialog current={tab} />
      </header>

      <nav className="tabs" aria-label="Dossier tabs">
        <ul>
          {TABS.map((t) => (
            <li key={t.id}>
              <Link
                href={t.href}
                prefetch={false}
                className="tab"
                aria-current={t.id === tab ? 'page' : undefined}
              >
                {t.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <p className="tab-solo" aria-hidden="true">
        Tab {position} of {TABS.length}: {current.label}
      </p>

      <main id="sheet" className={`sheet${wide ? ' sheet--wide' : ''}`} tabIndex={-1}>
        <div className="sheet__body">
          {tab === 'services' && (
            <nav className="annexes" aria-label="Service annexes">
              <Link href="/services/" prefetch={false} aria-current={annex ? undefined : 'page'}>
                Overview
              </Link>
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}/`}
                  prefetch={false}
                  aria-current={annex === s.slug ? 'page' : undefined}
                >
                  Annex {s.annex}: {s.short}
                </Link>
              ))}
            </nav>
          )}

          <div className="routing">
            <dl>
              <div>
                <dt>Ref</dt>
                <dd>{cable.reference}</dd>
              </div>
              <div>
                <dt>From</dt>
                <dd>Diplotech concept desk</dd>
              </div>
              <div>
                <dt>To</dt>
                <dd>{cable.to}</dd>
              </div>
              <div>
                <dt>Subject</dt>
                <dd>{cable.subject}</dd>
              </div>
              <div>
                <dt>Classification</dt>
                <dd>Unclassified &ndash; concept</dd>
              </div>
            </dl>
            <Stamp lines={['Unclassified', 'Concept']} className="routing__stamp" />
          </div>

          {children}
        </div>
      </main>

      <footer className="footer">
        <div className="footer__seal">
          <WaxSeal />
        </div>
        <div className="footer__cols">
          <div>
            <h2>File index</h2>
            <ul>
              {TABS.map((t) => (
                <li key={t.id}>
                  <Link href={t.href} prefetch={false}>
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Annexes</h2>
            <ul>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}/`} prefetch={false}>
                    {s.annex}: {s.short}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/privacy/" prefetch={false}>
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__note">
            <h2>About this file</h2>
            <p>
              {DISCLOSURE} The briefings are written for the concept and the message form sends
              nothing.
            </p>
            <a className="footer__back" href="https://nathankagoro.com">
              <span aria-hidden="true">&larr;</span> nathankagoro.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

/** Numbered cable paragraphs with an optional run-in heading. */
export function Paras({
  items,
  start = 1,
}: {
  items: { lead?: string; text: ReactNode }[]
  start?: number
}) {
  return (
    <ol className="paras" start={start} style={{ counterReset: `para ${start - 1}` }}>
      {items.map((item, i) => (
        <li key={i}>
          <p>
            {item.lead && <strong className="paras__lead">{item.lead}. </strong>}
            {item.text}
          </p>
        </li>
      ))}
    </ol>
  )
}

/** A ruled schedule: terms on the left, particulars on the right. */
export function Schedule({ rows }: { rows: { term: string; detail: ReactNode }[] }) {
  return (
    <dl className="schedule">
      {rows.map((row) => (
        <div key={row.term}>
          <dt>{row.term}</dt>
          <dd>{row.detail}</dd>
        </div>
      ))}
    </dl>
  )
}

/** A boxed enclosure with a label on its top edge and a dash list inside. */
export function Enclosure({
  label,
  title,
  note,
  items,
}: {
  label: string
  title: string
  note?: string
  items: string[]
}) {
  return (
    <section className="enclosure">
      <p className="enclosure__label">{label}</p>
      <h3>{title}</h3>
      {note && <p className="enclosure__note">{note}</p>}
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  )
}

/** The close of every cable: ENDS, and one onward link. */
export function Ends({ href, label, note }: { href: string; label: string; note?: string }) {
  return (
    <div className="ends">
      <p className="ends__mark" aria-hidden="true">
        ENDS
      </p>
      {note && <p className="ends__note">{note}</p>}
      <Link href={href} prefetch={false} className="button">
        {label}
      </Link>
    </div>
  )
}
