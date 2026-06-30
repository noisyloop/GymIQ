// Muscle Gain higher-frequency plans (5 and 6 day PPL variants).

export const muscleGain2Plans = [
  {
    id: 'muscle-gain-5day',
    name: 'Muscle Gain — 5 Day PPL',
    goal: 'muscle_gain',
    daysPerWeek: 5,
    level: 'intermediate',
    split: 'Push-Pull-Legs',
    rationale:
      'A rolling 5-day PPL lets you push high weekly volume per muscle while keeping individual sessions focused and fresh. Most muscles get trained roughly every 4-5 days, comfortably within the productive frequency window for trained lifters.',
    restDays:
      'Two rest days placed where recovery is lowest — often after legs. A common layout is Push/Pull/Legs/rest/Push/Pull/rest rotating week to week.',
    progressionNote:
      'Add reps within each range, then load. Keep 1-3 reps in reserve on early sets and push the last set close to failure. Surplus + protein + sleep drive the gains between sessions.',
    days: [
      {
        label: 'Push',
        focus: 'Chest, shoulders, triceps',
        duration: '60-70 min',
        exercises: [
          { exerciseId: 'bench-press', sets: 4, reps: '6-8', rest: 150, rpe: '8', note: 'Heavy primary.' },
          { exerciseId: 'overhead-press', sets: 3, reps: '8-10', rest: 90, rpe: '8', note: 'Strict.' },
          { exerciseId: 'cable-fly', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Stretch.' },
          { exerciseId: 'lateral-raises', sets: 4, reps: '12-15', rest: 45, rpe: '8', note: 'Lead elbows.' },
          { exerciseId: 'tricep-pushdown', sets: 3, reps: '12-15', rest: 45, rpe: '8', note: 'Elbows pinned.' },
        ],
      },
      {
        label: 'Pull',
        focus: 'Back, biceps',
        duration: '60-70 min',
        exercises: [
          { exerciseId: 'barbell-row', sets: 4, reps: '8-10', rest: 120, rpe: '8', note: 'Strict.' },
          { exerciseId: 'lat-pulldown', sets: 4, reps: '10-12', rest: 90, rpe: '8', note: 'Stretch.' },
          { exerciseId: 'seated-cable-row', sets: 3, reps: '10-12', rest: 75, rpe: '8', note: 'Squeeze.' },
          { exerciseId: 'face-pulls', sets: 3, reps: '15-20', rest: 45, rpe: '8', note: 'Rear delts.' },
          { exerciseId: 'dumbbell-curl', sets: 4, reps: '10-12', rest: 60, rpe: '8', note: 'Full ROM.' },
        ],
      },
      {
        label: 'Legs',
        focus: 'Quads, hamstrings, glutes',
        duration: '60-70 min',
        exercises: [
          { exerciseId: 'barbell-squat', sets: 4, reps: '6-8', rest: 180, rpe: '8', note: 'Depth, brace.' },
          { exerciseId: 'romanian-deadlift', sets: 3, reps: '8-10', rest: 120, rpe: '8', note: 'Hinge.' },
          { exerciseId: 'leg-press', sets: 3, reps: '12-15', rest: 90, rpe: '8', note: 'Full range.' },
          { exerciseId: 'lying-leg-curl', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Squeeze.' },
          { exerciseId: 'calf-press-machine', sets: 4, reps: '12-15', rest: 45, rpe: '8', note: 'Pause.' },
        ],
      },
      {
        label: 'Push (Upper emphasis)',
        focus: 'Chest, shoulders, triceps volume',
        duration: '55-65 min',
        exercises: [
          { exerciseId: 'chest-press-machine', sets: 4, reps: '10-12', rest: 90, rpe: '8', note: 'Stretch focus.' },
          { exerciseId: 'shoulder-press-machine', sets: 3, reps: '10-12', rest: 75, rpe: '8', note: 'Controlled.' },
          { exerciseId: 'cable-fly', sets: 3, reps: '15-20', rest: 45, rpe: '8', note: 'Pump.' },
          { exerciseId: 'lateral-raises', sets: 4, reps: '15-20', rest: 45, rpe: '8', note: 'High reps.' },
          { exerciseId: 'skull-crushers', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Controlled.' },
        ],
      },
      {
        label: 'Pull + Legs',
        focus: 'Back and posterior chain',
        duration: '60-70 min',
        exercises: [
          { exerciseId: 'assisted-pullup-machine', sets: 4, reps: '8-10', rest: 90, rpe: '8', note: 'Minimal assist.' },
          { exerciseId: 'dumbbell-row', sets: 3, reps: '10-12', rest: 75, rpe: '8', note: 'Flat back.' },
          { exerciseId: 'barbell-hip-thrust', sets: 3, reps: '10-12', rest: 90, rpe: '8', note: 'Lockout.' },
          { exerciseId: 'seated-leg-curl', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Pause.' },
          { exerciseId: 'cable-curl', sets: 3, reps: '12-15', rest: 45, rpe: '8', note: 'Pump.' },
        ],
      },
    ],
  },
  {
    id: 'muscle-gain-6day',
    name: 'Muscle Gain — 6 Day PPL x2',
    goal: 'muscle_gain',
    daysPerWeek: 6,
    level: 'intermediate',
    split: 'Push-Pull-Legs',
    rationale:
      'Running PPL twice a week trains each muscle every ~72 hours, the highest practical frequency for hypertrophy and an excellent way to spread very high weekly volume across digestible sessions. The heavy/light wave manages joint stress while keeping every session productive.',
    restDays:
      'One full rest day (usually Sunday). This schedule demands strong recovery — protein, sleep, and a calorie surplus are non-negotiable.',
    progressionNote:
      'Heavier rep ranges on the A days, higher-rep pump work on B days. Beat last week on the primary lift, then chase reps on accessories. Deload roughly every 6-8 weeks.',
    days: [
      {
        label: 'Push A (Heavy)',
        focus: 'Chest, shoulders, triceps',
        duration: '55-65 min',
        exercises: [
          { exerciseId: 'bench-press', sets: 5, reps: '5-6', rest: 180, rpe: '8', note: 'Heavy primary.' },
          { exerciseId: 'overhead-press', sets: 4, reps: '6-8', rest: 120, rpe: '8', note: 'Strict.' },
          { exerciseId: 'cable-fly', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Stretch.' },
          { exerciseId: 'skull-crushers', sets: 3, reps: '8-10', rest: 60, rpe: '8', note: 'Controlled.' },
        ],
      },
      {
        label: 'Pull A (Heavy)',
        focus: 'Back, biceps',
        duration: '55-65 min',
        exercises: [
          { exerciseId: 'barbell-row', sets: 5, reps: '5-6', rest: 150, rpe: '8', note: 'Heavy primary.' },
          { exerciseId: 'pullup', sets: 4, reps: '6-8', rest: 120, rpe: '8', note: 'Weighted if able.' },
          { exerciseId: 'seated-cable-row', sets: 3, reps: '10-12', rest: 75, rpe: '8', note: 'Squeeze.' },
          { exerciseId: 'dumbbell-curl', sets: 3, reps: '8-10', rest: 60, rpe: '8', note: 'Full ROM.' },
        ],
      },
      {
        label: 'Legs A (Heavy)',
        focus: 'Quads, glutes',
        duration: '60-70 min',
        exercises: [
          { exerciseId: 'barbell-squat', sets: 5, reps: '5-6', rest: 180, rpe: '8', note: 'Heavy primary.' },
          { exerciseId: 'romanian-deadlift', sets: 3, reps: '8-10', rest: 150, rpe: '8', note: 'Hinge.' },
          { exerciseId: 'leg-press', sets: 3, reps: '10-12', rest: 90, rpe: '8', note: 'Full range.' },
          { exerciseId: 'calf-press-machine', sets: 4, reps: '10-12', rest: 45, rpe: '8', note: 'Pause.' },
        ],
      },
      {
        label: 'Push B (Volume)',
        focus: 'Chest, shoulders, triceps',
        duration: '55-65 min',
        exercises: [
          { exerciseId: 'chest-press-machine', sets: 4, reps: '12-15', rest: 75, rpe: '8', note: 'Pump.' },
          { exerciseId: 'shoulder-press-machine', sets: 4, reps: '12-15', rest: 75, rpe: '8', note: 'Controlled.' },
          { exerciseId: 'lateral-raises', sets: 5, reps: '15-20', rest: 45, rpe: '8', note: 'High reps.' },
          { exerciseId: 'tricep-pushdown', sets: 4, reps: '12-15', rest: 45, rpe: '8', note: 'Pinned elbows.' },
        ],
      },
      {
        label: 'Pull B (Volume)',
        focus: 'Back, biceps',
        duration: '55-65 min',
        exercises: [
          { exerciseId: 'lat-pulldown', sets: 4, reps: '12-15', rest: 75, rpe: '8', note: 'Stretch.' },
          { exerciseId: 'inverted-row', sets: 4, reps: '12-15', rest: 60, rpe: '8', note: 'Chest to bar.' },
          { exerciseId: 'face-pulls', sets: 4, reps: '15-20', rest: 45, rpe: '8', note: 'Rear delts.' },
          { exerciseId: 'cable-curl', sets: 4, reps: '15-20', rest: 45, rpe: '8', note: 'Pump.' },
        ],
      },
      {
        label: 'Legs B (Volume)',
        focus: 'Hamstrings, glutes',
        duration: '60-70 min',
        exercises: [
          { exerciseId: 'leg-press', sets: 4, reps: '15-20', rest: 90, rpe: '8', note: 'High reps.' },
          { exerciseId: 'barbell-hip-thrust', sets: 3, reps: '12-15', rest: 75, rpe: '8', note: 'Lockout.' },
          { exerciseId: 'leg-extension', sets: 3, reps: '15-20', rest: 45, rpe: '8', note: 'Squeeze.' },
          { exerciseId: 'seated-leg-curl', sets: 3, reps: '15-20', rest: 45, rpe: '8', note: 'Pause.' },
        ],
      },
    ],
  },
];
