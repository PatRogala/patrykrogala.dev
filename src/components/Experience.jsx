// src/components/Experience.js
import React from 'react';

const experienceData = [
  {
    id: 1,
    title: 'Ruby on Rails Developer',
    company: 'Astarium',
    dates: 'Jan 2022 - Present',
    description: [
      'Optimized the CI/CD pipeline, reducing workflow execution time by 50% and operational costs by 65%.',
      'Migrated the entire test suite from Minitest to RSpec, improving test coverage and maintainability.',
      'Successfully upgraded a large‑scale Rails application from version 4.2 to 6.1 and Ruby from 2.4 to 2.7 in a complex legacy codebase with over 400,000 lines of code.',
      'Implemented advanced reservation management and ticket sales features in a Ruby on Rails environment.',
      'Created an intuitive user interface for train personnel and ticket‑selling cashiers, increasing operational efficiency.',
      'Independently designed and built from scratch a dedicated internal application for train management and seat reservation systems.',
      'Designed and implemented an automated translation system using DeepL API, integrating it with the CI pipeline to streamline product localization for international clients'
    ],
  },
  {
    id: 2,
    title: 'Junior Ruby On Rails Developer',
    company: 'Astarium',
    dates: 'July 2021 - Jan 2022',
    description: [
      'Assisted senior developers in building features for web apps.',
      'Developed and implemented integrations with multiple carrier systems for automated offer generation and ticket issuance.',
      'Participated in daily stand-ups and sprint planning sessions.',
      'Fixed bugs and performed routine maintenance tasks.',
    ],
  },
];


const Experience = () => {
  return (
    <section id="experience" className="bg-black text-neutral-300 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 text-center tracking-wide">
          EXPERIENCE
        </h2>

        <div className="w-20 h-1 mx-auto bg-red-600 mb-16"></div>

        <div className="relative"> 

          <div className="absolute left-2 top-0 w-0.5 h-full bg-neutral-700 z-0"></div>

          <div className="space-y-12 relative z-10">
            {experienceData.map((job) => (
              <div key={job.id} className="relative pl-10">

                 <div className="absolute left-2 top-1 w-4 h-4 bg-red-600 rounded-full border-2 border-black transform -translate-x-1/2"></div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {job.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-400 mb-3">
                    {job.company} | {job.dates}
                  </p>
                  <ul className="list-disc list-outside text-base sm:text-lg space-y-1 marker:text-red-600 marker:text-sm pl-4">
                    {job.description.map((point, pointIndex) => (
                      <li key={pointIndex}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;