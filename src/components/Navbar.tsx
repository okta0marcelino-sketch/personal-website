"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, TerminalSquare, Download, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useResumeDownload } from "@/context/ResumeDownloadContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const { isDownloaded, triggerDownload } = useResumeDownload();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Active Section Detection
    const sections = ["about", "tech-stack", "projects"];
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "Tech Stack", href: "#tech-stack", id: "tech-stack" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "https://wa.me/6281324969451", id: "contact", isExternal: true },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glassmorphism py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <TerminalSquare className="w-8 h-8 text-[oklch(var(--neon-primary))] group-hover:animate-pulse" />
          <span className="text-xl font-bold tracking-tighter text-white">
            SDET<span className="text-[oklch(var(--neon-primary))]">.</span>PRO
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              className={`text-sm font-medium transition-all relative py-1 ${
                activeSection === link.id
                  ? "text-[oklch(var(--neon-primary))]"
                  : "text-gray-300 hover:text-[oklch(var(--neon-primary))]"
              }`}
            >
              {link.name}
              {activeSection === link.id && !link.isExternal && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[oklch(var(--neon-primary))] shadow-[0_0_8px_oklch(var(--neon-primary))]"
                />
              )}
            </Link>
          ))}
          <a
            href="/CV_Marcelino_Oktaviansyah_QA_Engineer.pdf"
            download
            onClick={triggerDownload}
            className={`inline-flex items-center gap-2 justify-center rounded-md text-sm font-medium border transition-all h-10 px-4 py-2 ${
              isDownloaded
                ? "border-green-500 bg-green-500/20 text-green-400"
                : "border-white/20 hover:border-[oklch(var(--neon-primary))] hover:bg-[oklch(var(--neon-primary))/10]"
            }`}
          >
            {isDownloaded ? (
              <>
                <Check className="w-4 h-4" />
                Downloaded
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Resume
              </>
            )}
          </a>
        </nav>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger className="md:hidden inline-flex items-center justify-center rounded-md hover:bg-white/10 transition-colors h-10 w-10">
            <Menu className="w-6 h-6" />
            <span className="sr-only">Toggle Menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="glassmorphism border-l-white/10 flex flex-col items-center justify-center text-center">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">Mobile navigation links centered</SheetDescription>
            <div className="flex flex-col gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.isExternal ? "_blank" : undefined}
                  className={`text-3xl font-bold transition-colors w-full text-center block ${
                    activeSection === link.id
                      ? "text-[oklch(var(--neon-primary))]"
                      : "text-white hover:text-[oklch(var(--neon-primary))]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/CV_Marcelino_Oktaviansyah_QA_Engineer.pdf"
                download
                onClick={triggerDownload}
                className={`w-full py-6 text-lg inline-flex items-center justify-center gap-3 rounded-md font-medium transition-all ${
                  isDownloaded
                    ? "bg-green-500 text-white"
                    : "bg-[oklch(var(--neon-primary))] text-black hover:bg-[oklch(var(--neon-primary))/80]"
                }`}
              >
                {isDownloaded ? (
                  <>
                    <Check className="w-5 h-5" />
                    Downloaded!
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    Download Resume
                  </>
                )}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
