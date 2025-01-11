"use client"

import { motion } from "framer-motion"
import { GraduationCap, Trophy, Book } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black/5 dark:bg-white/5 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 text-foreground">
              <GraduationCap className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Education</h3>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p className="font-medium">B.Tech in Computer Science</p>
              <p>Acropolis Institute of Technology and Research</p>
              <p>Graduation: Summer 2024</p>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 text-foreground">
              <Trophy className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Achievements</h3>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p>Completed Udemy Web Development (MERN) Course by Angela Yu</p>
            </div>
          </motion.div>

          {/* Interests */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2 text-foreground">
              <Book className="w-5 h-5 text-primary" />
              <h3 className="font-semibold">Interests</h3>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p>Enjoys reading visual novels, light novels, and web novels</p>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="text-center pt-8 border-t border-border"
        >
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Naman Sharma. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}