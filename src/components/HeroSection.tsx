"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ChevronRight, Activity, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { useResumeDownload } from "@/context/ResumeDownloadContext";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const { isDownloaded, triggerDownload } = useResumeDownload();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute inset-0 mesh-gradient opacity-40 mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
            <Activity className="w-4 h-4 text-[oklch(var(--neon-primary))]" />
            <span className="text-sm font-medium text-gray-300 tracking-wide">
              Automating the Future
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Hi, I&apos;m{" "}
            <span className="relative inline-block mt-2">
              <span className="relative z-10 flex flex-wrap gap-x-[0.1em]">
                {"Marcelino Oktaviansyah".split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[oklch(0.85_0.15_150)] drop-shadow-[0_0_8px_oklch(0.85_0.15_150/0.4)]"
                    transition={{
                      duration: 0.1,
                      delay: index * 0.05,
                      ease: "easeIn",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </span>
              {/* Subtle background glow to lift it from the dark bg */}
              <span className="absolute inset-0 blur-3xl bg-[oklch(var(--neon-primary))] opacity-10 pointer-events-none -z-0" />

              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="inline-block w-[4px] h-[0.8em] bg-[oklch(var(--neon-primary))] ml-2 align-middle shadow-[0_0_10px_oklch(var(--neon-primary))]"
              />
            </span>
            <br />
            <span className="text-3xl md:text-5xl text-gray-400 font-semibold mt-2 block">
              Software Development Engineer in Test
            </span>
          </h1>

          <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
            Have 3+ Years using test automation frameworks to guarantee flawless software delivery. If it can be tested, I can automate it.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="/CV_Marcelino_Oktaviansyah_QA_Engineer.pdf"
              download
              onClick={triggerDownload}
              className={`group h-12 px-6 inline-flex items-center justify-center rounded-md text-sm font-medium transition-all cursor-pointer ${
                mounted && isDownloaded
                  ? "bg-green-500 text-white"
                  : "bg-[oklch(var(--neon-primary))] text-black hover:bg-[oklch(var(--neon-primary))/80]"
              }`}
            >
              {mounted && isDownloaded ? (
                <>
                  Downloaded!
                  <Check className="ml-2 w-4 h-4" />
                </>
              ) : (
                <>
                  Download Resume
                  <Download className="ml-2 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </a>
            <a
              href="https://wa.me/6281324969451"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "border-white/20 hover:border-[oklch(var(--neon-blue))] hover:bg-[oklch(var(--neon-blue))/10] group h-12 px-6")}
            >
              Contact Me
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* 3D Visual Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:h-[600px] flex items-center justify-center p-8"
        >
          {/* Cybernetic Laboratory container */}
          <div className="relative w-full aspect-square max-w-lg rounded-2xl glassmorphism flex flex-col items-center justify-center border-white/10 shadow-[0_0_50px_oklch(var(--neon-primary)/0.1)] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-[oklch(var(--neon-blue))/10] to-transparent opacity-30" />

            {/* Image will be placed here */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sdet_hero_visual.png"
              alt="QA Automation 3D Visual"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              onError={(e) => {
                // Fallback if image doesn't exist yet
                e.currentTarget.style.display = 'none';
              }}
            />

            {/* Pulsing ring */}
            <div className="absolute w-32 h-32 rounded-full border border-[oklch(var(--neon-primary))] animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
            <div className="w-16 h-16 bg-[oklch(var(--neon-primary))] rounded-full blur-xl animate-pulse" />

            <p className="mt-8 text-[oklch(var(--neon-primary))] font-mono text-xs uppercase tracking-widest z-10 opacity-50">
              [ System Active ]
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
