import { FaLinkedinIn, FaFacebookF, FaGithub, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Home() {
  return (
    <main id="main">
      {/* Hero — full-bleed composition */}
      <section className="relative min-h-[50vh] overflow-hidden">
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
            Building scalable web systems, local AI assistants, and enterprise data solutions from React & Node to SAP HANA.
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
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://www.facebook.com/syed.osama.5872"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="Facebook"
            >
              <FaFacebookF size={18} />
            </a>
            <a
              href="https://github.com/Syed0sama/"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="mailto:syedosama478@gmail.com"
              className="social-icon"
              aria-label="Email"
            >
              <HiOutlineMail size={18} />
            </a>
            <a
              href="https://wa.me/+923255433729"
              target="_blank"
              rel="noreferrer"
              className="social-icon"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={18} />
            </a>
          </div>
        </div>
        {/* Scroll indicator */}
        
          <a href="#objective"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-mute hover:text-ink transition-colors animate-bounce"
          aria-label="Scroll to next section"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </section>

      {/* Objective */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <section id="objective" className="mx-auto max-w-6xl px-4 py-16"></section>
        <div className="panel p-6 sm:p-8">
          <div className="scan-overlay" aria-hidden />
          <p className="label-mono">01 — Objective</p>
          <h2 className="page-title mt-2">Career Objective</h2>
          <div className="mt-6 max-w-3xl space-y-4 text-[0.95rem] leading-7 text-mute">
            <p>
              I'm Syed Muhammad Osama A Full Stack Engineer specializing in AI-driven applications
              and enterprise data systems. My work spans two worlds: building modern, scalable web
              products with React.js, Node.js, PostgreSQL, and MongoDB, and engineering complex data
              transformation, automation, and backend optimization solutions in SAP HANA for
              enterprise environments.
            </p>
            <p>
              One of my proudest builds is Nexus AI an enterprise-grade desktop AI assistant
              developed entirely from scratch, combining local AI processing with a polished,
              production-ready interface. It reflects how I approach every project: strong
              architecture first, then performance, then the details that make software feel
              genuinely usable.
            </p>
            <p>
              I care deeply about writing clean, maintainable code and designing systems that hold
              up under real-world load not just in demos. Whether I'm optimizing a SAP HANA
              pipeline or shipping a new feature end-to-end, I bring the same problem-solving
              mindset and attention to detail, and I thrive in agile, cross-functional teams where
              ideas move fast and execution matters just as much as vision.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
