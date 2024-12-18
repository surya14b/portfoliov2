'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

function AnimatedSection({ children, id }: { children: React.ReactNode; id: string }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <motion.section
      ref={ref}
      style={{ opacity, scale, y }}
      className="min-h-screen flex items-center justify-center"
      id={id}
    >
      {children}
    </motion.section>
  )
}

export default function Home() {
  return (
    <main className="text-white">
      <Header />
      <AnimatedSection id="hero">
        <Hero />
      </AnimatedSection>
      <AnimatedSection id="about">
        <About />
      </AnimatedSection>
      <AnimatedSection id="experience">
        <Experience />
      </AnimatedSection>
      <AnimatedSection id="projects">
        <Projects />
      </AnimatedSection>
      <AnimatedSection id="skills">
        <Skills />
      </AnimatedSection>
      <AnimatedSection id="contact">
        <Contact />
      </AnimatedSection>
    </main>
  )
}

