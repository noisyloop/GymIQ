// Strength plans — heavy compound lifts in lower rep ranges with long rests.
// Strength is a skill: high intensity, low-to-moderate volume, full recovery.

export const strengthPlans = [
  {
    id: 'strength-3day',
    name: 'Strength — 3 Day Full Body Compound',
    goal: 'strength',
    daysPerWeek: 3,
    level: 'intermediate',
    split: 'Full Body',
    rationale:
      'Strength is built by lifting heavy on the big compound movements frequently enough to refine technique and recruit high-threshold motor units. Three full-body days let you squat, press, and pull each multiple times per week in low rep ranges with long rests for full recovery between sets.',
    restDays:
      'Train Mon/Wed/Fri so each heavy session has a full day of recovery. Avoid stacking heavy days back to back.',
    progressionNote:
      'Run linear progression while you can: add ~2.5 kg to lower-body lifts and ~1-2.5 kg to upper-body lifts each session you hit your target reps. Rest 3-5 min on the main lifts to keep quality high.',
    days: [
      {
        label: 'Day A',
        focus: 'Squat + Press',
        duration: '60-75 min',
        exercises: [
          { exerciseId: 'barbell-squat', sets: 5, reps: '5', rest: 210, rpe: '8', note: 'Main lift, full rest.' },
          { exerciseId: 'bench-press', sets: 5, reps: '5', rest: 180, rpe: '8', note: 'Tight setup.' },
          { exerciseId: 'barbell-row', sets: 3, reps: '6-8', rest: 120, rpe: '8', note: 'Strict.' },
          { exerciseId: 'plank', sets: 3, reps: '45-60 sec', rest: 60, note: 'Anti-extension brace.' },
        ],
      },
      {
        label: 'Day B',
        focus: 'Deadlift + Overhead',
        duration: '60-75 min',
        exercises: [
          { exerciseId: 'conventional-deadlift', sets: 3, reps: '5', rest: 240, rpe: '8', note: 'Reset each rep.' },
          { exerciseId: 'overhead-press', sets: 5, reps: '5', rest: 180, rpe: '8', note: 'Strict, braced.' },
          { exerciseId: 'lat-pulldown', sets: 3, reps: '8-10', rest: 90, rpe: '8', note: 'Stretch.' },
          { exerciseId: 'back-extension-machine', sets: 3, reps: '12-15', rest: 60, rpe: '7', note: 'Control.' },
        ],
      },
      {
        label: 'Day C',
        focus: 'Squat + Press (lighter)',
        duration: '60-75 min',
        exercises: [
          { exerciseId: 'barbell-squat', sets: 4, reps: '6-8', rest: 180, rpe: '7', note: 'Lighter, crisp reps.' },
          { exerciseId: 'overhead-press', sets: 4, reps: '6-8', rest: 150, rpe: '7-8', note: 'Strict.' },
          { exerciseId: 'romanian-deadlift', sets: 3, reps: '8-10', rest: 120, rpe: '7-8', note: 'Hinge.' },
          { exerciseId: 'seated-cable-row', sets: 3, reps: '8-10', rest: 90, rpe: '8', note: 'Squeeze.' },
        ],
      },
    ],
  },
  {
    id: 'strength-4day',
    name: 'Strength — 4 Day Upper/Lower Heavy',
    goal: 'strength',
    daysPerWeek: 4,
    level: 'intermediate',
    split: 'Upper/Lower',
    rationale:
      'A heavy upper/lower split lets you train each lift twice weekly with a heavy day and a lighter volume day — a proven model for steady strength gains. Splitting upper and lower keeps fatigue manageable so you can put full effort into the main barbell lifts.',
    restDays:
      'Train Mon/Tue, rest Wed, train Thu/Fri, weekend off. The mid-week rest day is key for recovering before the second heavy block.',
    progressionNote:
      'Use a heavy/light wave: push the heavy day toward a top set of 3-5 reps and treat the second day as 5-8 rep volume work. Add small increments weekly; when progress stalls, deload 10% and build back.',
    days: [
      {
        label: 'Lower (Heavy)',
        focus: 'Squat strength',
        duration: '65-80 min',
        exercises: [
          { exerciseId: 'barbell-squat', sets: 5, reps: '3-5', rest: 240, rpe: '8-9', note: 'Top heavy set.' },
          { exerciseId: 'romanian-deadlift', sets: 3, reps: '6-8', rest: 150, rpe: '8', note: 'Hinge.' },
          { exerciseId: 'leg-press', sets: 3, reps: '8-10', rest: 120, rpe: '8', note: 'Full range.' },
          { exerciseId: 'calf-press-machine', sets: 3, reps: '10-12', rest: 60, rpe: '8', note: 'Pause.' },
        ],
      },
      {
        label: 'Upper (Heavy)',
        focus: 'Bench/press strength',
        duration: '65-80 min',
        exercises: [
          { exerciseId: 'bench-press', sets: 5, reps: '3-5', rest: 210, rpe: '8-9', note: 'Top heavy set.' },
          { exerciseId: 'barbell-row', sets: 4, reps: '6-8', rest: 150, rpe: '8', note: 'Strict.' },
          { exerciseId: 'overhead-press', sets: 3, reps: '6-8', rest: 120, rpe: '8', note: 'Braced.' },
          { exerciseId: 'pullup', sets: 3, reps: '6-8', rest: 90, rpe: '8', note: 'Full ROM.' },
        ],
      },
      {
        label: 'Lower (Volume)',
        focus: 'Deadlift + accessories',
        duration: '65-80 min',
        exercises: [
          { exerciseId: 'conventional-deadlift', sets: 4, reps: '5', rest: 240, rpe: '8', note: 'Reset each rep.' },
          { exerciseId: 'barbell-squat', sets: 3, reps: '6-8', rest: 180, rpe: '7', note: 'Volume, crisp.' },
          { exerciseId: 'leg-press', sets: 3, reps: '10-12', rest: 90, rpe: '8', note: 'Full range.' },
          { exerciseId: 'seated-leg-curl', sets: 3, reps: '10-12', rest: 60, rpe: '8', note: 'Pause.' },
        ],
      },
      {
        label: 'Upper (Volume)',
        focus: 'Press volume + back',
        duration: '65-80 min',
        exercises: [
          { exerciseId: 'overhead-press', sets: 4, reps: '6-8', rest: 150, rpe: '8', note: 'Strict.' },
          { exerciseId: 'bench-press', sets: 3, reps: '6-8', rest: 150, rpe: '7-8', note: 'Volume.' },
          { exerciseId: 'seated-cable-row', sets: 4, reps: '8-10', rest: 90, rpe: '8', note: 'Squeeze.' },
          { exerciseId: 'lat-pulldown', sets: 3, reps: '8-10', rest: 75, rpe: '8', note: 'Stretch.' },
          { exerciseId: 'skull-crushers', sets: 3, reps: '8-10', rest: 60, rpe: '8', note: 'Controlled.' },
        ],
      },
    ],
  },
];
