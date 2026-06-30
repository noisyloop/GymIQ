import { smartMachines, smartMachineIntro } from '../data/smartMachines.js'
import { getExerciseById } from '../data/exercises.js'

export function SmartMachines() {
  return (
    <div>
      <h1 className="text-2xl font-bold">{smartMachineIntro.title}</h1>
      <div className="mt-3 space-y-3 text-gray-300">
        {smartMachineIntro.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      {/* Who they're for + comparison */}
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Compare title="Smart circuit machines" points={['Auto-set resistance & rep tracking', 'Best for beginners & time-limited members', 'Full body in ~30 min']} accent />
        <Compare title="Traditional machines" points={['Fixed path, you set the pin', 'Good for isolation & injury recovery', 'Cheap, everywhere']} />
        <Compare title="Free weights" points={['Maximum stabilizer demand', 'Best long-term strength ceiling', 'Steeper learning curve']} />
      </div>

      <div className="mt-6 rounded-xl border border-teal-500/40 bg-teal-500/10 p-4">
        <h3 className="font-semibold text-teal-300">The 30-minute full-body circuit</h3>
        <p className="mt-1 text-sm text-gray-300">{smartMachineIntro.circuitNote}</p>
        <p className="mt-2 text-sm text-gray-400">
          Ideal for: beginners, anyone returning from injury, and members short on
          time. Follow the circuit order below — one set per station, minimal rest.
        </p>
      </div>

      <h2 className="mt-8 text-lg font-semibold">Circuit order</h2>
      <div className="mt-3 space-y-3">
        {smartMachines.map((m) => {
          const fw = getExerciseById(m.freeWeightEquivalent)
          return (
            <div key={m.id} className="rounded-xl border border-gray-800 bg-gray-900 p-4">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-500/15 text-sm font-bold text-teal-300">
                  {m.circuitPosition}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold text-gray-100">{m.name}</h3>
                    {fw && (
                      <span className="text-xs text-gray-500">
                        Free-weight equivalent: {fw.name}
                      </span>
                    )}
                  </div>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {m.muscles.primary.map((mu) => (
                      <span key={mu} className="rounded-full bg-teal-500/15 px-2 py-0.5 text-xs capitalize text-teal-300">
                        {mu.replace('-', ' ')}
                      </span>
                    ))}
                  </div>

                  <p className="mt-2 text-sm text-gray-400">{m.howItWorks}</p>

                  <div className="mt-3 grid gap-3 sm:grid-cols-3">
                    <MiniList title="Setup" items={m.setup} />
                    <MiniList title="Cues" items={m.cues} />
                    <MiniList title="Avoid" items={m.commonMistakes} />
                  </div>

                  <p className="mt-2 text-xs text-gray-500">
                    <span className="text-gray-400">Why it's useful: </span>
                    {m.whyUseful}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Compare({ title, points, accent }) {
  return (
    <div className={`rounded-xl border p-4 ${accent ? 'border-teal-500/40 bg-teal-500/5' : 'border-gray-800 bg-gray-900'}`}>
      <h3 className="text-sm font-semibold text-gray-100">{title}</h3>
      <ul className="mt-2 space-y-1 text-xs text-gray-400">
        {points.map((p, i) => (
          <li key={i}>• {p}</li>
        ))}
      </ul>
    </div>
  )
}

function MiniList({ title, items }) {
  return (
    <div>
      <h4 className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-500">{title}</h4>
      <ul className="space-y-0.5 text-xs text-gray-400">
        {items.map((it, i) => (
          <li key={i}>• {it}</li>
        ))}
      </ul>
    </div>
  )
}
