'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import {
  LuGraduationCap,
  LuBriefcase,
  LuLightbulb,
  LuHeart,
} from 'react-icons/lu';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <div className="space-y-6">
        {/* Education */}
        <motion.div
          className="flex items-start gap-4 p-4 rounded-lg bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <LuGraduationCap className="text-2xl text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
          <div className="text-left">
            <h3 className="font-semibold text-lg mb-2">Education Foundation</h3>
            <p>
              Dual B.Sc. degrees in{' '}
              <span className="font-medium">Engineering Management</span> and{' '}
              <span className="font-medium">Computer Science</span> from
              Reykjavík University, providing a strong foundation in both
              technical and business aspects of software development.
            </p>
          </div>
        </motion.div>

        {/* Career Journey */}
        <motion.div
          className="flex items-start gap-4 p-4 rounded-lg bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <LuBriefcase className="text-2xl text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
          <div className="text-left">
            <h3 className="font-semibold text-lg mb-2">Professional Journey</h3>
            <p className="mb-2">
              I moved to Copenhagen to expand my horizons, get to know new
              people, and seek more opportunities to challenge myself
              professionally.
            </p>
            <p className="mb-2">
              I then joined{' '}
              <span className="font-medium">Forsia Forsikring</span> as a DevOps
              Developer, optimizing deployments and driving cloud migration
              initiatives.
            </p>
            <p>
              I worked at <span className="italic">Predicti</span> as a Software
              Engineer, owning end-to-end data pipelines and cloud
              infrastructure for predictive insights in Nordic finance.
            </p>
          </div>
        </motion.div>

        {/* Entrepreneurship */}
        <motion.div
          className="flex items-start gap-4 p-4 rounded-lg bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <LuLightbulb className="text-2xl text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0" />
          <div className="text-left">
            <h3 className="font-semibold text-lg mb-2">Entrepreneurship</h3>
            <p>
              As a self-starter, I founded <span className="italic">Begyn</span>
              , an AI-powered life system that helps users turn goals into daily
              progress. I built the entire product solo from concept to
              production, now serving paying users.
            </p>
          </div>
        </motion.div>

        {/* What Excites Me */}
        <motion.div
          className="text-center p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="font-semibold text-lg mb-3 italic">
            What Excites Me About Tech
          </h3>
          <p className="mb-3">
            The thrill of problem-solving and creating impactful solutions
            drives my passion for technology.
          </p>
          <p>
            My expertise spans{' '}
            <span className="font-medium">
              data engineering, DevOps, and cloud infrastructure
            </span>{' '}
            with hands-on experience in modern tools and frameworks.
          </p>
        </motion.div>

        {/* Personal */}
        <motion.div
          className="flex items-start gap-4 p-4 rounded-lg bg-white/50 dark:bg-white/5 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <LuHeart className="text-2xl text-red-600 dark:text-red-400 mt-1 flex-shrink-0" />
          <div className="text-left">
            <h3 className="font-semibold text-lg mb-2">Beyond the Code</h3>
            <p>
              When I'm not coding, I enjoy staying active, exploring fashion,
              cooking and baking, discovering new music, and spending quality
              time with friends and family.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
