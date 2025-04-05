// src/components/AboutMe.js

import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="bg-black text-neutral-300 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          ABOUT ME
        </h2>

        {/* Red Accent Line */}
        <div className="w-20 h-1 mx-auto bg-red-600 mb-10"></div>

        {/* Content Paragraphs */}
        <div className="space-y-6 text-lg sm:text-xl leading-relaxed">
          <p>
            I am a results-driven Backend Developer bringing over 3 years of specialized
            experience focused on Ruby on Rails development.
          </p>
          <p>
            I'm passionate about knowledge sharing and mentoring; you can see this in action
            on my programming blog where I regularly contribute technical insights and
            discuss best practices. I'm also adept at leveraging cutting-edge AI tools
            to optimize workflow efficiency and enhance productivity.
          </p>
          <p>
            My commitment is to deliver scalable and maintainable code solutions, and I
            continuously explore innovative approaches to tackle software development
            challenges. I'm seeking to contribute my technical expertise and collaborative
            mindset to a forward-thinking development team.
          </p>
        </div>

        {/* Optional: Call to Action Button */}
        
        <div className="mt-12">
          <a
            href="#projects" // Link to your projects section (create later)
            className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded hover:bg-red-700 transition duration-300 text-lg"
          >
            View My Work
          </a>
        </div>
       

      </div>
    </section>
  );
};

export default AboutMe;