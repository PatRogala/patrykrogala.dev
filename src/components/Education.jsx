import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

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

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
        duration: 0.5,
    },
  },
};

const blockVariants = {
  hidden: { opacity: 0, y: 50 }, 
  visible: {
    opacity: 1,
    y: 0, 
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const iconVariants = {
  hidden: { scale: 0, rotate: -45 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.1,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};


const Education = () => {
  return (

    <div className="bg-black">
      <motion.section
          id="education"
          className="bg-black text-neutral-300 py-16 sm:py-24 overflow-hidden" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={sectionVariants}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-wide">
            EDUCATION
          </h2>
          {/* Red Accent Line */}
          <div className="w-20 h-1 mx-auto bg-red-600 mb-16"></div>

          {/* Education Items Container */}
          <div className="space-y-16"> 
            {educationData.map((edu) => (
              // Each block animates in individually
              <motion.div
                  key={edu.id}
                  className="flex flex-col items-center"
                  variants={blockVariants}
                  initial="hidden"
                  whileInView="visible" 
                  viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div variants={iconVariants}>
                  <FaGraduationCap className="w-10 h-10 text-red-600 mb-4" />
                </motion.div>


                <motion.h3
                  className="text-xl sm:text-2xl font-bold text-white mb-1"
                  variants={textItemVariants}
                >
                  {edu.degree}
                </motion.h3>

                {/* Institution & Dates - Apply text animation */}
                <motion.p
                  className="text-sm sm:text-base text-neutral-400 mb-2"
                  variants={textItemVariants}
                >
                  {edu.institution} | {edu.dates}
                </motion.p>


                {edu.focus && (
                  <motion.p
                    className="text-base sm:text-lg max-w-xl"
                    variants={textItemVariants}
                  >
                    {edu.focus}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Education;