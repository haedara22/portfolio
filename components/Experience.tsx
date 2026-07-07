// components/Experience.tsx
"use client";
import { motion } from "framer-motion";
import { experience } from "@/data";
import { Briefcase, Calendar, CheckCircle2, ArrowRight, Award, Code, Users, Zap } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto relative bg-[#f8fafc]">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-[#6366f1]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#2563eb]/5 blur-3xl" />
        <div className="absolute top-20 right-20 w-48 h-48 rounded-full bg-[#06b6d4]/4 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ 
              backgroundColor: "#eff6ff",
              border: "1px solid #2563eb/20"
            }}
          >
            <Briefcase size={16} style={{ color: "#2563eb" }} />
            <span className="text-sm font-medium" style={{ color: "#2563eb" }}>
              Work Experience
            </span>
          </motion.div>
          
          <h2 
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "#0f172a" }}
          >
            Professional Journey
          </h2>
          <div className="w-20 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: "#2563eb" }} />
        </div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block" style={{ backgroundColor: "#2563eb/20" }} />

          {/* Card */}
          <div 
            className="relative rounded-3xl p-8 md:p-10 transition-all duration-500 hover:shadow-2xl"
            style={{ 
              backgroundColor: "#ffffff",
              border: "1px solid #e2e8f0",
              boxShadow: "0 4px 30px rgba(15, 23, 42, 0.06)"
            }}
          >
            {/* Glow Effect on Hover */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(circle at top right, rgba(37,99,235,0.06), transparent 70%)",
              }}
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold"
                    style={{ color: "#0f172a" }}
                  >
                    {experience.position}
                  </motion.h3>
                  <p className="text-lg font-medium mt-1" style={{ color: "#2563eb" }}>
                    {experience.company}
                  </p>
                </div>
                
                <div 
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap"
                  style={{ 
                    backgroundColor: "#eff6ff",
                    color: "#2563eb",
                    border: "1px solid #2563eb/20"
                  }}
                >
                  <Calendar size={16} />
                  {experience.period}
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                {experience.description.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-[#f1f5f9]"
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      <CheckCircle2 size={18} style={{ color: "#3b82f6" }} />
                    </div>
                    <p className="text-base leading-relaxed" style={{ color: "#64748b" }}>
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-8 pt-6 border-t flex items-center justify-between flex-wrap gap-4"
                style={{ borderColor: "#e2e8f0" }}
              >
                <div className="flex items-center gap-2 text-sm" style={{ color: "#94a3b8" }}>
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#2563eb" }} />
                  Currently working here
                </div>
                <a 
                  href="#projects"
                  className="group flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3"
                  style={{ color: "#2563eb" }}
                >
                  View My Work
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Decorative Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
            className="absolute -top-3 -right-3 md:-top-4 md:-right-4"
          >
            <div 
              className="px-4 py-2 rounded-full text-xs font-bold text-white shadow-lg"
              style={{ 
                backgroundColor: "#6366f1",
                boxShadow: "0 4px 15px rgba(99, 102, 241, 0.4)"
              }}
            >
              ✦ 2025
            </div>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          {[
            { label: "Years Experience", value: "2+", icon: Award },
            { label: "Projects Completed", value: "9+", icon: Code },
            { label: "Technologies", value: "20+", icon: Zap },
            { label: "Happy Clients", value: "5+", icon: Users },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="text-center p-6 rounded-2xl transition-all duration-300 group cursor-default"
              style={{ 
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                boxShadow: "0 2px 20px rgba(15, 23, 42, 0.04)"
              }}
            >
              <div className="flex justify-center mb-2">
                <div 
                  className="p-2 rounded-xl transition-all duration-300 group-hover:scale-110"
                  style={{ 
                    backgroundColor: "#eff6ff",
                    color: "#2563eb"
                  }}
                >
                  <stat.icon size={20} />
                </div>
              </div>
              <div 
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "#0f172a" }}
              >
                {stat.value}
              </div>
              <div className="text-sm mt-1" style={{ color: "#94a3b8" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;