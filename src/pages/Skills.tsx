export default function Skills() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg ring-1 ring-blue-200/50 p-6">
      <h1 className="text-2xl font-semibold text-gray-900">Skills</h1>

      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <section>
          <h2 className="text-xl font-semibold">Technical Skills</h2>
          <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>JWT authentication</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>AWS</li>
            <li>Linux</li>
            <li>Git</li>
            <li>Web Apps</li>
            <li>PCB designing</li>
            <li>Apply linear systems theory and analysis</li>
            <li>Develop electrical schematics</li>
            <li>Data collection and analysis</li>
            <li>Creative Problem-Solving</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Software Skills</h2>
          <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
            <li>Visual Studio Code</li>
            <li>Vim</li>
            <li>PyCharm</li>
            <li>Multisim</li>
            <li>LTspice</li>
            <li>MATLAB</li>
            <li>Arduino IDE</li>
            <li>Cisco Packet Tracer</li>
            <li>Proteus</li>
            <li>PSPICE</li>
          </ul>
        </section>
      </div>
      </div>
    </main>
  )
}


