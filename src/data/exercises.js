import { cardioExercises } from './exercises/cardio.js'
import { freeWeightExercises } from './exercises/freeWeights.js'
import { machineExercises } from './exercises/machines.js'
import { bodyweightExercises } from './exercises/bodyweight.js'

export const exercises = [
  ...cardioExercises,
  ...freeWeightExercises,
  ...machineExercises,
  ...bodyweightExercises,
]

export const getExerciseById = (id) => exercises.find((e) => e.id === id) || null
