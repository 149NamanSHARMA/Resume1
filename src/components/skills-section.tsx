"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skills = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "REST APIs"]
  },
  {
    category: "Tools & Others",
    items: ["Git", "GitHub", "VS Code", "Responsive Design", "API Integration"]
  }
]

const SkillCard = ({ category, items, index }: { 
  category: string; 
  items: string[];
  index: number;
}) => {
  const [ref, inView] = useInView({
    
    threshold: 0.2
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-colors"
    >
      <h3 className="text-xl font-semibold mb-4 text-foreground">{category}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export function SkillsSection() {
  const [ref, inView] = useInView({
    
    threshold: 0.1
  })

  return (
    <section id="skills" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.category}
              category={skill.category}
              items={skill.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}