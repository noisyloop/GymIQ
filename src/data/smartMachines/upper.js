// Upper-body smart circuit machines (push then pull).
// NOTE (context only, never rendered): modeled on motorized guided-circuit
// systems such as EGYM-style machines. No brand names in any data string.

export const upperSmartMachines = [
  {
    id: 'smart-chest-press',
    name: 'Smart Chest Press',
    circuitPosition: 1,
    muscles: { primary: ['chest'], secondary: ['shoulders', 'triceps'] },
    howItWorks:
      'A motor controls the load electronically instead of a weight stack, so resistance is applied through a fixed pressing arc. The machine reads your calibrated strength level and sets the weight automatically, counting each rep and timing your set.',
    setup: [
      'Adjust the seat height so the handles align with the middle of your chest.',
      'Set the back pad so your elbows can travel slightly behind your torso.',
      'Confirm your screen profile is loaded before starting.',
    ],
    cues: [
      'Press smoothly without locking the elbows hard at the top.',
      'Keep shoulder blades pulled back against the pad.',
      'Let the machine control the speed on the way back.',
    ],
    commonMistakes: [
      'Flaring elbows straight out to the sides.',
      'Rushing the lowering phase the motor wants to slow.',
    ],
    whyUseful:
      'Beginners get a safe pressing groove with no spotter, and the system nudges resistance up as you get stronger so progress happens automatically.',
    freeWeightEquivalent: 'bench-press',
  },
  {
    id: 'smart-butterfly',
    name: 'Smart Butterfly',
    circuitPosition: 2,
    muscles: { primary: ['chest'], secondary: ['shoulders'] },
    howItWorks:
      'Motorized arms provide even resistance through a wide hugging arc, isolating the chest. The load is set from your strength test and held constant on both the squeeze and the return.',
    setup: [
      'Set the seat so your upper arms are roughly parallel to the floor.',
      'Adjust the arm pads or handles so your elbows start in line with your shoulders.',
    ],
    cues: [
      'Initiate the squeeze with your chest, not your hands.',
      'Pause briefly when the pads meet in front.',
      'Keep a soft, fixed bend in the elbows throughout.',
    ],
    commonMistakes: [
      'Letting the arms snap back too far and straining the shoulder.',
      'Bending and straightening the elbows like a press.',
    ],
    whyUseful:
      'Guides a pure chest isolation that is hard to learn with free weights, and auto-progression keeps the squeeze challenging over time.',
    freeWeightEquivalent: 'cable-fly',
  },
  {
    id: 'smart-shoulder-press',
    name: 'Smart Shoulder Press',
    circuitPosition: 3,
    muscles: { primary: ['shoulders'], secondary: ['triceps', 'traps'] },
    howItWorks:
      'A motor drives the overhead pressing arc with electronically controlled resistance, so there is no stack to rack. It auto-loads your calibrated weight and tracks reps and tempo on screen.',
    setup: [
      'Raise or lower the seat so the handles sit near shoulder height at the start.',
      'Set the back pad upright so you press straight overhead.',
    ],
    cues: [
      'Press up and slightly inward without locking out aggressively.',
      'Keep your ribs down and core braced.',
      'Lower under control to ear level.',
    ],
    commonMistakes: [
      'Arching the lower back to push heavier loads.',
      'Stopping the press well short of full extension.',
    ],
    whyUseful:
      'Overhead pressing is intimidating with dumbbells; the fixed path and auto-set load let beginners build shoulder strength confidently.',
    freeWeightEquivalent: 'overhead-press',
  },
  {
    id: 'smart-tricep-press',
    name: 'Smart Tricep Press',
    circuitPosition: 4,
    muscles: { primary: ['triceps'], secondary: ['shoulders'] },
    howItWorks:
      'Motor-controlled resistance isolates the triceps through a guided pressdown or dip-style arc. The system holds your calibrated load steady and counts each extension.',
    setup: [
      'Adjust the seat so your upper arms stay pinned at your sides.',
      'Set the handle or pad depth so elbows start near a right angle.',
    ],
    cues: [
      'Extend by straightening the elbows only.',
      'Keep upper arms still against your torso.',
      'Squeeze the triceps at the bottom.',
    ],
    commonMistakes: [
      'Leaning forward and turning it into a chest movement.',
      'Letting the elbows drift forward each rep.',
    ],
    whyUseful:
      'Cleanly isolates the triceps for beginners and steps the resistance up automatically as the muscle adapts.',
    freeWeightEquivalent: 'tricep-pushdown',
  },
  {
    id: 'smart-seated-row',
    name: 'Smart Seated Row',
    circuitPosition: 5,
    muscles: { primary: ['back'], secondary: ['lats', 'biceps', 'rear-delts'] },
    howItWorks:
      'A motor supplies smooth horizontal pulling resistance with no cable stack to load. Your strength profile sets the weight, and the screen tracks each pull and your range.',
    setup: [
      'Set the chest pad so you can reach the handles with arms extended.',
      'Adjust the seat height so the handles line up with your mid-torso.',
    ],
    cues: [
      'Pull your elbows back and drive your shoulder blades together.',
      'Keep your chest against the pad and torso upright.',
      'Control the handles back to a full stretch.',
    ],
    commonMistakes: [
      'Yanking with the lower back instead of the mid-back.',
      'Shrugging the shoulders up toward the ears.',
    ],
    whyUseful:
      'Teaches proper scapular retraction with a guided path, ideal for beginners building back strength and posture.',
    freeWeightEquivalent: 'seated-cable-row',
  },
  {
    id: 'smart-lat-pulldown',
    name: 'Smart Lat Pulldown',
    circuitPosition: 6,
    muscles: { primary: ['lats'], secondary: ['back', 'biceps'] },
    howItWorks:
      'Motorized resistance guides a vertical pulldown arc, applying steady load both pulling down and returning up. The machine auto-sets your weight and logs reps automatically.',
    setup: [
      'Adjust the thigh pad so your legs are secured and you stay seated.',
      'Set the seat height so the handles are within an easy overhead reach.',
    ],
    cues: [
      'Pull the bar toward your upper chest by driving the elbows down.',
      'Lead with the lats, keeping the chest tall.',
      'Let the bar rise under control to a full stretch.',
    ],
    commonMistakes: [
      'Leaning way back and using momentum.',
      'Pulling the bar behind the neck.',
    ],
    whyUseful:
      'A guided, scalable path to building the back for those not yet ready for pull-ups, with resistance that progresses on its own.',
    freeWeightEquivalent: 'lat-pulldown',
  },
  {
    id: 'smart-butterfly-reverse',
    name: 'Smart Reverse Butterfly',
    circuitPosition: 7,
    muscles: { primary: ['rear-delts'], secondary: ['back', 'traps'] },
    howItWorks:
      'Motorized arms move outward and back against even electronic resistance, targeting the rear shoulders. Load comes from your strength test and stays constant through the arc.',
    setup: [
      'Set the chest pad so your arms start straight out in front at shoulder height.',
      'Adjust the seat so your shoulders align with the pivot of the arms.',
    ],
    cues: [
      'Open the arms wide by squeezing the rear delts and mid-back.',
      'Keep a fixed, soft elbow bend the whole time.',
      'Return slowly without letting the arms slam forward.',
    ],
    commonMistakes: [
      'Bending the elbows to cheat the weight back.',
      'Using the lower back to swing the arms open.',
    ],
    whyUseful:
      'Trains the often-neglected rear delts safely and improves posture, with automatic progression keeping it effective.',
    freeWeightEquivalent: 'face-pulls',
  },
  {
    id: 'smart-bicep-curl',
    name: 'Smart Bicep Curl',
    circuitPosition: 8,
    muscles: { primary: ['biceps'], secondary: ['forearms'] },
    howItWorks:
      'A motor delivers controlled curling resistance over a guided arc with a braced upper arm, holding your calibrated load steady up and down while counting reps.',
    setup: [
      'Set the seat so your upper arms rest flat on the pad.',
      'Adjust the handle position so your arms start nearly straight.',
    ],
    cues: [
      'Curl by bending the elbows, keeping upper arms on the pad.',
      'Squeeze the biceps at the top.',
      'Lower fully under control for the full range.',
    ],
    commonMistakes: [
      'Lifting the elbows off the pad to swing the weight.',
      'Cutting the lowering phase short.',
    ],
    whyUseful:
      'Locks the upper arm in place so beginners isolate the biceps correctly, with load that climbs automatically as you progress.',
    freeWeightEquivalent: 'cable-curl',
  },
];
