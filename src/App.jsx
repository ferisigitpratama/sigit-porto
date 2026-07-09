import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Education from "./sections/Education";

function App() {
  return (
    <div className="bg-slate-950 text-white">
      <Navbar />

      <Hero />

      <About />

      <Experience />
      
      <Education />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </div>
  );
}

export default App;