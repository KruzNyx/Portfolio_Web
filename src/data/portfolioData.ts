import { BarChart3, Code2, FileSpreadsheet, TrendingUp, Users, Database, Globe } from 'lucide-react';

export const skills = [
  { name: 'Data Visualization', icon: BarChart3 },
  { name: 'Power BI', icon: TrendingUp },
  { name: 'SQL', icon: Database },
  { name: 'React', icon: Code2 },
];

export const projects = [
  { 
    title: 'Sales Performance Dashboard', 
    description: 'Interactive Power BI dashboard tracking monthly sales.', 
    technologies: ['Power BI', 'SQL'], 
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800', 
    type: 'Dashboard' 
  }
];

export const salesData = [
  { month: 'Jan', revenue: 45000, target: 40000 },
  { month: 'Feb', revenue: 52000, target: 45000 },
  { month: 'Mar', revenue: 48000, target: 47000 },
];

export const categoryData = [
  { name: 'Product A', value: 400, color: '#0088FE' },
  { name: 'Product B', value: 300, color: '#00C49F' },
];