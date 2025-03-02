import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import coming_soon from "@/public/coming_soon.png"
import membership_website from "@/public/membership_website.png"
import Dexta from "@/public/Dexta.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated with BSc. in Engineering Management",
    location: "Reykjavík University, Iceland",
    description:
      "I graduated after 3 years of studying. During my education, I was a member of the university's newspaper editorial board 2021-2022",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "Graduated with BSc. in Computer Science",
    location: "Reykjavík University, Iceland",
    description:
      "Decided to do a double degree programme where I added one year to earn a additional degree. I was on the Dean's list fall 2022 and my groups final project was a MESR analog with environmental mapping and simulation",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "DevOps Developer",
    location: "Copenhagen, Denmark",
    description:
      "I joined Forsia Forsikring with minimal DevOps experience and am now the lead DevOps Developer. My role focuses on optimizing deployment across environments using GitHub Actions, achieving a 95% reduction in package size and a 75% decrease in deployment time. I implemented a trunk-based development model and leveraged Kubernetes and ArgoCD for automation, enhancing scalability and reliability. As the primary contact for cloud partners and digital vendors, I strengthen cross-functional communication and support our shift to a cloud-based platform.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
  {
    title: "Freelance Web Developer",
    location: "Copenhagen, Denmark",
    description:
      "I started freelancing as a Web Developer driven by a passion for building up-to-date digital experiences that help businesses thrive online. Specializing in React.js, TypeScript, JavaScript, and Tailwind CSS, I focus on modernizing and optimizing websites for better performance and user engagement. My recent work involved redesigning an existing site to a reactive site with a mobile-first approach, improving performance, accessibility, and user engagement. I streamline front-end development by building scalable UI components and integrating third-party APIs, ensuring seamless functionality. By collaborating closely with clients, I translate business needs into interactive, high-performance web applications. Through clean, maintainable code and best practices in SEO and responsiveness, I help businesses enhance their online presence and user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Membership Website",
    description:
      "Membership website for an AI chat app built with React JS",
    tags: ["React JS", "Tailwind CSS", "Bento Box", "Parallax Effects"],
    imageUrl: membership_website,
  },
  {
    title: "Renewed Dexta Website",
    description:
      "Redesigned and modernized existing website with a responsive and mobile-first approach",
    tags: ["React JS", "Parallax Effects", "Swiper", "Google Maps API", "i18next"],
    imageUrl: Dexta,
  },
  {
    title: "Coming Soon",
    description: "Professional portfolio",
    tags: ["TBA", "TBA", "TBA", "TBA", "TBA"],
    imageUrl: coming_soon,
  },
] as const;

export const skillsData = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "DevOps",
  "Git",
  "PostgreSQL",
  "Python",
  "GitHub Actions",
  "CI/CD",
  "ArgoCD",
  "Agile Development",
  "Linux",
  "Shell",
] as const;