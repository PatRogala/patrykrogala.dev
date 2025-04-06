import React from 'react';
import { socialLinks } from '../data/socialLinks';

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-neutral-300 py-16 sm:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-wide">
          GET IN TOUCH
        </h2>
        {/* Red Accent Line */}
        <div className="w-20 h-1 mx-auto bg-red-600 mb-8"></div>

        {/* Introductory Text */}
        <p className="text-lg sm:text-xl mb-10 max-w-xl mx-auto">
          Have a project in mind, a question, or just want to connect? Feel free
          to send me a message!
        </p>

        <div className="mt-16">
           <p className="text-neutral-400 mb-4">Find me on:</p>
           <ul className="flex items-center justify-center gap-5">
            {socialLinks.map(({ id, name, url, icon: Icon }) => (
              <li key={id}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="block transform transition-transform duration-200 hover:scale-110" 
                >
                  <Icon className="w-7 h-7 text-neutral-400 hover:text-white transition-colors" />
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Contact;