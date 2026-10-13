import test from 'node:test'
import assert from 'node:assert/strict'
import { ENQUIRY_TYPES, FIELD_ORDER, firstInvalid, validateMessage } from '../lib/validate.mjs'

const good = {
  name: 'A. Reader',
  organisation: 'Ministry of Examples',
  email: 'reader@example.org',
  telephone: '',
  enquiry: 'general',
  message: 'Testing the demonstration form.',
}

test('a complete message has no errors', () => {
  assert.deepEqual(validateMessage(good), {})
  assert.equal(firstInvalid({}), null)
})

test('an empty form reports the five required fields', () => {
  const errors = validateMessage({})
  assert.deepEqual(Object.keys(errors).sort(), ['email', 'enquiry', 'message', 'name', 'organisation'])
})

test('whitespace does not count as an answer', () => {
  const errors = validateMessage({ ...good, name: '   ', message: '\n\t ' })
  assert.ok(errors.name)
  assert.ok(errors.message)
})

test('email addresses are checked for shape', () => {
  for (const email of ['reader', 'reader@', 'reader@example', '@example.org', 'a b@example.org']) {
    assert.ok(validateMessage({ ...good, email }).email, email)
  }
  for (const email of ['reader@example.org', 'first.last+tag@sub.example.co.uk']) {
    assert.equal(validateMessage({ ...good, email }).email, undefined, email)
  }
})

test('telephone is optional but checked when given', () => {
  assert.equal(validateMessage({ ...good, telephone: '' }).telephone, undefined)
  assert.equal(validateMessage({ ...good, telephone: '+44 20 7946 0000' }).telephone, undefined)
  assert.ok(validateMessage({ ...good, telephone: 'call me' }).telephone)
  assert.ok(validateMessage({ ...good, telephone: '123' }).telephone)
})

test('the enquiry type must be one of the listed values', () => {
  assert.ok(validateMessage({ ...good, enquiry: '' }).enquiry)
  assert.ok(validateMessage({ ...good, enquiry: 'sales' }).enquiry)
  for (const t of ENQUIRY_TYPES) assert.equal(validateMessage({ ...good, enquiry: t.value }).enquiry, undefined)
})

test('a message needs at least ten characters', () => {
  assert.ok(validateMessage({ ...good, message: 'Too short' }).message)
  assert.equal(validateMessage({ ...good, message: 'Ten chars!' }).message, undefined)
})

test('focus goes to the first invalid field in form order', () => {
  assert.equal(firstInvalid(validateMessage({})), 'name')
  assert.equal(firstInvalid(validateMessage({ ...good, email: 'x', message: '' })), 'email')
  assert.equal(firstInvalid(validateMessage({ ...good, message: '' })), 'message')
  assert.deepEqual(FIELD_ORDER, ['name', 'organisation', 'email', 'telephone', 'enquiry', 'message'])
})
