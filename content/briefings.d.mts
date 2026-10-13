export type Para = { lead: string; text: string }
export type Briefing = {
  n: number
  slug: string
  title: string
  topic: string
  summary: string
  paras: Para[]
}
export const BRIEFINGS: Briefing[]
export function wordCount(briefing: Briefing): number
