import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  HeartPulse,
  Dumbbell,
  Cpu,
  CalendarDays,
  BookOpen,
  Calculator,
  Moon,
  ShieldCheck,
  Trash2,
} from 'lucide-react'
import { useProfile } from '../hooks/useProfile.js'
import { StatBox } from '../components/StatBox.jsx'
import { ProfileForm } from '../components/ProfileForm.jsx'
import { calculateBMR, calculateTDEE, calculateProtein } from '../calculators/body.js'
import { calculateTargets } from '../calculators/deficit.js'
import { calculateZones } from '../calculators/hrZones.js'

const sections = [
  { to: '/zones', label: 'HR Zones', desc: 'Find your training zones', icon: HeartPulse },
  { to: '/exercises', label: 'Exercises', desc: '50+ with form cues', icon: Dumbbell },
  { to: '/smart-machines', label: 'Smart Machines', desc: 'Guided circuit guide', icon: Cpu },
  { to: '/workouts', label: 'Workouts', desc: 'Plans by goal & days', icon: CalendarDays },
  { to: '/knowledge', label: 'Knowledge', desc: '12 science articles', icon: BookOpen },
  { to: '/macros', label: 'Macros', desc: 'Calories & protein', icon: Calculator },
  { to: '/recovery', label: 'Recovery', desc: 'What actually works', icon: Moon },
]

export function Home() {
  const { profile, saveProfile, clearProfile } = useProfile()
  const [editing, setEditing] = useState(false)

  if (!profile.configured || editing) {
    return (
      <div>
        <Hero />
        <ProfileForm
          profile={profile}
          onSave={(data) => {
            saveProfile(data)
            setEditing(false)
          }}
        />
      </div>
    )
  }

  const bmr = calculateBMR(profile.weightKg, profile.heightCm, profile.age, profile.sex)
  const tdee = calculateTDEE(bmr, profile.activityLevel)
  const protein = calculateProtein(profile.weightKg)
  const targets = calculateTargets(profile.goal, tdee, profile.weightKg)
  const zone2 = calculateZones(profile.age).find((z) => z.zone === 2)

  return (
    <div>
      <Hero />

      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
        <StatBox label="BMR" value={bmr} unit="kcal" sub="At rest" />
        <StatBox label="TDEE" value={tdee} unit="kcal" sub="Maintenance" />
        <StatBox
          label="Daily Target"
          value={targets.calories}
          unit="kcal"
          sub={profile.goal.replace('_', ' ')}
          accent
        />
        <StatBox label="Protein" value={`${protein.minG}–${protein.maxG}`} unit="g" sub="Per day" />
        <StatBox label="Zone 2" value={`${zone2.minBPM}–${zone2.maxBPM}`} unit="bpm" sub="Fat-burn pace" />
        <StatBox label="Goal" value={cap(profile.goal.replace('_', ' '))} sub="Editable below" />
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        <button
          onClick={() => setEditing(true)}
          className="rounded-lg border border-gray-700 bg-gray-900 px-4 py-2 text-sm text-gray-200 transition-colors hover:bg-gray-800"
        >
          Edit my details
        </button>
        <button
          onClick={() => {
            if (window.confirm('Erase all GymIQ data from this device?')) clearProfile()
          }}
          className="flex items-center gap-2 rounded-lg border border-red-900/60 bg-red-950/40 px-4 py-2 text-sm text-red-300 transition-colors hover:bg-red-950/70"
        >
          <Trash2 className="h-4 w-4" />
          Clear my data
        </button>
      </div>

      <h2 className="mb-3 text-lg font-semibold">Explore</h2>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {sections.map((s) => (
          <Link
            key={s.to}
            to={s.to}
            className="flex items-center gap-3 rounded-xl border border-gray-800 bg-gray-900 p-4 transition-colors hover:border-teal-500/40 hover:bg-gray-800"
          >
            <s.icon className="h-6 w-6 text-teal-400" />
            <div>
              <div className="font-medium text-gray-100">{s.label}</div>
              <div className="text-sm text-gray-400">{s.desc}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Gym<span className="text-teal-400">IQ</span>
      </h1>
      <p className="mt-2 max-w-2xl text-gray-400">
        Science-based fitness calculators, workout plans, and training knowledge.
        No fluff, no fads — just what the research actually supports.
      </p>
      <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900 px-3 py-1.5 text-xs text-gray-400">
        <ShieldCheck className="h-4 w-4 text-teal-400" />
        All data stays on your device. No account. No tracking. No cloud.
      </div>
    </div>
  )
}

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1)
