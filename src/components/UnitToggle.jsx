// Metric / Imperial toggle. Controlled via value ('metric'|'imperial').
export function UnitToggle({ value, onChange }) {
  const units = [
    { value: 'metric', label: 'Metric (kg / cm)' },
    { value: 'imperial', label: 'Imperial (lb / ft)' },
  ]
  return (
    <div className="inline-flex rounded-lg border border-gray-800 bg-gray-900 p-0.5">
      {units.map((u) => (
        <button
          key={u.value}
          type="button"
          onClick={() => onChange(u.value)}
          className={`rounded-md px-3 py-1.5 text-sm transition-colors ${
            value === u.value
              ? 'bg-teal-500/15 text-teal-300'
              : 'text-gray-400 hover:text-gray-200'
          }`}
        >
          {u.label}
        </button>
      ))}
    </div>
  )
}
