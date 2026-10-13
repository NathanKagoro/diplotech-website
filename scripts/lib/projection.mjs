// Orthographic projection: the globe as seen from far away, looking straight
// at (lon0, lat0). Pure functions so they can be unit tested.

const RAD = Math.PI / 180

/**
 * Project a longitude/latitude pair (degrees) onto a disc of radius r.
 * Returns x to the right, y downwards (SVG convention) and whether the point
 * is on the near side of the globe.
 */
export function project(lon, lat, { lon0 = 0, lat0 = 0, r = 1 } = {}) {
  const l = (lon - lon0) * RAD
  const p = lat * RAD
  const p0 = lat0 * RAD
  const cosC = Math.sin(p0) * Math.sin(p) + Math.cos(p0) * Math.cos(p) * Math.cos(l)
  const x = r * Math.cos(p) * Math.sin(l)
  const y = -r * (Math.cos(p0) * Math.sin(p) - Math.sin(p0) * Math.cos(p) * Math.cos(l))
  return { x, y, visible: cosC >= 0 }
}

/** Push a far-side point out to the limb so filled shapes close along the edge. */
export function clampToLimb(pt, r = 1) {
  const d = Math.hypot(pt.x, pt.y) || 1
  return { x: (pt.x / d) * r, y: (pt.y / d) * r, visible: true }
}

/** Insert intermediate points so no step is longer than maxStep degrees. */
export function densify(points, maxStep = 2, closed = false) {
  const out = []
  const n = points.length
  const last = closed ? n : n - 1
  for (let i = 0; i < last; i++) {
    const [aLon, aLat] = points[i]
    const [bLon, bLat] = points[(i + 1) % n]
    const steps = Math.max(1, Math.ceil(Math.max(Math.abs(bLon - aLon), Math.abs(bLat - aLat)) / maxStep))
    for (let s = 0; s < steps; s++) {
      out.push([aLon + ((bLon - aLon) * s) / steps, aLat + ((bLat - aLat) * s) / steps])
    }
  }
  if (!closed) out.push(points[n - 1])
  return out
}

/** Split a projected line into the runs that are on the near side. */
export function visibleRuns(projected) {
  const runs = []
  let run = []
  for (const pt of projected) {
    if (pt.visible) run.push(pt)
    else if (run.length) {
      runs.push(run)
      run = []
    }
  }
  if (run.length) runs.push(run)
  return runs.filter((r) => r.length > 1)
}

const f = (v) => (Math.round(v * 10) / 10).toString()

/** SVG path data for a list of points. */
export function toPath(points, close = false) {
  if (!points.length) return ''
  return 'M' + points.map((p) => `${f(p.x)} ${f(p.y)}`).join('L') + (close ? 'Z' : '')
}
