"use client";

import { CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[oklch(var(--neon-primary))]/20 bg-background/95 backdrop-blur-md relative z-10">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-3 font-mono">
          <CheckCircle2 className="w-5 h-5 text-green-500 animate-pulse" />
          <span className="text-green-500 font-semibold tracking-wide">
            [ OK ] All tests passed: 100% Quality Guaranteed
          </span>
        </div>

        <div className="text-sm text-gray-500 font-mono text-center md:text-right">
          <p>© {new Date().getFullYear()} Okta.SDET. All rights reserved.</p>
          <p className="text-xs opacity-70 mt-1">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
