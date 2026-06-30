import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Clock, CheckCircle2 } from 'lucide-react'
import { articles, getArticleById } from '../data/articles.js'
import { ArticleCard } from '../components/ArticleCard.jsx'

export function Article() {
  const { id } = useParams()
  const article = getArticleById(id)

  if (!article) {
    return (
      <div className="text-center">
        <p className="text-gray-400">Article not found.</p>
        <Link to="/knowledge" className="mt-3 inline-block text-teal-400 hover:underline">
          ← Back to Knowledge
        </Link>
      </div>
    )
  }

  const related = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 2)

  return (
    <article>
      <Link
        to="/knowledge"
        className="inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-teal-400"
      >
        <ArrowLeft className="h-4 w-4" />
        Knowledge
      </Link>

      <div className="mt-4 flex items-center gap-3 text-xs">
        <span className="rounded-full bg-teal-400/15 px-2 py-0.5 font-medium text-teal-300">
          {article.category}
        </span>
        <span className="flex items-center gap-1 text-gray-500">
          <Clock className="h-3 w-3" />
          {article.readingTime} min read
        </span>
      </div>

      <h1 className="mt-2 text-3xl font-bold tracking-tight">{article.title}</h1>
      <p className="mt-2 text-lg text-gray-400">{article.summary}</p>

      <div className="mt-6 space-y-6">
        {article.sections.map((s, i) => (
          <section key={i}>
            <h2 className="text-xl font-semibold text-gray-100">{s.heading}</h2>
            {s.body.split('\n\n').map((para, j) => (
              <p key={j} className="mt-2 leading-relaxed text-gray-300">
                {para}
              </p>
            ))}
          </section>
        ))}
      </div>

      {article.takeaways?.length > 0 && (
        <div className="mt-8 rounded-xl border border-teal-500/40 bg-teal-500/10 p-5">
          <h2 className="font-semibold text-teal-300">Key takeaways</h2>
          <ul className="mt-3 space-y-2">
            {article.takeaways.map((t, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-200">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-teal-400" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {related.length > 0 && (
        <div className="mt-8">
          <h2 className="mb-3 text-lg font-semibold">Related articles</h2>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {related.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
