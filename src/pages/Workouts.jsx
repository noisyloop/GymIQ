import { useState, useMemo } from 'react'
import { workouts, workoutGoals, daysOptions, getWorkouts } from '../data/workouts.js'
import { getExerciseById } from '../data/exercises.js'
import { FilterPills } from '../components/FilterPills.jsx'
import { WorkoutDay } from '../components/WorkoutDay.jsx'
import { useProfile } from '../hooks/useProfile.js'

const resolveName = (id) => getExerciseById(id)?.name || id

export function Workouts() {
  const { profile } = useProfile()
  const initialGoal = workoutGoals.some((g) => g.id === profile.goal)
    ? profile.goal
    : workoutGoals[0].id
  const [goal, setGoal] = useState(initialGoal)
  const [days, setDays] = useState(3)

  const plans = useMemo(() => getWorkouts(goal, days), [goal, days])

  // Which day counts actually have a plan for this goal (for disabling pills).
  const availableDays = useMemo(
    () => new Set(workouts.filter((w) => w.goal === goal).map((w) => w.daysPerWeek)),
    [goal],
  )

  const goalOpts = workoutGoals.map((g) => ({ value: g.id, label: g.label }))
  const dayOpts = daysOptions.map((d) => ({
    value: d,
    label: availableDays.has(d) ? `${d} days` : `${d} days ·–`,
  }))

  return (
    <div>
      <h1 className="text-2xl font-bold">Workout Plans</h1>
      <p className="mt-1 text-gray-400">
        Pick a goal and how many days a week you can train. Every plan is built
        around progressive overload.
      </p>

      <div className="mt-5 space-y-3">
        <FilterPills label="Goal" options={goalOpts} value={goal} onChange={setGoal} />
        <FilterPills label="Days per week" options={dayOpts} value={days} onChange={setDays} />
      </div>

      <div className="mt-6 space-y-6">
        {plans.length === 0 && (
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 text-center text-gray-400">
            No plan for this combination. Try a different number of days —
            available:{' '}
            {[...availableDays].sort().map((d) => `${d}`).join(', ')} days/week.
          </div>
        )}

        {plans.map((plan) => (
          <PlanView key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  )
}

function PlanView({ plan }) {
  return (
    <div>
      <div className="rounded-xl border border-teal-500/30 bg-gray-900 p-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-lg font-semibold text-gray-100">{plan.name}</h2>
          <span className="rounded-full bg-gray-800 px-2.5 py-0.5 text-xs capitalize text-gray-300">
            {plan.split} · {plan.level}
          </span>
        </div>
        <p className="mt-2 text-sm text-gray-300">{plan.rationale}</p>
        <div className="mt-3 grid gap-2 text-xs text-gray-400 sm:grid-cols-2">
          <p><span className="font-medium text-gray-300">Rest days: </span>{plan.restDays}</p>
          <p><span className="font-medium text-gray-300">Progression: </span>{plan.progressionNote}</p>
        </div>
      </div>

      <div className="mt-3 space-y-3">
        {plan.days.map((day, i) => (
          <WorkoutDay key={i} day={day} defaultOpen={i === 0} resolveName={resolveName} />
        ))}
      </div>
    </div>
  )
}
