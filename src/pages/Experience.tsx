export default function Experience() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg ring-1 ring-blue-200/50 p-6">
      <h1 className="text-2xl font-semibold text-gray-900">Work Experience</h1>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Pakcelerant</h2>
        <div className="mt-1 text-gray-700">Full Stack Engineer</div>
        <ul className="mt-3 list-disc pl-6 space-y-2 text-gray-700">
          <li>
            Developed and maintained robust, scalable web applications across frontend and backend,
            ensuring seamless user experiences.
          </li>
          <li>Worked with PostgreSQL, MySQL, and MongoDB.</li>
          <li>Linux, Docker, Git.</li>
        </ul>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold">Internships</h2>

        <div className="mt-4">
          <h3 className="font-medium">Zimco</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Internet of Things (IoT)</li>
            <li>Power Systems</li>
            <li>Augmented Reality</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="font-medium">Quantum Mechanics</h3>
          <p className="text-gray-700">Supervised team performing the following tasks:</p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Structure building for solar</li>
            <li>Fitting of the panels</li>
            <li>Wiring of panels</li>
            <li>Connection of inverter</li>
            <li>System of net metering</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="font-medium">Zaka Solutions</h3>
          <div className="text-gray-700">Sales Agent</div>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Marketing/sales of solar panels in US.</li>
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="font-medium">Seminar</h3>
          <div className="text-gray-700">Wireless Communication — International Islamic University</div>
        </div>
      </section>
      </div>
    </main>
  )
}


