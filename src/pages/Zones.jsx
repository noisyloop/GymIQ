import { useState } from 'react'
import { Flame } from 'lucide-react'
import { zones } from '../data/zones.js'
import { ZoneBar } from '../components/ZoneBar.jsx'
import { useProfile } from '../hooks/useProfile.js'
import { calculateZones, calculateZonesKarvonen, estimateMaxHR } from '../calculators/hrZones.js'

export function Zones() {
  const { profile } = useProfile()
  const [age, setAge] = useState(profile.age || 30)
  const [restingHR, setRestingHR] = useState(profile.restingHR || '')

  const useKarvonen = restingHR !== '' && Number(restingHR) > 0
  const computed = useKarvonen
    ? calculateZonesKarvonen(Number(age), Number(restingHR))
    : calculateZones(Number(age))
  const rangeById = Object.fromEntries(computed.map((z) => [z.zone, z]))

  const inputCls =
    'w-24 rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-gray-100 outline-none focus:border-teal-500'

  return (
    <div>
      <h1 className="text-2xl font-bold">Heart Rate Zones</h1>
      <p className="mt-1 text-gray-400">
        Your training zones from estimated max HR ({estimateMaxHR(Number(age) || 0)} bpm).
        Add a resting HR for the more individualized Karvonen method.
      </p>

      <div className="mt-5 flex flex-wrap items-end gap-4 rounded-xl border border-gray-800 bg-gray-900 p-4">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-gray-300">Age</span>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-gray-300">Resting HR (optional)</span>
          <input type="number" placeholder="e.g. 60" value={restingHR} onChange={(e) => setRestingHR(e.target.value)} className={inputCls} />
        </label>
        <p className="text-xs text-gray-500">
          Method: <span className="text-teal-300">{useKarvonen ? 'Karvonen (HR reserve)' : '% of max HR'}</span>
        </p>
      </div>

      <div className="mt-6 space-y-3">
        {zones.map((zone) => (
          <ZoneBar key={zone.id} zone={zone} range={rangeById[zone.id]} />
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-teal-500/40 bg-teal-500/10 p-4">
        <h3 className="flex items-center gap-2 font-semibold text-teal-300">
          <Flame className="h-5 w-5" />
          For combat-sports athletes
        </h3>
        <p className="mt-1 text-sm text-gray-300">
          If you've done combat sports, you already know Zone 3 — that's bag-work
          pace. Zone 2 is easier than you think and more powerful for fat loss.
          Stay conversational, aim for 2–4 hours a week, and let volume do the work.
        </p>
      </div>

      <div className="mt-6 rounded-xl border border-gray-800 bg-gray-900 p-4">
        <h3 className="font-semibold">No heart-rate monitor? Use the talk test</h3>
        <ul className="mt-2 space-y-1.5 text-sm text-gray-400">
          <li><span className="text-blue-400">Zone 1–2:</span> You can hold a full conversation.</li>
          <li><span className="text-yellow-400">Zone 3:</span> Short phrases only — comfortably uncomfortable.</li>
          <li><span className="text-orange-400">Zone 4:</span> Single words. Breathing is hard.</li>
          <li><span className="text-red-500">Zone 5:</span> Can't talk. All-out effort.</li>
        </ul>
      </div>

      <div className="mt-6 space-y-4">
        {zones.map((zone) => (
          <div key={zone.id} className="rounded-xl border border-gray-800 bg-gray-900 p-4">
            <h3 className="font-semibold text-gray-100">{zone.name}</h3>
            <p className="mt-1 text-sm text-gray-400">{zone.scienceNote}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
