"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Promptopia",
    description: "A full-stack Next.js application for discovering and sharing AI prompts. Features user authentication via NextAuth, CRUD operations, and MongoDB integration.",
    tech: ["Next.js", "MongoDB", "NextAuth", "Tailwind CSS"],
    liveUrl: "https://promptopia-ns.vercel.app/",
    githubUrl: "https://github.com/149NamanSHARMA/Promptopia",
    imageUrl: "/promptopia.png" 
  },
  {
    title: "Anime Vault",
    description: "An anime discovery platform with infinite scrolling, built using Next.js and Framer Motion. Integrates with the Shikimori API to display anime in an engaging card layout.",
    tech: ["Next.js", "Framer Motion", "Shikimori API", "Tailwind CSS"],
    liveUrl: "https://anime-vault-xi-seven.vercel.app/",
    githubUrl: "https://github.com/149NamanSHARMA/Anime_vault",
    imageUrl: "/anime-vault.png"
  },
  {
    title: "Weather Lookup",
    description: "A modern weather application built with Next.js featuring real-time weather data, city search, and detailed weather metrics display.",
    tech: ["Next.js", "Weather API", "Tailwind CSS"],
    liveUrl: "https://next-js-weather-ten.vercel.app/",
    githubUrl: "https://github.com/149NamanSHARMA/NextJS-Weather",
    imageUrl: "/weather-lookup.png"
  },
  // Add your other projects here
]

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
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
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
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
            className="hover:text-foreground transition-colors"
        >
            <Github size={20} />
        </a>
        <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-foreground transition-colors"
        >
            <ExternalLink size={20} />
        </a>
        </div>
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each one taught me something new and helped me grow as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}