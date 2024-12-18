'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-6 relative z-10">
      <motion.h2
        className="text-5xl font-bold mb-8 text-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="relative aspect-[4/3] overflow-hidden rounded-xl"
            whileHover={{ scale: 1.02 }}
          >
            <Image
              src="/images/profile.jpeg"
              alt="Suryakanth Gunnam at Arches National Park"
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </motion.div>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl">
            <p className="text-lg text-gray-300">
              Results-driven Software Developer specializing in backend development and scalable systems. 
              Expertise in designing high-performance APIs, optimizing databases, and deploying cloud-based 
              solutions using Node.js, Django, AWS, and Web Based Frameworks.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              When not coding, I enjoy exploring national parks and experiencing the great outdoors, 
              bringing the same sense of adventure and problem-solving to both my professional and personal life.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

