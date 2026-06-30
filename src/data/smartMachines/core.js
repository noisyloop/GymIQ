// Core smart circuit machines (trained last in the circuit).
// NOTE (context only, never rendered): modeled on motorized guided-circuit
// systems such as EGYM-style machines. No brand names in any data string.

export const coreSmartMachines = [
  {
    id: 'smart-ab-crunch',
    name: 'Smart Ab Crunch',
    circuitPosition: 18,
    muscles: { primary: ['core'], secondary: ['hip-flexors'] },
    howItWorks:
      'A motor resists spinal flexion as you crunch against a chest pad, isolating the abs. The tested load is applied evenly through the crunch and the controlled return.',
    setup: [
      'Set the seat so the chest pad sits across your upper torso.',
      'Adjust any foot or thigh anchor so your hips stay fixed.',
    ],
    cues: [
      'Curl your ribs toward your pelvis using the abs.',
      'Exhale as you crunch down.',
      'Return slowly to a tall starting stretch.',
    ],
    commonMistakes: [
      'Pulling with the arms or hip flexors instead of the abs.',
      'Using momentum to swing through reps.',
    ],
    whyUseful:
      'Adds safe, scalable resistance to ab training with a guided path, progressing the load automatically as you strengthen.',
    freeWeightEquivalent: 'ab-crunch-machine',
  },
  {
    id: 'smart-back-extension',
    name: 'Smart Back Extension',
    circuitPosition: 19,
    muscles: { primary: ['lower-back'], secondary: ['glutes', 'hamstrings'] },
    howItWorks:
      'A motor resists hip and spinal extension as you press your torso back against a pad, strengthening the lower back. Your calibrated load is held steady through the range.',
    setup: [
      'Set the back pad so it rests across your upper back.',
      'Secure your legs or hips so only your torso moves.',
    ],
    cues: [
      'Extend by driving the torso back with the lower back and glutes.',
      'Stop at a neutral, straight-line spine.',
      'Return forward slowly under control.',
    ],
    commonMistakes: [
      'Hyperextending and overarching at the top.',
      'Jerking the torso back with momentum.',
    ],
    whyUseful:
      'Builds lower-back resilience for posture and lifting with a controlled range, and the load auto-progresses safely.',
    freeWeightEquivalent: 'back-extension-machine',
  },
  {
    id: 'smart-rotary-torso',
    name: 'Smart Rotary Torso',
    circuitPosition: 20,
    muscles: { primary: ['core'], secondary: ['lower-back'] },
    howItWorks:
      'A motor resists trunk rotation as you twist against a padded arm, targeting the obliques. The tested load is applied smoothly in each direction and reps are counted.',
    setup: [
      'Set the seat and pads so your hips stay locked facing forward.',
      'Adjust the starting rotation to a comfortable, neutral position.',
    ],
    cues: [
      'Rotate from your midsection, keeping the hips still.',
      'Move through a controlled, moderate range.',
      'Return slowly and repeat to the other side.',
    ],
    commonMistakes: [
      'Twisting too far and straining the lower back.',
      'Letting the hips rotate with the torso.',
    ],
    whyUseful:
      'Trains the obliques through controlled rotation with a fixed, safe range and resistance that scales automatically.',
    freeWeightEquivalent: 'rotary-torso-machine',
  },
];
