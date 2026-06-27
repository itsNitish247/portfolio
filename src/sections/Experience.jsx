const Experience = () => {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-4">
        Professional Experience
      </h2>

      <p className="text-slate-400 mb-12 max-w-2xl">
        Over 3 years of experience building enterprise backend and full-stack
        applications using Java, Spring Boot, React, Microservices, Kafka, and SQL
        databases in Agile environments.
      </p>

      <div className="relative border-l-2 border-cyan-500 pl-10">

        <div className="relative">

          <div className="absolute -left-[49px] top-1 w-5 h-5 rounded-full bg-cyan-500"></div>

          <h3 className="text-2xl font-bold">
            Software Development Engineer
          </h3>

          <p className="text-cyan-400 mt-1 text-lg">
            VIS Networks
          </p>

          <p className="text-slate-500 text-sm mb-6">
            Bengaluru, India • Dec 2022 – Feb 2026
          </p>

          <ul className="space-y-3 text-slate-400 leading-7">

            <li>
              • Designed and developed scalable Java Spring Boot microservices and REST APIs supporting enterprise applications.
            </li>

            <li>
              • Built asynchronous event-driven workflows using Apache Kafka for reliable backend communication.
            </li>

            <li>
              • Optimized PostgreSQL and MySQL queries using Spring Data JPA to improve application performance.
            </li>

            <li>
              • Implemented authentication and authorization using Spring Security and JWT.
            </li>

            <li>
              • Resolved production issues through debugging, root cause analysis, and performance optimization.
            </li>

            <li>
              • Developed unit and integration tests using JUnit and Mockito to improve code quality.
            </li>

            <li>
              • Containerized applications with Docker and contributed to CI/CD pipelines using Jenkins and Git.
            </li>

            <li>
              • Collaborated with frontend, QA, DevOps, and product teams in Agile Scrum environments to deliver production-ready features.
            </li>

          </ul>

        </div>

      </div>
    </section>
  );
};

export default Experience;