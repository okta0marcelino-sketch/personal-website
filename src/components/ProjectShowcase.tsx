"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, ExternalLink, Code2 } from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    title: "E2E OTT Streaming Automation",
    description: "A comprehensive end-to-end testing suite for a modern ott streaming platform using Katalon",
    tags: ["Katalon", "Jira", "Trello"],
    github: "#",
    live: "#"
  },
  {
    title: "Website Insurance Admin Automation",
    description: "A comprehensive end-to-end testing suite for a modern insurance admin platform using Katalon",
    tags: ["Katalon", "Jira", "Trello", "PostgreSQL", "Gitlab", "Oracle", "Postman"],
    github: "#",
    live: "#"
  },
  {
    title: "E2E E-Commerce Automation",
    description: "A comprehensive end-to-end testing suite for a modern e-commerce platform using Playwright, and TypeScript",
    tags: ["Playwright", "TypeScript", "Jira", "Trello"],
    github: "#",
    live: "#"
  },
  {
    title: "Mobile Banking, Core Banking, CS Digital",
    description: "Cross-platform mobile test automation framework designed to assert complex financial transactions and security layers on iOS and Android.",
    tags: ["Appium", "Java", "Katalon", "Jira", "Trello"],
    github: "#",
    live: "#"
  },
  {
    title: "API Automation Test Telco",
    description: "A comprehensive API automation framework for a leading telecommunications company, ensuring seamless integration and data integrity across multiple services.",
    tags: ["K6", "Python", "Grafana", "Jira", "Postman", "Gherkin", "PostgreSQL", "Gitlab", "Oracle"],
    github: "#",
    live: "#"
  }
];

export default function ProjectShowcase() {
  return (
    <section id="projects" className="py-24 relative mesh-gradient">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center mb-16">
          <Code2 className="w-12 h-12 text-[oklch(var(--neon-primary))] mb-4 opacity-80" />
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl text-center">
            A selection of custom frameworks and automation suites built to tackle complex challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col glassmorphism border-white/10 hover:border-[oklch(var(--neon-primary))]/50 transition-colors group">
                <CardHeader>
                  <CardTitle className="text-xl text-white group-hover:text-[oklch(var(--neon-primary))] transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs font-semibold bg-white/5 border border-white/10 rounded-md text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-4 pt-6 border-t border-white/5">
                  <Link
                    href={project.github}
                    className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "hover:text-[oklch(var(--neon-blue))]")}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Link>
                  <Link
                    href={project.live}
                    className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "hover:text-[oklch(var(--neon-primary))]")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
