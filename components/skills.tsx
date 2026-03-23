'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import {
  BsDatabase,
  BsCloud,
  BsCodeSlash,
  BsRobot,
  BsGraphUp,
} from 'react-icons/bs';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const categoryIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  'Backend & Data': BsDatabase,
  'DevOps & Cloud': BsCloud,
  Frontend: BsCodeSlash,
  'AI & Product': BsRobot,
  Monitoring: BsGraphUp,
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <div className="space-y-8">
        {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white/90 flex items-center justify-center gap-2">
              {category === 'Backend & Data' && (
                <BsDatabase className="text-2xl" />
              )}
              {category === 'DevOps & Cloud' && (
                <BsCloud className="text-2xl" />
              )}
              {category === 'Frontend' && <BsCodeSlash className="text-2xl" />}
              {category === 'AI & Product' && <BsRobot className="text-2xl" />}
              {category === 'Monitoring' && <BsGraphUp className="text-2xl" />}
              {category}
            </h3>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
              {skills.map((skill, index) => (
                <motion.li
                  className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={categoryIndex * 10 + index} // Stagger animation across categories
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
