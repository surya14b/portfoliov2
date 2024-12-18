'use client'

import { motion } from 'framer-motion'
import { Code2, Globe, Wrench, Database, Cloud } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['JavaScript', 'Python'],
      icon: Code2,
    },
    {
      category: 'Web Technologies',
      skills: ['RESTful APIs', 'HTML', 'CSS', 'Node.js', 'React', 'Django'],
      icon: Globe,
    },
    {
      category: 'Tools',
      skills: ['Docker', 'GIT', 'Grafana', 'Ansible'],
      icon: Wrench,
    },
    {
      category: 'Databases',
      skills: ['MongoDB', 'Redis', 'SQL'],
      icon: Database,
    },
    {
      category: 'Cloud Platforms',
      skills: ['AWS'],
      icon: Cloud,
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <category.icon className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-semibold text-purple-400">{category.category}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.li
                    key={idx}
                    className="bg-indigo-500/50 text-white px-3 py-1 rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

