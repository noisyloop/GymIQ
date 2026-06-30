import { useState } from 'react'
import { UnitToggle } from './UnitToggle.jsx'
import { FilterPills } from './FilterPills.jsx'
import {
  kgToLbs,
  lbsToKg,
  cmToFtIn,
  ftInToCm,
  activityLabels,
} from '../calculators/body.js'

const goals = [
  { value: 'fat_loss', label: 'Fat Loss' },
  { value: 'muscle_gain', label: 'Muscle Gain' },
  { value: 'recomp', label: 'Recomp' },
  { value: 'maintain', label: 'Maintain' },
]

const activities = Object.keys(activityLabels).map((k) => ({
  value: k,
  label: activityLabels[k],
}))

// First-run / edit profile form. Handles metric<->imperial display conversion
// but always stores canonical metric (kg/cm) plus the unit preference.
export function ProfileForm({ profile, onSave }) {
  const [units, setUnits] = useState(profile.units || 'metric')
  const [weight, setWeight] = useState(
    profile.weightKg
      ? units === 'imperial'
        ? kgToLbs(profile.weightKg)
        : profile.weightKg
      : '',
  )
  const [heightCm, setHeightCm] = useState(profile.heightCm || '')
  const [ft, setFt] = useState(profile.heightCm ? cmToFtIn(profile.heightCm).feet : '')
  const [inch, setInch] = useState(profile.heightCm ? cmToFtIn(profile.heightCm).inches : '')
  const [age, setAge] = useState(profile.age || '')
  const [sex, setSex] = useState(profile.sex || '')
  const [goal, setGoal] = useState(profile.goal || 'fat_loss')
  const [activity, setActivity] = useState(profile.activityLevel || 'moderate')

  const switchUnits = (next) => {
    if (next === units) return
    if (weight !== '') {
      setWeight(next === 'imperial' ? kgToLbs(Number(weight)) : lbsToKg(Number(weight)))
    }
    setUnits(next)
  }

  const submit = (e) => {
    e.preventDefault()
    const weightKg =
      units === 'imperial' ? lbsToKg(Number(weight)) : Number(weight)
    const cm =
      units === 'imperial' ? ftInToCm(Number(ft || 0), Number(inch || 0)) : Number(heightCm)
    onSave({
      weightKg,
      heightCm: cm,
      age: Number(age),
      sex,
      goal,
      activityLevel: activity,
      units,
    })
  }

  const inputCls =
    'w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-gray-100 outline-none focus:border-teal-500'

  return (
    <form onSubmit={submit} className="space-y-5 rounded-2xl border border-gray-800 bg-gray-900/50 p-5">
      <div>
        <h2 className="text-lg font-semibold">Set up your profile</h2>
        <p className="text-sm text-gray-400">
          Used only to compute your stats. Stored on this device, nowhere else.
        </p>
      </div>

      <UnitToggle value={units} onChange={switchUnits} />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label={`Weight (${units === 'imperial' ? 'lb' : 'kg'})`}>
          <input type="number" step="0.1" required value={weight} onChange={(e) => setWeight(e.target.value)} className={inputCls} />
        </Field>

        {units === 'imperial' ? (
          <Field label="Height (ft / in)">
            <div className="flex gap-2">
              <input type="number" required placeholder="ft" value={ft} onChange={(e) => setFt(e.target.value)} className={inputCls} />
              <input type="number" placeholder="in" value={inch} onChange={(e) => setInch(e.target.value)} className={inputCls} />
            </div>
          </Field>
        ) : (
          <Field label="Height (cm)">
            <input type="number" required value={heightCm} onChange={(e) => setHeightCm(e.target.value)} className={inputCls} />
          </Field>
        )}

        <Field label="Age">
          <input type="number" required value={age} onChange={(e) => setAge(e.target.value)} className={inputCls} />
        </Field>

        <Field label="Sex (optional, improves accuracy)">
          <select value={sex} onChange={(e) => setSex(e.target.value)} className={inputCls}>
            <option value="">Prefer not to say</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </Field>
      </div>

      <Field label="Goal">
        <FilterPills options={goals} value={goal} onChange={setGoal} />
      </Field>

      <Field label="Activity level">
        <FilterPills options={activities} value={activity} onChange={setActivity} />
      </Field>

      <button type="submit" className="w-full rounded-lg bg-teal-500 px-4 py-2.5 font-medium text-gray-950 transition-colors hover:bg-teal-400">
        Save & see my stats
      </button>
    </form>
  )
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-gray-300">{label}</span>
      {children}
    </label>
  )
}
