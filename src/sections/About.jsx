const About = () => {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <h2 className="text-4xl font-bold mb-4">
        About Me
      </h2>

      <p className="text-slate-400 leading-8 text-lg max-w-4xl">
        I'm a <span className="text-cyan-400 font-semibold">Software Engineer with 3+ years of experience</span> building scalable backend and full-stack applications using Java, Spring Boot, React, Microservices, Kafka, and SQL databases.

        <br /><br />

        I specialize in designing RESTful APIs, developing secure enterprise applications, optimizing database performance, and building reliable backend services. I'm passionate about writing clean, maintainable code and delivering production-ready software in Agile environments.
      </p>

      <div className="grid md:grid-cols-4 gap-6 mt-12">

  <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
    <h3 className="text-cyan-400 font-semibold">Backend</h3>
    <p className="text-slate-400 mt-2 text-sm">
      Java • Spring Boot • REST APIs
    </p>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
    <h3 className="text-cyan-400 font-semibold">Frontend</h3>
    <p className="text-slate-400 mt-2 text-sm">
      React • JavaScript • TypeScript
    </p>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
    <h3 className="text-cyan-400 font-semibold">Databases</h3>
    <p className="text-slate-400 mt-2 text-sm">
      PostgreSQL • MySQL
    </p>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
    <h3 className="text-cyan-400 font-semibold">DevOps</h3>
    <p className="text-slate-400 mt-2 text-sm">
      Docker • Jenkins • Git
    </p>
  </div>

</div>
    </section>
  );
};

export default About;