// Validation for the demonstration message form. Kept free of React and the
// DOM so it can be unit tested with `node --test`.

export const ENQUIRY_TYPES = [
  { value: 'services', label: 'Services' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'careers', label: 'Careers' },
  { value: 'general', label: 'General' },
]

/** Order matters: the first field with an error receives focus. */
export const FIELD_ORDER = ['name', 'organisation', 'email', 'telephone', 'enquiry', 'message']

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const TELEPHONE = /^\+?[0-9 ()-]{7,20}$/

/**
 * @param {Record<string, string | undefined>} values
 * @returns {Record<string, string>} field name to message; empty when valid
 */
export function validateMessage(values) {
  const v = (k) => (values[k] ?? '').trim()
  /** @type {Record<string, string>} */
  const errors = {}

  if (!v('name')) errors.name = 'Enter your name.'
  if (!v('organisation')) errors.organisation = 'Enter your organisation.'

  if (!v('email')) errors.email = 'Enter an email address.'
  else if (!EMAIL.test(v('email'))) errors.email = 'Enter an email address in the form name@example.org.'

  if (v('telephone') && !TELEPHONE.test(v('telephone'))) {
    errors.telephone = 'Use digits, spaces and an optional leading +, or leave this blank.'
  }

  if (!ENQUIRY_TYPES.some((t) => t.value === v('enquiry'))) errors.enquiry = 'Choose a type of enquiry.'

  if (!v('message')) errors.message = 'Write a message.'
  else if (v('message').length < 10) errors.message = 'Write at least ten characters.'

  return errors
}

/** The first invalid field in form order, or null. */
export function firstInvalid(errors) {
  return FIELD_ORDER.find((name) => errors[name]) ?? null
}
