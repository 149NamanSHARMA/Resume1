"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

// Particle component
const Particle = ({ x, y }: { x: number; y: number }) => (
  <motion.div
    className="absolute w-2 h-2 bg-purple-300 dark:bg-purple-200 rounded-full blur-[1px] opacity-70"
    style={{ x, y }}
    animate={{
        opacity: [0, 0.8, 1, 0.8, 0],
        scale: [0, 1, 1.5, 1, 0],
      }}
      transition={{
        duration: Math.random() * 3 + 2,  // Longer duration
        repeat: Infinity,
        ease: "easeInOut",  // Smoother easing
      }}
  />
)

export function HeroSection() {
  const [particles, setParticles] = useState<{ x: number; y: number; id: number }[]>([])

  useEffect(() => {
    // Create initial particles
    const initialParticles = Array.from({ length: 150 }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      id: i,
    }))
    setParticles(initialParticles)
  }, [])

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Particles */}
      {particles.map((particle) => (
        <Particle key={particle.id} x={particle.x} y={particle.y} />
      ))}

      {/* Content */}
      <div className="z-10 text-center">
      <motion.h1 
        className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
>       Naman Sharma
    </motion.h1>
    <motion.p 
        className="text-2xl text-muted-foreground mb-8"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.2 }}
        >
          Full Stack Web Developer
        </motion.p>
        <motion.div
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
        <a 
            href="#contact" 
            className="bg-primary text-primary-foreground px-8 py-3 rounded-full inline-block hover:opacity-90 transition-opacity"
        >
        Get In Touch
        </a>
</motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-[1] pointer-events-none" />
    </div>
  )
}