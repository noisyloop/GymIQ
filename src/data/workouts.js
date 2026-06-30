// Aggregator for all GymIQ workout plans. Plans are split by goal into part
// files under ./workouts/ and combined here, alongside goal/day metadata and
// lookup helpers consumed by the plan-builder UI.

import { fatLossPlans } from './workouts/fatLoss.js';
import { fatLoss2Plans } from './workouts/fatLoss2.js';
import { muscleGainPlans } from './workouts/muscleGain.js';
import { muscleGain2Plans } from './workouts/muscleGain2.js';
import { recompPlans } from './workouts/recomp.js';
import { generalFitnessPlans } from './workouts/generalFitness.js';
import { strengthPlans } from './workouts/strength.js';
import { fighterReturnPlans } from './workouts/fighterReturn.js';

export const workouts = [
  ...fatLossPlans,
  ...fatLoss2Plans,
  ...muscleGainPlans,
  ...muscleGain2Plans,
  ...recompPlans,
  ...generalFitnessPlans,
  ...strengthPlans,
  ...fighterReturnPlans,
];

export const workoutGoals = [
  {
    id: 'fat_loss',
    label: 'Fat Loss',
    description:
      'Preserve muscle in a calorie deficit while adding Zone 2 cardio to burn fat and boost total energy expenditure.',
  },
  {
    id: 'muscle_gain',
    label: 'Muscle Gain',
    description:
      'Build size through progressive overload, sufficient weekly volume per muscle, and a modest calorie surplus.',
  },
  {
    id: 'recomp',
    label: 'Recomp',
    description:
      'Add muscle and shed fat at the same time by lifting hard at maintenance calories with high protein and steady cardio.',
  },
  {
    id: 'general_fitness',
    label: 'General Fitness',
    description:
      'Develop well-rounded strength, conditioning, and movement quality to be fit, healthy, and capable day to day.',
  },
  {
    id: 'strength',
    label: 'Strength',
    description:
      'Get stronger on the big compound lifts with heavy, low-rep work, long rests, and full recovery between sessions.',
  },
  {
    id: 'fighter_return',
    label: 'Fighter Return',
    description:
      'Transition from high-intensity combat conditioning to structured Zone 2 cardio and progressive resistance training.',
  },
];

export const daysOptions = [3, 4, 5, 6];

export const getWorkouts = (goal, days) =>
  workouts.filter((w) => w.goal === goal && w.daysPerWeek === days);

export const getWorkoutById = (id) => workouts.find((w) => w.id === id) || null;
