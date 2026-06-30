import { Star } from 'lucide-react'

// Evidence rating color: green 4-5, yellow 3, orange 1-2.
function ratingColor(rating) {
  if (rating >= 4) return 'text-green-400'
  if (rating === 3) return 'text-yellow-400'
  return 'text-orange-400'
}

// Recovery modality card. `modality` is one entry from data/recovery.js.
export function RecoveryCard({ modality }) {
  const color = ratingColor(modality.scienceRating)
  return (
    <div className="flex flex-col rounded-xl border border-gray-800 bg-gray-900 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-semibold text-gray-100">{modality.name}</h3>
          <p className="text-xs capitalize text-gray-500">
            {modality.category} · {modality.gymAvailability} · {modality.timing}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-0.5" title={`Evidence ${modality.scienceRating}/5`}>
          {[1, 2, 3, 4, 5].map((n) => (
            <Star
              key={n}
              className={`h-3.5 w-3.5 ${
                n <= modality.scienceRating ? color : 'text-gray-700'
              }`}
              fill={n <= modality.scienceRating ? 'currentColor' : 'none'}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 rounded-lg bg-gray-800/60 p-2.5 text-xs text-gray-300">
        <span className="font-medium text-gray-200">Protocol: </span>
        {modality.optimalProtocol}
      </div>

      <List title="Benefits" items={modality.benefits} dot="text-teal-400" />
      <List title="Caveats" items={modality.caveats} dot="text-orange-400" />

      <div className="mt-3 flex flex-wrap gap-1.5">
        {modality.bestFor.map((t) => (
          <span
            key={t}
            className="rounded-full bg-green-500/10 px-2 py-0.5 text-xs text-green-300"
          >
            ✓ {t}
          </span>
        ))}
        {modality.notFor.map((t) => (
          <span
            key={t}
            className="rounded-full bg-red-500/10 px-2 py-0.5 text-xs text-red-300"
          >
            ✕ {t}
          </span>
        ))}
      </div>
    </div>
  )
}

function List({ title, items, dot }) {
  if (!items || items.length === 0) return null
  return (
    <div className="mt-3">
      <h4 className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-500">
        {title}
      </h4>
      <ul className="space-y-1 text-sm text-gray-400">
        {items.map((it, i) => (
          <li key={i} className="flex gap-2">
            <span className={dot}>•</span>
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
