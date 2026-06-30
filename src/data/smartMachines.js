// Aggregator for smart (motorized, guided) circuit machines.
// Part files live in ./smartMachines/. Machines are exposed ordered by
// circuitPosition ascending. No equipment brand names appear in any data string.

import { upperSmartMachines } from './smartMachines/upper.js';
import { lowerSmartMachines } from './smartMachines/lower.js';
import { accessorySmartMachines } from './smartMachines/accessory.js';
import { coreSmartMachines } from './smartMachines/core.js';

export const smartMachines = [
  ...upperSmartMachines,
  ...lowerSmartMachines,
  ...accessorySmartMachines,
  ...coreSmartMachines,
].sort((a, b) => a.circuitPosition - b.circuitPosition);

export const smartMachineIntro = {
  title: 'How Smart Circuit Machines Work',
  paragraphs: [
    'Smart circuit machines are motorized, guided strength stations that set your resistance for you. Instead of a pin-loaded weight stack, an electronic motor applies the load along a fixed movement path, so there is nothing to plate up or rack between exercises.',
    'When you first use the circuit, the system runs a quick strength test on each station to calibrate your starting weight. From then on it loads the right resistance automatically the moment you sit down and recognize your profile.',
    'Every rep is counted on screen and your tempo is guided, which makes these machines especially friendly for beginners: the fixed path keeps your form honest, and you never need a spotter or to guess how much weight to use.',
    'Because the machines log your performance, they auto-progress the resistance over time, nudging the load up as you get stronger so you keep making gains without having to plan it yourself.',
    'Run in circuit mode, the stations are arranged in order so you flow from one to the next, completing a balanced full-body workout in about 30 minutes or less.',
  ],
  circuitNote:
    'Moving through the stations in sequence delivers a balanced, full-body strength workout in roughly 30 minutes or less.',
};

export const getSmartMachineById = (id) =>
  smartMachines.find((m) => m.id === id) || null;
