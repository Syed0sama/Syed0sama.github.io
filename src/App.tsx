import { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Education from './pages/Education'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Resume from './pages/Resume'
import './App.css'

const links: { to: string; label: string; end?: boolean }[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/education', label: 'Education' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/resume', label: 'Resume' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link ${isActive ? 'active' : ''}`

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[rgba(6,8,15,0.82)] backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center gap-3 px-4">
        <NavLink to="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-8 w-8 items-center justify-center border border-[var(--border-strong)] bg-[var(--accent-dim)] font-mono text-xs font-medium text-signal">
            SMO
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-wide text-ink sm:inline">
            Syed Osama
          </span>
        </NavLink>

        <button
          type="button"
          className="ml-auto flex h-10 w-10 items-center justify-center border border-[var(--border)] text-mute md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-mono text-lg leading-none">{open ? '×' : '≡'}</span>
        </button>

        <div className="ml-auto hidden items-center gap-1 md:flex">
          {links.map(({ to, label, end }) => (
            <NavLink key={to} to={to} className={linkClass} end={end}>
              {label}
            </NavLink>
          ))}
        </div>
      </nav>

      {open && (
        <div className="border-t border-[var(--border)] bg-[rgba(6,8,15,0.96)] px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                className={linkClass}
                end={end}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="tech-bg min-h-screen text-ink">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <footer className="mt-16 border-t border-[var(--border)]">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-2 px-4 py-8 sm:flex-row sm:items-center sm:gap-4">
            <span className="font-mono text-xs text-mute">
              © {new Date().getFullYear()} Syed Muhammad Osama
            </span>
            <span className="hidden text-mute sm:inline">/</span>
            <a
              href="mailto:syedmuhammadosama581@gmail.com"
              className="font-mono text-xs text-mute transition-colors hover:text-signal"
            >
              syedmuhammadosama581@gmail.com
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}
