// Heart rate zone calculations. Pure functions, no React.
// Zone boundary percentages live in src/data/zones.js, but to keep this
// module free of side-effect imports the percentage table is duplicated as a
// small local constant. Keep it in sync with zones.js if zone ranges change.

const ZONE_BANDS = [
  { id: 1, name: 'Zone 1 — Recovery', pctMin: 50, pctMax: 60 },
  { id: 2, name: 'Zone 2 — Aerobic Base / Fat Burn', pctMin: 60, pctMax: 70 },
  { id: 3, name: 'Zone 3 — Tempo / Aerobic Power', pctMin: 70, pctMax: 80 },
  { id: 4, name: 'Zone 4 — Threshold', pctMin: 80, pctMax: 90 },
  { id: 5, name: 'Zone 5 — VO₂ Max / Maximal', pctMin: 90, pctMax: 100 },
]

// Standard age-predicted maximum heart rate.
export const estimateMaxHR = (age) => 220 - age

// Percentage-of-max-HR method.
// Returns: Array<{ zone, name, minBPM, maxBPM, pctMin, pctMax }>
export const calculateZones = (age) => {
  const maxHR = estimateMaxHR(age)
  return ZONE_BANDS.map((band) => ({
    zone: band.id,
    name: band.name,
    pctMin: band.pctMin,
    pctMax: band.pctMax,
    minBPM: Math.round((maxHR * band.pctMin) / 100),
    maxBPM: Math.round((maxHR * band.pctMax) / 100),
  }))
}

// Karvonen (heart rate reserve) method — more individualized because it
// accounts for resting heart rate.
// HRR = maxHR - restingHR; targetBPM = restingHR + pct * HRR
export const calculateZonesKarvonen = (age, restingHR) => {
  const maxHR = estimateMaxHR(age)
  const reserve = maxHR - restingHR
  return ZONE_BANDS.map((band) => ({
    zone: band.id,
    name: band.name,
    pctMin: band.pctMin,
    pctMax: band.pctMax,
    minBPM: Math.round(restingHR + (reserve * band.pctMin) / 100),
    maxBPM: Math.round(restingHR + (reserve * band.pctMax) / 100),
  }))
}

// Given a measured heart rate, return the matching zone band (or null).
export const getZoneForBPM = (bpm, age) => {
  const zones = calculateZones(age)
  const match = zones.find((z) => bpm >= z.minBPM && bpm <= z.maxBPM)
  if (match) return match
  // Below zone 1 or above zone 5 — clamp to the nearest meaningful band.
  if (bpm < zones[0].minBPM) return null
  if (bpm > zones[zones.length - 1].maxBPM) return zones[zones.length - 1]
  return null
}
