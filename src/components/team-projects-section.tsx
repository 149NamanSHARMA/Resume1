"use client"

import { motion } from "framer-motion"
import { Github, Users, Blocks } from "lucide-react"
import Image from 'next/image'

const teamProjects = [
  {
    title: "DVote: Decentralized Voting Platform",
    description: "Led the development of a blockchain-based voting platform ensuring secure and transparent election processes. Built with Motoko for smart contracts and vanilla JavaScript for the frontend interface.",
    role: "Team Leader and Lead Developer",
    tech: ["Motoko", "Blockchain", "JavaScript", "Smart Contracts"],
    githubUrl: "https://github.com/149NamanSHARMA/DVote",
    imageUrl: "/dvote.png"  
  },
  {
    title: "DBank: Decentralized Banking Application",
    description: "Created a decentralized banking application leveraging blockchain technology for secure financial transactions. Implemented features for deposits, withdrawals, and balance tracking.",
    role: "Team Leader and Lead Developer",
    tech: ["Motoko", "Blockchain", "JavaScript", "Smart Contracts"],
    githubUrl: "https://github.com/149NamanSHARMA/DBank2",
    imageUrl: "/dbank.png"  
  }
]

const TeamProjectCard = ({ project }: { project: typeof teamProjects[0] }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      whileHover={{ y: -5 }}
      className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
      <Image
        src={project.imageUrl}
        alt={project.title}
        width={800}
        height={400}
        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
      />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20 group-hover:from-black/60 group-hover:to-black/30 transition-colors" />
        
        {/* Blockchain Icon Overlay */}
        <div className="absolute top-4 right-4">
          <Blocks className="w-6 h-6 text-white/80" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
        
        {/* Role Badge */}
        <div className="flex items-center gap-2 mb-3">
          <Users className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">{project.role}</span>
        </div>

        <p className="text-muted-foreground mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span 
              key={tech}
              className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4 text-muted-foreground">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            <span className="text-sm">View Source</span>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export function TeamProjectsSection() {
  return (
    <section id="team-projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-black/5 dark:bg-white/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Team Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Collaborative projects where I led teams in developing decentralized applications using blockchain technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {teamProjects.map((project) => (
            <TeamProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}