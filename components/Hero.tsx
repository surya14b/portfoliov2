'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="text-center z-10">
      <motion.h1 
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600"
        animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      >
        SURYAKANTH GUNNAM
      </motion.h1>
      <motion.h2 
        className="text-xl sm:text-2xl md:text-3xl mb-6 text-lavender-300"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        Software Developer
      </motion.h2>
      <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto text-gray-300">Specializing in backend development and scalable systems</p>
      <motion.a
        href="#contact"
        className="bg-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition-colors inline-block"
        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(236, 72, 153, 0.7)" }}
        whileTap={{ scale: 0.95 }}
      >
        Get in Touch
      </motion.a>
    </div>
  )
}

