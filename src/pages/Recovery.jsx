import { Trophy, Swords } from 'lucide-react'
import { modalities, recoveryPrinciples, recoveryHierarchy } from '../data/recovery.js'
import { RecoveryCard } from '../components/RecoveryCard.jsx'

export function Recovery() {
  // Show by evidence strength, strongest first.
  const ordered = [...modalities].sort((a, b) => b.scienceRating - a.scienceRating)

  return (
    <div>
      <h1 className="text-2xl font-bold">Recovery</h1>
      <p className="mt-1 text-gray-400">
        Recovery is when adaptation happens. Ranked by what the evidence actually
        supports — not by what's trendy.
      </p>

      <div className="mt-5 rounded-xl border border-gray-800 bg-gray-900 p-4">
        <h3 className="flex items-center gap-2 font-semibold">
          <Trophy className="h-5 w-5 text-teal-400" />
          Recovery hierarchy
        </h3>
        <ol className="mt-3 flex flex-wrap items-center gap-2 text-sm">
          {recoveryHierarchy.map((item, i) => (
            <li key={item} className="flex items-center gap-2">
              <span className="rounded-lg bg-gray-800 px-2.5 py-1 text-gray-200">
                {i + 1}. {item}
              </span>
              {i < recoveryHierarchy.length - 1 && <span className="text-gray-600">›</span>}
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
        {ordered.map((m) => (
          <RecoveryCard key={m.id} modality={m} />
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-gray-800 bg-gray-900 p-4">
        <h3 className="font-semibold">Principles</h3>
        <ul className="mt-2 space-y-1.5 text-sm text-gray-400">
          {recoveryPrinciples.map((p, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-teal-400">•</span>
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
        <Swords className="h-6 w-6 shrink-0 text-red-400" />
        <p className="text-sm text-gray-200">
          Coming from combat sports, you already know the sauna. The cold-plunge
          nuance matters: great for soreness, but potentially counterproductive for
          muscle growth if done right after lifting — the post-lift inflammation is
          part of the building signal.
        </p>
      </div>
    </div>
  )
}
