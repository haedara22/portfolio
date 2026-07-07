// components/Footer.tsx
"use client";
import { motion } from "framer-motion";
import { personalInfo } from "@/data";
import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative border-t overflow-hidden bg-[#f8fafc]" style={{ borderColor: "#e2e8f0" }}>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#2563eb]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-[#6366f1]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Left Section - Brand */}
          <div className="text-center md:text-left">
            <h3 
              className="text-xl font-bold"
              style={{ color: "#0f172a" }}
            >
              {personalInfo.name}
            </h3>
            <p className="text-sm mt-1" style={{ color: "#64748b" }}>
              Building digital experiences
            </p>
          </div>

          {/* Center Section - Social Links */}
          <div className="flex items-center justify-center gap-4">
            <motion.a
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://${personalInfo.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: "#f1f5f9",
                color: "#64748b"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2563eb";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(37, 99, 235, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f1f5f9";
                e.currentTarget.style.color = "#64748b";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Github size={18} />
            </motion.a>

            <motion.a
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: "#f1f5f9",
                color: "#64748b"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#6366f1";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(99, 102, 241, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f1f5f9";
                e.currentTarget.style.color = "#64748b";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Mail size={18} />
            </motion.a>

            <motion.a
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="p-2.5 rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: "#f1f5f9",
                color: "#64748b"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#06b6d4";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(6, 182, 212, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f1f5f9";
                e.currentTarget.style.color = "#64748b";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Linkedin size={18} />
            </motion.a>

            <motion.a
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="p-2.5 rounded-full transition-all duration-300"
              style={{ 
                backgroundColor: "#f1f5f9",
                color: "#64748b"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#3b82f6";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.boxShadow = "0 4px 15px rgba(59, 130, 246, 0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#f1f5f9";
                e.currentTarget.style.color = "#64748b";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <Twitter size={18} />
            </motion.a>
          </div>

          {/* Right Section - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm flex items-center justify-center md:justify-end gap-1" style={{ color: "#64748b" }}>
              © {new Date().getFullYear()} 
              <span className="font-medium" style={{ color: "#0f172a" }}>
                {personalInfo.name}
              </span>
              <span className="hidden sm:inline">·</span>
              <span className="hidden sm:inline">Built with</span>
              <Heart 
                size={14} 
                className="text-[#2563eb] animate-pulse" 
                fill="#2563eb"
              />
              <span className="hidden sm:inline">using Next.js & Tailwind</span>
            </p>
          </div>
        </div>

        {/* Bottom Divider */}
        <div 
          className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: "#e2e8f0" }}
        >
          <div className="flex items-center gap-6 text-xs" style={{ color: "#64748b" }}>
            <span>All rights reserved</span>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#e2e8f0" }} />
            <span>Version 2.0</span>
            <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#e2e8f0" }} />
            <span className="flex items-center gap-1">
              <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#2563eb" }} />
              Available for work
            </span>
          </div>

          {/* Back to Top Button */}
          <motion.button
            whileHover={{ y: -2, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
            style={{ 
              backgroundColor: "#f1f5f9",
              color: "#0f172a"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#2563eb";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(37, 99, 235, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#f1f5f9";
              e.currentTarget.style.color = "#0f172a";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <ArrowUp size={16} />
            Back to Top
          </motion.button>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-6 text-center">
          <p className="text-xs" style={{ color: "#94a3b8" }}>
            Crafted with <span className="text-[#2563eb]">✦</span> precision and attention to detail
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;