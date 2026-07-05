// components/Skills.tsx
"use client";
import { motion } from "framer-motion";
import { skills } from "@/data";
import { 
  Code2, 
  Database, 
  Layers, 
  Brain, 
  GitBranch,
  Cpu,
  Sparkles,
  CheckCircle2
} from "lucide-react";

const Skills = () => {
  const categories = [
    { 
      title: "Frontend Development", 
      items: skills.frontend,
      icon: Code2,
      color: "#0f3460"
    },
    { 
      title: "Software Development", 
      items: skills.software,
      icon: Layers,
      color: "#1a1a2e"
    },
    { 
      title: "Databases", 
      items: skills.databases,
      icon: Database,
      color: "#0f3460"
    },
    { 
      title: "Methodologies", 
      items: skills.methodologies,
      icon: GitBranch,
      color: "#e94560"
    },
    { 
      title: "AI & Computer Science", 
      items: skills.ai,
      icon: Brain,
      color: "#0f3460"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#e94560]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#0f3460]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#1a1a2e]/[0.02] blur-3xl" />
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
            <Sparkles size={16} style={{ color: "#e94560" }} />
            <span className="text-sm font-medium" style={{ color: "#1a1a2e/70" }}>
              My Expertise
            </span>
          </motion.div>
          
          <h2 
            className="text-4xl md:text-5xl font-bold"
            style={{ color: "#1a1a2e" }}
          >
            Technical Skills
          </h2>
          <p className="text-base md:text-lg mt-3" style={{ color: "#1a1a2e/60" }}>
            Technologies and tools I work with
          </p>
          <div className="w-20 h-1 rounded-full mx-auto mt-4" style={{ backgroundColor: "#0f3460" }} />
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div 
                  className="relative rounded-2xl p-8 transition-all duration-500 h-full"
                  style={{ 
                    backgroundColor: "white",
                    border: "1px solid #1a1a2e/8",
                    boxShadow: "0 4px 30px rgba(26, 26, 46, 0.06)"
                  }}
                >
                  {/* Glow Effect on Hover */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at top right, ${cat.color}08, transparent 70%)`,
                    }}
                  />

                  {/* Top Border Line */}
                  <div 
                    className="absolute top-0 left-8 right-8 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                    style={{ backgroundColor: cat.color }}
                  />

                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div 
                        className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                        style={{ 
                          backgroundColor: `${cat.color}10`,
                        }}
                      >
                        <Icon size={22} style={{ color: cat.color }} />
                      </div>
                      <h3 
                        className="text-lg font-bold"
                        style={{ color: "#1a1a2e" }}
                      >
                        {cat.title}
                      </h3>
                    </div>
                    <span 
                      className="text-xs font-medium px-2 py-1 rounded-full"
                      style={{ 
                        backgroundColor: `${cat.color}10`,
                        color: cat.color
                      }}
                    >
                      {cat.items.length}
                    </span>
                  </div>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="group/skill relative px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        style={{ 
                          backgroundColor: `${cat.color}08`,
                          color: cat.color,
                          border: `1px solid ${cat.color}15`
                        }}
                      >
                        <span className="relative z-10">{skill}</span>
                        <div 
                          className="absolute inset-0 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                          style={{ 
                            backgroundColor: cat.color,
                            opacity: 0.05
                          }}
                        />
                      </motion.span>
                    ))}
                  </div>

                  {/* Footer Decoration */}
                  <div className="mt-6 pt-4 border-t flex items-center justify-between" style={{ borderColor: "#1a1a2e/6" }}>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={12} style={{ color: "#e94560" }} />
                      <span className="text-xs" style={{ color: "#1a1a2e/40" }}>
                        Proficient
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div 
                          key={i}
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ 
                            backgroundColor: i < 3 ? cat.color : `${cat.color}30`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 p-8 rounded-2xl text-center"
          style={{ 
            backgroundColor: "white",
            border: "1px solid #1a1a2e/6",
            boxShadow: "0 2px 20px rgba(26, 26, 46, 0.04)"
          }}
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              { label: "Total Skills", value: "30+" },
              { label: "Frameworks", value: "6+" },
              { label: "Languages", value: "5+" },
              { label: "Tools", value: "10+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -2 }}
                className="text-center"
              >
                <div 
                  className="text-2xl md:text-3xl font-bold"
                  style={{ color: "#0f3460" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm mt-0.5" style={{ color: "#1a1a2e/50" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <div 
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full text-sm font-medium"
            style={{ 
              backgroundColor: "#1a1a2e",
              color: "white"
            }}
          >
            <Cpu size={18} />
            <span>Always learning new technologies</span>
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#e94560" }} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;