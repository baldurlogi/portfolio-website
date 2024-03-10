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
            After completing my BSc degree in{" "}
            <span className="font-medium">Engineering management</span> and another in{" "} 
            <span className="font-medium">Computer Science</span>, I embarked on a journey to Copenhagen to expand my horizons. I enrolled in a coding bootcamp at <span className="italic">Codecademy</span>, where I delved into{" "} 
            <span className="font-medium">full-stack web development</span> and <span className="font-medium">iOS development</span> with <span className='italic'>Swift</span>.{" "}
        </p>
        <p className='mb-3'>
            <span className="italic">What excites me most about programming</span> is the thrill of problem-solving. My experience lies in <span className="font-medium">
            React, Next.js, Node.js, TypeScript, and MongoDB
            </span>. Currently, I&apos;m <span className='font-medium'>seeking freelancing opportunities</span> to apply my skills and contribute to exciting projects. 
        </p>

        <p>
            <span className="italic">Outside of coding</span>, I find joy in CrossFit training, exploring fashion, discovering music, and spending quality time with friends. Cooking and baking bring me great joy, and I&apos;m rediscovering my enjoyment for reading.
        </p>
    </motion.section>
  );
}
