// Lower-body accessory smart circuit machines (hips and calves).
// NOTE (context only, never rendered): modeled on motorized guided-circuit
// systems such as EGYM-style machines. No brand names in any data string.

export const accessorySmartMachines = [
  {
    id: 'smart-hip-abduction',
    name: 'Smart Hip Abduction',
    circuitPosition: 15,
    muscles: { primary: ['hip-abductors'], secondary: ['glutes'] },
    howItWorks:
      'Motor-controlled pads resist your legs pushing outward, isolating the outer hips and glutes. Your strength profile sets the load, applied evenly opening and closing.',
    setup: [
      'Sit fully back so your outer thighs rest against the pads.',
      'Set the pad width so you start with legs together.',
    ],
    cues: [
      'Push the knees apart by squeezing the outer hips.',
      'Keep your back against the seat.',
      'Return slowly to the start under control.',
    ],
    commonMistakes: [
      'Leaning forward to force the legs wider.',
      'Letting the pads slam back together.',
    ],
    whyUseful:
      'Strengthens the hip stabilizers that protect the knees, with a guided motion and load that auto-progresses.',
    freeWeightEquivalent: 'hip-abduction-machine',
  },
  {
    id: 'smart-hip-adduction',
    name: 'Smart Hip Adduction',
    circuitPosition: 16,
    muscles: { primary: ['hip-adductors'], secondary: [] },
    howItWorks:
      'A motor resists your legs squeezing inward against pads, isolating the inner thighs. The tested load stays constant through the squeeze and the controlled return.',
    setup: [
      'Sit back so your inner thighs rest against the pads.',
      'Set the pad width to a comfortable open starting stretch.',
    ],
    cues: [
      'Squeeze the knees together using the inner thighs.',
      'Keep your torso upright against the seat.',
      'Open slowly back to the start.',
    ],
    commonMistakes: [
      'Starting with the legs too wide and straining the groin.',
      'Letting the pads spring open uncontrolled.',
    ],
    whyUseful:
      'Builds the inner-thigh adductors safely with a fixed range, and the system increases load as you adapt.',
    freeWeightEquivalent: 'hip-adduction-machine',
  },
  {
    id: 'smart-calf-press',
    name: 'Smart Calf Press',
    circuitPosition: 17,
    muscles: { primary: ['calves'], secondary: [] },
    howItWorks:
      'A motor resists ankle extension as you press through the balls of your feet, isolating the calves. Your calibrated load is applied smoothly and each raise is counted.',
    setup: [
      'Place the balls of your feet on the platform edge with heels free.',
      'Adjust the seat or pad so your legs are positioned for a full press.',
    ],
    cues: [
      'Press up onto the balls of your feet as high as possible.',
      'Pause at the top for a strong contraction.',
      'Lower slowly to a deep heel stretch.',
    ],
    commonMistakes: [
      'Bouncing through short, fast reps.',
      'Bending the knees to cheat the press.',
    ],
    whyUseful:
      'Provides a full calf range with consistent resistance, and auto-progression keeps the calves challenged over time.',
    freeWeightEquivalent: 'calf-press-machine',
  },
];
