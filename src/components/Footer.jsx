import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div>
            <h3 className="text-xl font-stretch-75% text-cyan-400">
              Nitish Kumar 
            </h3>

            <p className="text-slate-400 text-sm mt-2">
              Building scalable backend applications with
              Java, Spring Boot and modern web technologies.
            </p>
          </div>

          <div className="flex gap-5 text-xl">

            <a
              href="mailto:meganitish@gmail.com"
              className="hover:text-cyan-400 transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/itsNitish247"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/itsnitish247/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <div className="text-center text-slate-500 text-sm mt-8">
          © {new Date().getFullYear()} Nitish Kumar P. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;