'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { SERVICES, TABS, type TabId } from '@/lib/site'

/**
 * The file index for narrow screens. It is a native modal <dialog>, so the
 * browser closes it on Escape, keeps focus inside it, makes the page behind
 * inert and returns focus to the button afterwards. The only thing added
 * here is the background scroll lock.
 */
export function IndexDialog({ current }: { current: TabId }) {
  const ref = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    const unlock = () => document.documentElement.classList.remove('index-open')
    dialog.addEventListener('close', unlock)
    return () => {
      dialog.removeEventListener('close', unlock)
      unlock()
    }
  }, [])

  const open = () => {
    document.documentElement.classList.add('index-open')
    ref.current?.showModal()
  }
  const close = () => ref.current?.close()

  return (
    <>
      <button type="button" className="index-button" aria-haspopup="dialog" onClick={open}>
        <span className="index-button__lines" aria-hidden="true" />
        Index
      </button>

      <dialog
        ref={ref}
        className="index-card"
        aria-labelledby="index-title"
        onClick={(e) => {
          // A click on the backdrop lands on the dialog element itself.
          if (e.target === ref.current) close()
        }}
      >
        <div className="index-card__inner">
          <div className="index-card__head">
            <h2 id="index-title">File index</h2>
            <button type="button" className="index-card__close" onClick={close}>
              Close
            </button>
          </div>
          <nav aria-label="File index">
            <ol className="index-list">
              {TABS.map((tab, i) => (
                <li key={tab.id}>
                  <Link
                    href={tab.href}
                    prefetch={false}
                    aria-current={tab.id === current ? 'page' : undefined}
                    onClick={close}
                  >
                    <span className="index-list__no">Tab {i + 1}</span>
                    <span className="index-list__label">{tab.label}</span>
                  </Link>
                  {tab.id === 'services' && (
                    <ul className="index-sublist">
                      {SERVICES.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/services/${s.slug}/`} prefetch={false} onClick={close}>
                            <span className="index-list__no">Annex {s.annex}</span>
                            <span className="index-list__label">{s.short}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </dialog>
    </>
  )
}
