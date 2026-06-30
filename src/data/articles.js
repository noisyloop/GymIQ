// Aggregator for all GymIQ knowledge articles.
// Articles are authored in category part files and combined here in the
// canonical display order used across the app.

import { cardioArticles } from './articles/cardio.js';
import { nutritionArticles } from './articles/nutrition.js';
import { strengthArticles } from './articles/strength.js';
import { recoveryFighterArticles } from './articles/recoveryFighter.js';

const byId = (list, id) => list.find((a) => a.id === id);

// Canonical order as specified by the content plan (1-12).
export const articles = [
  byId(cardioArticles, 'zone-2-cardio'),
  byId(cardioArticles, 'ten-thousand-steps-myth'),
  byId(nutritionArticles, 'calorie-deficit-101'),
  byId(nutritionArticles, 'protein-non-negotiable'),
  byId(strengthArticles, 'machines-vs-free-weights'),
  byId(strengthArticles, 'progressive-overload'),
  byId(cardioArticles, 'cardio-machine-comparison'),
  byId(nutritionArticles, 'body-recomposition'),
  byId(recoveryFighterArticles, 'doms-vs-injury'),
  byId(recoveryFighterArticles, 'sauna-cold-massage'),
  byId(strengthArticles, 'smart-circuit-machines-guide'),
  byId(recoveryFighterArticles, 'fighters-transition'),
];

export const articleCategories = ['Cardio', 'Nutrition', 'Strength', 'Recovery', 'Fighter'];

export const getArticleById = (id) => articles.find((a) => a.id === id) || null;
