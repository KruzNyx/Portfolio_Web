import { ArrowRight, Mail } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-blue-700">
                Available for new projects
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl tracking-tight">
              I Build Data Dashboards, Business Tools, and Websites That Drive
              Results
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              I help businesses make better decisions with dashboards and web
              applications.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border rounded-lg"
              >
                Contact Me
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <ImageWithFallback
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600"
            alt="Professional Portrait"
            className="rounded-2xl shadow-2xl w-full aspect-[3/4] object-cover"
          />
        </div>
      </div>
    </section>
  );
}