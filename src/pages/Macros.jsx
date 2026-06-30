import { Link } from 'react-router-dom'
import { Bike } from 'lucide-react'
import { useProfile } from '../hooks/useProfile.js'
import { StatBox } from '../components/StatBox.jsx'
import { MacroRing } from '../components/MacroRing.jsx'
import {
  calculateBMR,
  calculateTDEE,
  calculateProtein,
  activityMultipliers,
  activityLabels,
} from '../calculators/body.js'
import { calculateTargets, calculateMacros } from '../calculators/deficit.js'

const proteinFoods = [
  { food: 'Chicken breast (150g)', protein: '46 g' },
  { food: 'Greek yogurt (200g)', protein: '20 g' },
  { food: '3 whole eggs', protein: '18 g' },
  { food: 'Tin of tuna (100g)', protein: '25 g' },
  { food: 'Whey scoop (30g)', protein: '24 g' },
  { food: 'Lean beef mince (150g)', protein: '38 g' },
  { food: 'Tofu (200g)', protein: '24 g' },
  { food: 'Cottage cheese (200g)', protein: '22 g' },
]

export function Macros() {
  const { profile } = useProfile()

  if (!profile.configured) {
    return (
      <Empty />
    )
  }

  const bmr = calculateBMR(profile.weightKg, profile.heightCm, profile.age, profile.sex)
  const multiplier = activityMultipliers[profile.activityLevel]
  const tdee = calculateTDEE(bmr, profile.activityLevel)
  const targets = calculateTargets(profile.goal, tdee, profile.weightKg)
  const protein = calculateProtein(profile.weightKg)
  const macros = calculateMacros(targets.calories, profile.weightKg)
  const perMeal = Math.round(macros.proteinG / 4)

  return (
    <div>
      <h1 className="text-2xl font-bold">Calories & Macros</h1>
      <p className="mt-1 text-gray-400">Built from your profile, computed entirely on-device.</p>

      <h2 className="mt-6 text-lg font-semibold">How your target is built</h2>
      <div className="mt-3 space-y-2 rounded-xl border border-gray-800 bg-gray-900 p-4 text-sm">
        <Step n="1" label="BMR (Mifflin-St Jeor)" value={`${bmr} kcal`} />
        <Step n="2" label={`× Activity (${activityLabels[profile.activityLevel]?.split(' (')[0]}, ${multiplier})`} value={`${tdee} kcal — your TDEE`} />
        <Step n="3" label={targets.deficitKcal ? `− ${targets.deficitKcal} kcal deficit` : targets.surplusKcal ? `+ ${targets.surplusKcal} kcal surplus` : 'Maintenance'} value={`${targets.calories} kcal — daily target`} accent />
      </div>
      <p className="mt-2 text-sm text-gray-400">{targets.notes}</p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatBox label="Daily calories" value={targets.calories} unit="kcal" accent />
        <StatBox label="Protein" value={`${protein.minG}–${protein.maxG}`} unit="g" sub="1.6–2.2 g/kg" />
        <StatBox label="Per meal (×4)" value={perMeal} unit="g" sub="Protein" />
        <StatBox
          label="Weekly change"
          value={targets.weeklyWeightChange === 0 ? '~0' : targets.weeklyWeightChange}
          unit="kg"
        />
      </div>

      <h2 className="mt-8 text-lg font-semibold">Macro split</h2>
      <div className="mt-3 rounded-xl border border-gray-800 bg-gray-900 p-5">
        <MacroRing proteinG={macros.proteinG} carbsG={macros.carbsG} fatG={macros.fatG} />
      </div>

      <h2 className="mt-8 text-lg font-semibold">Easy protein sources</h2>
      <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {proteinFoods.map((f) => (
          <div key={f.food} className="flex justify-between rounded-lg border border-gray-800 bg-gray-900 px-3 py-2 text-sm">
            <span className="text-gray-300">{f.food}</span>
            <span className="font-mono text-teal-300">{f.protein}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-start gap-3 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
        <Bike className="h-6 w-6 shrink-0 text-yellow-400" />
        <p className="text-sm text-gray-200">
          10,000 steps on a stationary bike = approximately 0 steps. Heart rate is
          the honest metric for cardio intensity, not step count.
        </p>
      </div>
    </div>
  )
}

function Step({ n, label, value, accent }) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-800 text-xs text-gray-400">{n}</span>
      <span className="flex-1 text-gray-300">{label}</span>
      <span className={`font-mono ${accent ? 'text-teal-300' : 'text-gray-200'}`}>{value}</span>
    </div>
  )
}

function Empty() {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-900 p-6 text-center">
      <p className="text-gray-400">Set up your profile first to see personalized macros.</p>
      <Link to="/" className="mt-3 inline-block rounded-lg bg-teal-500 px-4 py-2 text-sm font-medium text-gray-950 hover:bg-teal-400">
        Go to setup
      </Link>
    </div>
  )
}
