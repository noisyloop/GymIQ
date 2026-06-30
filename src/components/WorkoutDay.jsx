import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

// Accordion for a single workout day. `day` is one entry from a plan's days[].
// `resolveName(exerciseId)` maps an id to a display name (passed by the page).
export function WorkoutDay({ day, defaultOpen = false, resolveName }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 p-4 text-left"
      >
        <div>
          <h3 className="font-semibold text-gray-100">{day.label}</h3>
          <p className="text-sm text-gray-400">
            {day.focus}
            {day.duration ? ` · ${day.duration}` : ''}
          </p>
        </div>
        {open ? (
          <ChevronUp className="h-5 w-5 shrink-0 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 shrink-0 text-gray-500" />
        )}
      </button>

      {open && (
        <div className="border-t border-gray-800">
          {day.exercises.map((ex, i) => (
            <div
              key={i}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-gray-800/60 px-4 py-3 last:border-b-0"
            >
              <div className="min-w-0">
                <div className="font-medium text-gray-200">
                  {resolveName ? resolveName(ex.exerciseId) : ex.exerciseId}
                </div>
                {ex.note && (
                  <div className="text-xs text-gray-500">{ex.note}</div>
                )}
              </div>
              <div className="flex shrink-0 items-baseline gap-3 font-mono text-sm text-gray-300">
                <span>
                  {ex.sets} × {ex.reps}
                </span>
                {ex.rpe ? (
                  <span className="text-gray-500">RPE {ex.rpe}</span>
                ) : null}
                <span className="text-gray-500">
                  {ex.rest > 0 ? `${ex.rest}s rest` : '—'}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
