'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Linkedin, Send } from 'lucide-react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">Get in Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full rounded-md bg-white/5 border border-gray-600 text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md bg-white/5 border border-gray-600 text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="mt-1 block w-full rounded-md bg-white/5 border border-gray-600 text-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="inline-block mr-2" size={18} />
              Send Message
            </motion.button>
          </form>
        </motion.div>
        <motion.div
          className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">Contact Information</h3>
          <ul className="space-y-4">
            <motion.li className="flex items-center" whileHover={{ scale: 1.05 }}>
              <Phone className="text-indigo-400 mr-4" />
              <span className="text-gray-300">9381822575</span>
            </motion.li>
            <motion.li className="flex items-center" whileHover={{ scale: 1.05 }}>
              <Mail className="text-indigo-400 mr-4" />
              <span className="text-gray-300">suryakanth777.sk@gmail.com</span>
            </motion.li>
            <motion.li className="flex items-center" whileHover={{ scale: 1.05 }}>
              <Linkedin className="text-indigo-400 mr-4" />
              <a
                href="https://linkedin.com/in/suryakanth-gunnam-5688751a7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-colors"
              >
                linkedin.com/in/suryakanth-gunnam-5688751a7
              </a>
            </motion.li>
          </ul>
        </motion.div>
      </div>
    </div>
  )
}

