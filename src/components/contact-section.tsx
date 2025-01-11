"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Github, MapPin, ExternalLink } from "lucide-react"

export function ContactSection() {
    const email = "namansharma20200@acropolis.in"
    const subject = "Let's connect!"
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`

  return (
    <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Looking for a motivated intern? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <a 
                href={gmailComposeUrl}
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="bg-primary/10 p-3 rounded-full">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p>namansharma20200@acropolis.in</p>
                </div>
              </a>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p>8889575740</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="bg-primary/10 p-3 rounded-full">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p>24/27 Anand Nagar, Indore, India</p>
                </div>
              </div>

              <a 
                href="https://github.com/149NamanSHARMA" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="bg-primary/10 p-3 rounded-full">
                  <Github className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">GitHub</p>
                  <p>@149NamanSHARMA</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Email CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            className="bg-card border border-border p-8 rounded-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-4">Send me an Email</h3>
            <p className="text-muted-foreground mb-6">
              I'm actively looking for internship opportunities. Click below to send me an email directly!
            </p>
            <a 
                href={gmailComposeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity"
                >
                <Mail className="w-5 h-5" />
                Open Gmail
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}