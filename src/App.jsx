import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

import About from "./sections/About";
import Stats from "./sections/Stats";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen overflow-x-hidden">

      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;