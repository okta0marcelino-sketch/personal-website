"use client";

import { motion } from "framer-motion";

const STACK = [
  { name: "Selenium", category: "Web Automation" },
  { name: "Playwright", category: "Modern Web/API" },
  { name: "Cypress", category: "E2E Testing" },
  { name: "Appium", category: "Mobile Automation" },
  { name: "Postman", category: "API Testing" },
  { name: "Jira", category: "Test Management" },
  { name: "Trello", category: "Project Management" },
  { name: "K6", category: "Performance Testing" },
  { name: "TypeScript", category: "Primary Language" },
  { name: "Katalon", category: "Automation Testing" },
  { name: "Jest", category: "API Automation Testing" },
  { name: "Python", category: "Scripting" },
  { name: "Javascript", category: "Web Automation" },
  { name: "Java", category: "Mobile Automation" },
  { name: "Git", category: "Version Control" },
  { name: "Gitlab", category: "Version Control" },
  { name: "Gherkin", category: "BDD" },
  { name: "Grafana", category: "Monitoring" }
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden bg-black/40">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Tech Stack
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leveraging cutting-edge tools to ensure maximum test coverage, faster release cycles, and impeccable software quality.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 tracking-wide">
          {STACK.map((tech, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={tech.name}
              className="group relative h-32 rounded-xl glassmorphism flex flex-col justify-center items-center overflow-hidden border-white/5 hover:border-[oklch(var(--neon-blue))]/50 transition-colors"
            >
              {/* Glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(var(--neon-blue))]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[oklch(var(--neon-blue))] transition-colors z-10">
                {tech.name}
              </h3>
              <span className="text-xs text-gray-500 font-medium uppercase tracking-widest z-10">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
