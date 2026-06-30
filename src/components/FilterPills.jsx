// Generic single-select pill row. options: [{ value, label }]. Controlled.
export function FilterPills({ label, options, value, onChange }) {
  return (
    <div>
      {label && (
        <div className="mb-1.5 text-xs font-medium uppercase tracking-wide text-gray-500">
          {label}
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = opt.value === value
          return (
            <button
              key={String(opt.value)}
              type="button"
              onClick={() => onChange(opt.value)}
              className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                active
                  ? 'border-teal-500 bg-teal-500/15 text-teal-300'
                  : 'border-gray-800 bg-gray-900 text-gray-400 hover:bg-gray-800'
              }`}
            >
              {opt.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
