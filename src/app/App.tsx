import { useState } from 'react';
import {
  BarChart3,
  Code2,
  FileSpreadsheet,
  TrendingUp,
  Users,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Download,
  CheckCircle2,
  LineChart,
  Globe,
  Database,
  ArrowRight
} from 'lucide-react';
import { BarChart, Bar, LineChart as RechartsLine, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setFormSubmitted(false);
    }, 3000);
  };

  const skills = [
    { name: 'Data Visualization', icon: BarChart3 },
    { name: 'Power BI', icon: TrendingUp },
    { name: 'Excel', icon: FileSpreadsheet },
    { name: 'Google Sheets', icon: FileSpreadsheet },
    { name: 'SQL', icon: Database },
    { name: 'Web Development', icon: Globe },
    { name: 'JavaScript', icon: Code2 },
    { name: 'React', icon: Code2 },
  ];

  const projects = [
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

  const templates = [
    { name: 'Sales Tracker', benefits: 'Track deals, forecast revenue, monitor pipeline health', icon: TrendingUp },
    { name: 'Budget Planner', benefits: 'Manage expenses, plan budgets, visualize spending patterns', icon: FileSpreadsheet },
    { name: 'KPI Dashboard', benefits: 'Monitor key metrics, track performance, automated updates', icon: BarChart3 },
    { name: 'Profit Calculator', benefits: 'Calculate margins, analyze profitability, scenario modeling', icon: LineChart },
    { name: 'Inventory Tracker', benefits: 'Track stock levels, automate reordering, reduce waste', icon: Database },
  ];

  const services = [
    {
      title: 'Dashboard Development',
      description: 'Transform your data into actionable insights with custom dashboards in Power BI, Tableau, or Google Data Studio. Real-time metrics, automated reports, and intuitive visualizations.',
      icon: BarChart3,
      features: ['Custom KPI tracking', 'Real-time updates', 'Interactive filters', 'Automated reporting']
    },
    {
      title: 'Website Development',
      description: 'Build fast, responsive, and conversion-focused websites that work seamlessly across all devices. From landing pages to full web applications.',
      icon: Code2,
      features: ['Responsive design', 'SEO optimization', 'CMS integration', 'Performance focused']
    },
    {
      title: 'Excel & Automation Solutions',
      description: 'Streamline your workflows with advanced Excel models, macros, and automation tools. Save hours with custom formulas and templates.',
      icon: FileSpreadsheet,
      features: ['Custom templates', 'VBA automation', 'Data modeling', 'Formula optimization']
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'VP of Sales, TechCorp',
      content: 'The sales dashboard transformed how our team tracks performance. We saw a 35% increase in sales productivity within the first quarter.',
      rating: 5
    },
    {
      name: 'James Rodriguez',
      role: 'Marketing Director, GrowthLabs',
      content: 'Outstanding work on our marketing analytics platform. The real-time insights have been game-changing for our campaign optimization.',
      rating: 5
    },
    {
      name: 'Emily Chen',
      role: 'CFO, FinanceHub',
      content: 'The Excel financial model saved us countless hours and improved our forecasting accuracy by 40%. Highly recommended!',
      rating: 5
    },
  ];

  const salesData = [
    { month: 'Jan', revenue: 45000, target: 40000 },
    { month: 'Feb', revenue: 52000, target: 45000 },
    { month: 'Mar', revenue: 48000, target: 47000 },
    { month: 'Apr', revenue: 61000, target: 50000 },
    { month: 'May', revenue: 55000, target: 52000 },
    { month: 'Jun', revenue: 67000, target: 55000 },
  ];

  const categoryData = [
    { name: 'Product A', value: 400, color: '#0088FE' },
    { name: 'Product B', value: 300, color: '#00C49F' },
    { name: 'Product C', value: 200, color: '#FFBB28' },
    { name: 'Product D', value: 100, color: '#FF8042' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-blue-700">Available for new projects</span>
              </div>
              <h1 className="text-5xl lg:text-6xl tracking-tight">
                I Build Data Dashboards, Business Tools, and Websites That Drive Results
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                I help businesses make better decisions with custom data visualizations, interactive dashboards, and web solutions that turn complex data into actionable insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                >
                  Contact Me
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600"
                alt="Professional portrait"
                className="relative rounded-2xl shadow-2xl w-full aspect-[3/4] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl mb-4">About Me</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a freelance Data Visualization & Web Developer specializing in turning complex business data into clear, actionable insights. With expertise in Power BI, Excel, and modern web technologies, I help companies optimize their decision-making processes and improve operational efficiency through custom dashboards and automation tools.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <skill.icon className="w-5 h-5 text-blue-600" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="bg-gray-50/50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600">
              Real-world solutions that deliver measurable business impact
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm">
                    {project.type}
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl">{project.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-2 text-blue-600 hover:gap-3 transition-all">
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl mb-4">Dashboard Showcase</h2>
            <p className="text-lg text-gray-600">
              Interactive data visualizations that drive business decisions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Sales Performance Chart */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
              <div>
                <h3 className="text-xl mb-2">Sales Performance Dashboard</h3>
                <p className="text-gray-600">Revenue vs Target - Last 6 Months</p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="revenue" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="target" fill="#e5e7eb" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Total Revenue</div>
                  <div className="text-2xl">$328K</div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Growth</div>
                  <div className="text-2xl text-green-600">+23%</div>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <div className="text-sm text-gray-600 mb-1">Target Hit</div>
                  <div className="text-2xl text-purple-600">112%</div>
                </div>
              </div>
            </div>

            {/* Product Distribution Chart */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-6">
              <div>
                <h3 className="text-xl mb-2">Product Category Analysis</h3>
                <p className="text-gray-600">Revenue Distribution by Product Line</p>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-3">
                {categoryData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-sm text-gray-600">{item.name}</span>
                    <span className="ml-auto">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Excel Templates */}
      <section className="bg-gray-50/50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl mb-4">Excel & Spreadsheet Templates</h2>
            <p className="text-lg text-gray-600">
              Ready-to-use templates to streamline your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <template.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl mb-2">{template.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{template.benefits}</p>
                <button className="inline-flex items-center gap-2 text-green-600 hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  Download Template
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl mb-4">Services</h2>
            <p className="text-lg text-gray-600">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50/50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600">
              What clients say about working with me
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">★</div>
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="pt-4 border-t border-gray-100">
                  <div className="text-sm">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600">
              Let's discuss how I can help transform your data into insights
            </p>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-8">
            {formSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl mb-2">Message Sent!</h3>
                <p className="text-gray-600">I'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-input-background border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-input-background border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>
              </form>
            )}

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <a href="mailto:hello@example.com" className="flex flex-col items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Mail className="w-6 h-6" />
                  <span className="text-sm">hello@example.com</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Linkedin className="w-6 h-6" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
                  <Github className="w-6 h-6" />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-600">
              © 2026 Data Visualization & Web Developer. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:hello@example.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, #00000008 1px, transparent 1px),
                            linear-gradient(to bottom, #00000008 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </div>
  );
}
