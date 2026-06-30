import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout.jsx'
import { Home } from './pages/Home.jsx'
import { Zones } from './pages/Zones.jsx'
import { Exercises } from './pages/Exercises.jsx'
import { SmartMachines } from './pages/SmartMachines.jsx'
import { Workouts } from './pages/Workouts.jsx'
import { Knowledge } from './pages/Knowledge.jsx'
import { Article } from './pages/Article.jsx'
import { Macros } from './pages/Macros.jsx'
import { Recovery } from './pages/Recovery.jsx'

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/zones" element={<Zones />} />
        <Route path="/exercises" element={<Exercises />} />
        <Route path="/smart-machines" element={<SmartMachines />} />
        <Route path="/workouts" element={<Workouts />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/knowledge/:id" element={<Article />} />
        <Route path="/macros" element={<Macros />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  )
}
