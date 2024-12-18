'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: 'Inventory Management System Dashboard',
      description: 'A scalable full-stack inventory system using Next.js, Redux Toolkit, and Node.js.',
      details: [
        'Improved inventory synchronization by 30%',
        'Deployed backend on AWS EC2 with RDS, achieving high availability',
        'Reduced operational costs by 20%',
        'Implemented robust CI/CD pipelines with Docker, ensuring efficient updates and zero downtime',
      ],
      image: '/images/project1.jpg',
    },
    {
      title: 'E-Commerce Platform with Advanced User Analytics',
      description: 'A high-performance e-commerce backend using Django Rest Framework.',
      details: [
        'Supported active users with scalable architecture',
        'Enhanced customer engagement with advanced search functionality via Elasticsearch',
        'Improved user retention by 25%',
        'Integrated secure payment processing ensuring compliance and boosting sales transactions',
      ],
      image: '/images/project2.jpg',
    },
  ]

  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      }
    },
  }

  return (
    <section id="projects" className="py-20 bg-gray-900/50" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <motion.div 
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl"
              variants={projectVariants}
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-1/2 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-purple-400 mb-4">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                  </div>
                  <div className="flex justify-end">
                    <motion.button
                      onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        expandedProject === index
                          ? 'bg-purple-600 text-white'
                          : 'bg-purple-200 text-purple-800 hover:bg-purple-300'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      aria-expanded={expandedProject === index}
                      aria-controls={`project-details-${index}`}
                    >
                      {expandedProject === index ? 'Hide Details' : 'View Details'}
                    </motion.button>
                  </div>
                  <AnimatePresence>
                    {expandedProject === index && (
                      <motion.div
                        id={`project-details-${index}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ul className="list-disc list-inside text-gray-300 mb-4">
                          {project.details.map((detail, idx) => (
                            <li key={idx} className="mb-2">{detail}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

