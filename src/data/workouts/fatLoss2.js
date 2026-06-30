// Fat Loss higher-frequency plans (5 and 6 day PPL variants).

export const fatLoss2Plans = [
  {
    id: 'fat-loss-5day',
    name: 'Fat Loss — 5 Day PPL + Cardio',
    goal: 'fat_loss',
    daysPerWeek: 5,
    level: 'intermediate',
    split: 'Push-Pull-Legs',
    rationale:
      'Push/Pull/Legs across three lifting days plus two Zone 2 sessions delivers high weekly muscle-retention volume alongside meaningful aerobic work. Spreading volume reduces per-session fatigue, which matters most when calories and recovery are limited in a deficit.',
    restDays:
      'Two days off, ideally one mid-week and one on the weekend. Walk on off days for extra non-exercise activity.',
    progressionNote:
      'Double progression on the lifts; aim to beat last week by a rep or small load. Keep cardio in Zone 2 and add duration, not speed — intensity creep undermines recovery in a deficit.',
    days: [
      {
        label: 'Push',
        focus: 'Chest, shoulders, triceps',
        duration: '50-60 min',
        exercises: [
          { exerciseId: 'bench-press', sets: 4, reps: '8-10', rest: 120, rpe: '7-8', note: 'Controlled descent.' },
          { exerciseId: 'shoulder-press-machine', sets: 3, reps: '10-12', rest: 90, rpe: '8', note: 'No shrug.' },
          { exerciseId: 'cable-fly', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Hug a barrel.' },
          { exerciseId: 'lateral-raises', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Lead with elbows.' },
          { exerciseId: 'tricep-pushdown', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Elbows pinned.' },
        ],
      },
      {
        label: 'Pull',
        focus: 'Back, biceps',
        duration: '50-60 min',
        exercises: [
          { exerciseId: 'lat-pulldown', sets: 4, reps: '10-12', rest: 90, rpe: '8', note: 'Drive elbows down.' },
          { exerciseId: 'seated-cable-row', sets: 3, reps: '10-12', rest: 90, rpe: '8', note: 'Squeeze blades.' },
          { exerciseId: 'dumbbell-row', sets: 3, reps: '10-12', rest: 75, rpe: '8', note: 'Flat back.' },
          { exerciseId: 'face-pulls', sets: 3, reps: '15-20', rest: 45, rpe: '8', note: 'Rear delt health.' },
          { exerciseId: 'cable-curl', sets: 3, reps: '12-15', rest: 45, rpe: '8', note: 'Slow eccentric.' },
        ],
      },
      {
        label: 'Legs',
        focus: 'Quads, hamstrings, glutes',
        duration: '50-60 min',
        exercises: [
          { exerciseId: 'barbell-squat', sets: 4, reps: '8-10', rest: 150, rpe: '7-8', note: 'Brace and sit.' },
          { exerciseId: 'romanian-deadlift', sets: 3, reps: '10-12', rest: 120, rpe: '7', note: 'Hinge.' },
          { exerciseId: 'leg-press', sets: 3, reps: '12-15', rest: 90, rpe: '8', note: 'Full range.' },
          { exerciseId: 'lying-leg-curl', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Squeeze.' },
          { exerciseId: 'calf-press-machine', sets: 4, reps: '12-15', rest: 45, rpe: '8', note: 'Pause at stretch.' },
        ],
      },
      {
        label: 'Cardio A',
        focus: 'Zone 2 conditioning',
        duration: '40-45 min',
        exercises: [
          { exerciseId: 'rowing-machine', sets: 1, reps: '35-45 min', rest: 0, note: 'Zone 2, smooth conversational pace.' },
        ],
      },
      {
        label: 'Cardio B',
        focus: 'Zone 2 conditioning',
        duration: '40-45 min',
        exercises: [
          { exerciseId: 'treadmill', sets: 1, reps: '35-45 min', rest: 0, note: 'Zone 2, incline walk, can hold a conversation.' },
          { exerciseId: 'ab-crunch-machine', sets: 3, reps: '12-15', rest: 45, note: 'Optional core finisher.' },
        ],
      },
    ],
  },
  {
    id: 'fat-loss-6day',
    name: 'Fat Loss — 6 Day PPL x2',
    goal: 'fat_loss',
    daysPerWeek: 6,
    level: 'intermediate',
    split: 'Push-Pull-Legs',
    rationale:
      'Running Push/Pull/Legs twice hits each muscle group every ~72 hours, maximizing the muscle-retention signal in a deficit while keeping sessions short. Brief Zone 2 finishers on most days accumulate aerobic volume without separate cardio days.',
    restDays:
      'One full rest day, typically Sunday. Listen to recovery — if a deficit is steep, swap a lifting day for a walk.',
    progressionNote:
      'Alternate a heavier (6-8 rep) and a lighter (10-15 rep) emphasis between the two weekly hits of each muscle. Progress reps first, then load. Keep finisher cardio conversational.',
    days: [
      {
        label: 'Push A',
        focus: 'Chest, shoulders, triceps (heavier)',
        duration: '45-55 min',
        exercises: [
          { exerciseId: 'bench-press', sets: 4, reps: '6-8', rest: 120, rpe: '8', note: 'Heavier emphasis.' },
          { exerciseId: 'overhead-press', sets: 3, reps: '8-10', rest: 90, rpe: '7-8', note: 'Strict.' },
          { exerciseId: 'cable-fly', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Stretch focus.' },
          { exerciseId: 'tricep-pushdown', sets: 3, reps: '10-12', rest: 60, rpe: '8', note: 'Controlled.' },
          { exerciseId: 'stairmaster', sets: 1, reps: '12-15 min', rest: 0, note: 'Zone 2 finisher, steady pace.' },
        ],
      },
      {
        label: 'Pull A',
        focus: 'Back, biceps (heavier)',
        duration: '45-55 min',
        exercises: [
          { exerciseId: 'barbell-row', sets: 4, reps: '6-8', rest: 120, rpe: '8', note: 'Heavier emphasis.' },
          { exerciseId: 'lat-pulldown', sets: 3, reps: '10-12', rest: 90, rpe: '8', note: 'Full stretch.' },
          { exerciseId: 'face-pulls', sets: 3, reps: '15-20', rest: 45, rpe: '8', note: 'Rear delts.' },
          { exerciseId: 'dumbbell-curl', sets: 3, reps: '10-12', rest: 60, rpe: '8', note: 'No swing.' },
          { exerciseId: 'stationary-bike', sets: 1, reps: '12-15 min', rest: 0, note: 'Zone 2 finisher, conversational.' },
        ],
      },
      {
        label: 'Legs A',
        focus: 'Quads, glutes (heavier)',
        duration: '45-55 min',
        exercises: [
          { exerciseId: 'barbell-squat', sets: 4, reps: '6-8', rest: 150, rpe: '8', note: 'Heavier emphasis.' },
          { exerciseId: 'leg-press', sets: 3, reps: '10-12', rest: 90, rpe: '8', note: 'Full range.' },
          { exerciseId: 'lying-leg-curl', sets: 3, reps: '10-12', rest: 60, rpe: '8', note: 'Squeeze.' },
          { exerciseId: 'calf-press-machine', sets: 4, reps: '12-15', rest: 45, rpe: '8', note: 'Pause.' },
          { exerciseId: 'treadmill', sets: 1, reps: '12-15 min', rest: 0, note: 'Zone 2 incline walk finisher.' },
        ],
      },
      {
        label: 'Push B',
        focus: 'Chest, shoulders, triceps (lighter)',
        duration: '45-55 min',
        exercises: [
          { exerciseId: 'chest-press-machine', sets: 3, reps: '12-15', rest: 75, rpe: '8', note: 'Volume focus.' },
          { exerciseId: 'shoulder-press-machine', sets: 3, reps: '12-15', rest: 75, rpe: '8', note: 'Controlled.' },
          { exerciseId: 'lateral-raises', sets: 4, reps: '15-20', rest: 45, rpe: '8', note: 'High reps.' },
          { exerciseId: 'diamond-pushup', sets: 3, reps: 'AMRAP', rest: 60, rpe: '9', note: 'Triceps burnout.' },
          { exerciseId: 'rowing-machine', sets: 1, reps: '12-15 min', rest: 0, note: 'Zone 2 finisher, smooth.' },
        ],
      },
      {
        label: 'Pull B',
        focus: 'Back, biceps (lighter)',
        duration: '45-55 min',
        exercises: [
          { exerciseId: 'seated-cable-row', sets: 3, reps: '12-15', rest: 75, rpe: '8', note: 'Volume focus.' },
          { exerciseId: 'assisted-pullup-machine', sets: 3, reps: '10-12', rest: 75, rpe: '8', note: 'Minimal assist.' },
          { exerciseId: 'face-pulls', sets: 3, reps: '15-20', rest: 45, rpe: '8', note: 'Rear delts.' },
          { exerciseId: 'cable-curl', sets: 3, reps: '15-20', rest: 45, rpe: '8', note: 'Pump.' },
          { exerciseId: 'elliptical', sets: 1, reps: '12-15 min', rest: 0, note: 'Zone 2 finisher, conversational.' },
        ],
      },
      {
        label: 'Legs B',
        focus: 'Hamstrings, glutes (lighter)',
        duration: '45-55 min',
        exercises: [
          { exerciseId: 'romanian-deadlift', sets: 3, reps: '12-15', rest: 90, rpe: '7-8', note: 'Hinge, stretch.' },
          { exerciseId: 'barbell-hip-thrust', sets: 3, reps: '12-15', rest: 75, rpe: '8', note: 'Full lockout.' },
          { exerciseId: 'leg-extension', sets: 3, reps: '15-20', rest: 45, rpe: '8', note: 'Squeeze at top.' },
          { exerciseId: 'seated-leg-curl', sets: 3, reps: '15-20', rest: 45, rpe: '8', note: 'Pause.' },
          { exerciseId: 'stationary-bike', sets: 1, reps: '12-15 min', rest: 0, note: 'Zone 2 finisher, conversational.' },
        ],
      },
    ],
  },
];
