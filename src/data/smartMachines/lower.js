// Lower-body smart circuit machines.
// NOTE (context only, never rendered): modeled on motorized guided-circuit
// systems such as EGYM-style machines. No brand names in any data string.

export const lowerSmartMachines = [
  {
    id: 'smart-leg-press',
    name: 'Smart Leg Press',
    circuitPosition: 9,
    muscles: { primary: ['quads', 'glutes'], secondary: ['hamstrings'] },
    howItWorks:
      'A motor applies pushing resistance through a fixed leg-press track, so there is no plate loading. The machine sets your tested load and counts each press, controlling the lowering speed.',
    setup: [
      'Adjust the seat so your knees bend to about 90 degrees at the start.',
      'Place your feet shoulder-width on the platform.',
      'Confirm your back and hips are flat against the pad.',
    ],
    cues: [
      'Press through your whole foot, driving with the heels.',
      'Stop just short of locking the knees.',
      'Lower under control until thighs reach the start angle.',
    ],
    commonMistakes: [
      'Letting the knees cave inward under load.',
      'Lifting the hips off the seat at the bottom.',
    ],
    whyUseful:
      'A safe, back-supported way to build serious leg strength for beginners, with resistance that auto-progresses each session.',
    freeWeightEquivalent: 'leg-press',
  },
  {
    id: 'smart-squat',
    name: 'Smart Guided Squat',
    circuitPosition: 10,
    muscles: { primary: ['quads', 'glutes'], secondary: ['hamstrings', 'core'] },
    howItWorks:
      'Motorized shoulder pads guide a vertical squat path with electronically controlled resistance, removing the need to balance a barbell. Your calibrated load is applied automatically and reps are tracked.',
    setup: [
      'Set the shoulder pads to rest snugly on your traps when standing tall.',
      'Position your feet shoulder-width under the pads.',
    ],
    cues: [
      'Sit back and down, keeping the chest up.',
      'Push the floor away through mid-foot to stand.',
      'Keep knees tracking over your toes.',
    ],
    commonMistakes: [
      'Letting the heels rise at the bottom.',
      'Rounding the lower back as you descend.',
    ],
    whyUseful:
      'Delivers the benefits of squatting with a balanced, guided path and no spotter, making a key movement accessible to beginners.',
    freeWeightEquivalent: 'barbell-squat',
  },
  {
    id: 'smart-leg-extension',
    name: 'Smart Leg Extension',
    circuitPosition: 11,
    muscles: { primary: ['quads'], secondary: [] },
    howItWorks:
      'A motor provides smooth resistance as you straighten the knees against a shin pad, isolating the quads. The tested load is held constant through extension and the return.',
    setup: [
      'Set the back pad so your knees align with the machine pivot.',
      'Adjust the shin pad to rest just above your ankles.',
    ],
    cues: [
      'Straighten the legs by squeezing the quads.',
      'Pause briefly at full extension.',
      'Lower slowly to the start angle.',
    ],
    commonMistakes: [
      'Swinging the torso to throw the weight up.',
      'Dropping the weight quickly on the way down.',
    ],
    whyUseful:
      'Cleanly isolates the quads with a fixed path and steadily increasing load, great for beginners and rehab-style work.',
    freeWeightEquivalent: 'leg-extension',
  },
  {
    id: 'smart-leg-curl',
    name: 'Smart Leg Curl',
    circuitPosition: 12,
    muscles: { primary: ['hamstrings'], secondary: ['calves'] },
    howItWorks:
      'Motor-driven resistance opposes you as you curl the heels toward your glutes, isolating the hamstrings. Load is set from your strength test and tracked rep by rep.',
    setup: [
      'Align your knees with the machine pivot on the seat or bench.',
      'Set the ankle pad to sit just above your heels.',
    ],
    cues: [
      'Curl by squeezing the hamstrings, not the lower back.',
      'Keep your hips pressed into the pad.',
      'Return slowly to a full stretch.',
    ],
    commonMistakes: [
      'Lifting the hips to gain leverage.',
      'Using momentum instead of a controlled curl.',
    ],
    whyUseful:
      'Isolates the hamstrings safely to balance the quads, with automatic progression so the load stays appropriate.',
    freeWeightEquivalent: 'seated-leg-curl',
  },
  {
    id: 'smart-hip-thrust',
    name: 'Smart Hip Thrust',
    circuitPosition: 13,
    muscles: { primary: ['glutes'], secondary: ['hamstrings'] },
    howItWorks:
      'A padded lever driven by a motor resists hip extension as you thrust upward, loading the glutes without a barbell across the hips. Your calibrated load applies smoothly and reps are counted.',
    setup: [
      'Position the hip pad across the front of your hips.',
      'Set your upper back against the support and feet flat on the platform.',
    ],
    cues: [
      'Drive your hips up by squeezing the glutes.',
      'Finish with a flat, neutral torso at the top.',
      'Lower under control without arching the lower back.',
    ],
    commonMistakes: [
      'Overextending and arching the lower back at the top.',
      'Pushing through the toes instead of the heels.',
    ],
    whyUseful:
      'Makes the glute-focused hip thrust easy to set up and scale, with auto-progression building strength session to session.',
    freeWeightEquivalent: 'barbell-hip-thrust',
  },
  {
    id: 'smart-glutes',
    name: 'Smart Glute Kickback',
    circuitPosition: 14,
    muscles: { primary: ['glutes'], secondary: ['hamstrings', 'lower-back'] },
    howItWorks:
      'A motor resists hip extension as you press one leg back against a pad, isolating the glute. The tested load is held even through the kickback and return for each leg.',
    setup: [
      'Set the torso pad so you can hinge forward and stay supported.',
      'Place the working foot or thigh against the resistance pad.',
    ],
    cues: [
      'Press the leg straight back by squeezing the glute.',
      'Keep your hips square and core braced.',
      'Return slowly without arching the lower back.',
    ],
    commonMistakes: [
      'Arching the back to push the leg higher.',
      'Rotating the hips instead of extending straight back.',
    ],
    whyUseful:
      'Targets each glute individually with a guided path, helping beginners fix imbalances while load progresses automatically.',
    freeWeightEquivalent: 'back-extension-machine',
  },
];
