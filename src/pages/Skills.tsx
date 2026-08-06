const technical = [
  'JavaScript (ES6+)',
  'React.js & Tailwind CSS',
  'Node.js & Express.js',
  'RESTful API Development',
  'PostgreSQL & MongoDB',
  'SAP HANA SQLScript & Stored Procedures',
  'Data Transformation & Automation',
  'Authentication (JWT, Bcrypt)',
  'Git, GitHub & Version Control',
  'Linux & Shell Scripting',
  'Docker (Basic Containerization)',
  'AWS (EC2, S3, RDS Basics)',
  'Performance Optimization & Debugging',
]

const professional = [
  'VS Code',
  'Postman',
  'DBeaver / pgAdmin',
  'MongoDB Compass',
  'Git Bash / Linux Terminal',
  'JIRA & Agile Workflow',
  'API Documentation & Testing',
  'Problem Solving & Debugging',
  'Database Design & Query Optimization',
  'Team Collaboration & Communication',
  'Clean Architecture & Scalable Design Patterns',
]

export default function Skills() {
  return (
    <main id="main" className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <p className="label-mono animate-fade-up">05 — Stack</p>
      <h1 className="page-title animate-fade-up-delay-1 mt-2">Skills</h1>
      <p className="animate-fade-up-delay-2 mt-3 max-w-xl text-mute">
        Tools and technologies I ship with.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        <section className="panel animate-fade-up-delay-3 p-6 sm:p-8">
          <div className="scan-overlay" aria-hidden />
          <h2 className="text-xl font-semibold text-ink">Technical Skills</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {technical.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="panel p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-ink">Professional & Tools</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {professional.map((skill) => (
              <span key={skill} className="skill-chip">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
