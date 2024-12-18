'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
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

  return (
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <div className="space-y-32">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ project }: { project: { 
  title: string;
  description: string;
  details: string[];
  image: string;
} }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-xl"
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <ul className="list-disc list-inside text-gray-300 mb-4">
              {project.details.map((detail: string, idx: number) => (
                <li key={idx} className="mb-2">{detail}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

