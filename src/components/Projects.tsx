import { ExternalLink } from "lucide-react";
import { projects } from "../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-50/50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border overflow-hidden"
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl mb-2">{project.title}</h3>

                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 text-blue-600">
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}