import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/sections/Projects';
import DashboardShowcase from './components/DashboardShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // ดึงข้อมูลจากตาราง counseling_cases
        const { data: cases, error } = await supabase
          .from('counseling_cases')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setData(cases || []);
      } catch (err) {
        console.error("Error loading data from Supabase:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Hero />
      <About />
      <Projects projects={[]} /> 
      
      {/* ส่งข้อมูลที่ดึงมาได้ไปให้ Dashboard */}
      {loading ? (
        <div className="text-center py-20">กำลังโหลดข้อมูลสุขภาพจิต...</div>
      ) : (
        <DashboardShowcase salesData={data} categoryData={data} />
      )}
      
      <Contact />
      <Footer />
    </div>
  );
}