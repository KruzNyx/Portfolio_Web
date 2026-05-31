// C:\Users\kknam\OneDrive\Desktop\port\src\data\portfolioData.ts
import { 
  BarChart3, Code2, FileSpreadsheet, TrendingUp, 
  Users, Database, Globe, LineChart 
} from 'lucide-react';

export const skills = [
  { name: 'Data Visualization', icon: BarChart3 },
  { name: 'Power BI', icon: TrendingUp },
  { name: 'Excel', icon: FileSpreadsheet },
  { name: 'Google Sheets', icon: FileSpreadsheet },
  { name: 'SQL', icon: Database },
  { name: 'Web Development', icon: Globe },
  { name: 'JavaScript', icon: Code2 },
  { name: 'React', icon: Code2 },
];

export const projects = [
  { 
    title: 'Sales Performance Dashboard', 
    description: 'Interactive Power BI dashboard tracking monthly sales, revenue trends, and team performance metrics across 12 regions', 
    technologies: ['Power BI', 'SQL', 'Excel'], 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', 
    type: 'Dashboard' 
  },
  { 
    title: 'Marketing Analytics Dashboard', 
    description: 'Real-time campaign performance tracker with ROI analysis, conversion funnels, and customer acquisition insights', 
    technologies: ['Google Sheets', 'Data Studio', 'SQL'], 
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800', 
    type: 'Dashboard' 
  },
  { 
    title: 'Business KPI Tracker', 
    description: 'Executive dashboard displaying company-wide KPIs, financial metrics, and operational performance indicators', 
    technologies: ['Power BI', 'Excel', 'DAX'], 
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800', 
    type: 'Dashboard' 
  },
  { 
    title: 'Company Website', 
    description: 'Modern, responsive corporate website with CMS integration, contact forms, and interactive service showcase', 
    technologies: ['React', 'JavaScript', 'Tailwind CSS'], 
    image: 'https://images.unsplash.com/photo-1774853094610-89be6f1a7690?w=800', 
    type: 'Website' 
  },
  { 
    title: 'Landing Page Design', 
    description: 'High-converting product landing page with compelling CTAs, testimonials, and mobile-optimized design', 
    technologies: ['HTML', 'CSS', 'JavaScript'], 
    image: 'https://images.unsplash.com/photo-1778146476147-5f8d4bd03c79?w=800', 
    type: 'Website' 
  },
  { 
    title: 'Excel Financial Model', 
    description: 'Comprehensive financial modeling tool with scenario planning, forecasting, and automated reporting features', 
    technologies: ['Excel', 'VBA', 'Power Query'], 
    image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=800', 
    type: 'Excel' 
  },
];

export const salesData = [
  { month: 'Jan', revenue: 45000, target: 40000 },
  { month: 'Feb', revenue: 52000, target: 45000 },
  { month: 'Mar', revenue: 48000, target: 47000 },
  { month: 'Apr', revenue: 61000, target: 50000 },
  { month: 'May', revenue: 55000, target: 52000 },
  { month: 'Jun', revenue: 67000, target: 55000 },
];