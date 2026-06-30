import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'

const categoryClass = {
  Cardio: 'bg-yellow-400/15 text-yellow-300',
  Nutrition: 'bg-teal-400/15 text-teal-300',
  Strength: 'bg-orange-400/15 text-orange-300',
  Recovery: 'bg-blue-400/15 text-blue-300',
  Fighter: 'bg-red-500/15 text-red-400',
}

// Article preview card linking to /knowledge/:id. `article` from data/articles.js.
export function ArticleCard({ article }) {
  return (
    <Link
      to={`/knowledge/${article.id}`}
      className="flex flex-col rounded-xl border border-gray-800 bg-gray-900 p-4 transition-colors hover:border-gray-700 hover:bg-gray-800"
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <span
          className={`rounded-full px-2 py-0.5 text-xs font-medium ${
            categoryClass[article.category] || 'bg-gray-800 text-gray-300'
          }`}
        >
          {article.category}
        </span>
        <span className="flex items-center gap-1 text-xs text-gray-500">
          <Clock className="h-3 w-3" />
          {article.readingTime} min
        </span>
      </div>
      <h3 className="font-semibold text-gray-100">{article.title}</h3>
      <p className="mt-1 text-sm text-gray-400">{article.summary}</p>
    </Link>
  )
}
