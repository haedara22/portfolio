// components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/data";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { BsGithub } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gradient-to-br from-white via-[#f8f8f8] to-[#f0f0f0]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#0f3460]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#e94560]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#1a1a2e]/[0.02] blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo كبير */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <h1 
              className="text-7xl md:text-9xl font-black tracking-tight leading-none"
              style={{ color: "#1a1a2e" }}
            >
              HAEDARA
            </h1>
            <p 
              className="text-2xl md:text-3xl font-light tracking-[0.5em] mt-2"
              style={{ color: "#0f3460" }}
            >
              SALLOUM
            </p>
          </motion.div>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl font-medium mt-4 mb-6"
            style={{ color: "#1a1a2e/80" }}
          >
            {personalInfo.title}
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "#1a1a2e/60" }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
              style={{ color: "#1a1a2e/70" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#0f3460"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#1a1a2e/70"}
            >
              <Mail size={18} /> {personalInfo.email}
            </a>
            <a 
              href={`tel:${personalInfo.phone}`} 
              className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
              style={{ color: "#1a1a2e/70" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#0f3460"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#1a1a2e/70"}
            >
              <Phone size={18} /> {personalInfo.phone}
            </a>
            <a 
              href={`https://${personalInfo.github}`} 
              target="_blank" 
              className="flex items-center gap-2 transition-all duration-300 hover:scale-105"
              style={{ color: "#1a1a2e/70" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#0f3460"}
              onMouseLeave={(e) => e.currentTarget.style.color = "#1a1a2e/70"}
            >
              <BsGithub size={18} /> GitHub
            </a>
            <span 
              className="flex items-center gap-2"
              style={{ color: "#1a1a2e/70" }}
            >
              <MapPin size={18} /> {personalInfo.location}
            </span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/projects"
              className="group px-8 py-3.5 rounded-full font-medium text-white transition-all duration-300 shadow-lg flex items-center gap-2"
              style={{ 
                backgroundColor: "#0f3460",
                boxShadow: "0 4px 20px rgba(15, 52, 96, 0.3)"
              }}
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#experience"
              className="px-8 py-3.5 rounded-full font-medium transition-all duration-300"
              style={{ 
                border: "2px solid #1a1a2e",
                color: "#1a1a2e"
              }}
            >
              Experience
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#1a1a2e/40" }}>
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-0.5 h-8 rounded-full"
              style={{ backgroundColor: "#0f3460" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;