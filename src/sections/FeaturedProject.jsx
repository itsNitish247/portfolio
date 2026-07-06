import QR from "../assets/QR.png";

function FeaturedProject() {
  return (
    <section
      id="featured-project"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-4">
        Featured Full Stack Project
      </h2>

      <p className="text-slate-400 mb-10">
        A production-inspired full stack application demonstrating backend
        architecture, REST APIs, QR code generation, analytics, and a modern
        React dashboard.
      </p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500 transition">

        <img
          src={QR}
          alt="QR Management System"
          className="w-full h-80 object-cover"
        />

        <div className="p-8">

          <h3 className="text-3xl font-bold">
            QR Management System
          </h3>

          <p className="mt-4 text-slate-400 leading-7">
            Enterprise-inspired full stack QR Management platform built with
            Spring Boot and React. Users can create dynamic QR codes, generate
            downloadable QR images, manage users, track scan analytics, and
            monitor activity through a responsive dashboard.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">

            {[
              "Spring Boot",
              "PostgreSQL",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "REST API",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-cyan-500 text-black px-3 py-1 rounded text-sm font-semibold"
              >
                {tech}
              </span>
            ))}

          </div>

          <div className="flex flex-wrap gap-3 mt-8">

            <span className="border border-slate-700 px-3 py-1 rounded">
              Dynamic QR
            </span>

            <span className="border border-slate-700 px-3 py-1 rounded">
              Scan Analytics
            </span>

            <span className="border border-slate-700 px-3 py-1 rounded">
              User Management
            </span>

            <span className="border border-slate-700 px-3 py-1 rounded">
              Dashboard
            </span>

          </div>

          <div className="flex gap-4 mt-8">

            <a
              href="https://github.com/itsNitish247/qr-management-system"
              target="_blank"
              rel="noreferrer"
              className="bg-cyan-500 text-black px-5 py-2 rounded-lg font-semibold"
            >
              Backend
            </a>

            <a
              href="https://github.com/itsNitish247/qr-management-system-ui"
              target="_blank"
              rel="noreferrer"
              className="border border-cyan-500 text-cyan-500 px-5 py-2 rounded-lg font-semibold hover:bg-cyan-500 hover:text-black transition"
            >
              Frontend
            </a>

            <button
              className="border border-slate-600 px-5 py-2 rounded-lg text-slate-400"
            >
              Live Demo (Soon)
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FeaturedProject;