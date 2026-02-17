import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { Toaster } from "sonner";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SpecialtiesSection from "./components/SpecialtiesSection";
import DoctorsSection from "./components/DoctorsSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import FloatingElements from "./components/FloatingElements";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-x-hidden">
      <FloatingElements />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <DoctorsSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
}
