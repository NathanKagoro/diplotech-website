import { GLOBE } from './globe-data'

const R = GLOBE.radius
const PAD = 22

/** The graticule globe: thin ink lines, land in a pale wash. Decorative. */
export function Globe({ className }: { className?: string }) {
  const size = (R + PAD) * 2
  return (
    <svg
      className={className}
      viewBox={`${-R - PAD} ${-R - PAD} ${size} ${size}`}
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
    >
      <path d={GLOBE.land} className="globe-land" />
      <g fill="none" stroke="currentColor" strokeLinejoin="round">
        <path d={GLOBE.graticule} strokeWidth="0.6" opacity="0.45" />
        <path d={GLOBE.coast} strokeWidth="1.3" />
        <circle r={R} strokeWidth="1.3" />
        <path d={GLOBE.ticks} strokeWidth="0.8" />
      </g>
    </svg>
  )
}
