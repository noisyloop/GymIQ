// General Fitness plans — balanced strength, a little conditioning, and
// movement quality for people who want to be fit, healthy, and capable.

export const generalFitnessPlans = [
  {
    id: 'general-fitness-3day',
    name: 'General Fitness — 3 Day Full Body',
    goal: 'general_fitness',
    daysPerWeek: 3,
    level: 'beginner',
    split: 'Full Body',
    rationale:
      'For overall fitness, three balanced full-body sessions cover all major movement patterns — squat, hinge, push, pull, carry/core — which builds well-rounded strength and joint health efficiently. A short cardio piece keeps the heart and lungs sharp without dominating the week.',
    restDays:
      'Train Mon/Wed/Fri with rest or light activity in between. Daily walks on off days support general health.',
    progressionNote:
      'Add a rep or a small amount of weight whenever a set feels easy at the prescribed RPE. There is no rush — consistency and gradual progress beat aggressive jumps for long-term fitness.',
    days: [
      {
        label: 'Day A',
        focus: 'Full body',
        duration: '45-55 min',
        exercises: [
          { exerciseId: 'goblet-squat', sets: 3, reps: '10-12', rest: 90, rpe: '7', note: 'Upright torso.' },
          { exerciseId: 'chest-press-machine', sets: 3, reps: '10-12', rest: 75, rpe: '7', note: 'Full stretch.' },
          { exerciseId: 'seated-cable-row', sets: 3, reps: '10-12', rest: 75, rpe: '7', note: 'Squeeze.' },
          { exerciseId: 'plank', sets: 3, reps: '30-45 sec', rest: 45, note: 'Brace.' },
          { exerciseId: 'treadmill', sets: 1, reps: '15-20 min', rest: 0, note: 'Zone 2, brisk walk, conversational.' },
        ],
      },
      {
        label: 'Day B',
        focus: 'Full body',
        duration: '45-55 min',
        exercises: [
          { exerciseId: 'romanian-deadlift', sets: 3, reps: '10-12', rest: 90, rpe: '7', note: 'Hinge.' },
          { exerciseId: 'shoulder-press-machine', sets: 3, reps: '10-12', rest: 75, rpe: '7', note: 'No shrug.' },
          { exerciseId: 'lat-pulldown', sets: 3, reps: '10-12', rest: 75, rpe: '7', note: 'Stretch.' },
          { exerciseId: 'walking-lunges', sets: 3, reps: '10 each leg', rest: 60, rpe: '7', note: 'Controlled steps.' },
          { exerciseId: 'side-plank', sets: 2, reps: '20-30 sec each', rest: 45, note: 'Hips high.' },
        ],
      },
      {
        label: 'Day C',
        focus: 'Full body',
        duration: '45-55 min',
        exercises: [
          { exerciseId: 'leg-press', sets: 3, reps: '12-15', rest: 90, rpe: '7', note: 'Full range.' },
          { exerciseId: 'pushup', sets: 3, reps: '8-15', rest: 60, rpe: '7-8', note: 'Straight line.' },
          { exerciseId: 'dumbbell-row', sets: 3, reps: '10-12', rest: 60, rpe: '7', note: 'Flat back.' },
          { exerciseId: 'lateral-raises', sets: 3, reps: '12-15', rest: 45, rpe: '7-8', note: 'Lead elbows.' },
          { exerciseId: 'stationary-bike', sets: 1, reps: '15-20 min', rest: 0, note: 'Zone 2, steady, can talk.' },
        ],
      },
    ],
  },
  {
    id: 'general-fitness-4day',
    name: 'General Fitness — 4 Day Upper/Lower',
    goal: 'general_fitness',
    daysPerWeek: 4,
    level: 'intermediate',
    split: 'Upper/Lower',
    rationale:
      'An upper/lower split twice a week gives a great mix of strength, muscle, and conditioning for the generally fit person. Training each region twice weekly improves strength steadily while leaving room for cardio and recovery across the week.',
    restDays:
      'Train Mon/Tue, rest Wed, train Thu/Fri, weekend off. Stay active on rest days with walks or recreation.',
    progressionNote:
      'Use double progression on the main lifts and add reps on accessories. Keep one or two reps in reserve — for general fitness, sustainable effort matters more than grinding maximal sets.',
    days: [
      {
        label: 'Upper',
        focus: 'Upper body strength',
        duration: '50-60 min',
        exercises: [
          { exerciseId: 'bench-press', sets: 4, reps: '8-10', rest: 120, rpe: '7-8', note: 'Controlled.' },
          { exerciseId: 'barbell-row', sets: 4, reps: '8-10', rest: 120, rpe: '7-8', note: 'Strict.' },
          { exerciseId: 'overhead-press', sets: 3, reps: '10-12', rest: 90, rpe: '7-8', note: 'Glutes tight.' },
          { exerciseId: 'lat-pulldown', sets: 3, reps: '10-12', rest: 75, rpe: '7-8', note: 'Stretch.' },
          { exerciseId: 'dumbbell-curl', sets: 2, reps: '12-15', rest: 45, rpe: '8', note: 'Full ROM.' },
        ],
      },
      {
        label: 'Lower',
        focus: 'Lower body strength',
        duration: '50-60 min',
        exercises: [
          { exerciseId: 'barbell-squat', sets: 4, reps: '8-10', rest: 150, rpe: '7-8', note: 'Depth, brace.' },
          { exerciseId: 'romanian-deadlift', sets: 3, reps: '10-12', rest: 120, rpe: '7', note: 'Hinge.' },
          { exerciseId: 'leg-press', sets: 3, reps: '12-15', rest: 90, rpe: '7-8', note: 'Full range.' },
          { exerciseId: 'calf-press-machine', sets: 3, reps: '12-15', rest: 45, rpe: '8', note: 'Pause.' },
          { exerciseId: 'plank', sets: 3, reps: '45-60 sec', rest: 45, note: 'Brace.' },
        ],
      },
      {
        label: 'Upper + Conditioning',
        focus: 'Upper body + cardio',
        duration: '50-60 min',
        exercises: [
          { exerciseId: 'chest-press-machine', sets: 3, reps: '10-12', rest: 90, rpe: '7-8', note: 'Stretch.' },
          { exerciseId: 'seated-cable-row', sets: 3, reps: '10-12', rest: 90, rpe: '7-8', note: 'Squeeze.' },
          { exerciseId: 'lateral-raises', sets: 3, reps: '12-15', rest: 45, rpe: '8', note: 'Lead elbows.' },
          { exerciseId: 'tricep-pushdown', sets: 2, reps: '12-15', rest: 45, rpe: '8', note: 'Pinned.' },
          { exerciseId: 'rowing-machine', sets: 1, reps: '15-20 min', rest: 0, note: 'Zone 2, smooth conversational pace.' },
        ],
      },
      {
        label: 'Lower + Conditioning',
        focus: 'Lower body + cardio',
        duration: '50-60 min',
        exercises: [
          { exerciseId: 'barbell-hip-thrust', sets: 3, reps: '10-12', rest: 90, rpe: '7-8', note: 'Lockout.' },
          { exerciseId: 'walking-lunges', sets: 3, reps: '10 each leg', rest: 75, rpe: '7-8', note: 'Controlled.' },
          { exerciseId: 'lying-leg-curl', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Squeeze.' },
          { exerciseId: 'step-up', sets: 3, reps: '10 each leg', rest: 60, rpe: '7-8', note: 'Full drive.' },
          { exerciseId: 'treadmill', sets: 1, reps: '15-20 min', rest: 0, note: 'Zone 2 incline walk, conversational.' },
        ],
      },
    ],
  },
];
