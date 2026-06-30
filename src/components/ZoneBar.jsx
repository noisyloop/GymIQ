import { zoneBarClass, zoneTextClass, zoneBorderClass } from './zoneColors.js'

// Renders one heart-rate zone as a bar with its bpm range and details.
// `zone` is a zone definition (from data/zones.js); `range` is the computed
// { minBPM, maxBPM } from the calculator (optional).
export function ZoneBar({ zone, range }) {
  const widthPct = zone.pctMax - zone.pctMin
  return (
    <div
      className={`rounded-xl border bg-gray-900 p-4 ${zoneBorderClass[zone.id]}`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className={`font-semibold ${zoneTextClass[zone.id]}`}>{zone.name}</h3>
        <div className="text-sm text-gray-400">
          {range ? (
            <span className="font-mono text-gray-200">
              {range.minBPM}–{range.maxBPM} bpm
            </span>
          ) : (
            <span>
              {zone.pctMin}–{zone.pctMax}% max HR
            </span>
          )}
        </div>
      </div>

      {/* Position bar across the 50-100% HR span */}
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-800">
        <div
          className={`h-full ${zoneBarClass[zone.id]}`}
          style={{
            marginLeft: `${((zone.pctMin - 50) / 50) * 100}%`,
            width: `${(widthPct / 50) * 100}%`,
          }}
        />
      </div>

      <p className="mt-3 text-sm text-gray-300">{zone.feel}</p>
      <p className="mt-1 text-xs text-gray-500">Fuel: {zone.fuelSource}</p>

      <div className="mt-2 flex flex-wrap gap-1.5">
        {zone.bestFor.map((b) => (
          <span
            key={b}
            className="rounded-full bg-gray-800 px-2 py-0.5 text-xs text-gray-300"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  )
}
