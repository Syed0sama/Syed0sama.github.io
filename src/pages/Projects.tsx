export default function Projects() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <div className="bg-white/80 backdrop-blur rounded-2xl shadow-lg ring-1 ring-blue-200/50 p-6">
      <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Food Delivery App (MERN)</h2>
        <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-2">
          <li>
            Responsive MERN app to simplify food ordering for customers and restaurant owners.
          </li>
          <li>Location-based ordering, menu customization, search, filters, interactive ordering UI.</li>
          <li>Cart updates allow removing items before checkout. Conditional Navbar states.</li>
        </ul>

        <div className="mt-4">
          <h3 className="font-medium">Future Enhancements</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Loyalty programs</li>
            <li>Payment options</li>
            <li>Admin dashboard</li>
          </ul>
        </div>

        <div className="mt-6 aspect-video w-full max-w-2xl">
          <iframe
            className="h-full w-full rounded-md border"
            src="https://www.youtube.com/embed/Kdfp-EkRTWs?si=5UO0xPSuyr0FIs18"
            title="Food Delivery App Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">FYP (09/2021 - 06/2022): IoT Based Smart Highway</h2>
        <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-2">
          <li>IoT Based Smart Street Lights — cloud-controlled with sensor data.</li>
          <li>Speed Detection — upload details to cloud.</li>
          <li>Automatic watering system for roadside plants.</li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold">Other Projects</h2>
        <ul className="mt-3 list-disc pl-6 text-gray-700 space-y-1">
          <li>Sudoku Solver</li>
          <li>Power switching using DPDT relay</li>
          <li>Security door lock system using transistors and SPDT relay</li>
          <li>Burglar Alarm using PIR sensor and transistor</li>
          <li>Elevator controller using FPGA</li>
          <li>Object Detection using OpenCV</li>
          <li>Molasses Tank</li>
        </ul>
      </section>
      </div>
    </main>
  )
}


