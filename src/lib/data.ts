import { title } from "process";

export const skills = ["C++", "Python", "Pytorch", "Go", "LangChain", "Kubernetes", "Docker"];

export const projects = [
  {
    title: "Bachelor's Thesis",
    description: "Research about bias mitigation in Large Language Models",
    tech: ["Python", "Pytorch", "Pandas"],
    status: "Completed",
    github: undefined
  },
  {
    title: "AI-Powered Root Cause Analysis Tool (Internship)",
    description: "Developed a tool that leverages AI to identify the root cause of system failures.",
    tech: ["Python", "Dify", "Kubernetes"],
    status: "Completed",
    github: undefined
  },
  {
    title: "Personal Portfolio Website",
    description: "A modern, responsive portfolio website to showcase my projects and skills.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    status: "Completed",
    github: undefined
  },
  {
    title: "Research Assistant",
    description: "Surveyed and implemented several RAG system",
    tech: ["Python"],
    status: "In Progress",
    github: undefined
  },
  {
    title: "SerenSpot",
    description: "Web application that enables user to discover work spot by serendipity and share their favorite work spots.",
    tech: ["React", "Node.js", "CockroachDB", "Prisma"],
    status: "Completed",
    github: "https://github.com/jphacks/tk_b_2509"
  }
];

export const education = [
  {
    period: "2025 - Present",
    title: "Master's Degree in Computer Science",
    institution: "Institute of Science Tokyo",
    description: "Specializing in building Large Language Models. GPA: 3.3/4.0",
    status: "In Progress"
  },
  {
    period: "2020 - 2025",
    title: "Bachelor's Degree in Computer Science",
    institution: "The University of Electro-Communications, Tokyo",
    description: "Major in Management and Social Information. Especially focused on Statistics and Machine Lerning.",
    status: "Completed"
  },
  {
    period: "2022 Sep - 2023 Aug",
    title: "Exchange Student in Digital Media",
    institution: "Universitat Bremen, Germany",
    description: "Studied abroad for one year, focusing on advanced computer science topics and bussiness planning.",
    status: "Completed"
  }
];

export const experience = [
    {
    period: "2025 August - Current",
    title: "Research Intern",
    company: "AI startup in Tokyo",
    description: "Research about RAG system. Implemented several RAG systems and evaluated their performance.",
    technologies: ["Python", "Pytorch"]
  },
  {
    period: "2025 August - September",
    title: "Data Scientist Intern",
    company: "IT Company in Tokyo",
    description: "Developing AI-powered solutions for enterprise clients. Led the development of a root cause analysis tool using advanced ML techniques.",
    technologies: ["Python", "Kubernetes", "Dify"]
  },
  {
    period: "2023 Dec - 2025 Jul",
    title: "Teaching Assistant and Programming Tutor",
    company: "N high School",
    description: "Helped high school students understand programming concepts and maintained company systems.",
    technologies: ["Python", "HTML", "CSS", "JavaScript"]
  }
];

export const socialLinks = {
  twitter: {
    url: "https://twitter.com/knt_master",
    message: "Hello! I'm interested in working with you on AI/ML projects."
  }
};
