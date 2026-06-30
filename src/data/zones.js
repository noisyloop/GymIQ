// Heart rate zone definitions plus the science behind each.
// Percentages are of max heart rate (HRmax). The HR calculator in
// src/calculators/hrZones.js consumes pctMin/pctMax to produce bpm ranges.

export const zones = [
  {
    id: 1,
    name: 'Zone 1 — Recovery',
    pctMin: 50,
    pctMax: 60,
    color: 'blue-400',
    fuelSource: 'Primarily fat, very low total burn',
    feel: 'Very easy. You could hold a full conversation or sing. Barely breaking a sweat.',
    bestFor: ['Active recovery', 'Warm-ups and cool-downs', 'Beginners building a base'],
    typicalActivities: ['Easy walking', 'Light cycling', 'Gentle mobility work'],
    scienceNote:
      'Zone 1 is restorative, not stimulating. Blood flow increases enough to clear metabolic waste and deliver nutrients to recovering muscle without adding fatigue. Use it on rest days or between hard sessions — it accelerates recovery rather than competing with it.',
  },
  {
    id: 2,
    name: 'Zone 2 — Aerobic Base / Fat Burn',
    pctMin: 60,
    pctMax: 70,
    color: 'teal-400',
    fuelSource: 'Maximal fat oxidation — the highest percentage of energy from fat',
    feel: 'Comfortable. You can talk in full sentences but not sing. Nose breathing is sustainable. This is the "talk test" zone.',
    bestFor: ['Fat loss', 'Building aerobic base', 'Mitochondrial density', 'Endurance foundation'],
    typicalActivities: ['Brisk walking on an incline', 'Steady-state cycling', 'Easy jogging', 'Rowing at a conversational pace'],
    scienceNote:
      'Zone 2 is where the body burns the highest PERCENTAGE of energy from fat — this is "fat oxidation," meaning your mitochondria are preferentially using fatty acids rather than stored glycogen. It does not mean you are "melting fat" in real time; it means you are training the metabolic machinery that makes you better at using fat as fuel all day long. ' +
      'If you come from combat sports or martial arts, almost everything you did was Zone 3 or higher — bag work, pad rounds, sparring, and circuits all drive heart rate well past the aerobic threshold. That conditioning is a genuine asset, but it skips the slow, boring base-building that Zone 2 provides. ' +
      'The research-backed target for fat loss and aerobic base building is 2–4 hours per week of Zone 2. It feels almost too easy — that is the point. Most people unknowingly drift into Zone 3 and miss the specific adaptation. Keep it conversational and let volume, not intensity, do the work.',
  },
  {
    id: 3,
    name: 'Zone 3 — Tempo / Aerobic Power',
    pctMin: 70,
    pctMax: 80,
    color: 'yellow-400',
    fuelSource: 'A mix of fat and glycogen, shifting toward glycogen',
    feel: 'Moderately hard. You can speak in short phrases but not full sentences. Breathing is noticeably elevated. This is "comfortably uncomfortable."',
    bestFor: ['Aerobic power', 'Race-pace adaptations', 'Time-efficient conditioning', 'Sport-specific work capacity'],
    typicalActivities: ['Tempo runs', 'Heavy bag rounds', 'Sparring', 'Spin classes', 'Circuit training'],
    scienceNote:
      'Zone 3 is sometimes called the "gray zone" — too hard to maximize fat oxidation, too easy to drive top-end fitness — but that framing is misleading. Zone 3 is excellent for aerobic power, race-pace familiarity, and time-efficient conditioning. ' +
      'It increasingly relies on glycogen, which means progressive glycogen depletion over a session, and it generates meaningful EPOC (Excess Post-exercise Oxygen Consumption) — the elevated metabolism that continues for hours after you stop, raising total daily calorie burn. ' +
      'Zone 3 is not "bad." It is context-dependent. The trap is living there by accident: doing every session at a moderately hard effort so nothing is easy enough to recover from and nothing is hard enough to spike peak fitness. Combat athletes already get plenty of Zone 3 — for them the missing piece is Zone 2 below it and true intervals above it.',
  },
  {
    id: 4,
    name: 'Zone 4 — Threshold',
    pctMin: 80,
    pctMax: 90,
    color: 'orange-400',
    fuelSource: 'Predominantly glycogen',
    feel: 'Hard. Talking is reduced to single words. You are at or near your lactate threshold — the point where lactate starts accumulating faster than you can clear it.',
    bestFor: ['Raising lactate threshold', 'Sustained high-end performance', 'Competitive endurance'],
    typicalActivities: ['Threshold intervals (e.g. 4×4 min)', 'Hard sustained efforts', 'Time trials'],
    scienceNote:
      'Zone 4 trains your lactate threshold — the highest intensity you can sustain before fatigue accelerates. Raising this threshold lets you hold a faster pace for longer. It is potent but costly: sessions are demanding and require real recovery. A little goes a long way, and it should sit on top of a solid Zone 2 base rather than replace it.',
  },
  {
    id: 5,
    name: 'Zone 5 — VO₂ Max / Maximal',
    pctMin: 90,
    pctMax: 100,
    color: 'red-500',
    fuelSource: 'Almost entirely glycogen (anaerobic)',
    feel: 'Maximal. You cannot talk. Sustainable only for seconds to a couple of minutes. All-out effort.',
    bestFor: ['VO₂ max', 'Peak power', 'Top-end speed'],
    typicalActivities: ['Short all-out intervals (e.g. 30s–2min)', 'Hill sprints', 'Assault bike sprints'],
    scienceNote:
      'Zone 5 develops VO₂ max — the ceiling of how much oxygen your body can use — and peak power. It is the most stressful zone on the body and the central nervous system. Limit it to 1–2 sessions per week maximum. More than that, without exceptional recovery, tips quickly into overtraining: stalled progress, poor sleep, elevated resting heart rate, and injury risk. Quality over quantity — a few well-recovered hard intervals beat a pile of mediocre ones.',
  },
]

export const getZoneById = (id) => zones.find((z) => z.id === id) || null
