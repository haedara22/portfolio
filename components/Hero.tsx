// components/Hero.tsx
"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/data";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { BsGithub } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#ffffff] to-[#f1f5f9]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-[#2563eb]/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-[#6366f1]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#06b6d4]/[0.03] blur-2xl" />
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#3b82f6]/[0.04] blur-2xl" />
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-[#6366f1]/[0.04] blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Logo كبير */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mb-6"
          >
            <h1 
              className="text-7xl md:text-9xl font-black tracking-tight leading-none"
              style={{ color: "#0f172a" }}
            >
              HAEDARA
            </h1>
            <p 
              className="text-2xl md:text-3xl font-light tracking-[0.5em] mt-2"
              style={{ color: "#2563eb" }}
            >
              SALLOUM
            </p>
          </motion.div>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl font-medium mt-4 mb-6"
            style={{ color: "#0f172a" }}
          >
            {personalInfo.title}
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "#64748b" }}
          >
            {personalInfo.bio}
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <a 
              href={`mailto:${personalInfo.email}`} 
              className="flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-md px-3 py-1.5 rounded-full"
              style={{ color: "#64748b" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#2563eb";
                e.currentTarget.style.backgroundColor = "#eff6ff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#64748b";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <Mail size={18} className="flex-shrink-0" /> 
              <span className="hidden sm:inline">{personalInfo.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
            
            <a 
              href={`tel:${personalInfo.phone}`} 
              className="flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-md px-3 py-1.5 rounded-full"
              style={{ color: "#64748b" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#2563eb";
                e.currentTarget.style.backgroundColor = "#eff6ff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#64748b";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <Phone size={18} className="flex-shrink-0" /> 
              <span className="hidden sm:inline">{personalInfo.phone}</span>
              <span className="sm:hidden">Phone</span>
            </a>
            
            <a 
              href={`https://${personalInfo.github}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-md px-3 py-1.5 rounded-full"
              style={{ color: "#64748b" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#2563eb";
                e.currentTarget.style.backgroundColor = "#eff6ff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#64748b";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <BsGithub size={18} className="flex-shrink-0" /> GitHub
            </a>
            
            <span 
              className="flex items-center gap-2 px-3 py-1.5"
              style={{ color: "#64748b" }}
            >
              <MapPin size={18} className="flex-shrink-0" /> 
              <span className="hidden sm:inline">{personalInfo.location}</span>
              <span className="sm:hidden">Location</span>
            </span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <motion.a
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 8px 30px rgba(37, 99, 235, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              href="/projects"
              className="group px-8 py-3.5 rounded-full font-medium text-white transition-all duration-300 shadow-lg flex items-center gap-2"
              style={{ 
                backgroundColor: "#2563eb",
                boxShadow: "0 4px 20px rgba(37, 99, 235, 0.3)"
              }}
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
            
            <motion.a
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#f1f5f9"
              }}
              whileTap={{ scale: 0.95 }}
              href="#experience"
              className="px-8 py-3.5 rounded-full font-medium transition-all duration-300"
              style={{ 
                border: "2px solid #0f172a",
                color: "#0f172a",
                backgroundColor: "transparent"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#0f172a";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#0f172a";
              }}
            >
              Experience
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-16 flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#94a3b8" }}>
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-0.5 h-8 rounded-full"
              style={{ backgroundColor: "#2563eb" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;