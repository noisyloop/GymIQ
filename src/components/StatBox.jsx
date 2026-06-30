// A single labelled stat tile. Pure presentational — data via props.
export function StatBox({ label, value, unit, sub, accent = false }) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        accent
          ? 'border-teal-500/40 bg-teal-500/10'
          : 'border-gray-800 bg-gray-900'
      }`}
    >
      <div className="text-xs font-medium uppercase tracking-wide text-gray-400">
        {label}
      </div>
      <div className="mt-1 flex items-baseline gap-1">
        <span
          className={`text-2xl font-bold ${
            accent ? 'text-teal-300' : 'text-gray-100'
          }`}
        >
          {value}
        </span>
        {unit && <span className="text-sm text-gray-400">{unit}</span>}
      </div>
      {sub && <div className="mt-1 text-xs text-gray-500">{sub}</div>}
    </div>
  )
}
