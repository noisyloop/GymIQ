// Muscle Gain plans (3 and 4 day). Hypertrophy is driven by progressive
// overload, sufficient weekly volume per muscle, and proximity to failure.

export const muscleGainPlans = [
  {
    id: 'muscle-gain-3day',
    name: 'Muscle Gain — 3 Day Full Body A/B',
    goal: 'muscle_gain',
    daysPerWeek: 3,
    level: 'beginner',
    split: 'Full Body',
    rationale:
      'Three full-body sessions hit every muscle ~3x/week, which is ideal for novices because protein synthesis stays elevated only ~48 hours. Alternating an A and B day balances movement patterns and lets volume accumulate without overworking any one group.',
    restDays:
      'Train Mon/Wed/Fri with rest days between each session and the weekend off. A full day of recovery between sessions is essential here.',
    progressionNote:
      'Add load when you reach the top of the rep range on every set, otherwise add reps. Eat in a slight surplus (~+250-350 kcal) and aim to add a rep or a little weight most weeks.',
    days: [
      {
        label: 'Day A',
        focus: 'Squat-focused full body',
        duration: '55-65 min',
        exercises: [
          { exerciseId: 'barbell-squat', sets: 4, reps: '6-8', rest: 150, rpe: '7-8', note: 'Drive through midfoot.' },
          { exerciseId: 'bench-press', sets: 4, reps: '6-8', rest: 150, rpe: '7-8', note: 'Controlled, tuck elbows.' },
          { exerciseId: 'barbell-row', sets: 4, reps: '8-10', rest: 120, rpe: '8', note: 'Pull to ribs.' },
          { exerciseId: 'overhead-press', sets: 3, reps: '8-10', rest: 90, rpe: '8', note: 'Strict.' },
          { exerciseId: 'dumbbell-curl', sets: 3, reps: '10-12', rest: 60, rpe: '8', note: 'Full stretch.' },
        ],
      },
      {
        label: 'Day B',
        focus: 'Hinge-focused full body',
        duration: '55-65 min',
        exercises: [
          { exerciseId: 'romanian-deadlift', sets: 4, reps: '8-10', rest: 150, rpe: '7-8', note: 'Hinge, neutral spine.' },
          { exerciseId: 'leg-press', sets: 3, reps: '10-12', rest: 120, rpe: '8', note: 'Full range.' },
          { exerciseId: 'lat-pulldown', sets: 4, reps: '10-12', rest: 90, rpe: '8', note: 'Drive elbows down.' },
          { exerciseId: 'shoulder-press-machine', sets: 3, reps: '10-12', rest: 90, rpe: '8', note: 'No shrug.' },
          { exerciseId: 'skull-crushers', sets: 3, reps: '10-12', rest: 60, rpe: '8', note: 'Elbows stable.' },
        ],
      },
      {
        label: 'Day A2',
        focus: 'Repeat A with variation',
        duration: '55-65 min',
        exercises: [
          { exerciseId: 'goblet-squat', sets: 4, reps: '10-12', rest: 90, rpe: '8', note: 'Upright torso.' },
          { exerciseId: 'chest-press-machine', sets: 4, reps: '10-12', rest: 90, rpe: '8', note: 'Full stretch.' },
          { exerciseId: 'seated-cable-row', sets: 4, reps: '10-12', rest: 90, rpe: '8', note: 'Squeeze blades.' },
          { exerciseId: 'lateral-raises', sets: 3, reps: '12-15', rest: 45, rpe: '8', note: 'Lead with elbows.' },
          { exerciseId: 'cable-curl', sets: 3, reps: '12-15', rest: 45, rpe: '8', note: 'Slow eccentric.' },
        ],
      },
    ],
  },
  {
    id: 'muscle-gain-4day',
    name: 'Muscle Gain — 4 Day Upper/Lower',
    goal: 'muscle_gain',
    daysPerWeek: 4,
    level: 'intermediate',
    split: 'Upper/Lower',
    rationale:
      'Upper/lower trains each region twice weekly with ~10-20 hard sets per muscle group, the evidence-based sweet spot for hypertrophy. Splitting upper and lower lets you bring more effort to each lift than a full-body day allows.',
    restDays:
      'Train Mon/Tue, rest Wed, train Thu/Fri, weekend off. Adjust so no more than two hard sessions stack back to back.',
    progressionNote:
      'Double progression within each rep range. Track your top set and try to beat it weekly. Maintain a modest surplus and prioritize sleep and protein (~1.6-2.2 g/kg).',
    days: [
      {
        label: 'Upper A',
        focus: 'Chest/back strength emphasis',
        duration: '60-70 min',
        exercises: [
          { exerciseId: 'bench-press', sets: 4, reps: '6-8', rest: 150, rpe: '8', note: 'Heavy, controlled.' },
          { exerciseId: 'barbell-row', sets: 4, reps: '8-10', rest: 120, rpe: '8', note: 'Strict.' },
          { exerciseId: 'overhead-press', sets: 3, reps: '8-10', rest: 90, rpe: '8', note: 'Glutes tight.' },
          { exerciseId: 'lat-pulldown', sets: 3, reps: '10-12', rest: 75, rpe: '8', note: 'Stretch.' },
          { exerciseId: 'skull-crushers', sets: 3, reps: '10-12', rest: 60, rpe: '8', note: 'Elbows stable.' },
          { exerciseId: 'dumbbell-curl', sets: 3, reps: '10-12', rest: 60, rpe: '8', note: 'Full ROM.' },
        ],
      },
      {
        label: 'Lower A',
        focus: 'Quad emphasis',
        duration: '60-70 min',
        exercises: [
          { exerciseId: 'barbell-squat', sets: 4, reps: '6-8', rest: 180, rpe: '8', note: 'Depth, brace.' },
          { exerciseId: 'leg-press', sets: 3, reps: '10-12', rest: 120, rpe: '8', note: 'Full range.' },
          { exerciseId: 'romanian-deadlift', sets: 3, reps: '8-10', rest: 120, rpe: '7-8', note: 'Hinge.' },
          { exerciseId: 'leg-extension', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Squeeze.' },
          { exerciseId: 'calf-press-machine', sets: 4, reps: '12-15', rest: 45, rpe: '8', note: 'Pause.' },
        ],
      },
      {
        label: 'Upper B',
        focus: 'Hypertrophy/volume emphasis',
        duration: '60-70 min',
        exercises: [
          { exerciseId: 'chest-press-machine', sets: 4, reps: '10-12', rest: 90, rpe: '8', note: 'Stretch focus.' },
          { exerciseId: 'seated-cable-row', sets: 4, reps: '10-12', rest: 90, rpe: '8', note: 'Squeeze.' },
          { exerciseId: 'shoulder-press-machine', sets: 3, reps: '10-12', rest: 75, rpe: '8', note: 'Controlled.' },
          { exerciseId: 'cable-fly', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Stretch.' },
          { exerciseId: 'face-pulls', sets: 3, reps: '15-20', rest: 45, rpe: '8', note: 'Rear delts.' },
          { exerciseId: 'cable-curl', sets: 3, reps: '12-15', rest: 45, rpe: '8', note: 'Pump.' },
        ],
      },
      {
        label: 'Lower B',
        focus: 'Hamstring/glute emphasis',
        duration: '60-70 min',
        exercises: [
          { exerciseId: 'romanian-deadlift', sets: 4, reps: '8-10', rest: 150, rpe: '8', note: 'Hinge, stretch.' },
          { exerciseId: 'barbell-hip-thrust', sets: 3, reps: '10-12', rest: 90, rpe: '8', note: 'Full lockout.' },
          { exerciseId: 'goblet-squat', sets: 3, reps: '12-15', rest: 75, rpe: '8', note: 'Upright.' },
          { exerciseId: 'seated-leg-curl', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Pause.' },
          { exerciseId: 'calf-press-machine', sets: 4, reps: '15-20', rest: 45, rpe: '8', note: 'Full ROM.' },
        ],
      },
    ],
  },
];
