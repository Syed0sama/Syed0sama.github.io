export default function Resume() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <p className="label-mono animate-fade-up">06 — Docs</p>
      <h1 className="page-title animate-fade-up-delay-1 mt-2">Resume</h1>
      <p className="animate-fade-up-delay-2 mt-3 max-w-xl text-mute">
        Download the latest CV as PDF.
      </p>

      <div className="panel animate-fade-up-delay-3 relative mt-12 overflow-hidden p-8 sm:p-12">
        <div className="scan-overlay" aria-hidden />
        <div className="relative z-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-xs text-signal">SYED_MUHAMMAD_OSAMA.pdf</p>
            <p className="mt-2 max-w-md text-sm text-mute">
              Full stack engineering experience, SAP HANA work, and project highlights — ready to share.
            </p>
          </div>
          <a href="/Syed Muhammad Osama.pdf" download className="btn-primary shrink-0">
            Download CV / Resume
          </a>
        </div>
      </div>
    </main>
  )
}
