import React from 'react';
import { IconCloud } from './ui/icon-cloud';

const skillSlugs = [
  "ruby", "javascript", "rubyonrails", "html5", "css3", "postgresql", "react",
  "hotwire", "turbo", "tailwindcss", "sqlite", "redis", "docker", "git", "sidekiq",
  "circleci", "bitbucket"
];

const uniqueSkillSlugs = Array.from(new Set(skillSlugs));

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-black text-neutral-300 sm:py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Icon Cloud Container */}
        <div className="relative flex h-[350px] sm:h-[450px] w-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-4 sm:px-6 lg:px-8">
          <IconCloud iconSlugs={uniqueSkillSlugs} />
        </div>

        <p className="text-center text-neutral-400 mt-8 text-lg">
          And many more... continuously learning and adapting!
        </p>

      </div>
    </section>
  );
};

export default SkillsSection;