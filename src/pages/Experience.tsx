const roles = [
  {
    company: 'TMC (TallyMarks Consultancy)',
    title: 'SAP HANA & ABAP Developer',
    points: [
      'Designed and implemented SAP HANA SQLScript procedures for large-scale data transformation, automation, and backend optimization across multiple business domains.',
      'Developed and deployed full-stack applications using React.js, Node.js, PostgreSQL, and MongoDB, integrating data-driven logic and REST APIs.',
      'Focused on scalable architecture, clean code practices, and performance tuning for enterprise and web-based solutions.',
      'Actively exploring system scalability, process automation, and API integration.',
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
    company: 'Pakcelerant',
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
