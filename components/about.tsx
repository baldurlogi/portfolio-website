"use client"

import React from 'react'
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks'


export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section 
      ref={ref}
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3'>
            After completing dual B.Sc. degrees in{" "}
            <span className="font-medium">Engineering management</span> and {" "} 
            <span className="font-medium">Computer Science</span>, I embarked on a journey to Copenhagen to expand my horizons.  I began my journey with a coding bootcamp at <span className="italic">Codecademy</span>, where I delved into{" "} 
            <span className="font-medium">full-stack web development</span> and <span className="font-medium">iOS development</span> with <span className='italic'>Swift</span>.{" "} Since then, I&apos;ve evolved into a <span className="font-medium">DevOps Developer</span> at Forsia Forsikring, where I played a part in <span className="underline">deployment optimization</span>, <span className="underline">infrastructure automation</span>, and <span className="underline">cloud migration</span>, all while strengthening my skills in digital project management.
        </p>
        <p className='mb-3'>
            <span className="italic">What excites me most about tech</span> is the thrill of problem-solving and potential to create impactful solutions. My technical expertise now spans <span className='font-medium'>DevOps</span> practises as well as front-end tools like <span className="font-medium">
            React, TypeScript, JavaScript, Tailwind CSS and Vite
            </span>. I&apos;m currently <span className='font-medium'>open to freelancing</span> opportunities to bring my diverse skill set to exciting, impactful projects. 
        </p>

        <p>
            <span className="italic">Beyond the screen</span>, I enjoy staying active, exploring fashion, cooking and baking, discovering music, and spending quality time with friends and family.
        </p>
    </motion.section>
  );
}
