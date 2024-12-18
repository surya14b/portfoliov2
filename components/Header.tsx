'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -100, behavior: 'smooth' })
    }
  }

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 100, behavior: 'smooth' })
    }
  }

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      })
    }
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 relative">
        <div className="md:hidden absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <button onClick={handleScrollLeft} className="p-2 bg-gray-800/50 rounded-full text-white">
            &lt;
          </button>
        </div>
        <div className="md:hidden absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <button onClick={handleScrollRight} className="p-2 bg-gray-800/50 rounded-full text-white">
            &gt;
          </button>
        </div>
        <ul 
          ref={scrollRef}
          className="flex justify-start md:justify-center space-x-8 overflow-x-auto scrollbar-hide"
          style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
        >
          {sections.map((item) => (
            <motion.li key={item} className="flex-shrink-0" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleSmoothScroll(e, item.toLowerCase())}
                className="text-lg font-semibold text-white hover:text-pink-400 transition-colors whitespace-nowrap"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

