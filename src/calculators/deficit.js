// Goal-based calorie targets. Pure functions, no React.
// Depends on protein logic in body.js for consistency.

import { calculateProtein } from './body.js'

// 7700 kcal ≈ 1 kg of body fat; 3500 kcal ≈ 1 lb.
const KCAL_PER_KG_FAT = 7700

// calculateTargets(goal, tdee, weightKg)
// Returns { calories, proteinG, deficitKcal, surplusKcal, weeklyWeightChange, notes }
export const calculateTargets = (goal, tdee, weightKg) => {
  const protein = calculateProtein(weightKg)
  const base = {
    proteinG: protein,
    deficitKcal: 0,
    surplusKcal: 0,
  }

  switch (goal) {
    case 'fat_loss': {
      const deficit = 450 // midpoint of 400–500
      const calories = Math.round(tdee - deficit)
      return {
        ...base,
        calories,
        deficitKcal: deficit,
        weeklyWeightChange: -round1((deficit * 7) / KCAL_PER_KG_FAT),
        notes:
          'A moderate 400–500 kcal/day deficit. Aggressive enough to lose fat steadily, gentle enough to preserve muscle and training quality. Keep protein high and keep lifting.',
      }
    }
    case 'muscle_gain': {
      const surplus = 250 // midpoint of 200–300
      const calories = Math.round(tdee + surplus)
      return {
        ...base,
        calories,
        surplusKcal: surplus,
        weeklyWeightChange: round1((surplus * 7) / KCAL_PER_KG_FAT),
        notes:
          'A lean 200–300 kcal/day surplus. Enough to build muscle without excessive fat gain. A slow scale climb (~0.2–0.25 kg/week) is the sweet spot for trained lifters.',
      }
    }
    case 'recomp': {
      const calories = Math.round(tdee)
      return {
        ...base,
        calories,
        weeklyWeightChange: 0,
        notes:
          'Eat at roughly maintenance (±50 kcal) with very high protein. Body recomposition — losing fat and gaining muscle at the same time — works best for beginners, returners, and lifters carrying extra fat. Progress shows in the mirror and the tape, not the scale.',
      }
    }
    case 'maintain':
    default: {
      const calories = Math.round(tdee)
      return {
        ...base,
        calories,
        weeklyWeightChange: 0,
        notes:
          'Eat at maintenance to hold your current weight while you train, build skill, and improve performance.',
      }
    }
  }
}

const round1 = (n) => Math.round(n * 10) / 10

// Split a calorie target into protein / fat / carb grams.
// Protein anchored at 2.0 g/kg, fat at ~25% of calories, carbs fill the rest.
// Protein: 4 kcal/g, carbs: 4 kcal/g, fat: 9 kcal/g.
export const calculateMacros = (calories, weightKg) => {
  const proteinG = Math.round(weightKg * 2.0)
  const fatG = Math.round((calories * 0.25) / 9)
  const remaining = calories - proteinG * 4 - fatG * 9
  const carbsG = Math.max(0, Math.round(remaining / 4))
  return { proteinG, fatG, carbsG }
}
