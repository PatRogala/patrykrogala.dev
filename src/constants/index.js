import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  koleo,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  ruby,
  rails,
  psql,
  githu,
  bitbucket,
  postman,
  vscode,
  portfolio
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Ruby Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "Rails",
    icon: rails,
  },
  {
    name: "PSQL",
    icon: psql,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: githu,
  },
  {
    name: "bitbucket",
    icon: bitbucket,
  },
  {
    name: "postman",
    icon: postman,
  },
  {
    name: "vscode",
    icon: vscode,
  }
];

const experiences = [
  {
    title: "Junior Ruby Developer",
    company_name: "Astarium",
    icon: koleo,
    iconBg: "#E6DEDD",
    date: "July 2021 - Jan 2023",
    points: [
      "Developing and maintaining web applications using Ruby On Rails and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Implementing automatic translations for foreign customers using DeepL API.",
    ],
  },
  {
    title: "Ruby Developer",
    company_name: "Astarium",
    icon: koleo,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using Ruby On Rails and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Updated main application's Rails version 4.0 -> 5.1",
      "Developing fullstack wagon management application for an external company.",
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Personal Portfolio",
    description:
      "My personal portfolio website built with React, Threejs and Tailwind CSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "threejs",
        color: "orange-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/PatRogala/patrykrogala.dev",
  }
];

export { services, technologies, experiences, testimonials, projects };