const education = [
  {
    title: 'BSc Electrical Engineering',
    place: 'International Islamic University Islamabad',
    result: 'CGPA 3.33',
  },
  {
    title: 'FSc (Pre-Engineering)',
    place: 'Scienta Vision College G-10/4',
    result: 'Overall Grade A1',
  },
  {
    title: 'Matric',
    place: 'Islamabad Model College For Boys G-11/1',
    result: 'Overall Grade A1',
  },
]

export default function Education() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <p className="label-mono animate-fade-up">02 — Academia</p>
      <h1 className="page-title animate-fade-up-delay-1 mt-2">Education</h1>
      <p className="animate-fade-up-delay-2 mt-3 max-w-xl text-mute">
        Academic path from foundation to engineering.
      </p>

      <ol className="animate-fade-up-delay-3 relative mt-12 space-y-0 border-l border-[var(--border)] pl-8">
        {education.map((item, i) => (
          <li key={item.title} className="relative pb-10 last:pb-0">
            <span className="timeline-dot" />
            <div className="panel p-5 sm:p-6">
              <span className="font-mono text-[0.65rem] text-mute">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h2 className="mt-1 text-xl font-semibold text-ink">{item.title}</h2>
              <p className="mt-1 text-sm text-mute">{item.place}</p>
              <p className="mt-3 font-mono text-sm text-signal">{item.result}</p>
            </div>
          </li>
        ))}
      </ol>
    </main>
  )
}
