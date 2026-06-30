import { useState, useMemo } from 'react'
import { articles, articleCategories } from '../data/articles.js'
import { ArticleCard } from '../components/ArticleCard.jsx'
import { FilterPills } from '../components/FilterPills.jsx'

const ALL = '__all__'

export function Knowledge() {
  const [category, setCategory] = useState(ALL)

  const options = [
    { value: ALL, label: 'All' },
    ...articleCategories.map((c) => ({ value: c, label: c })),
  ]

  const filtered = useMemo(
    () => (category === ALL ? articles : articles.filter((a) => a.category === category)),
    [category],
  )

  return (
    <div>
      <h1 className="text-2xl font-bold">Knowledge</h1>
      <p className="mt-1 text-gray-400">
        {articles.length} science-based articles on training, nutrition, cardio,
        recovery, and the fighter's transition.
      </p>

      <div className="mt-5">
        <FilterPills options={options} value={category} onChange={setCategory} />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
        {filtered.map((a) => (
          <ArticleCard key={a.id} article={a} />
        ))}
      </div>
    </div>
  )
}
