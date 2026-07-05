// components/Experience.tsx
"use client";
import { motion } from "framer-motion";
import { experience } from "@/data";
import { Briefcase, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 rounded-full bg-[#e94560]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#0f3460]/5 blur-3xl" />
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
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
            style={{ 
              backgroundColor: "#1a1a2e/5",
              border: "1px solid #1a1a2e/10"
            }}
          >
            <Briefcase size={16} style={{ color: "#0f3460" }} />
            <span className="text-sm font-medium" style={{ color: "#1a1a2e/70" }}>
              Work Experience
            </span>
          </motion.div>
          
          <h2 
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "#1a1a2e" }}
          >
            Professional Journey
          </h2>
          <div className="w-20 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: "#0f3460" }} />
        </div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block" style={{ backgroundColor: "#1a1a2e/10" }} />

          {/* Card */}
          <div 
            className="relative rounded-3xl p-8 md:p-10 transition-all duration-500 hover:shadow-2xl"
            style={{ 
              backgroundColor: "white",
              border: "1px solid #1a1a2e/8",
              boxShadow: "0 4px 30px rgba(26, 26, 46, 0.06)"
            }}
          >
            {/* Glow Effect on Hover */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: "radial-gradient(circle at top right, rgba(15,52,96,0.06), transparent 70%)",
              }}
            />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <motion.h3 
                    className="text-2xl md:text-3xl font-bold"
                    style={{ color: "#1a1a2e" }}
                  >
                    {experience.position}
                  </motion.h3>
                  <p className="text-lg font-medium mt-1" style={{ color: "#0f3460" }}>
                    {experience.company}
                  </p>
                </div>
                
                <div 
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap"
                  style={{ 
                    backgroundColor: "#0f3460/8",
                    color: "#0f3460",
                    border: "1px solid #0f3460/15"
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
                    className="flex items-start gap-3 p-3 rounded-xl transition-all duration-300 hover:bg-[#1a1a2e]/5"
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      <CheckCircle2 size={18} style={{ color: "#e94560" }} />
                    </div>
                    <p className="text-base leading-relaxed" style={{ color: "#1a1a2e/80" }}>
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
                className="mt-8 pt-6 border-t flex items-center justify-between"
                style={{ borderColor: "#1a1a2e/8" }}
              >
                <div className="flex items-center gap-2 text-sm" style={{ color: "#1a1a2e/50" }}>
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#e94560" }} />
                  Currently working here
                </div>
                <a 
                  href="#projects"
                  className="group flex items-center gap-2 text-sm font-medium transition-all duration-300 hover:gap-3"
                  style={{ color: "#0f3460" }}
                >
                  View My Work
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* Decorative Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute -top-3 -right-3 md:-top-4 md:-right-4"
          >
            <div 
              className="px-4 py-2 rounded-full text-xs font-bold text-white shadow-lg"
              style={{ 
                backgroundColor: "#e94560",
                boxShadow: "0 4px 15px rgba(233, 69, 96, 0.3)"
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
            { label: "Years Experience", value: "2+" },
            { label: "Projects Completed", value: "9+" },
            { label: "Technologies", value: "20+" },
            { label: "Happy Clients", value: "5+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              className="text-center p-6 rounded-2xl transition-all duration-300"
              style={{ 
                backgroundColor: "white",
                border: "1px solid #1a1a2e/6",
                boxShadow: "0 2px 20px rgba(26, 26, 46, 0.04)"
              }}
            >
              <div 
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "#0f3460" }}
              >
                {stat.value}
              </div>
              <div className="text-sm mt-1" style={{ color: "#1a1a2e/60" }}>
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
