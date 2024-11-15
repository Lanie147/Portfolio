import project1 from "../assets/project1.webp";
import project2 from "../assets/project2.webp";
import project3 from "../assets/project3.webp";
import project4 from "../assets/project4.webp";
import project5 from "../assets/project5.webp";
import project6 from "../assets/project6.webp";
import personImage from "../assets/testimonial.webp";

import {
  RiHtml5Line,
  RiCss3Line,
  RiJavascriptLine,
  RiReactjsLine,
  RiNodeTree,
  RiTailwindCssFill,
  RiGithubFill,
  RiDatabaseLine,
} from "@remixicon/react";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Ross Lane",
  role: "Full Stack Developer",
  subheading:
    "Junior Full-stack web developer who loves building user-friendly web applications. Currently available for work.",
};

export const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A full-featured e-commerce website built with React and Node.js. It includes user authentication, product management, and an integrated payment gateway.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    imgSrc: project1,
    link: "https://example-ecommerce.com",
  },
  {
    id: 2,
    title: "Social Media App",
    description:
      "A real-time social media app with chat, notifications, and a customizable profile page. Built with React, Firebase, and Redux for state management.",
    techStack: ["React", "Firebase", "Redux"],
    imgSrc: project2,
    link: "https://example-socialapp.com",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills. Fully responsive and optimized for performance.",
    techStack: ["Next.js", "Tailwind CSS"],
    imgSrc: project3,
    link: "https://myportfolio.com",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A blogging platform with a content management system, user authentication, and an intuitive editor.",
    techStack: ["Ruby on Rails", "PostgreSQL", "Tailwind CSS"],
    imgSrc: project4,
    link: "https://example-blogplatform.com",
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "A task management tool with user authentication, reminders, and collaboration features.",
    techStack: ["Angular", "Firebase", "Material UI"],
    imgSrc: project5,
    link: "https://example-taskapp.com",
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "An e-learning platform offering video courses, quizzes, and progress tracking for students.",
    techStack: ["Vue.js", "Node.js", "MongoDB", "Express"],
    imgSrc: project6,
    link: "https://example-learningplatform.com",
  },
];

export const SKILLS = [
  {
    name: "HTML5",
    icon: <RiHtml5Line className="text-orange-600" />,
  },
  {
    name: "CSS3",
    icon: <RiCss3Line className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    icon: <RiJavascriptLine className="text-yellow-500" />,
  },
  {
    name: "React",
    icon: <RiReactjsLine className="text-blue-400" />,
  },
  {
    name: "Node.js",
    icon: <RiNodeTree className="text-green-500" />,
  },
  {
    name: "PostgreSQL",
    icon: <RiDatabaseLine className="text-blue-400" />,
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill className="text-teal-400" />,
  },
  {
    name: "GitHub",
    icon: <RiGithubFill className="text-white" />,
  },
];

export const EXPERIENCES = [
  {
    yearRange: "Oct 2023 - Jan 2024",
    role: "Product Demonstrator",
    company: "Donna Italia",
    description:
      "Developed communication skills by explaining complex product features to diverse audiences. Built positive customer relationships, improving problem-solving and adaptability",
  },
  {
    yearRange: "Apr 2023 - Aug 2023",
    role: "Floor Manager",
    company: "PlayerReady VR",
    description:
      "Prepared rotas, managed inventory, organised staff on shift and handled customer queries.",
  },
];

export const EDUCATION = [
  {
    id: 1,
    degree: "BSc in Computer Games Technology",
    institution: "University of Portsmouth",
    duration: "2019 - 2022",
    description:
      "Graduated with a diploma in Computer Games Technology. Developed skills in game design, programming, and 3D modelling.",
  },
  {
    id: 2,
    degree: "BTEC Level 3 Diploma in IT",
    institution: "Eastleigh College",
    duration: "2017 - 2019",
    description:
      "Awarded a Distinction* in IT, covering topics such as software development, hardware, networking, and database management.",
  },
  {
    id: 3,
    degree: "GCSEs",
    institution: "Thornden School",
    duration: "2010 - 2015",
    description: "9 GCSEs including Maths, English, and Science.",
  },
];
