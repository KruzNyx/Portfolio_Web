import { skills } from '../../data/portfolioData';
export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl mb-8">About Me</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-default"
          >
            <skill.icon className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}