'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />
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
              className="relative w-64 h-64 mx-auto md:mx-0"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Image
                src="/images/profile.jpeg"
                alt="Suryakanth Gunnam at Arches National Park"
                fill
                className="rounded-full object-cover shadow-lg"
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
    </section>
  )
}

