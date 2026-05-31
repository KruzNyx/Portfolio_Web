import { ArrowRight, Mail } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ส่วนเนื้อหาข้อความ */}
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

          {/* ส่วนรูปภาพ */}
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
  );
}