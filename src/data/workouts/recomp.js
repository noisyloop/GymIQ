// Recomp plans — build muscle and lose fat simultaneously by lifting hard at
// maintenance calories with high protein, plus targeted Zone 2 work.

export const recompPlans = [
  {
    id: 'recomp-3day',
    name: 'Recomp — 3 Day Full Body + Zones',
    goal: 'recomp',
    daysPerWeek: 3,
    level: 'beginner',
    split: 'Full Body',
    rationale:
      'Recomposition works best at or near maintenance calories with high protein and a strong progressive-overload stimulus. Full-body lifting 3x/week maximizes the muscle-building signal per session, while Zone 2 cardio adds fat-burning aerobic volume without creating a large deficit.',
    restDays:
      'Train Mon/Wed/Fri, rest between sessions. Use a rest day for an easy Zone 2 walk if you want extra activity.',
    progressionNote:
      'Drive overload on the lifts (add reps then load) since muscle gain is the limiting factor in recomp. Hold calories near maintenance, keep protein ~2 g/kg, and let Zone 2 volume nudge body fat down slowly.',
    days: [
      {
        label: 'Day A',
        focus: 'Full body + Zone 2',
        duration: '60-70 min',
        exercises: [
          { exerciseId: 'barbell-squat', sets: 4, reps: '8-10', rest: 120, rpe: '8', note: 'Brace and sit.' },
          { exerciseId: 'bench-press', sets: 4, reps: '8-10', rest: 120, rpe: '8', note: 'Controlled.' },
          { exerciseId: 'seated-cable-row', sets: 3, reps: '10-12', rest: 90, rpe: '8', note: 'Squeeze.' },
          { exerciseId: 'lateral-raises', sets: 3, reps: '12-15', rest: 45, rpe: '8', note: 'Lead elbows.' },
          { exerciseId: 'treadmill', sets: 1, reps: '20-25 min', rest: 0, note: 'Zone 2, incline walk, conversational.' },
        ],
      },
      {
        label: 'Day B',
        focus: 'Full body + Zone 2',
        duration: '60-70 min',
        exercises: [
          { exerciseId: 'romanian-deadlift', sets: 4, reps: '8-10', rest: 120, rpe: '8', note: 'Hinge.' },
          { exerciseId: 'shoulder-press-machine', sets: 3, reps: '10-12', rest: 90, rpe: '8', note: 'No shrug.' },
          { exerciseId: 'lat-pulldown', sets: 4, reps: '10-12', rest: 90, rpe: '8', note: 'Stretch.' },
          { exerciseId: 'leg-press', sets: 3, reps: '12-15', rest: 75, rpe: '8', note: 'Full range.' },
          { exerciseId: 'stationary-bike', sets: 1, reps: '20-25 min', rest: 0, note: 'Zone 2, steady cadence, can talk.' },
        ],
      },
      {
        label: 'Day C',
        focus: 'Full body + Zone 2',
        duration: '60-70 min',
        exercises: [
          { exerciseId: 'leg-press', sets: 4, reps: '10-12', rest: 120, rpe: '8', note: 'Full range.' },
          { exerciseId: 'chest-press-machine', sets: 3, reps: '10-12', rest: 90, rpe: '8', note: 'Stretch.' },
          { exerciseId: 'barbell-row', sets: 3, reps: '8-10', rest: 90, rpe: '8', note: 'Strict.' },
          { exerciseId: 'dumbbell-curl', sets: 3, reps: '12-15', rest: 45, rpe: '8', note: 'Full ROM.' },
          { exerciseId: 'rowing-machine', sets: 1, reps: '20-25 min', rest: 0, note: 'Zone 2, smooth conversational pace.' },
        ],
      },
    ],
  },
  {
    id: 'recomp-4day',
    name: 'Recomp — 4 Day Upper/Lower',
    goal: 'recomp',
    daysPerWeek: 4,
    level: 'intermediate',
    split: 'Upper/Lower',
    rationale:
      'Four upper/lower days deliver the per-muscle volume needed to keep building while eating at maintenance. Short Zone 2 finishers keep aerobic fitness and fat oxidation improving without dropping into a deficit that would stall muscle gain.',
    restDays:
      'Train Mon/Tue, rest Wed, train Thu/Fri, weekend off. Add an optional Zone 2 walk on a rest day.',
    progressionNote:
      'Prioritize lift progression — recomp lives and dies on overload. Add reps then load via double progression. Keep cardio conversational so it adds calories burned without hurting recovery.',
    days: [
      {
        label: 'Upper',
        focus: 'Upper body + Zone 2 finish',
        duration: '60-70 min',
        exercises: [
          { exerciseId: 'bench-press', sets: 4, reps: '8-10', rest: 120, rpe: '8', note: 'Controlled.' },
          { exerciseId: 'barbell-row', sets: 4, reps: '8-10', rest: 120, rpe: '8', note: 'Strict.' },
          { exerciseId: 'overhead-press', sets: 3, reps: '8-10', rest: 90, rpe: '8', note: 'Glutes tight.' },
          { exerciseId: 'lat-pulldown', sets: 3, reps: '10-12', rest: 75, rpe: '8', note: 'Stretch.' },
          { exerciseId: 'tricep-pushdown', sets: 3, reps: '12-15', rest: 45, rpe: '8', note: 'Pinned.' },
          { exerciseId: 'stationary-bike', sets: 1, reps: '15-20 min', rest: 0, note: 'Zone 2 finisher, conversational.' },
        ],
      },
      {
        label: 'Lower',
        focus: 'Lower body + Zone 2 finish',
        duration: '60-70 min',
        exercises: [
          { exerciseId: 'barbell-squat', sets: 4, reps: '8-10', rest: 150, rpe: '8', note: 'Depth, brace.' },
          { exerciseId: 'romanian-deadlift', sets: 3, reps: '8-10', rest: 120, rpe: '8', note: 'Hinge.' },
          { exerciseId: 'leg-press', sets: 3, reps: '12-15', rest: 90, rpe: '8', note: 'Full range.' },
          { exerciseId: 'seated-leg-curl', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Pause.' },
          { exerciseId: 'treadmill', sets: 1, reps: '15-20 min', rest: 0, note: 'Zone 2 incline walk finisher.' },
        ],
      },
      {
        label: 'Upper (Volume)',
        focus: 'Upper body hypertrophy',
        duration: '55-65 min',
        exercises: [
          { exerciseId: 'chest-press-machine', sets: 4, reps: '10-12', rest: 90, rpe: '8', note: 'Stretch.' },
          { exerciseId: 'seated-cable-row', sets: 4, reps: '10-12', rest: 90, rpe: '8', note: 'Squeeze.' },
          { exerciseId: 'lateral-raises', sets: 4, reps: '12-15', rest: 45, rpe: '8', note: 'Lead elbows.' },
          { exerciseId: 'face-pulls', sets: 3, reps: '15-20', rest: 45, rpe: '8', note: 'Rear delts.' },
          { exerciseId: 'cable-curl', sets: 3, reps: '12-15', rest: 45, rpe: '8', note: 'Pump.' },
        ],
      },
      {
        label: 'Lower (Volume)',
        focus: 'Posterior chain + Zone 2 finish',
        duration: '60-70 min',
        exercises: [
          { exerciseId: 'barbell-hip-thrust', sets: 4, reps: '10-12', rest: 90, rpe: '8', note: 'Lockout.' },
          { exerciseId: 'leg-press', sets: 3, reps: '15-20', rest: 90, rpe: '8', note: 'High reps.' },
          { exerciseId: 'lying-leg-curl', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Squeeze.' },
          { exerciseId: 'calf-press-machine', sets: 4, reps: '12-15', rest: 45, rpe: '8', note: 'Pause.' },
          { exerciseId: 'rowing-machine', sets: 1, reps: '15-20 min', rest: 0, note: 'Zone 2 finisher, smooth pace.' },
        ],
      },
    ],
  },
  {
    id: 'recomp-5day',
    name: 'Recomp — 5 Day PPL + Zone 2',
    goal: 'recomp',
    daysPerWeek: 5,
    level: 'intermediate',
    split: 'Push-Pull-Legs',
    rationale:
      'Three lifting days plus two Zone 2 sessions splits the work so muscle-building volume stays high while aerobic conditioning and fat oxidation improve in parallel. At maintenance calories this balance lets the scale hold while body composition shifts toward more muscle.',
    restDays:
      'Two rest days, ideally spaced (e.g. mid-week and Sunday). Keep cardio strictly Zone 2 so it never competes with lifting recovery.',
    progressionNote:
      'Push the lifts via double progression — the recomp depends on it. Add cardio duration over intensity, keeping every minute conversational. Hold protein high (~2 g/kg) to fuel muscle gain at maintenance.',
    days: [
      {
        label: 'Push',
        focus: 'Chest, shoulders, triceps',
        duration: '55-65 min',
        exercises: [
          { exerciseId: 'bench-press', sets: 4, reps: '8-10', rest: 120, rpe: '8', note: 'Controlled.' },
          { exerciseId: 'shoulder-press-machine', sets: 3, reps: '10-12', rest: 90, rpe: '8', note: 'No shrug.' },
          { exerciseId: 'cable-fly', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Stretch.' },
          { exerciseId: 'tricep-pushdown', sets: 3, reps: '12-15', rest: 45, rpe: '8', note: 'Pinned.' },
        ],
      },
      {
        label: 'Pull',
        focus: 'Back, biceps',
        duration: '55-65 min',
        exercises: [
          { exerciseId: 'lat-pulldown', sets: 4, reps: '10-12', rest: 90, rpe: '8', note: 'Stretch.' },
          { exerciseId: 'seated-cable-row', sets: 3, reps: '10-12', rest: 90, rpe: '8', note: 'Squeeze.' },
          { exerciseId: 'face-pulls', sets: 3, reps: '15-20', rest: 45, rpe: '8', note: 'Rear delts.' },
          { exerciseId: 'dumbbell-curl', sets: 3, reps: '12-15', rest: 45, rpe: '8', note: 'Full ROM.' },
        ],
      },
      {
        label: 'Legs',
        focus: 'Quads, hamstrings, glutes',
        duration: '60-70 min',
        exercises: [
          { exerciseId: 'barbell-squat', sets: 4, reps: '8-10', rest: 150, rpe: '8', note: 'Depth, brace.' },
          { exerciseId: 'romanian-deadlift', sets: 3, reps: '10-12', rest: 120, rpe: '7-8', note: 'Hinge.' },
          { exerciseId: 'leg-press', sets: 3, reps: '12-15', rest: 90, rpe: '8', note: 'Full range.' },
          { exerciseId: 'calf-press-machine', sets: 4, reps: '12-15', rest: 45, rpe: '8', note: 'Pause.' },
        ],
      },
      {
        label: 'Zone 2 A',
        focus: 'Aerobic base',
        duration: '40-45 min',
        exercises: [
          { exerciseId: 'treadmill', sets: 1, reps: '35-45 min', rest: 0, note: 'Zone 2, incline walk, conversational pace.' },
        ],
      },
      {
        label: 'Zone 2 B',
        focus: 'Aerobic base',
        duration: '40-45 min',
        exercises: [
          { exerciseId: 'stationary-bike', sets: 1, reps: '35-45 min', rest: 0, note: 'Zone 2, steady cadence you can talk through.' },
          { exerciseId: 'plank', sets: 3, reps: '45-60 sec', rest: 45, note: 'Optional core.' },
        ],
      },
    ],
  },
];
