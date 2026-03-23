"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSegment, setActiveSegment] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      const sections = ["about", "tech-stack", "projects"];
      
      sections.forEach((id, index) => {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSegment(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dots = [0, 1, 2];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-6">
      {/* The progress line */}
      <div className="relative w-[2px] h-32 bg-white/10 rounded-full overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 right-0 bg-[oklch(var(--neon-primary))] origin-top shadow-[0_0_10px_oklch(var(--neon-primary))]"
          style={{ scaleY }}
        />
      </div>

      {/* Section dots */}
      <div className="flex flex-col gap-4">
        {dots.map((dot) => (
          <motion.div
            key={dot}
            className={`w-2 h-2 rounded-full border transition-colors duration-300 ${
              activeSegment === dot 
                ? "bg-[oklch(var(--neon-primary))] border-[oklch(var(--neon-primary))] shadow-[0_0_8px_oklch(var(--neon-primary))]" 
                : "bg-transparent border-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
