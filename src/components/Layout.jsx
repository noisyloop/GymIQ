import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
  Activity,
  Menu,
  X,
  Home,
  HeartPulse,
  Dumbbell,
  Cpu,
  CalendarDays,
  BookOpen,
  Calculator,
  Moon,
} from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home', icon: Home, end: true },
  { to: '/zones', label: 'HR Zones', icon: HeartPulse },
  { to: '/exercises', label: 'Exercises', icon: Dumbbell },
  { to: '/smart-machines', label: 'Smart Machines', icon: Cpu },
  { to: '/workouts', label: 'Workouts', icon: CalendarDays },
  { to: '/knowledge', label: 'Knowledge', icon: BookOpen },
  { to: '/macros', label: 'Macros', icon: Calculator },
  { to: '/recovery', label: 'Recovery', icon: Moon },
]

export function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
      isActive
        ? 'bg-teal-500/15 text-teal-300'
        : 'text-gray-400 hover:bg-gray-800 hover:text-gray-100'
    }`

  return (
    <div className="min-h-screen lg:flex">
      {/* Mobile top bar */}
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-800 bg-gray-950/90 px-4 py-3 backdrop-blur lg:hidden">
        <Link to="/" className="flex items-center gap-2 font-bold">
          <Activity className="h-5 w-5 text-teal-400" />
          GymIQ
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle navigation"
          className="rounded-lg p-1.5 text-gray-300 hover:bg-gray-800"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`${
          mobileOpen ? 'block' : 'hidden'
        } border-b border-gray-800 bg-gray-950 px-3 py-3 lg:sticky lg:top-0 lg:block lg:h-screen lg:w-60 lg:shrink-0 lg:border-b-0 lg:border-r lg:py-6`}
      >
        <Link
          to="/"
          className="mb-6 hidden items-center gap-2 px-3 text-lg font-bold lg:flex"
        >
          <Activity className="h-6 w-6 text-teal-400" />
          GymIQ
        </Link>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={linkClass}
              onClick={() => setMobileOpen(false)}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              {item.label}
            </NavLink>
          ))}
        </nav>
        <p className="mt-6 px-3 text-xs leading-relaxed text-gray-600">
          All data stays on your device. No account. No tracking. No cloud.
        </p>
      </aside>

      {/* Main content */}
      <main className="mx-auto w-full max-w-4xl flex-1 px-4 py-6 sm:px-6 lg:py-10">
        {children}
      </main>
    </div>
  )
}
