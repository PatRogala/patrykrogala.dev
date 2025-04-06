import React from 'react';
import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const lineVariants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
        opacity: 1,
        scaleX: 1,
        transition: {
            duration: 0.7,
            ease: "easeOut",
        },
    },
};

const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
        scale: 1.05,
        boxShadow: "0px 5px 15px rgba(220, 38, 38, 0.4)",
        transition: {
            duration: 0.2,
        },
    },
    tap: {
        scale: 0.98,
    }
};

const AboutMe = () => {
  return (
    <div id="about" className="bg-black text-neutral-300 py-16 sm:py-24 overflow-hidden">
      <motion.div
        className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-white mb-4"
          variants={itemVariants}
        >
          ABOUT ME
        </motion.h2>

        {/* Red Accent Line */}
        <motion.div
          className="w-20 h-1 mx-auto bg-red-600 mb-10"
          variants={lineVariants}
          style={{ originX: 0.5 }}
        ></motion.div>

        {/* Content Paragraphs Container */}
        <motion.div
          className="space-y-6 text-lg sm:text-xl leading-relaxed"
          variants={itemVariants}
        >
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
        </motion.div>

        {/* Button Container */}
        <motion.div
            className="mt-12"
            variants={buttonVariants}
        >
          <motion.a
            href="#projects"
            className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded hover:bg-red-700 text-lg shadow-md"
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
          >
            View My Work
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;