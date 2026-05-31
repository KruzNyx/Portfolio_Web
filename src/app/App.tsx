import { projects, salesData } from '../data/portfolioData'; // 1. import ข้อมูลที่จำเป็นมา
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/sections/Projects';
import DashboardShowcase from './components/DashboardShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Hero />
      <About />
      
      {/* 2. ส่งข้อมูลผ่าน Prop ให้ตรงตามที่ Component ต้องการ */}
      <Projects projects={projects} />
      
      <DashboardShowcase salesData={salesData} />
      
      <Contact />
      <Footer />
    </div>
  );
}