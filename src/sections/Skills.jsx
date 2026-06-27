const skills = {
  "Backend & Frameworks": [
    "Java",
    "Spring Boot",
    "Spring MVC",
    "Spring Security",
    "Spring Data JPA",
    "Hibernate",
    "REST APIs",
    "Microservices",
  ],

  Frontend: [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
  ],

  Database: [
    "MySQL",
    "PostgreSQL",
    "SQL Server",
  ],

  Messaging: [
    "Apache Kafka",
    "RabbitMQ",
  ],

  Tools: [
    "Git",
    "Docker",
    "Maven",
    "Jenkins",
    "Postman",
    "Linux",
  ],

  Testing: [
    "JUnit",
    "Mockito",
  ],

  Concepts: [
    "OOP",
    "Collections",
    "Multithreading",
    "Design Patterns",
    "System Design",
    "Agile",
  ],
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-12">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">

        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-xl
            p-6
            hover:border-cyan-500
            transition
            "
          >
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">
              {category}
            </h3>

            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="
                  px-3
                  py-2
                  rounded-lg
                  bg-slate-800
                  text-slate-300
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;