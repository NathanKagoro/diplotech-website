import { redirect } from 'next/navigation'

// Redirects the root route to the About page.
export default function Home() {
  redirect('/about')
  return null
}
