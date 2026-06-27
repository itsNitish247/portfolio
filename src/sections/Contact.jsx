import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-6xl mx-auto px-6 py-24"
    >
      <h2 className="text-4xl font-bold mb-4">
        Let's Connect
      </h2>

      <p className="text-slate-400 text-lg max-w-2xl mb-12">
        I'm currently open to Java Backend and Full Stack Developer opportunities.
        If you're hiring or would like to discuss a project, feel free to get in touch.
      </p>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Contact Information */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

          <div className="flex items-center gap-4 mb-6">
            <FaEnvelope className="text-cyan-400 text-2xl" />
            <div>
              <p className="text-slate-400 text-sm">Email</p>
              <p>meganitish@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
            <div>
              <p className="text-slate-400 text-sm">Location</p>
              <p>Bengaluru, Karnataka, India</p>
            </div>
          </div>

        </div>

        {/* Social Links */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

          <h3 className="text-xl font-semibold mb-6">
            Find Me Online
          </h3>

          <div className="flex gap-8 text-3xl">

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
  rel="noopener noreferrer"
>
  <FaLinkedin />
</a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;