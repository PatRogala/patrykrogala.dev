import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectData = [
  {
    id: 1,
    title: 'Personal Website',
    imageUrl: 'src/images/personal.png',
    description: 'You are here! A personal portfolio website built with React and Three.js with a cool spinning Ruby.',
    technologies: ['React', 'Tailwind CSS', 'Three.js'],
    liveUrl: 'https://patrykrogala.dev/',
    repoUrl: 'https://github.com/PatRogala/patrykrogala.dev',
  },
];


const Projects = () => {
  return (
    <section id="projects" className="bg-black text-neutral-300 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 text-center tracking-wide">
          PROJECTS
        </h2>
        {/* Red Accent Line */}
        <div className="w-20 h-1 mx-auto bg-red-600 mb-16"></div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg hover:shadow-red-900/40 transform hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Project Image */}
              <img
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                className="w-full h-48 object-cover" // Fixed height for consistency
              />

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow"> 
                {/* Project Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-base text-neutral-400 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies Used */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-neutral-500 mb-2 uppercase tracking-wider">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-neutral-700 text-neutral-300 text-xs font-medium px-2.5 py-0.5 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(project.liveUrl || project.repoUrl) && (
                  <div className="mt-auto pt-4 border-t border-neutral-700 flex items-center justify-start gap-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} Live Demo`}
                        className="text-red-500 hover:text-red-400 transition-colors duration-200 flex items-center gap-1"
                      >
                        <FaExternalLinkAlt />
                        <span className="text-sm font-medium">Live Demo</span>
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub Repository`}
                        className="text-neutral-400 hover:text-white transition-colors duration-200 flex items-center gap-1"
                      >
                        <FaGithub />
                         <span className="text-sm font-medium">Code</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;