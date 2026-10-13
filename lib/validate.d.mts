export const ENQUIRY_TYPES: { value: string; label: string }[]
export const FIELD_ORDER: string[]
export function validateMessage(values: Record<string, string | undefined>): Record<string, string>
export function firstInvalid(errors: Record<string, string>): string | null
