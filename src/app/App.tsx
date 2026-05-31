import About from "../components/About";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Templates from "../components/Templates";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Hero />
      <About />
      <Projects />
      <Templates />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

