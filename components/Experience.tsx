'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  const experiences = [
    {
      company: 'Jio Platforms Limited',
      position: 'Software Developer',
      duration: '2022 - 2023',
      responsibilities: [
        'Engineered and optimized scalable backend systems for JioMeet using Node.js and JavaScript, enhancing performance for 1M+ concurrent users and reducing response times by 35%.',
        'Integrated RESTful APIs to handle 1M+ daily requests, ensuring seamless communication between applications and web services.',
        'Deployed secure systems by implementing RBAC and AES-256 encryption, reducing unauthorized access by 30%.',
        'Conducted backend performance tuning, reducing server response times from 300ms to 180ms, resulting in 40% faster transactions.',
        'Migrated 1TB+ application data to MongoDB, reducing query load times by 25% and improving data retrieval performance.',
      ],
    },
  ]

  return (
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h2>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-purple-400">{exp.company}</h3>
          <h4 className="text-xl mb-2 text-lavender-300">{exp.position}</h4>
          <p className="text-gray-400 mb-4">{exp.duration}</p>
          <ul className="list-disc list-inside text-gray-300">
            {exp.responsibilities.map((resp, idx) => (
              <motion.li 
                key={idx} 
                className="mb-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: (index * 0.1) + (idx * 0.05) }}
              >
                {resp}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  )
}

