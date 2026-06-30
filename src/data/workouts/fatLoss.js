// Fat Loss training plans. Strength preserves lean mass in a deficit while
// Zone 2 cardio adds aerobic volume and total energy expenditure.

export const fatLossPlans = [
  {
    id: 'fat-loss-3day',
    name: 'Fat Loss — 3 Day Full Body',
    goal: 'fat_loss',
    daysPerWeek: 3,
    level: 'beginner',
    split: 'Full Body',
    rationale:
      'In a calorie deficit, full-body strength training 3x/week is the best stimulus for retaining lean mass with limited sessions. Compound lifts recruit the most muscle per minute, and added Zone 2 cardio raises total energy expenditure without compromising recovery.',
    restDays:
      'Rest or walk on the two days between sessions (e.g. train Mon/Wed/Fri, rest the rest). Keep at least one full day off.',
    progressionNote:
      'Add 2.5–5 kg to a lift once you hit the top of the rep range with good form on all sets. Otherwise repeat the weight and add reps. Cardio progresses by adding 5 minutes per week up to ~40 min.',
    days: [
      {
        label: 'Day A — Full Body',
        focus: 'Full body strength',
        duration: '50-60 min',
        exercises: [
          { exerciseId: 'goblet-squat', sets: 3, reps: '10-12', rest: 90, rpe: '7-8', note: 'Sit between the hips, heels down.' },
          { exerciseId: 'chest-press-machine', sets: 3, reps: '10-12', rest: 90, rpe: '7-8', note: 'Controlled press, full stretch.' },
          { exerciseId: 'seated-cable-row', sets: 3, reps: '10-12', rest: 90, rpe: '7-8', note: 'Squeeze shoulder blades.' },
          { exerciseId: 'lat-pulldown', sets: 3, reps: '10-12', rest: 75, rpe: '7-8', note: 'Drive elbows down.' },
          { exerciseId: 'plank', sets: 3, reps: '30-45 sec', rest: 45, note: 'Brace, no sagging.' },
          { exerciseId: 'treadmill', sets: 1, reps: '20-30 min', rest: 0, note: 'Zone 2, conversational pace, incline walk.' },
        ],
      },
      {
        label: 'Day B — Full Body',
        focus: 'Full body strength',
        duration: '50-60 min',
        exercises: [
          { exerciseId: 'leg-press', sets: 3, reps: '12-15', rest: 90, rpe: '7-8', note: 'Knees track over toes.' },
          { exerciseId: 'romanian-deadlift', sets: 3, reps: '10-12', rest: 90, rpe: '7', note: 'Hinge at hips, slight knee bend.' },
          { exerciseId: 'shoulder-press-machine', sets: 3, reps: '10-12', rest: 75, rpe: '7-8', note: 'Press without shrugging.' },
          { exerciseId: 'dumbbell-row', sets: 3, reps: '10-12', rest: 75, rpe: '7-8', note: 'One arm, flat back.' },
          { exerciseId: 'ab-crunch-machine', sets: 3, reps: '12-15', rest: 45, note: 'Slow eccentric.' },
          { exerciseId: 'stationary-bike', sets: 1, reps: '20-30 min', rest: 0, note: 'Zone 2, steady cadence you can talk through.' },
        ],
      },
      {
        label: 'Day C — Full Body',
        focus: 'Full body strength',
        duration: '50-60 min',
        exercises: [
          { exerciseId: 'barbell-hip-thrust', sets: 3, reps: '10-12', rest: 90, rpe: '7-8', note: 'Full lockout, ribs down.' },
          { exerciseId: 'incline-pushup', sets: 3, reps: '10-15', rest: 75, rpe: '7-8', note: 'Body in a straight line.' },
          { exerciseId: 'assisted-pullup-machine', sets: 3, reps: '8-10', rest: 90, rpe: '7-8', note: 'Use minimal assist.' },
          { exerciseId: 'lateral-raises', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Lead with elbows.' },
          { exerciseId: 'lying-leg-curl', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Squeeze hamstrings.' },
          { exerciseId: 'rowing-machine', sets: 1, reps: '20-30 min', rest: 0, note: 'Zone 2, smooth pace, legs-core-arms.' },
        ],
      },
    ],
  },
  {
    id: 'fat-loss-4day',
    name: 'Fat Loss — 4 Day Upper/Lower + Cardio',
    goal: 'fat_loss',
    daysPerWeek: 4,
    level: 'intermediate',
    split: 'Upper/Lower',
    rationale:
      'An upper/lower split lets you train each region twice a week with enough volume to defend muscle in a deficit. Two dedicated Zone 2 cardio blocks build aerobic capacity and burn fat as fuel without eating into lifting recovery.',
    restDays:
      'Train Mon/Tue, rest Wed, train Thu/Fri, weekend off. Cardio can be folded onto lifting days or done on a rest day at low intensity.',
    progressionNote:
      'Use double progression: add reps to the top of the range, then add load and drop back to the bottom. Increase cardio duration before intensity — keep it conversational.',
    days: [
      {
        label: 'Day 1 — Upper',
        focus: 'Upper body',
        duration: '55-65 min',
        exercises: [
          { exerciseId: 'bench-press', sets: 4, reps: '8-10', rest: 120, rpe: '7-8', note: 'Tuck elbows ~45 degrees.' },
          { exerciseId: 'barbell-row', sets: 4, reps: '8-10', rest: 120, rpe: '7-8', note: 'Pull to lower ribs.' },
          { exerciseId: 'overhead-press', sets: 3, reps: '8-10', rest: 90, rpe: '7-8', note: 'Glutes tight, no layback.' },
          { exerciseId: 'lat-pulldown', sets: 3, reps: '10-12', rest: 75, rpe: '8', note: 'Full stretch at top.' },
          { exerciseId: 'tricep-pushdown', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Elbows pinned.' },
          { exerciseId: 'dumbbell-curl', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'No swinging.' },
        ],
      },
      {
        label: 'Day 2 — Lower',
        focus: 'Lower body',
        duration: '55-65 min',
        exercises: [
          { exerciseId: 'barbell-squat', sets: 4, reps: '8-10', rest: 150, rpe: '7-8', note: 'Depth to parallel, brace.' },
          { exerciseId: 'romanian-deadlift', sets: 3, reps: '10-12', rest: 120, rpe: '7', note: 'Feel the hamstring stretch.' },
          { exerciseId: 'leg-press', sets: 3, reps: '12-15', rest: 90, rpe: '8', note: 'Controlled, no lockout slam.' },
          { exerciseId: 'seated-leg-curl', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Pause at peak.' },
          { exerciseId: 'calf-press-machine', sets: 4, reps: '12-15', rest: 45, rpe: '8', note: 'Full range, pause.' },
        ],
      },
      {
        label: 'Day 3 — Cardio',
        focus: 'Zone 2 conditioning',
        duration: '40-45 min',
        exercises: [
          { exerciseId: 'treadmill', sets: 1, reps: '35-45 min', rest: 0, note: 'Zone 2, incline walk, conversational pace.' },
        ],
      },
      {
        label: 'Day 4 — Cardio',
        focus: 'Zone 2 conditioning',
        duration: '40-45 min',
        exercises: [
          { exerciseId: 'stationary-bike', sets: 1, reps: '35-45 min', rest: 0, note: 'Zone 2, steady cadence you can talk through.' },
          { exerciseId: 'plank', sets: 3, reps: '45-60 sec', rest: 45, note: 'Optional core finisher.' },
        ],
      },
    ],
  },
];
