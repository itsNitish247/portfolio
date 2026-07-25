import BANK from "../assets/BANK.png";
import LMS from "../assets/LMS.png";
import RANK from "../assets/RANK.png";
import URL_SHORTNER from "../assets/uRL-SHORT.png"

const projects = [
  {
  title: "URL Shortener",
  description:
    "Production-ready URL shortening service built with Spring Boot featuring Redis caching, Kafka event-driven analytics, retry and dead-letter queue handling, click tracking, failed event replay, and comprehensive REST API documentation.",
  tech: [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Redis",
    "Apache Kafka",
    "Spring Data JPA",
    "REST APIs",
    "Swagger"
  ],
  metrics: [
    "Redis Cache",
    "Kafka Analytics",
    "DLT & Retry"
  ],
  github: "https://github.com/itsNitish247/url-shortener",
  image: URL_SHORTNER,
},
  {
    title: "Banking Management System",
    description:
      "Enterprise banking application built using Spring Boot supporting customer management, loan processing, secure JWT authentication, REST APIs, and MySQL database integration.",
    tech: ["Spring Boot", "MySQL", "JWT", "Swagger"],
    metrics: ["20+ APIs", "JWT Security", "REST APIs"],
    github: "https://github.com/itsNitish247/banking-management-system",
    image: BANK,
  },
  {
    title: "Logistics Management System",
    description:
      "Backend logistics platform for managing customers, shipments, and shipment tracking. Built with layered architecture using Spring Boot, Spring Data JPA, MySQL, validation, exception handling, and OpenAPI documentation.",
    tech: ["Spring Boot", "MySQL", "REST APIs", "Swagger"],
    metrics: ["Shipment Tracking", "Layered Architecture", "CRUD APIs"],
    github: "https://github.com/itsNitish247/logistics-management-system",
    image: LMS,
  },

 {
  title: "Leaderboard Management System",
  description:
    "Scalable backend platform for multiplayer games that provides game registration, player score ingestion, historical score tracking, configurable ranking strategies, and automatic leaderboard management through REST APIs.",
  tech: [
    "Java",
    "Spring Boot",
    "PostgreSQL",
    "Spring Data JPA",
    "REST APIs",
    "Swagger"
  ],
  metrics: [
    "Top-N Rankings",
    "Historical Scores",
    "Configurable Strategies"
  ],
  github: "https://github.com/itsNitish247/leaderboard-management-system",
  image: RANK,
},
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-4">
        Featured Backend Projects
      </h2>

      <p className="text-slate-400 mb-12 max-w-2xl">
        A selection of backend  applications showcasing
        enterprise software development, REST API design, secure
        authentication, database management, and scalable system
        architecture.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300"
          >

            {/* Project Image */}
            <div className="h-60 overflow-hidden bg-slate-800">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Project Content */}
            <div className="p-6">

              <h3 className="text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-400 leading-7 mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="bg-cyan-500 text-black px-3 py-1 rounded font-medium text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-4 text-sm text-slate-400 mb-6">
                {project.metrics.map((metric) => (
                  <span
                    key={metric}
                    className="border border-slate-700 px-3 py-1 rounded"
                  >
                    {metric}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-cyan-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Projects;