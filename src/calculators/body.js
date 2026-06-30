// Body metric calculations: BMR, TDEE, protein, unit conversion.
// Pure functions, no React. Mifflin-St Jeor is the basis for BMR.

export const activityMultipliers = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
}

export const activityLabels = {
  sedentary: 'Sedentary (little or no exercise)',
  light: 'Light (1–3 days/week)',
  moderate: 'Moderate (3–5 days/week)',
  active: 'Active (6–7 days/week)',
  very_active: 'Very active (physical job or 2x/day)',
}

// Mifflin-St Jeor BMR.
// male:   10*kg + 6.25*cm - 5*age + 5
// female: 10*kg + 6.25*cm - 5*age - 161
// If sex omitted, average the male/female constant (+5 and -161) -> -78
// to stay anonymous while remaining accurate.
export const calculateBMR = (weightKg, heightCm, age, sex) => {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age
  let constant
  if (sex === 'male') constant = 5
  else if (sex === 'female') constant = -161
  else constant = -78 // average of +5 and -161
  return Math.round(base + constant)
}

export const calculateTDEE = (bmr, activityLevel) => {
  const multiplier = activityMultipliers[activityLevel] || activityMultipliers.moderate
  return Math.round(bmr * multiplier)
}

// Protein target band based on 1.6–2.2 g/kg bodyweight.
export const calculateProtein = (weightKg) => ({
  minG: Math.round(weightKg * 1.6),
  maxG: Math.round(weightKg * 2.2),
})

// --- Unit conversion helpers ---

export const kgToLbs = (kg) => Math.round(kg * 2.20462 * 10) / 10
export const lbsToKg = (lbs) => Math.round((lbs / 2.20462) * 10) / 10

// Returns { feet, inches }
export const cmToFtIn = (cm) => {
  const totalInches = cm / 2.54
  const feet = Math.floor(totalInches / 12)
  const inches = Math.round(totalInches - feet * 12)
  if (inches === 12) return { feet: feet + 1, inches: 0 }
  return { feet, inches }
}

export const ftInToCm = (feet, inches) =>
  Math.round((feet * 12 + inches) * 2.54)
