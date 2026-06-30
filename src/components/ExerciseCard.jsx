import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

// Expandable exercise card. `exercise` is one object from data/exercises.js.
// `machineAltName` / `bodyweightAltName` are resolved display names passed in
// by the page (components never import data directly).
export function ExerciseCard({ exercise, machineAltName, bodyweightAltName }) {
  const [open, setOpen] = useState(false)
  const { muscles, cues, commonMistakes, scienceNote } = exercise

  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 transition-colors hover:border-gray-700">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 p-4 text-left"
      >
        <div>
          <h3 className="font-semibold text-gray-100">{exercise.name}</h3>
          <div className="mt-1 flex flex-wrap gap-1.5 text-xs">
            <span className="rounded bg-gray-800 px-1.5 py-0.5 capitalize text-gray-300">
              {exercise.equipment.replace('-', ' ')}
            </span>
            <span className="rounded bg-gray-800 px-1.5 py-0.5 capitalize text-gray-300">
              {exercise.category}
            </span>
            <span className="rounded bg-gray-800 px-1.5 py-0.5 capitalize text-gray-400">
              {exercise.difficulty}
            </span>
          </div>
        </div>
        {open ? (
          <ChevronUp className="h-5 w-5 shrink-0 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 shrink-0 text-gray-500" />
        )}
      </button>

      {open && (
        <div className="space-y-4 border-t border-gray-800 p-4 text-sm">
          <div className="flex flex-wrap gap-1.5">
            {muscles.primary.map((m) => (
              <span
                key={m}
                className="rounded-full bg-teal-500/15 px-2 py-0.5 text-xs capitalize text-teal-300"
              >
                {m.replace('-', ' ')}
              </span>
            ))}
            {muscles.secondary.map((m) => (
              <span
                key={m}
                className="rounded-full bg-gray-800 px-2 py-0.5 text-xs capitalize text-gray-400"
              >
                {m.replace('-', ' ')}
              </span>
            ))}
          </div>

          <Section title="Form cues" items={cues} />
          <Section title="Common mistakes" items={commonMistakes} />

          <div>
            <h4 className="mb-1 font-medium text-gray-200">Why it matters</h4>
            <p className="text-gray-400">{scienceNote}</p>
          </div>

          {(machineAltName || bodyweightAltName) && (
            <div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-500">
              {machineAltName && <span>Machine alt: {machineAltName}</span>}
              {bodyweightAltName && <span>Bodyweight alt: {bodyweightAltName}</span>}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function Section({ title, items }) {
  if (!items || items.length === 0) return null
  return (
    <div>
      <h4 className="mb-1 font-medium text-gray-200">{title}</h4>
      <ul className="list-disc space-y-1 pl-5 text-gray-400">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  )
}
