import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Resume from './pages/Resume'

function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-white bg-blue-600' : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'}`
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200 shadow-sm">
      <nav className="mx-auto max-w-6xl px-4 flex h-14 items-center gap-2">
        <div className="font-semibold text-blue-600">SMO</div>
        <div className="ml-auto flex gap-1">
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/education" className={linkClass}>Education</NavLink>
          <NavLink to="/experience" className={linkClass}>Experience</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink to="/resume" className={linkClass}>Resume</NavLink>
        </div>
      </nav>
    </header>
  )
}

//

//

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <footer className="border-t border-gray-200 mt-10 bg-white/50">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span>© {new Date().getFullYear()} Syed Muhammad Osama</span>
            <span className="hidden sm:inline">·</span>
            <a href="mailto:syedmuhammadosama581@gmail.com" className="hover:text-blue-600 transition-colors">syedmuhammadosama581@gmail.com</a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}
