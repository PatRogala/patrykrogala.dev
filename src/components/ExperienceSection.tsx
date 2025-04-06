// src/components/ExperienceSection.tsx
import React from 'react';
import { Timeline, TimelineEntry } from './ui/timeline'; // Adjust import path if not using '@/' alias

// Your original experience data (assuming it's in the same file or imported)
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
// --- End Sample Data ---


// Transform the data into the format required by Timeline
const transformedData: TimelineEntry[] = experienceData.map(job => ({
    title: job.dates, // Use 'dates' for the sticky title on the left
    content: (
        // Format the content using your existing styles/structure
        <div className="mb-8 md:mb-12"> {/* Add some bottom margin */}
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {job.title}
            </h4>
            <p className="text-sm sm:text-base text-neutral-400 mb-4">
                {job.company} {/* Removed dates here as they are in the title */}
            </p>
            <ul className="list-disc list-outside text-base sm:text-lg space-y-1.5 marker:text-red-600 marker:text-sm pl-5"> {/* Adjusted padding/spacing */}
                {job.description.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-neutral-300"> {/* Ensure text color */}
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    ),
}));


const ExperienceSection = () => {
    return (
        // Add the section ID here for navigation
        <section id="experience" className="bg-black"> {/* Section wrapper ensures ID is present */}
             {/* Add Section Header Here */}
             <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 text-center">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-wide">
                EXPERIENCE
                </h2>
                <div className="w-20 h-1 mx-auto bg-red-600 mb-10 md:mb-0"></div> {/* Reduced bottom margin */}
            </div>
            {/* Render the timeline */}
            <Timeline data={transformedData} />
        </section>
    );
};

export default ExperienceSection;