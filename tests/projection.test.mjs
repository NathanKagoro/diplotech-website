import test from 'node:test'
import assert from 'node:assert/strict'
import { clampToLimb, densify, project, toPath, visibleRuns } from '../scripts/lib/projection.mjs'

const near = (a, b, eps = 1e-9) => assert.ok(Math.abs(a - b) < eps, `${a} is not ${b}`)

test('the centre of the view projects to the origin', () => {
  const p = project(22, 14, { lon0: 22, lat0: 14, r: 300 })
  near(p.x, 0)
  near(p.y, 0)
  assert.equal(p.visible, true)
})

test('the antipode is on the far side', () => {
  assert.equal(project(-158, -14, { lon0: 22, lat0: 14 }).visible, false)
})

test('ninety degrees east on the equator sits on the right-hand limb', () => {
  const p = project(90, 0, { lon0: 0, lat0: 0, r: 100 })
  near(p.x, 100)
  near(p.y, 0)
})

test('north is up: the pole has negative y in SVG coordinates', () => {
  const p = project(0, 90, { lon0: 0, lat0: 0, r: 100 })
  near(p.x, 0)
  near(p.y, -100)
})

test('no visible point falls outside the disc', () => {
  for (let lon = -180; lon <= 180; lon += 10) {
    for (let lat = -90; lat <= 90; lat += 10) {
      const p = project(lon, lat, { lon0: 22, lat0: 14, r: 300 })
      assert.ok(Math.hypot(p.x, p.y) <= 300 + 1e-9)
    }
  }
})

test('clampToLimb moves a point out to the given radius, keeping its bearing', () => {
  const p = clampToLimb({ x: 3, y: 4 }, 10)
  near(p.x, 6)
  near(p.y, 8)
  assert.equal(p.visible, true)
})

test('densify keeps the end points and limits the step', () => {
  const line = densify([[0, 0], [10, 0]], 2)
  assert.deepEqual(line[0], [0, 0])
  assert.deepEqual(line.at(-1), [10, 0])
  assert.equal(line.length, 6)
  for (let i = 1; i < line.length; i++) assert.ok(line[i][0] - line[i - 1][0] <= 2 + 1e-9)
})

test('densify closes a ring back to its start without repeating it', () => {
  const ring = densify([[0, 0], [4, 0], [4, 4]], 2, true)
  assert.deepEqual(ring[0], [0, 0])
  assert.equal(ring.length, 6)
})

test('visibleRuns splits at hidden points and drops single points', () => {
  const v = (x) => ({ x, y: 0, visible: true })
  const h = { x: 0, y: 0, visible: false }
  const runs = visibleRuns([v(1), v(2), h, v(3), h, v(4), v(5), v(6)])
  assert.deepEqual(runs.map((r) => r.map((p) => p.x)), [[1, 2], [4, 5, 6]])
})

test('toPath rounds to one decimal and can close the shape', () => {
  assert.equal(toPath([{ x: 1.26, y: -2 }, { x: 3, y: 4.04 }], true), 'M1.3 -2L3 4Z')
  assert.equal(toPath([]), '')
})
