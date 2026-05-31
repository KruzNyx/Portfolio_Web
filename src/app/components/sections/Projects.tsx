import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  type: string;
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="bg-gray-50/50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all">
              <ImageWithFallback src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 space-y-4">
                <h3 className="text-xl">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}