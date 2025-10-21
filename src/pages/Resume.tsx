export default function Resume() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg ring-1 ring-blue-200/50 p-6">
      <h1 className="text-2xl font-semibold text-gray-900">Resume</h1>
      <div className="mt-6">
        <a
          href="/Syed Muhammad Osama.pdf"
          download
          className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors"
        >
          Download CV/Resume
        </a>
      </div>
      </div>
    </main>
  )
}


