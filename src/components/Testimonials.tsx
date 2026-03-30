"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Fitri",
    role: "Engineering Lead",
    company: "XL Axiata",
    content:
      "The test automation framework reduced our regression cycle from 3 days to 4 hours. Absolutely game-changing for our delivery pipeline.",
    avatar: "SC",
    rating: 5,
  },
  {
    id: 2,
    name: "Muhammad Iqbal",
    role: "VP of Engineering",
    company: "IdStar",
    content:
      "Quality metrics improved by 340% after implementation. The CI/CD integration was seamless and the documentation was impeccable.",
    avatar: "MR",
    rating: 5,
  },
  {
    id: 3,
    name: "Yolanda",
    role: "Product Manager",
    company: "SinarmasLand",
    content:
      "Zero critical bugs in production for 8 months straight. The attention to edge cases and comprehensive test coverage is remarkable.",
    avatar: "EW",
    rating: 5,
  },
  {
    id: 4,
    name: "Sabar",
    role: "CTO",
    company: "MolaTV",
    content:
      "Best investment we made for our QA infrastructure. ROI was visible within the first sprint. Highly recommend for any serious engineering team.",
    avatar: "SB",
    rating: 5,
  },
  {
    id: 5,
    name: "Alexandra Petrov",
    role: "Senior QA Manager",
    company: "CloudNine Inc",
    content:
      "The automated testing suite caught 47 critical issues before they reached production. Saved us an estimated $2M in potential damages.",
    avatar: "AP",
    rating: 5,
  },
  {
    id: 6,
    name: "James Thompson",
    role: "DevOps Director",
    company: "DataStream",
    content:
      "Integration with our existing toolchain was effortless. Performance testing capabilities exceeded all our expectations.",
    avatar: "JT",
    rating: 5,
  },
  {
    id: 7,
    name: "Nina Patel",
    role: "Software Architect",
    company: "InnovateLabs",
    content:
      "The code quality and testing methodology transformed our entire development culture. A true professional who delivers excellence.",
    avatar: "NP",
    rating: 5,
  },
  {
    id: 8,
    name: "Robert Chang",
    role: "Head of Quality",
    company: "SecureNet",
    content:
      "Security testing protocols were beyond thorough. Found vulnerabilities that three previous audits had missed. Exceptional work.",
    avatar: "RC",
    rating: 5,
  },
];

function TestimonialCard({
  testimonial,
  variant = "cyan",
}: {
  testimonial: Testimonial;
  variant?: "cyan" | "magenta";
}) {
  return (
    <div
      className={cn(
        "group relative flex-shrink-0 w-[350px] md:w-[400px] p-6 rounded-lg",
        "bg-card/50 backdrop-blur-md border transition-all duration-500",
        "hover:scale-[1.02] hover:-translate-y-1",
        variant === "cyan"
          ? "border-primary/30 hover:border-primary/60 cyber-glow"
          : "border-accent/30 hover:border-accent/60 cyber-glow-magenta"
      )}
    >
      {/* Scanline overlay */}
      <div className="absolute inset-0 scanline pointer-events-none rounded-lg opacity-50" />

      {/* Corner accents */}
      <div
        className={cn(
          "absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 rounded-tl-lg",
          variant === "cyan" ? "border-primary" : "border-accent"
        )}
      />
      <div
        className={cn(
          "absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 rounded-tr-lg",
          variant === "cyan" ? "border-primary" : "border-accent"
        )}
      />
      <div
        className={cn(
          "absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 rounded-bl-lg",
          variant === "cyan" ? "border-primary" : "border-accent"
        )}
      />
      <div
        className={cn(
          "absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 rounded-br-lg",
          variant === "cyan" ? "border-primary" : "border-accent"
        )}
      />

      {/* Rating stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <svg
            key={i}
            className={cn(
              "w-4 h-4 animate-pulse-glow",
              variant === "cyan" ? "text-primary" : "text-accent"
            )}
            style={{ animationDelay: `${i * 0.1}s` }}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="relative mb-6">
        <svg
          className={cn(
            "absolute -top-2 -left-2 w-8 h-8 opacity-30",
            variant === "cyan" ? "text-primary" : "text-accent"
          )}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-sm md:text-base text-foreground/90 leading-relaxed pl-4">
          {testimonial.content}
        </p>
      </blockquote>

      {/* Author info */}
      <div className="flex items-center gap-4">
        <div
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center font-mono font-bold text-sm",
            "border-2 transition-all duration-300",
            variant === "cyan"
              ? "bg-primary/20 border-primary/50 text-primary group-hover:bg-primary/30"
              : "bg-accent/20 border-accent/50 text-accent group-hover:bg-accent/30"
          )}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p
            className={cn(
              "font-semibold text-sm",
              variant === "cyan"
                ? "text-primary cyber-text-glow"
                : "text-accent cyber-text-glow-magenta"
            )}
          >
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
          <p className="text-xs text-muted-foreground/70 font-mono">
            @{testimonial.company.toLowerCase().replace(/\s+/g, "")}
          </p>
        </div>
      </div>

      {/* Status indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <span
          className={cn(
            "w-2 h-2 rounded-full animate-pulse",
            variant === "cyan" ? "bg-primary" : "bg-accent"
          )}
        />
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          Verified
        </span>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
  variant = "cyan",
  speed = 40,
}: {
  items: Testimonial[];
  direction?: "left" | "right";
  variant?: "cyan" | "magenta";
  speed?: number;
}) {
  const [isPaused, setIsPaused] = useState(false);
  const duplicatedItems = [...items, ...items];

  return (
    <div
      className="relative overflow-hidden py-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      <div
        className={cn(
          "flex gap-6",
          direction === "left" ? "animate-marquee" : "animate-marquee-reverse"
        )}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {duplicatedItems.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
            variant={variant}
          />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const firstHalf = testimonials.slice(0, 4);
  const secondHalf = testimonials.slice(4);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_oklch(var(--neon-cyan)/0.1)_0%,_transparent_70%)]" />

      {/* Grid lines background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(oklch(var(--neon-cyan)) 1px, transparent 1px),
            linear-gradient(90deg, oklch(var(--neon-cyan)) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10">
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 mb-16">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono text-primary uppercase tracking-widest">
                Testimonials
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">
              <span className="text-foreground">Real Words from </span>
              <span className="text-primary cyber-text-glow animate-glitch">
                Real People
              </span>
            </h2>

            <p className="text-muted-foreground max-w-2xl text-base md:text-lg text-pretty">
              Trusted by engineering teams worldwide. Here&apos;s what industry
              leaders say about working together.
            </p>

            {/* Stats bar */}
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              {[
                { value: "50+", label: "Projects Delivered" },
                { value: "99.9%", label: "Client Satisfaction" },
                { value: "340%", label: "Avg. Quality Improvement" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-primary cyber-text-glow font-mono">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee rows */}
        <div className="space-y-6">
          <MarqueeRow items={firstHalf} direction="left" variant="cyan" speed={35} />
          <MarqueeRow items={secondHalf} direction="right" variant="magenta" speed={45} />
        </div>

        {/* Bottom CTA */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Join the growing list of satisfied clients
          </p>
          <button
            className={cn(
              "inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium",
              "bg-primary/10 border border-primary/50 text-primary",
              "hover:bg-primary/20 hover:border-primary transition-all duration-300",
              "cyber-glow hover:scale-105"
            )}
          >
            <span>Start Your Project</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
