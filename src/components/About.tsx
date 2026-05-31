import { skills } from "../data/skills";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="space-y-12">
        <div className="max-w-3xl">
          <h2 className="text-3xl mb-4">About Me</h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            I'm a freelance Data Visualization & Web Developer specializing in
            turning complex business data into clear, actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <skill.icon className="w-5 h-5 text-blue-600" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}