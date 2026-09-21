import QR from "../assets/QR.png";
import RESTAURANT from "../assets/REST.png";

function FeaturedProject() {
  return (
    <section
      id="featured-project"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      {/* Section Heading */}
      <h2 className="text-4xl font-bold mb-4">
        Featured Full Stack Projects
      </h2>

      <p className="text-slate-400 mb-10 max-w-3xl">
        A selection of full stack applications demonstrating backend
        architecture, REST APIs, modern frontend development, authentication,
        database management, and scalable application design.
      </p>

      {/* Projects */}
      <div className="grid md:grid-cols-2 gap-8">

        {/* =====================================================
            QR MANAGEMENT SYSTEM
            ===================================================== */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500 transition">

          <img
            src={QR}
            alt="QR Management System"
            className="w-full h-64 object-cover"
          />

          <div className="p-6">

            <h3 className="text-2xl font-bold">
              QR Management System
            </h3>

            <p className="mt-4 text-slate-400 leading-7">
              Enterprise-inspired full stack QR Management platform built
              with Spring Boot and React. Users can create dynamic QR codes,
              generate downloadable QR images, manage users, track scan
              analytics, and monitor activity through a responsive dashboard.
            </p>

            {/* Tech Stack */}
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

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mt-6">

              <span className="border border-slate-700 px-3 py-1 rounded text-sm text-slate-400">
                Dynamic QR
              </span>

              <span className="border border-slate-700 px-3 py-1 rounded text-sm text-slate-400">
                Scan Analytics
              </span>

              <span className="border border-slate-700 px-3 py-1 rounded text-sm text-slate-400">
                User Management
              </span>

              <span className="border border-slate-700 px-3 py-1 rounded text-sm text-slate-400">
                Dashboard
              </span>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-8">

              <a
                href="https://github.com/itsNitish247/qr-management-system"
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
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


        {/* =====================================================
            RESTAURANT MANAGEMENT & ORDERING SAAS
            ===================================================== */}

        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500 transition">

          <img
            src={RESTAURANT}
            alt="Restaurant Management and Ordering SaaS"
            className="w-full h-64 object-cover"
          />

          <div className="p-6">

            <h3 className="text-2xl font-bold">
              Restaurant Management & Ordering SaaS
            </h3>

            <p className="mt-4 text-slate-400 leading-7">
              Full stack restaurant management platform built with Java,
              Spring Boot, React, and PostgreSQL. The application provides
              role-based access for restaurant staff, restaurant-level tenant
              isolation, menu and table management, order lifecycle
              management, kitchen operations, billing, and a public customer
              menu with cart-based ordering.
            </p>

            {/* Tech Stack */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Java 21",
                "Spring Boot",
                "PostgreSQL",
                "React",
                "Spring Security",
                "JWT",
                "REST API",
                "Swagger",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-cyan-500 text-black px-3 py-1 rounded text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Highlights */}
            <div className="flex flex-wrap gap-3 mt-6">

              <span className="border border-slate-700 px-3 py-1 rounded text-sm text-slate-400">
                JWT & RBAC
              </span>

              <span className="border border-slate-700 px-3 py-1 rounded text-sm text-slate-400">
                Tenant Isolation
              </span>

              <span className="border border-slate-700 px-3 py-1 rounded text-sm text-slate-400">
                Order Lifecycle
              </span>

              <span className="border border-slate-700 px-3 py-1 rounded text-sm text-slate-400">
                Kitchen Workflow
              </span>

              <span className="border border-slate-700 px-3 py-1 rounded text-sm text-slate-400">
                Public Customer Menu
              </span>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-8">

              <a
                href="https://github.com/itsNitish247/restaruant_saas_backend"
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
              >
                Backend
              </a>

              <a
                href="https://github.com/itsNitish247/restaruant_saas_frontend"
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

      </div>
    </section>
  );
}

export default FeaturedProject;