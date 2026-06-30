export const cardioExercises = [
  {
    id: 'treadmill',
    name: 'Treadmill',
    equipment: 'cardio-machine',
    category: 'cardio',
    movementPattern: 'cardio',
    muscles: {
      primary: ['quads', 'hamstrings', 'glutes', 'calves'],
      secondary: ['core', 'hip-flexors'],
    },
    difficulty: 'beginner',
    cues: [
      'Run or walk tall with a slight forward lean from the ankles, not the waist.',
      'Land midfoot under your hips, not way out in front of you.',
      'Let go of the handrails so the calorie readout and your effort stay honest.',
      'Set a 1 to 2 percent incline to mimic outdoor wind resistance.',
    ],
    commonMistakes: [
      'Gripping the handrails, which slashes effort and inflates the calorie display.',
      'Overstriding and heel-striking hard, raising impact on knees and shins.',
    ],
    machineAlternative: null,
    bodyweightAlternative: 'burpee',
    scienceNote:
      'Joint impact is medium-to-high because both feet leave the ground when running; walking is low impact. Calorie estimates run roughly 15 to 20 percent high since machines assume average mechanics. It is excellent for Zone 2 if you cap pace so you can still talk, and it genuinely loads quads, hamstrings, glutes and calves.',
  },
  {
    id: 'stationary-bike',
    name: 'Stationary Bike',
    equipment: 'cardio-machine',
    category: 'cardio',
    movementPattern: 'cardio',
    muscles: {
      primary: ['quads', 'glutes', 'hamstrings'],
      secondary: ['calves', 'core'],
    },
    difficulty: 'beginner',
    cues: [
      'Set saddle height so your knee keeps a slight bend at the bottom of the stroke.',
      'Pedal in smooth circles, pulling through the bottom rather than just mashing down.',
      'Keep your upper body relaxed and core lightly braced, no rocking hips.',
      'Drive resistance and cadence, not the on-screen step count.',
    ],
    commonMistakes: [
      'Saddle set too low, overloading the knees and shutting off the glutes.',
      'Watching meaningless metrics like "steps" instead of heart rate or watts.',
    ],
    machineAlternative: null,
    bodyweightAlternative: 'bodyweight-squat',
    scienceNote:
      'Joint impact is low because the motion is non-weight-bearing, making it ideal for Zone 2 base building and rehab. "Steps" on a bike are physiologically meaningless: heart rate, watts, and RPE are the real intensity metrics. It is quad and glute dominant and calorie figures are usually 10 to 15 percent optimistic.',
  },
  {
    id: 'rowing-machine',
    name: 'Rowing Machine',
    equipment: 'cardio-machine',
    category: 'cardio',
    movementPattern: 'cardio',
    muscles: {
      primary: ['back', 'lats', 'quads', 'glutes'],
      secondary: ['hamstrings', 'biceps', 'core', 'shoulders'],
    },
    difficulty: 'intermediate',
    cues: [
      'Sequence the stroke legs, then back, then arms; reverse it on the recovery.',
      'Push through the legs first; the drive is roughly 60 percent legs.',
      'Keep the chain horizontal and finish with the handle at the lower ribs.',
      'Aim for a controlled recovery about twice as long as the drive.',
    ],
    commonMistakes: [
      'Yanking with the arms early and bending the back before the legs finish.',
      'Hunching the spine at the catch, which strains the lower back.',
    ],
    machineAlternative: 'seated-cable-row',
    bodyweightAlternative: 'inverted-row',
    scienceNote:
      'Joint impact is low since it is seated and fluid, yet it is one of the few near full-body cardio machines, training legs, back, and arms together. That makes it strong for Zone 2 and intervals alike; heart rate, not the stroke-count display, defines intensity, and calorie readouts trend 10 to 20 percent high.',
  },
  {
    id: 'elliptical',
    name: 'Elliptical',
    equipment: 'cardio-machine',
    category: 'cardio',
    movementPattern: 'cardio',
    muscles: {
      primary: ['quads', 'glutes', 'hamstrings'],
      secondary: ['calves', 'chest', 'back', 'core'],
    },
    difficulty: 'beginner',
    cues: [
      'Stand tall and let your feet stay flat through the full elliptical path.',
      'Push and pull the moving handles to recruit the upper body.',
      'Keep weight in the heels to bias glutes over calves.',
      'Add resistance rather than flailing faster for real intensity.',
    ],
    commonMistakes: [
      'Leaning heavily on the handles, which makes effort and calories overstated.',
      'Letting momentum spin the pedals instead of actively driving them.',
    ],
    machineAlternative: null,
    bodyweightAlternative: 'step-up',
    scienceNote:
      'Joint impact is low because the feet never leave the pedals, sparing knees and hips, which suits Zone 2 work. The fixed path means muscle activation is modest despite feeling busy, and the calorie counter is among the least accurate, often 25 to 30 percent high. Heart rate is the trustworthy gauge.',
  },
  {
    id: 'stairmaster',
    name: 'Stairmaster / Stepmill',
    equipment: 'cardio-machine',
    category: 'cardio',
    movementPattern: 'cardio',
    muscles: {
      primary: ['glutes', 'quads', 'calves'],
      secondary: ['hamstrings', 'core'],
    },
    difficulty: 'intermediate',
    cues: [
      'Stand upright and step through full steps, planting the whole foot.',
      'Drive up through the heel of the working leg to load the glutes.',
      'Keep hands off the rails or rest them lightly for balance only.',
      'Pick a sustainable pace you can hold without hanging on.',
    ],
    commonMistakes: [
      'Leaning into the rails and taking tiny steps, deflating real effort.',
      'Up-on-the-toes stepping that shifts work off glutes onto the calves.',
    ],
    machineAlternative: null,
    bodyweightAlternative: 'step-up',
    scienceNote:
      'Joint impact is low-to-medium since climbing avoids the hard landing of running while still being weight-bearing. It is highly glute and quad dominant and works well for Zone 2 if you stay off the rails. Calorie estimates are fairly close but assume no rail support; heart rate remains the honest metric.',
  },
]
