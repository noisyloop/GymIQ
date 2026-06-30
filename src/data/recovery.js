// Recovery modality data. Science ratings are 1-5 evidence-strength estimates.
// No external calls — all content is baked in.

export const modalities = [
  {
    id: 'sleep',
    name: 'Sleep',
    category: 'systemic',
    gymAvailability: 'free',
    timing: 'nightly',
    optimalProtocol:
      '7-9 hours. Consistent wake time matters more than bedtime. Cool room (65-68°F / 18-20°C). Dark and quiet.',
    scienceRating: 5,
    benefits: [
      'Primary window for muscle protein synthesis and tissue repair',
      'Growth hormone peaks during slow-wave sleep (first 2-3 hours of sleep)',
      'HRV recovery — the clearest signal of adaptation vs overtraining',
      'Cognitive performance: reaction time, decision-making, motivation to train',
      'Cortisol regulation — poor sleep increases cortisol, which impairs fat loss',
    ],
    caveats: [
      'Cannot be replaced or offset by any recovery tool',
      'Sauna, cold plunge, and massage are all secondary to this',
    ],
    bestFor: ['everything'],
    notFor: [],
  },
  {
    id: 'sauna-traditional',
    name: 'Traditional Sauna',
    category: 'heat',
    gymAvailability: 'common',
    timing: 'post-workout',
    optimalProtocol:
      '15-20 min at 150-194°F (65-90°C), within 30-60 min post-workout',
    scienceRating: 4,
    benefits: [
      'Growth hormone amplification (~140% above exercise-only per 2007 JSMSS study)',
      'Accelerated neuromuscular recovery (strength returns ~24-48h faster)',
      'Cardiovascular adaptation (landmark Finnish study: 40% lower all-cause mortality with frequent use)',
      'Heat shock protein production supports muscle protein synthesis',
      'Cortisol normalization and parasympathetic shift',
    ],
    caveats: [
      'Dehydration risk — drink 16-24oz water before and after',
      'Do NOT use pre-workout (impairs performance by 12-15% via dehydration/thermoregulatory load)',
      'Avoid if training twice same day with limited recovery time',
    ],
    bestFor: ['muscle recovery', 'cardiovascular health', 'longevity', 'stress reduction'],
    notFor: ['pre-workout use', 'if already dehydrated', 'immediately before sleep (some people)'],
  },
  {
    id: 'sauna-infrared',
    name: 'Infrared Sauna',
    category: 'heat',
    gymAvailability: 'specialty',
    timing: 'post-workout',
    optimalProtocol:
      '15-20 min at 110-140°F (43-60°C), 3-4x per week post-workout',
    scienceRating: 3,
    benefits: [
      'Lower air temperature than traditional sauna — more comfortable for longer sessions',
      'Infrared light penetrates 1.5-2 inches into muscle tissue, heating from inside',
      'Reduced neuromuscular soreness and improved jump/sprint recovery (2025 University study, 6 weeks)',
      'Milder cardiovascular stress than traditional sauna — suitable for more people',
      'Lactic acid clearance via increased peripheral blood flow',
    ],
    caveats: [
      'Less cardiovascular stimulus than traditional sauna',
      'Research base smaller than traditional sauna',
      'Same dehydration caution applies',
    ],
    bestFor: ['beginners to heat therapy', 'soreness reduction', 'comfort-focused recovery'],
    notFor: ['those seeking maximum cardiovascular benefit (traditional sauna edges it out)'],
  },
  {
    id: 'cold-plunge',
    name: 'Cold Plunge / Ice Bath',
    category: 'cold',
    gymAvailability: 'premium',
    timing: 'post-workout',
    optimalProtocol: '10-15 min at 50-60°F (10-15°C)',
    scienceRating: 3,
    benefits: [
      'Reduces perceived soreness (analgesic effect via slowed nerve conduction)',
      'Reduces acute inflammation and swelling',
      'Psychological resilience and fight-or-flight activation',
      'Useful between same-day or next-day sessions for endurance athletes',
    ],
    caveats: [
      'IMPORTANT: If your goal is muscle hypertrophy (building muscle size), cold plunge AFTER strength training may reduce gains',
      '10 min CWI immediately post-resistance training shown to diminish hypertrophy over 12 weeks (PMC research)',
      'Better for endurance/sport performance context than bodybuilding context',
      'Inflammation after lifting is part of the muscle-building signal — cold suppresses that signal',
    ],
    bestFor: [
      'between-session recovery for athletes',
      'endurance sport recovery',
      'reducing acute injury swelling',
      'sport performance between games',
    ],
    notFor: [
      'immediately after strength training if hypertrophy is the goal',
      'those with cardiovascular conditions without medical clearance',
    ],
  },
  {
    id: 'percussion-massage',
    name: 'Percussion Massager',
    category: 'soft-tissue',
    gymAvailability: 'common',
    timing: 'pre or post workout',
    optimalProtocol:
      '30-60 seconds per muscle group, medium pressure. Pre-workout: activates tissue. Post-workout: flush and relax.',
    scienceRating: 3,
    benefits: [
      'Increases blood flow to targeted muscle',
      'Reduces muscle stiffness and perceived tightness',
      'Pre-workout: improves range of motion without reducing strength (unlike static stretching)',
      'Post-workout: accelerates metabolic waste clearance',
      'Practical and fast — can treat specific tight spots in 2-3 minutes',
    ],
    caveats: [
      'Not a substitute for proper warm-up or cool-down',
      'Avoid bony areas, joints, nerves',
      'Evidence for long-term recovery outcomes is moderate — feels good, probably helps',
    ],
    bestFor: ['localized tightness', 'pre-workout activation', 'travel-friendly recovery', 'hip flexors, lats, calves, quads'],
    notFor: ['acute injuries', 'inflamed areas', 'directly over spine'],
  },
  {
    id: 'compression-boots',
    name: 'Compression Boots',
    category: 'soft-tissue',
    gymAvailability: 'premium',
    timing: 'post-workout',
    optimalProtocol: '20-30 min, moderate pressure, full leg sequence',
    scienceRating: 3,
    benefits: [
      'Sequential pneumatic compression flushes metabolic waste from lower limbs',
      'Reduces leg swelling and heaviness after high-volume training or long runs',
      'Subjective recovery improvement well-documented in athlete populations',
      'Passive — you can do it while eating, watching content, etc.',
    ],
    caveats: [
      'Most accessible at premium gym recovery rooms or via purchase',
      'Evidence strongest for endurance athletes, moderate for strength athletes',
    ],
    bestFor: ['leg day recovery', 'runners', 'cyclists', 'high-volume training days'],
    notFor: ['upper body recovery (different tool needed)'],
  },
  {
    id: 'massage-chair',
    name: 'Massage Chair',
    category: 'soft-tissue',
    gymAvailability: 'common',
    timing: 'post-workout',
    optimalProtocol: '10-20 min, full body or focus program',
    scienceRating: 2,
    benefits: [
      'Reduces perceived muscle tension',
      'Parasympathetic activation — shifts body from stress to recovery mode',
      'Accessible passive recovery that requires no effort',
      'Psychological benefit: reward and decompression after hard training',
    ],
    caveats: [
      'Evidence base weaker than other modalities — mostly subjective benefit',
      'Less targeted than percussion tools or professional massage',
      'Good for general relaxation, not a substitute for sleep or nutrition',
    ],
    bestFor: ['general relaxation', 'stress reduction', 'passive cool-down'],
    notFor: ['acute injuries', 'targeted muscle treatment'],
  },
]

export const recoveryPrinciples = [
  'Sleep is the highest-leverage recovery tool. Nothing replaces it.',
  'Sauna AFTER training is well-supported. Sauna BEFORE training impairs performance.',
  'Cold plunge REDUCES muscle inflammation, which is good for soreness but bad for hypertrophy gains if done right after lifting.',
  'Percussion massagers and compression boots are force multipliers — useful, but only on top of fundamentals.',
  'Recovery is not optional. It is when adaptation actually occurs. Training is the stimulus; sleep and nutrition are the response.',
  'More recovery tools ≠ more results. Prioritize: sleep → nutrition → training quality → everything else.',
]

// Ordered best-to-least by evidence strength for the recovery hierarchy display.
export const recoveryHierarchy = [
  'Sleep',
  'Nutrition timing',
  'Traditional Sauna',
  'Percussion Massager',
  'Cold Plunge',
  'Massage Chair',
]
