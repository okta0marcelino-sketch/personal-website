import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechStack from "@/components/TechStack";
import ProjectShowcase from "@/components/ProjectShowcase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-background selection:bg-[oklch(var(--neon-primary))]/30 selection:text-white">
      <Navbar />
      <div className="flex-grow">
        <HeroSection />
        <TechStack />
        <ProjectShowcase />
      </div>
      <Footer />
    </main>
  );
}
