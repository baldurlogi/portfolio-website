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
      "Renewed the look for Dexta Energy Technology Solutions with React JS",
    tags: ["React JS", "Parallax Effects", "Swiper", "Google Maps API", "i18next"],
    imageUrl: Dexta,
  },
  {
    title: "Coming Soon",
    description:
      "",
    tags: ["TBA", "TBA", "TBA", "TBA", "TBA"],
    imageUrl: coming_soon,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Flask",
  "Framer Motion",
  "GitHub Actions",
  "CI/CD",
  "ArgoCD",
  "Agile Development",
  "DevOps"
] as const;