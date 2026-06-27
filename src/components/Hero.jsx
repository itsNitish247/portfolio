import {
  FaGithub,
  FaLinkedin,
 
} from "react-icons/fa";



const Hero = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 min-h-[85vh] flex items-center">
     <div className="grid md:grid-cols-2 gap-16 items-center">
     <div>
  <p className="text-cyan-400 text-lg mb-3">
    Hello, I'm
  </p>

  <h1 className="text-5xl md:text-6xl font-bold mb-4">
    Nitish Kumar P
  </h1>

  <h2 className="text-2xl md:text-3xl text-slate-300 mb-6">
    Java Full Stack Developer
  </h2>

  <p className="text-slate-400 text-lg leading-8 mb-8">
    Software Engineer with <span className="text-cyan-400 font-semibold">3+ years of experience</span> building scalable backend systems and modern web applications using <span className="text-white">Java, Spring Boot, React, Microservices</span> and SQL databases.
    Passionate about designing clean APIs, solving complex business problems and delivering production-ready software.
  </p>

  <div className="flex flex-wrap gap-3 mb-8">
    {[
      "Java",
      "Spring Boot",
      "React",
      "Microservices",
      "REST APIs",
      "MySQL",
    ].map((skill) => (
      <span
        key={skill}
        className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-sm hover:border-cyan-400 transition"
      >
        {skill}
      </span>
    ))}
  </div>

  <div className="flex flex-wrap gap-4">
    <a
      href="#projects"
      className="bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition"
    >
      View Projects
    </a>

  <a
  href="/resume.pdf"
  download
  className="border border-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-500 hover:text-black transition"
>
  Download Resume
</a>
  </div>

  <div className="flex gap-6 text-3xl mt-8">
    <a
      href="https://github.com/itsNitish247"
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub className="hover:text-cyan-400 transition" />
    </a>

    <a
      href="https://linkedin.com/in/itsNitish247"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin className="hover:text-cyan-400 transition" />
    </a>
  </div>
</div>

        {/* Right Side */}
        <div className="hidden md:flex justify-center">
  <div className="bg-[#0d1117] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl w-[430px]">

    {/* Window Header */}
    <div className="flex items-center gap-2 px-5 py-3 border-b border-slate-800 bg-[#161b22]">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>

      <span className="ml-4 text-sm text-slate-400">
        Developer.java
      </span>
    </div>

    {/* Code */}
    <div className="p-6 font-mono text-sm leading-8">

      <p>
        <span className="text-purple-400">public class</span>{" "}
        <span className="text-cyan-400">Developer</span> {"{"}
      </p>

      <p className="ml-6">
        <span className="text-purple-400">String</span>{" "}
        <span className="text-green-400">name</span> =
        <span className="text-orange-300"> "Nitish Kumar P"</span>;
      </p>

      <p className="ml-6">
        <span className="text-purple-400">String</span>{" "}
        <span className="text-green-400">role</span> =
        <span className="text-orange-300"> "Java Full Stack Developer"</span>;
      </p>

      <br />

      <p className="ml-6">
        <span className="text-purple-400">String[]</span>{" "}
        <span className="text-green-400">skills</span> = {"{"}
      </p>

      <p className="ml-12 text-orange-300">
        "Java",
      </p>

      <p className="ml-12 text-orange-300">
        "Spring Boot",
      </p>

      <p className="ml-12 text-orange-300">
        "React",
      </p>

      <p className="ml-12 text-orange-300">
        "Microservices",
      </p>

      <p className="ml-12 text-orange-300">
        "MySQL"
      </p>

      <p className="ml-6">{"};"}</p>

      <br />

      <p className="ml-6">
        <span className="text-purple-400">boolean</span>{" "}
        <span className="text-green-400">availableForHire</span> =
        <span className="text-cyan-400"> true</span>;
      </p>

      <p>{"}"}</p>

    </div>
  </div>
</div>
</div>
   
    </section>
  );
};

export default Hero;