// Fighter Return plans — for ex-combat athletes rebuilding with structured
// gym training. The core lesson: dial DOWN intensity, not volume. Years of
// Zone 3+ pad work, sparring, and circuits built a big engine but little
// structured Zone 2 base or progressive resistance strength.

const FIGHTER_RATIONALE =
  'Combat training lived almost entirely in Zone 3 and above — pad rounds, sparring, and circuits keep heart rate high but never build the slow aerobic base or progressive resistance strength a structured program does. The key change coming back is LESS intensity, not less volume: we keep the work capacity you earned but redirect it into conversational-pace Zone 2 cardio and controlled lifting. We start on machines because they fix the movement path, let you load safely after time off, and rebuild connective-tissue and joint readiness before free-weight skill demands return.';

const FIGHTER_PROGRESSION =
  'Expect body composition to shift over the first 6-12 weeks: as steady fueling and resistance training replace chronic glycogen-depleting conditioning, you may add a little muscle and the scale can rise even as you look leaner. Progress lifts with double progression (add reps to the top of the range, then load) and grow Zone 2 by adding 5-10 minutes per week — keep it conversational. Resist the urge to chase intensity; volume and consistency rebuild the engine, lower intensity protects recovery while tissues re-adapt.';

export const fighterReturnPlans = [
  {
    id: 'fighter-return-3day',
    name: 'Fighter Return — 3 Day Weights + Zone 2',
    goal: 'fighter_return',
    daysPerWeek: 3,
    level: 'all',
    split: 'Full Body',
    rationale: FIGHTER_RATIONALE,
    restDays:
      'Train Mon/Wed/Fri. The two days between sessions are for true rest or an easy Zone 2 walk — no hard conditioning, which is the old habit we are breaking.',
    progressionNote: FIGHTER_PROGRESSION,
    days: [
      {
        label: 'Day A — Full Body + Zone 2',
        focus: 'Machine strength + aerobic base',
        duration: '55-65 min',
        exercises: [
          { exerciseId: 'leg-press', sets: 3, reps: '10-12', rest: 90, rpe: '7', note: 'Machine first, controlled.' },
          { exerciseId: 'chest-press-machine', sets: 3, reps: '10-12', rest: 90, rpe: '7', note: 'Full stretch.' },
          { exerciseId: 'seated-cable-row', sets: 3, reps: '10-12', rest: 90, rpe: '7', note: 'Squeeze.' },
          { exerciseId: 'shoulder-press-machine', sets: 3, reps: '10-12', rest: 75, rpe: '7', note: 'No shrug.' },
          { exerciseId: 'treadmill', sets: 1, reps: '25-30 min', rest: 0, note: 'Zone 2, conversational pace — must be able to talk.' },
        ],
      },
      {
        label: 'Day B — Full Body + Zone 2',
        focus: 'Machine strength + aerobic base',
        duration: '55-65 min',
        exercises: [
          { exerciseId: 'lying-leg-curl', sets: 3, reps: '10-12', rest: 75, rpe: '7', note: 'Squeeze.' },
          { exerciseId: 'lat-pulldown', sets: 3, reps: '10-12', rest: 90, rpe: '7', note: 'Stretch.' },
          { exerciseId: 'leg-extension', sets: 3, reps: '12-15', rest: 60, rpe: '7', note: 'Control.' },
          { exerciseId: 'cable-fly', sets: 3, reps: '12-15', rest: 60, rpe: '7', note: 'Hug a barrel.' },
          { exerciseId: 'stationary-bike', sets: 1, reps: '25-30 min', rest: 0, note: 'Zone 2, steady cadence, conversational pace.' },
        ],
      },
      {
        label: 'Day C — Full Body + Zone 2',
        focus: 'Machine strength + aerobic base',
        duration: '55-65 min',
        exercises: [
          { exerciseId: 'goblet-squat', sets: 3, reps: '10-12', rest: 90, rpe: '7', note: 'Upright, controlled.' },
          { exerciseId: 'seated-cable-row', sets: 3, reps: '10-12', rest: 75, rpe: '7', note: 'Squeeze.' },
          { exerciseId: 'shoulder-press-machine', sets: 3, reps: '10-12', rest: 75, rpe: '7', note: 'No shrug.' },
          { exerciseId: 'face-pulls', sets: 3, reps: '15-20', rest: 45, rpe: '7', note: 'Rear delts.' },
          { exerciseId: 'rowing-machine', sets: 1, reps: '25-30 min', rest: 0, note: 'Zone 2, smooth conversational pace.' },
        ],
      },
    ],
  },
  {
    id: 'fighter-return-4day',
    name: 'Fighter Return — 4 Day Weights 2x + Zone 2 2x',
    goal: 'fighter_return',
    daysPerWeek: 4,
    level: 'all',
    split: 'Upper/Lower',
    rationale: FIGHTER_RATIONALE,
    progressionNote: FIGHTER_PROGRESSION,
    restDays:
      'Two lifting days and two Zone 2 days, e.g. Upper/Zone2/Lower/Zone2 with weekends off. Keep cardio strictly conversational — no sneaking back into Zone 3.',
    days: [
      {
        label: 'Upper (Machines)',
        focus: 'Upper body strength',
        duration: '50-60 min',
        exercises: [
          { exerciseId: 'chest-press-machine', sets: 3, reps: '10-12', rest: 90, rpe: '7', note: 'Machine first.' },
          { exerciseId: 'seated-cable-row', sets: 3, reps: '10-12', rest: 90, rpe: '7', note: 'Squeeze.' },
          { exerciseId: 'shoulder-press-machine', sets: 3, reps: '10-12', rest: 75, rpe: '7-8', note: 'No shrug.' },
          { exerciseId: 'lat-pulldown', sets: 3, reps: '10-12', rest: 75, rpe: '7-8', note: 'Stretch.' },
          { exerciseId: 'tricep-pushdown', sets: 3, reps: '12-15', rest: 45, rpe: '7-8', note: 'Pinned.' },
        ],
      },
      {
        label: 'Zone 2 A',
        focus: 'Aerobic base',
        duration: '35-45 min',
        exercises: [
          { exerciseId: 'treadmill', sets: 1, reps: '35-45 min', rest: 0, note: 'Zone 2, incline walk, conversational — replaces old hard circuits.' },
        ],
      },
      {
        label: 'Lower (Machines)',
        focus: 'Lower body strength',
        duration: '50-60 min',
        exercises: [
          { exerciseId: 'leg-press', sets: 4, reps: '10-12', rest: 90, rpe: '7-8', note: 'Full range.' },
          { exerciseId: 'lying-leg-curl', sets: 3, reps: '12-15', rest: 60, rpe: '7-8', note: 'Squeeze.' },
          { exerciseId: 'leg-extension', sets: 3, reps: '12-15', rest: 60, rpe: '7-8', note: 'Control.' },
          { exerciseId: 'barbell-hip-thrust', sets: 3, reps: '10-12', rest: 75, rpe: '7-8', note: 'Lockout.' },
          { exerciseId: 'calf-press-machine', sets: 3, reps: '12-15', rest: 45, rpe: '8', note: 'Pause.' },
        ],
      },
      {
        label: 'Zone 2 B',
        focus: 'Aerobic base',
        duration: '35-45 min',
        exercises: [
          { exerciseId: 'stationary-bike', sets: 1, reps: '35-45 min', rest: 0, note: 'Zone 2, steady cadence, can hold a conversation.' },
        ],
      },
    ],
  },
  {
    id: 'fighter-return-5day',
    name: 'Fighter Return — 5 Day Weights 3x + Zone 2 2x',
    goal: 'fighter_return',
    daysPerWeek: 5,
    level: 'all',
    split: 'Push-Pull-Legs',
    rationale: FIGHTER_RATIONALE,
    progressionNote: FIGHTER_PROGRESSION,
    restDays:
      'Three lifting days (Push/Pull/Legs) plus two Zone 2 days, two days off. Place a rest day after legs. Keep every cardio minute conversational.',
    days: [
      {
        label: 'Push (Machines)',
        focus: 'Chest, shoulders, triceps',
        duration: '50-60 min',
        exercises: [
          { exerciseId: 'chest-press-machine', sets: 3, reps: '10-12', rest: 90, rpe: '7-8', note: 'Machine first.' },
          { exerciseId: 'shoulder-press-machine', sets: 3, reps: '10-12', rest: 75, rpe: '7-8', note: 'No shrug.' },
          { exerciseId: 'cable-fly', sets: 3, reps: '12-15', rest: 60, rpe: '7-8', note: 'Stretch.' },
          { exerciseId: 'lateral-raises', sets: 3, reps: '12-15', rest: 45, rpe: '8', note: 'Lead elbows.' },
          { exerciseId: 'tricep-pushdown', sets: 3, reps: '12-15', rest: 45, rpe: '8', note: 'Pinned.' },
        ],
      },
      {
        label: 'Pull (Machines)',
        focus: 'Back, biceps',
        duration: '50-60 min',
        exercises: [
          { exerciseId: 'lat-pulldown', sets: 3, reps: '10-12', rest: 90, rpe: '7-8', note: 'Stretch.' },
          { exerciseId: 'seated-cable-row', sets: 3, reps: '10-12', rest: 90, rpe: '7-8', note: 'Squeeze.' },
          { exerciseId: 'face-pulls', sets: 3, reps: '15-20', rest: 45, rpe: '8', note: 'Rear delts.' },
          { exerciseId: 'cable-curl', sets: 3, reps: '12-15', rest: 45, rpe: '8', note: 'Slow eccentric.' },
          { exerciseId: 'back-extension-machine', sets: 3, reps: '12-15', rest: 60, rpe: '7', note: 'Control.' },
        ],
      },
      {
        label: 'Legs (Machines)',
        focus: 'Quads, hamstrings, glutes',
        duration: '55-65 min',
        exercises: [
          { exerciseId: 'leg-press', sets: 4, reps: '10-12', rest: 90, rpe: '7-8', note: 'Full range.' },
          { exerciseId: 'lying-leg-curl', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Squeeze.' },
          { exerciseId: 'leg-extension', sets: 3, reps: '12-15', rest: 60, rpe: '8', note: 'Control.' },
          { exerciseId: 'barbell-hip-thrust', sets: 3, reps: '10-12', rest: 75, rpe: '8', note: 'Lockout.' },
          { exerciseId: 'calf-press-machine', sets: 3, reps: '12-15', rest: 45, rpe: '8', note: 'Pause.' },
        ],
      },
      {
        label: 'Zone 2 A',
        focus: 'Aerobic base',
        duration: '40-50 min',
        exercises: [
          { exerciseId: 'treadmill', sets: 1, reps: '40-50 min', rest: 0, note: 'Zone 2, incline walk, conversational pace.' },
        ],
      },
      {
        label: 'Zone 2 B',
        focus: 'Aerobic base',
        duration: '40-50 min',
        exercises: [
          { exerciseId: 'rowing-machine', sets: 1, reps: '40-50 min', rest: 0, note: 'Zone 2, smooth conversational pace — not a sprint workout.' },
        ],
      },
    ],
  },
];
