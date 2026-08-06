export default function Home() {
  return (
    <main id="main">
      {/* Hero — full-bleed composition */}
      <section className="relative min-h-[calc(100vh-4rem)] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/osama1.jpg')" }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(6,8,15,0.97)] via-[rgba(6,8,15,0.88)] to-[rgba(6,8,15,0.45)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />

        <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center px-4 py-16">
          <p className="label-mono animate-fade-up">Full Stack Engineer · AI · SAP HANA</p>

          <h1 className="animate-fade-up-delay-1 mt-4 max-w-3xl font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Syed Muhammad{' '}
            <span className="bg-gradient-to-r from-signal to-beam bg-clip-text text-transparent">
              Osama
            </span>
          </h1>

          <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
            Building scalable web systems, local AI assistants, and enterprise data solutions — from React & Node to SAP HANA.
          </p>

          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-3">
            <a href="/Syed Muhammad Osama.pdf" className="btn-primary">
              Download Resume
            </a>
            <a href="mailto:syedmuhammadosama581@gmail.com" className="btn-ghost">
              Contact Me
            </a>
          </div>

          <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-3">
            <a
              href="https://www.linkedin.com/in/syed-osama-4253ba245/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <img src="/images/ld.jpg" alt="" />
            </a>
            <a
              href="https://www.facebook.com/syed.osama.5872"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="Facebook"
            >
              <img src="/images/fb.jpg" alt="" />
            </a>
            <a
              href="https://github.com/Syed0sama/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <img src="/images/gi.jpg" alt="" />
            </a>
            <a
              href="mailto:syedosama478@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <img src="/images/mail.jpg" alt="" />
            </a>
            <a
              href="https://wa.me/923331946617"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="WhatsApp"
            >
              <img src="/images/wh.jpg" alt="" />
            </a>
          </div>
        </div>
      </section>

      {/* Objective */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="panel p-6 sm:p-8">
          <div className="scan-overlay" aria-hidden />
          <p className="label-mono">01 — Objective</p>
          <h2 className="page-title mt-2">Career Objective</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-[0.95rem] leading-7 text-mute">
            <p>
              I am Syed Muhammad Osama, a versatile Full Stack Engineer, AI developer, and SAP HANA
              Developer with hands-on experience in building scalable web applications, local AI systems,
              and optimizing enterprise-grade data solutions. Over the past year, I have worked on complex
              data transformation, automation, and backend optimization projects in SAP HANA, while also
              developing modern React.js and Node.js-based applications using PostgreSQL and MongoDB —
              including Nexus AI, an enterprise-grade desktop AI assistant built from scratch.
            </p>
            <p>
              I’m passionate about creating efficient, data-driven systems and intuitive user interfaces
              that bridge business logic with real-world performance. My goal is to continue evolving as
              a developer by contributing to innovative, growth-oriented projects that value clean
              architecture, performance, and impact.
            </p>
            <p>
              Beyond technical expertise, I take pride in my problem-solving mindset and collaborative
              approach. I enjoy working in agile, cross-functional teams where ideas turn into impactful
              solutions through creativity and precision.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
