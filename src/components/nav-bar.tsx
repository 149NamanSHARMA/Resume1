"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ModeToggle } from "./mode-toggle"

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <AnimatePresence>
      {isScrolled && (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          className="fixed top-0 left-0 right-0 z-50"
        >
          <nav className="mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-md bg-background/80 border-b">
            <div className="flex h-16 items-center justify-between">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400"
              >
                NS
              </motion.span>

              <div className="flex items-center gap-8">
                <ul className="flex gap-6">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <ModeToggle />
              </div>
            </div>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  )
}