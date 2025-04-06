import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const educationData = [
  {
    id: 1,
    degree: 'Master of Science in Computer Science',
    institution: 'University of Technology',
    dates: '2025 - Present'
  },
  {
    id: 2,
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Vistula University',
    dates: '2021 - 2025',
    focus: 'Minor in Web Development.',
  }
];

const Education = () => {
  return (
    <section id="education" className="bg-black text-neutral-300 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-wide">
          EDUCATION
        </h2>
        {/* Red Accent Line */}
        <div className="w-20 h-1 mx-auto bg-red-600 mb-16"></div>

        {/* Education Items Container */}
        <div className="space-y-12">
          {educationData.map((edu) => (
            <div key={edu.id} className="flex flex-col items-center">
              {/* Icon */}
              <FaGraduationCap className="w-10 h-10 text-red-600 mb-4" />

              {/* Degree/Certificate Name */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {edu.degree}
              </h3>

              {/* Institution & Dates */}
              <p className="text-sm sm:text-base text-neutral-400 mb-2">
                {edu.institution} | {edu.dates}
              </p>

              {/* Optional Focus/Description */}
              {edu.focus && (
                <p className="text-base sm:text-lg max-w-xl">
                  {edu.focus}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;