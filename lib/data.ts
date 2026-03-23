import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';
import coming_soon from '@/public/coming_soon.png';
import membership_website from '@/public/membership_website.png';
import Dexta from '@/public/Dexta.png';
import tekla_portfolio from '@/public/tekla-portfolio.png';
import begyn from '@/public/begyn.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Software Engineer @ Predicti',
    location: 'Copenhagen, Denmark',
    description:
      'Built and owned production ETL data pipelines end-to-end as the sole data engineer on a 4-person team, transforming raw financial data into predictive insights for Nordic financial institutions. Designed ingestion pipelines handling diverse sources — ZIP archives, SFTP servers, JSON, CSV, TXT, and REST APIs — processing datasets up to 100 GB (100M+ records) and streaming events through Kafka in dev and production. Led full end-to-end implementation: GitOps configuration, Terraform infrastructure, AWS IAM policies and Secrets Manager, and ArgoCD deployment — owning every layer from infrastructure to running pipeline. Solved performance challenges including memory optimization, batching, S3 backup, and safe restarts to process large-scale financial data without overflow or pipeline stalls.',
    icon: React.createElement(CgWorkAlt),
    date: 'Oct 2025 - 2026',
  },
  {
    title: 'Founder & Engineer @ Begyn',
    location: 'Remote',
    description:
      'Sole engineer and founder of Begyn (begyn.app) — an AI-powered life system that turns big goals into daily progress through personalized coaching and smart next-action guidance. Built the full product stack solo: React + TypeScript + Vite, Supabase (PostgreSQL + Edge Functions), Vercel, Stripe billing, and PostHog analytics — from zero to production with real paying users. Designed and implemented an AI goal generation system using the Claude API via Supabase Edge Functions (Deno), including a clarifying question flow, dynamic step-count generation, and per-user context personalisation. Implemented a full subscription and billing system with Stripe Checkout, Customer Portal, and webhook handlers updating user tier in real time — including graceful free tier limit surfacing. Instrumented full-funnel analytics with PostHog across signup, onboarding, goal creation, step completion, and upgrade events — enabling data-driven iteration and identifying drop-off points in the activation flow from day one.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jan 2025 - present',
  },
  {
    title: 'Freelance Web Developer',
    location: 'Copenhagen, Denmark',
    description:
      'I started freelancing as a Web Developer driven by a passion for building up-to-date digital experiences that help businesses thrive online. Specializing in React.js, TypeScript, JavaScript, and Tailwind CSS, I focus on modernizing and optimizing websites for better performance and user engagement. My recent work involved redesigning an existing site to a reactive site with a mobile-first approach, improving performance, accessibility, and user engagement. I streamline front-end development by building scalable UI components and integrating third-party APIs, ensuring seamless functionality. By collaborating closely with clients, I translate business needs into interactive, high-performance web applications. Through clean, maintainable code and best practices in SEO and responsiveness, I help businesses enhance their online presence and user experience.',
    icon: React.createElement(CgWorkAlt),
    date: '2024 - present',
  },
  {
    title: 'DevOps Developer @ Forsia Forsikring',
    location: 'Copenhagen, Denmark',
    description:
      'I joined Forsia Forsikring with minimal DevOps experience and am now the lead DevOps Developer. My role focuses on optimizing deployment across environments using GitHub Actions, achieving a 95% reduction in package size and a 75% decrease in deployment time. I implemented a trunk-based development model and leveraged Kubernetes and ArgoCD for automation, enhancing scalability and reliability. As the primary contact for cloud partners and digital vendors, I strengthen cross-functional communication and support our shift to a cloud-based platform.',
    icon: React.createElement(CgWorkAlt),
    date: '2023 - 2025',
  },
  {
    title: 'Graduated with BSc. in Computer Science',
    location: 'Reykjavík University, Iceland',
    description:
      "Decided to do a double degree programme where I added one year to earn a additional degree. I was on the Dean's list fall 2022 and my groups final project was a MESR analog with environmental mapping and simulation",
    icon: React.createElement(LuGraduationCap),
    date: '2022 - 2023',
  },
  {
    title: 'Graduated with BSc. in Engineering Management',
    location: 'Reykjavík University, Iceland',
    description:
      "I graduated after 3 years of studying. During my education, I was a member of the university's newspaper editorial board 2021-2022",
    icon: React.createElement(LuGraduationCap),
    date: '2019 - 2022',
  },
] as const;

export const projectsData = [
  {
    title: 'Begyn',
    description:
      'An AI-powered life system that helps users turn big goals into daily progress through personalized coaching and smart next-action guidance. Built solo as the founder and engineer.',
    tags: ['React', 'TypeScript', 'Supabase', 'Stripe', 'AI'],
    imageUrl: begyn,
  },
  {
    title: 'Renewed Dexta Website',
    description:
      'Redesigned and modernized existing website with a responsive and mobile-first approach',
    tags: [
      'React.JS',
      'Parallax Effects',
      'Swiper',
      'Google Maps API',
      'i18next',
    ],
    imageUrl: Dexta,
  },
  {
    title: 'Make-up Artist Portfolio',
    description:
      'A professional, responsive portfolio website for a make-up artist, built to showcase work and facilitate client inquiries.',
    tags: [
      'React.js',
      'Tailwind CSS',
      'Vite',
      'Resend (email handling)',
      'Cloudinary (image hosting)',
    ],
    imageUrl: tekla_portfolio,
  },
] as const;

export const skillsData = {
  'Backend & Data': [
    'Python',
    'Node.js',
    'Deno',
    'PostgreSQL',
    'Kafka',
    'ETL Pipelines',
    'REST APIs',
  ],
  'DevOps & Cloud': [
    'Docker',
    'Kubernetes',
    'Terraform',
    'ArgoCD',
    'AWS',
    'GitHub Actions',
    'Linux',
  ],
  Frontend: [
    'TypeScript',
    'React',
    'Next.js',
    'Vite',
    'Tailwind CSS',
    'TanStack Query',
    'Zustand',
  ],
  'AI & Product': [
    'Anthropic Claude API',
    'Supabase',
    'Stripe',
    'PostHog',
    'Vercel',
  ],
  Monitoring: ['Grafana', 'Prometheus', 'Vercel Speed Insights'],
} as const;
