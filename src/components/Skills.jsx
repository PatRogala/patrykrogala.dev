import React from 'react';

const skillsData = [
  {
    category: 'Languages',
    items: ['Ruby', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Ruby on Rails', 'React', 'Hotwire (Turbo/Stimulus)', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis'],
  },
  {
    category: 'Testing',
    items: ['RSpec', 'FactoryBot'],
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'Docker', 'Webpack/Vite', 'Sidekiq'],
  },
  {
    category: 'Methodologies & Practices',
    items: ['Agile/Scrum', 'RESTful APIs', 'OOP', 'TDD/BDD', 'CI/CD'],
  },
];



const Skills = () => {
  return (
    <section id="skills" className="bg-black text-neutral-300 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 text-center tracking-wide">
          SKILLS & TECHNOLOGIES
        </h2>
        {/* Red Accent Line */}
        <div className="w-20 h-1 mx-auto bg-red-600 mb-16"></div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {skillsData.map((skillGroup) => (
            <div key={skillGroup.category}>
              {/* Category Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-4 uppercase tracking-wider border-b border-neutral-700 pb-2">
                {skillGroup.category}
              </h3>
              {/* List of Skills in Category */}
              <div className="space-y-2">
                {skillGroup.items.map((skill) => (
                  <p key={skill} className="text-base sm:text-lg text-neutral-400">
                    {skill}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;