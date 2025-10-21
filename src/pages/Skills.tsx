export default function Skills() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg ring-1 ring-blue-200/50 p-6">
        <h1 className="text-2xl font-semibold text-gray-900">Skills</h1>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {/* Technical Skills */}
          <section>
            <h2 className="text-xl font-semibold">Technical Skills</h2>
            <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-2">
              <li>JavaScript (ES6+)</li>
              <li>React.js & Tailwind CSS</li>
              <li>Node.js & Express.js</li>
              <li>RESTful API Development</li>
              <li>PostgreSQL & MongoDB</li>
              <li>SAP HANA SQLScript & Stored Procedures</li>
              <li>Data Transformation & Automation</li>
              <li>Authentication (JWT, Bcrypt)</li>
              <li>Git, GitHub & Version Control</li>
              <li>Linux & Shell Scripting</li>
              <li>Docker (Basic Containerization)</li>
              <li>AWS (EC2, S3, RDS Basics)</li>
              <li>Performance Optimization & Debugging</li>
            </ul>
          </section>

          {/* Professional & Tool Skills */}
          <section>
            <h2 className="text-xl font-semibold">Professional & Tool Skills</h2>
            <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-2">
              <li>VS Code</li>
              <li>Postman</li>
              <li>DBeaver / pgAdmin</li>
              <li>MongoDB Compass</li>
              <li>Git Bash / Linux Terminal</li>
              <li>JIRA & Agile Workflow</li>
              <li>API Documentation & Testing</li>
              <li>Problem Solving & Debugging</li>
              <li>Database Design & Query Optimization</li>
              <li>Team Collaboration & Communication</li>
              <li>Clean Architecture & Scalable Design Patterns</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
