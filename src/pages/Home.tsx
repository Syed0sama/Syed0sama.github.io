export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <section className="grid gap-8 md:grid-cols-[220px,1fr] items-start bg-white/80 backdrop-blur rounded-2xl shadow-lg ring-1 ring-blue-200/50 p-6">
        <img
          src="/images/osama1.jpg"
          alt="Syed Muhammad Osama"
          className="w-52 h-52 object-cover rounded-xl shadow-md"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Syed Muhammad Osama</h1>
          <p className="mt-1 text-lg text-blue-600">Portfolio</p>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href="/Syed Muhammad Osama.pdf"
              className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors"
            >
              Download Resume
            </a>
            <a
              href="mailto:syedmuhammadosama581@gmail.com"
              className="inline-flex items-center px-4 py-2 rounded-md border border-blue-500 text-blue-600 hover:bg-blue-50 transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <a href="https://www.linkedin.com/in/syed-osama-4253ba245/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center">
              <img src="/images/ld.jpg" alt="LinkedIn" className="w-8 h-8 object-contain" />
            </a>
            <a href="https://www.facebook.com/syed.osama.5872" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center">
              <img src="/images/fb.jpg" alt="Facebook" className="w-8 h-8 object-contain" />
            </a>
            <a href="https://github.com/Syed0sama/" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center">
              <img src="/images/gi.jpg" alt="GitHub" className="w-8 h-8 object-contain" />
            </a>
            <a href="mailto:syedosama478@gmail.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center">
              <img src="/images/mail.jpg" alt="Email" className="w-8 h-8 object-contain" />
            </a>
            <a href="https://wa.me/923331946617" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center">
              <img src="/images/wh.jpg" alt="WhatsApp" className="w-8 h-8 object-contain" />
            </a>
          </div>
        </div>
      </section>

      <section className="mt-10 bg-white/80 backdrop-blur rounded-2xl shadow-lg ring-1 ring-blue-200/50 p-6">
        <h2 className="text-xl font-semibold text-gray-900">Career Objective</h2>
        <p className="mt-3 text-gray-700 leading-7">
          I am Syed Muhammad Osama, a versatile Full Stack Engineer and SAP HANA Developer with hands-on experience in building scalable web applications and optimizing enterprise-grade data solutions. Over the past year, I have worked on complex data transformation, automation, and backend optimization projects in SAP HANA, while also developing modern React.js and Node.js-based applications using PostgreSQL and MongoDB. 
          
          I’m passionate about creating efficient, data-driven systems and intuitive user interfaces that bridge business logic with real-world performance. My goal is to continue evolving as a developer by contributing to innovative, growth-oriented projects that value clean architecture, performance, and impact.

          Beyond technical expertise, I take pride in my problem-solving mindset and collaborative approach. I enjoy working in agile, cross-functional teams where ideas turn into impactful solutions through creativity and precision. I’m continuously exploring emerging technologies, refining my skills, and striving to deliver work that not only meets requirements but also drives meaningful value for both users and organizations.
        </p>
      </section>
    </main>
  )
}


