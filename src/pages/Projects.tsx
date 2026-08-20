const nexusStack = [
  'Electron',
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'PostgreSQL',
  'Ollama',
  'FFmpeg',
  'Whisper.cpp',
  'OpenWakeWord',
  'PowerShell',
  'Windows APIs',
  'pnpm Monorepo',
]

const nexusModules = [
  'AI Brain',
  'Planner',
  'Command Router',
  'Executor',
  'Tool Manager',
  'Memory Engine',
  'Voice Engine',
  'Wake Word Engine',
  'Audio Capture',
  'Speech Recognition',
  'Text-to-Speech',
  'Automation Layer',
  'Database Layer',
  'Security Layer',
]

const otherProjects = [
  'Sudoku Solver',
  'Power switching using DPDT relay',
  'Security door lock system using transistors and SPDT relay',
  'Burglar Alarm using PIR sensor and transistor',
  'Elevator controller using FPGA',
  'Object Detection using OpenCV',
  'Molasses Tank',
]

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 space-y-2.5">
      {items.map((p) => (
        <li key={p} className="flex gap-3 text-sm leading-relaxed text-mute">
          <span className="mt-2 h-1 w-1 shrink-0 bg-signal" />
          <span>{p}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Projects() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <p className="label-mono animate-fade-up">04 — Build</p>
      <h1 className="page-title animate-fade-up-delay-1 mt-2">Projects</h1>
      <p className="animate-fade-up-delay-2 mt-3 max-w-xl text-mute">
        Selected builds across AI, web, IoT, and systems.
      </p>

      {/* Nexus AI */}
      <article className="panel animate-fade-up-delay-3 mt-12 p-6 sm:p-8">
        <span className="font-mono text-[0.65rem] text-mute">FEATURED · BUILT FROM SCRATCH</span>
        <h2 className="mt-1 text-2xl font-semibold text-ink sm:text-3xl">
          Nexus AI — Enterprise-Grade Desktop AI Assistant
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mute sm:text-base">
          Privacy-focused, offline-capable AI desktop assistant built completely from scratch with a
          modular enterprise architecture. It understands natural language, executes system commands,
          automates workflows, and interacts with desktop applications through voice or text — powered
          by a local LLM (Ollama), with no reliance on assistant frameworks.
        </p>

        <div className="mt-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-signal">Core Stack</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {nexusStack.map((t) => (
              <span key={t} className="skill-chip">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-mono text-xs uppercase tracking-widest text-signal">Architecture</h3>
          <p className="mt-2 text-sm text-mute">
            Modular service-oriented design — every major capability isolated into independent services.
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {nexusModules.map((m) => (
              <span key={m} className="skill-chip">
                {m}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-signal">AI Engine</h3>
            <BulletList
              items={[
                'Local LLM via Ollama with dynamic prompt generation',
                'Context-aware, multi-turn conversations with history',
                'Natural language command understanding & intelligent task planning',
                'Structured execution plans instead of hardcoded intent matching',
              ]}
            />
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-signal">
              Planner & Execution
            </h3>
            <BulletList
              items={[
                'AI-based planning with dynamic command selection',
                'Parameter extraction and multi-step task execution',
                'Modular command routing with extensible registry',
                'Automatic tool discovery and orchestration',
              ]}
            />
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-signal">
              Voice Assistant
            </h3>
            <BulletList
              items={[
                'Wake word detection with continuous mic listening',
                'Streaming audio capture and FFmpeg processing pipeline',
                'Speech-to-text via Whisper.cpp',
                'AI command processing with text-to-speech responses',
              ]}
            />
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-signal">Memory System</h3>
            <BulletList
              items={[
                'Persistent memory across conversations (profile, prefs, facts, relationships)',
                'Automatic memory extraction, validation, and scoring',
                'Context retrieval for smarter responses',
                'PostgreSQL-backed conversation history and AI context',
              ]}
            />
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-mono text-xs uppercase tracking-widest text-signal">
            Desktop Automation
          </h3>
          <BulletList
            items={[
              'Launch apps, control volume & brightness via Windows APIs / PowerShell',
              'Screenshots, clipboard management, and desktop notifications',
              'Battery info and system-level command execution',
              'Extensible, plugin-ready automation layer',
            ]}
          />
        </div>

        <div className="mt-8 border-t border-[var(--border)] pt-6">
          <h3 className="font-mono text-xs uppercase tracking-widest text-signal">
            Development Highlights
          </h3>
          <BulletList
            items={[
              'Built entirely from scratch — custom AI orchestration, planner, and executor',
              'Local-first inference for privacy and offline support',
              'Strong TypeScript typing, dependency isolation, and scalable monorepo structure',
              'Enterprise principles: modular architecture, reusable services, maintainable codebase',
              
            ]}
            
          />
          <br></br>
        </div>

          <div className="aspect-video w-full bg-void">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/Bf-m1f3wM6U"
            title="Nexus App Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        
      </article>

      {/* Food Delivery */}
      <article className="panel mt-8 overflow-hidden p-0">
        <div className="border-b border-[var(--border)] p-6 sm:p-8">
          <span className="font-mono text-[0.65rem] text-mute">FEATURED</span>
          <h2 className="mt-1 text-2xl font-semibold text-ink">Food Delivery App (MERN)</h2>
          <BulletList
            items={[
              'Responsive MERN app to simplify food ordering for customers and restaurant owners.',
              'Location-based ordering, menu customization, search, filters, interactive ordering UI.',
              'Cart updates allow removing items before checkout. Conditional Navbar states.',
            ]}
          />

          <div className="mt-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-signal">
              Future Enhancements
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Loyalty programs', 'Payment options', 'Admin dashboard'].map((t) => (
                <span key={t} className="skill-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="aspect-video w-full bg-void">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/Kdfp-EkRTWs?si=5UO0xPSuyr0FIs18"
            title="Food Delivery App Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </article>

      {/* Janjua Brothers */}
      <article className="panel mt-8 overflow-hidden p-0">
        <div className="border-b border-[var(--border)] p-6 sm:p-8">
          <span className="font-mono text-[0.65rem] text-mute">WEB · REACT + TYPESCRIPT</span>
          <h2 className="mt-1 text-2xl font-semibold text-ink">
            Janjua Brothers & Enterprises — Corporate Website
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-mute sm:text-base">
            A modern, responsive corporate website for a construction and enterprise company, built
            with React, TypeScript, and Tailwind CSS. The site presents services, project highlights,
            and company credibility through a clean, professional layout designed for trust and
            lead generation.
          </p>
          <BulletList
            items={[
              'Fully responsive layout optimized for desktop, tablet, and mobile.',
              'Service-focused sections showcasing construction and enterprise offerings.',
              'Modern UI with Tailwind CSS — consistent typography, spacing, and visual hierarchy.',
              'Type-safe React components for maintainable, scalable frontend architecture.',
            ]}
          />
          <div className="mt-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-signal">Stack</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'Responsive Design'].map((t) => (
                <span key={t} className="skill-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <a
            href="https://janjuabrotherss.com/"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost mt-6 inline-flex"
          >
            Visit Live Site →
          </a>
        </div>

        <div className="aspect-video w-full bg-void">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/r1Pnm8RFpSo"
            title="Janjua Brothers React TypeScript Website Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </article>

      {/* Pakcelerant Landing Page */}
      <article className="panel mt-8 overflow-hidden p-0">
        <div className="border-b border-[var(--border)] p-6 sm:p-8">
          <span className="font-mono text-[0.65rem] text-mute">WEB · REACT + TYPESCRIPT</span>
          <h2 className="mt-1 text-2xl font-semibold text-ink">Pakcelerant — Landing Page</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-mute sm:text-base">
            A polished marketing landing page for Pakcelerant, built with React, TypeScript, and
            Tailwind CSS. Designed to communicate the brand value proposition clearly, drive user
            engagement, and convert visitors through a focused, high-impact single-page experience.
          </p>
          <BulletList
            items={[
              'Conversion-focused landing page with clear hero, features, and call-to-action sections.',
              'Smooth, modern UI built with Tailwind CSS utility-first styling.',
              'Component-based React architecture with full TypeScript type safety.',
              'Responsive design ensuring a consistent experience across all screen sizes.',
            ]}
          />
          <div className="mt-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-signal">Stack</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'Landing Page'].map((t) => (
                <span key={t} className="skill-chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="aspect-video w-full bg-void">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/QbzmnuwB6aM"
            title="Pakcelerant Landing Page Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </article>

      {/* FYP */}
      <article className="panel mt-8 p-6 sm:p-8">
        <span className="font-mono text-[0.65rem] text-mute">09/2021 — 06/2022</span>
        <h2 className="mt-1 text-xl font-semibold text-ink sm:text-2xl">
          FYP: IoT Based Smart Highway
        </h2>
        <BulletList
          items={[
            'IoT Based Smart Street Lights — cloud-controlled with sensor data.',
            'Speed Detection — upload details to cloud.',
            'Automatic watering system for roadside plants.',
          ]}
        />
      </article>

      <section className="mt-8">
        <div className="panel p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-ink">Other Projects</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {otherProjects.map((p) => (
              <span key={p} className="skill-chip">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
