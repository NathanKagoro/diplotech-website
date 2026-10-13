// The drawn marks of the dossier: crest, wax seal and rubber stamps.
// All are decorative; the words they carry are repeated in the page text.

/** Line-drawn crest: a small graticule globe over three linked relay points. */
export function Crest({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
      <g fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="50" cy="50" r="47" />
        <circle cx="50" cy="50" r="41" strokeWidth="0.8" strokeDasharray="1 3.3" />
        <circle cx="50" cy="44" r="21" />
        <ellipse cx="50" cy="44" rx="8" ry="21" strokeWidth="1" />
        <ellipse cx="50" cy="44" rx="15.5" ry="21" strokeWidth="1" />
        <path d="M29 44h42M32.5 33h35M32.5 55h35" strokeWidth="1" />
        <path d="M30 76h40" />
      </g>
      <g fill="currentColor">
        <circle cx="30" cy="76" r="3" />
        <circle cx="50" cy="76" r="3" />
        <circle cx="70" cy="76" r="3" />
        <path d="M50 10.5l1.5 3.2 3.5.4-2.6 2.4.7 3.5-3.1-1.8-3.1 1.8.7-3.5-2.6-2.4 3.5-.4z" />
      </g>
    </svg>
  )
}

// A wax blob is not a circle. The edge radius wobbles on three fixed
// frequencies so the outline is irregular but the same on every render.
function blobPath(cx: number, cy: number, r: number) {
  const pts: string[] = []
  for (let i = 0; i < 72; i++) {
    const a = (i / 72) * Math.PI * 2
    const wobble = Math.sin(a * 3 + 0.6) * 2.2 + Math.sin(a * 7 + 2.1) * 1.3 + Math.sin(a * 13) * 0.6
    const rr = r + wobble
    pts.push(`${(cx + Math.cos(a) * rr).toFixed(1)} ${(cy + Math.sin(a) * rr).toFixed(1)}`)
  }
  return `M${pts.join('L')}Z`
}

/** Gold wax seal pressed with the crest. */
export function WaxSeal({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="wax" cx="38%" cy="32%" r="75%">
          <stop offset="0" stopColor="#E3C06A" />
          <stop offset="0.55" stopColor="#C09637" />
          <stop offset="1" stopColor="#8E6A1C" />
        </radialGradient>
      </defs>
      <path d={blobPath(61, 62, 53)} fill="#5A4210" opacity="0.28" />
      <path d={blobPath(60, 60, 53)} fill="url(#wax)" />
      <circle cx="60" cy="60" r="41" fill="none" stroke="#7A5A12" strokeWidth="2.5" opacity="0.7" />
      <circle cx="60" cy="60" r="39.5" fill="none" stroke="#F0D68E" strokeWidth="0.8" opacity="0.7" />
      <g transform="translate(26 26) scale(0.68)" color="#6B4E0E" opacity="0.85">
        <g fill="none" stroke="currentColor" strokeWidth="2.4">
          <circle cx="50" cy="44" r="21" />
          <ellipse cx="50" cy="44" rx="8" ry="21" strokeWidth="1.6" />
          <ellipse cx="50" cy="44" rx="15.5" ry="21" strokeWidth="1.6" />
          <path d="M29 44h42M32.5 33h35M32.5 55h35" strokeWidth="1.6" />
          <path d="M30 76h40" />
        </g>
        <g fill="currentColor">
          <circle cx="30" cy="76" r="3.4" />
          <circle cx="50" cy="76" r="3.4" />
          <circle cx="70" cy="76" r="3.4" />
        </g>
      </g>
    </svg>
  )
}

/** Rubber stamp. Lines are stacked; the first is the larger one. */
export function Stamp({
  lines,
  tone = 'red',
  className = '',
}: {
  lines: string[]
  tone?: 'red' | 'teal'
  className?: string
}) {
  return (
    <span className={`stamp stamp--${tone} ${className}`} aria-hidden="true">
      {lines.map((line) => (
        <span key={line}>{line}</span>
      ))}
    </span>
  )
}
