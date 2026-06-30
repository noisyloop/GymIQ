// SVG donut showing the protein / carbs / fat calorie split.
// Props are gram amounts; the ring is sized by each macro's share of calories.
export function MacroRing({ proteinG, carbsG, fatG }) {
  const segments = [
    { label: 'Protein', grams: proteinG, kcal: proteinG * 4, color: '#2dd4bf' },
    { label: 'Carbs', grams: carbsG, kcal: carbsG * 4, color: '#fbbf24' },
    { label: 'Fat', grams: fatG, kcal: fatG * 9, color: '#fb923c' },
  ]
  const totalKcal = segments.reduce((s, x) => s + x.kcal, 0) || 1

  const radius = 70
  const circumference = 2 * Math.PI * radius
  let offset = 0

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
      <svg viewBox="0 0 180 180" className="h-44 w-44 -rotate-90">
        <circle cx="90" cy="90" r={radius} fill="none" stroke="#1f2937" strokeWidth="20" />
        {segments.map((seg) => {
          const fraction = seg.kcal / totalKcal
          const dash = fraction * circumference
          const el = (
            <circle
              key={seg.label}
              cx="90"
              cy="90"
              r={radius}
              fill="none"
              stroke={seg.color}
              strokeWidth="20"
              strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset={-offset}
            />
          )
          offset += dash
          return el
        })}
      </svg>

      <div className="space-y-2">
        {segments.map((seg) => (
          <div key={seg.label} className="flex items-center gap-2 text-sm">
            <span
              className="inline-block h-3 w-3 rounded-sm"
              style={{ backgroundColor: seg.color }}
            />
            <span className="w-16 text-gray-300">{seg.label}</span>
            <span className="font-mono text-gray-100">{seg.grams} g</span>
            <span className="text-gray-500">
              ({Math.round((seg.kcal / totalKcal) * 100)}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
