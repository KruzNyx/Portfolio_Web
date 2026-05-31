import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import DashboardShowcase from './components/DashboardShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Hero />
      <About />
      <Projects />
      <DashboardShowcase />
      <Contact />
      <Footer />
    </div>
  );
}