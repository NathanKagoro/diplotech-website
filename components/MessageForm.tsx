'use client'

import { useEffect, useRef, useState, type FormEvent } from 'react'
import { ENQUIRY_TYPES, firstInvalid, validateMessage } from '@/lib/validate.mjs'
import { Stamp } from './Marks'

type Errors = Record<string, string>

/**
 * The message form. It validates like a real one and then says, truthfully,
 * that nothing was sent. There is no network request anywhere in it.
 */
export function MessageForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const resultRef = useRef<HTMLDivElement>(null)
  const [errors, setErrors] = useState<Errors>({})
  const [done, setDone] = useState(false)

  // After a valid submission the result panel replaces the button row;
  // move focus to it so keyboard and screen-reader users land on the outcome.
  useEffect(() => {
    if (done) resultRef.current?.focus()
  }, [done])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>
    const found = validateMessage(data)
    setErrors(found)
    const first = firstInvalid(found)
    if (first) {
      setDone(false)
      const el = formRef.current?.elements.namedItem(first)
      if (el instanceof HTMLElement) el.focus()
      return
    }
    setDone(true)
  }

  const clear = () => {
    formRef.current?.reset()
    setErrors({})
    setDone(false)
    const el = formRef.current?.elements.namedItem('name')
    if (el instanceof HTMLElement) el.focus()
  }

  const field = (name: string) => ({
    id: `f-${name}`,
    name,
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? `e-${name}` : undefined,
  })
  const error = (name: string) =>
    errors[name] ? (
      <p className="field__error" id={`e-${name}`}>
        {errors[name]}
      </p>
    ) : null

  const count = Object.keys(errors).length

  return (
    <form ref={formRef} className="msgform" noValidate onSubmit={onSubmit} aria-labelledby="msgform-title">
      <div className="msgform__head">
        <h2 id="msgform-title">Message form</h2>
        <p>Demonstration only. Fields marked * are required.</p>
      </div>

      <fieldset className="msgform__grid" disabled={done}>
        <legend className="sr-only">Your message</legend>
        <div className="field">
          <label htmlFor="f-name">Name *</label>
          <input type="text" autoComplete="name" required {...field('name')} />
          {error('name')}
        </div>
        <div className="field">
          <label htmlFor="f-organisation">Organisation *</label>
          <input type="text" autoComplete="organization" required {...field('organisation')} />
          {error('organisation')}
        </div>
        <div className="field">
          <label htmlFor="f-email">Email *</label>
          <input type="email" autoComplete="email" inputMode="email" required {...field('email')} />
          {error('email')}
        </div>
        <div className="field">
          <label htmlFor="f-telephone">Telephone</label>
          <input type="tel" autoComplete="tel" inputMode="tel" {...field('telephone')} />
          {error('telephone')}
        </div>
        <div className="field field--full">
          <label htmlFor="f-enquiry">Type of enquiry *</label>
          <select required defaultValue="" {...field('enquiry')}>
            <option value="">Choose one</option>
            {ENQUIRY_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
          {error('enquiry')}
        </div>
        <div className="field field--full">
          <label htmlFor="f-message">Message *</label>
          <textarea rows={6} required {...field('message')} />
          {error('message')}
        </div>
      </fieldset>

      <p className="msgform__count" role="alert">
        {count > 0 &&
          `${count === 1 ? 'One field needs' : `${count} fields need`} attention. The first is selected.`}
      </p>

      {done ? (
        <div className="msgform__result" ref={resultRef} tabIndex={-1} role="status">
          <Stamp lines={['Not transmitted']} tone="red" />
          <div>
            <p className="msgform__verdict">This is a demonstration form. Nothing was sent.</p>
            <p>
              Your entries passed the checks and stayed in this browser tab. No address or server
              receives them.
            </p>
            <button type="button" className="button button--quiet" onClick={clear}>
              Clear the form
            </button>
          </div>
        </div>
      ) : (
        <button type="submit" className="button">
          Check the message
        </button>
      )}
    </form>
  )
}
