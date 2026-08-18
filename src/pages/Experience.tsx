const roles = [
  {
    company: 'TMC (TallyMarks Consultancy)',
    title: 'Associate Consultant – SAP',
    points: [
      'Telenor CMS Project',
      'Engineered high-volume data processing workflows handling millions of transactional records daily, with automated ingestion, transformation, validation, and downstream processing.',
      'Developed Linux Shell-based ETL automation to retrieve source files from SFTP, perform file-level processing, and trigger subsequent database workflows.',
      'Designed and optimized SAP HANA SQL procedures for large-scale data transformation, validation, business-rule execution, and transactional processing.',
      'Implemented automated data pipelines to process transformed datasets and load them into SAP Cloud systems.',
      'Developed a custom real-time commission processing system capable of processing live transactions and posting commissions within approximately 2 seconds.',
      'Built backend services and APIs using Python and Flask, with supporting Python processing scripts and Linux Cron Jobs for scheduled automation and operational workflows.',
      'HEC Project',
      'Developed and maintained SAP ABAP solutions, including Adobe Forms for automated document generation and business reporting requirements.',
    ],
  },
  {
    company: 'Huawei',
    title: 'IP Datacom Engineer',
    points: [
      'Layer 2 protocols (STP, VLAN, ARP, LLDP)',
      'Layer 3 protocols (RIP, OSPF, ISIS, BGP, MPLS)',
      'VPN (MPLS L3 VPN, L2 VPN)',
      'Traffic Engineering (MPLS TE tunnel, HOvpn, Hotstandby Tunnel)',
    ],
  },
  {
    company: 'Pakcelerant (USA-based)',
    title: 'Full Stack Engineer',
    points: [
      'Developed and maintained robust, scalable web applications across frontend and backend, ensuring seamless user experiences.',
      'Worked with PostgreSQL, MySQL, and MongoDB.',
      'Linux, Docker, Git.',
    ],
  },
]

const internships = [
  {
    company: 'Zimco',
    points: ['Internet of Things (IoT)', 'Power Systems', 'Augmented Reality'],
  },
  {
    company: 'Quantum Mechanics',
    note: 'Supervised team performing the following tasks:',
    points: [
      'Structure building for solar',
      'Fitting of the panels',
      'Wiring of panels',
      'Connection of inverter',
      'System of net metering',
    ],
  },
  {
    company: 'Zaka Solutions',
    title: 'Sales Agent',
    points: ['Marketing/sales of solar panels in the U.S.'],
  },
]

export default function Experience() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <p className="label-mono animate-fade-up">03 — Career</p>
      <h1 className="page-title animate-fade-up-delay-1 mt-2">Work Experience</h1>
      <p className="animate-fade-up-delay-2 mt-3 max-w-xl text-mute">
        Enterprise data, networking, and full-stack delivery.
      </p>

      <div className="mt-12 space-y-6">
        {roles.map((role, i) => (
          <article
            key={role.company}
            className={`panel p-6 sm:p-8 ${i === 0 ? 'animate-fade-up-delay-3' : ''}`}
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold text-ink sm:text-2xl">{role.company}</h2>
              <span className="font-mono text-[0.65rem] text-mute">
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
            <p className="mt-1 font-mono text-sm text-signal">{role.title}</p>
            <ul className="mt-5 space-y-2.5">
              {role.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-mute">
                  <span className="mt-2 h-1 w-1 shrink-0 bg-signal" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="mt-14">
        <p className="label-mono">Internships & More</p>
        <h2 className="mt-2 text-2xl font-semibold text-ink">Early Experience</h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {internships.map((item) => (
            <div key={item.company} className="panel p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-ink">{item.company}</h3>
              {'title' in item && item.title && (
                <p className="mt-1 font-mono text-xs text-signal">{item.title}</p>
              )}
              {'note' in item && item.note && (
                <p className="mt-2 text-sm text-mute">{item.note}</p>
              )}
              <ul className="mt-4 space-y-1.5">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm text-mute">
                    <span className="text-signal">›</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="panel p-5 sm:p-6">
            <h3 className="text-lg font-semibold text-ink">Seminar</h3>
            <p className="mt-2 text-sm text-mute">
              Wireless Communication — International Islamic University
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
