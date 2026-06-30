import { useState, useMemo } from 'react'
import { Search } from 'lucide-react'
import { exercises, getExerciseById } from '../data/exercises.js'
import { muscleGroups } from '../data/muscles.js'
import { ExerciseCard } from '../components/ExerciseCard.jsx'
import { FilterPills } from '../components/FilterPills.jsx'

const ALL = '__all__'

const equipmentOpts = [
  { value: ALL, label: 'All equipment' },
  { value: 'barbell', label: 'Barbell' },
  { value: 'dumbbell', label: 'Dumbbell' },
  { value: 'cable', label: 'Cable' },
  { value: 'machine', label: 'Machine' },
  { value: 'bodyweight', label: 'Bodyweight' },
  { value: 'cardio-machine', label: 'Cardio' },
]

const patternOpts = [
  { value: ALL, label: 'All patterns' },
  { value: 'push', label: 'Push' },
  { value: 'pull', label: 'Pull' },
  { value: 'hinge', label: 'Hinge' },
  { value: 'squat', label: 'Squat' },
  { value: 'core', label: 'Core' },
  { value: 'cardio', label: 'Cardio' },
]

const difficultyOpts = [
  { value: ALL, label: 'All levels' },
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
]

const muscleOpts = [
  { value: ALL, label: 'All muscles' },
  ...muscleGroups.map((m) => ({ value: m.id, label: m.name })),
]

export function Exercises() {
  const [equipment, setEquipment] = useState(ALL)
  const [pattern, setPattern] = useState(ALL)
  const [difficulty, setDifficulty] = useState(ALL)
  const [muscle, setMuscle] = useState(ALL)
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return exercises.filter((ex) => {
      if (equipment !== ALL && ex.equipment !== equipment) return false
      if (pattern !== ALL && ex.movementPattern !== pattern) return false
      if (difficulty !== ALL && ex.difficulty !== difficulty) return false
      if (muscle !== ALL && !ex.muscles.primary.includes(muscle) && !ex.muscles.secondary.includes(muscle)) return false
      if (q && !ex.name.toLowerCase().includes(q)) return false
      return true
    })
  }, [equipment, pattern, difficulty, muscle, query])

  return (
    <div>
      <h1 className="text-2xl font-bold">Exercise Library</h1>
      <p className="mt-1 text-gray-400">
        {exercises.length} exercises with form cues, common mistakes, and alternatives.
        Tap any card to expand.
      </p>

      <div className="mt-5 space-y-3">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search exercises…"
            className="w-full rounded-lg border border-gray-700 bg-gray-900 py-2 pl-9 pr-3 text-gray-100 outline-none focus:border-teal-500"
          />
        </div>
        <FilterPills label="Equipment" options={equipmentOpts} value={equipment} onChange={setEquipment} />
        <FilterPills label="Movement" options={patternOpts} value={pattern} onChange={setPattern} />
        <FilterPills label="Muscle group" options={muscleOpts} value={muscle} onChange={setMuscle} />
        <FilterPills label="Difficulty" options={difficultyOpts} value={difficulty} onChange={setDifficulty} />
      </div>

      <p className="mt-4 text-sm text-gray-500">{filtered.length} shown</p>

      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
        {filtered.map((ex) => (
          <ExerciseCard
            key={ex.id}
            exercise={ex}
            machineAltName={getExerciseById(ex.machineAlternative)?.name}
            bodyweightAltName={getExerciseById(ex.bodyweightAlternative)?.name}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 text-center text-gray-500">No exercises match those filters.</p>
      )}
    </div>
  )
}
