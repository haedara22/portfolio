// app/projects/page.tsx
import ProjectsList from "@/components/ProjectsList";
import { Metadata } from "next";
import { FolderGit2, Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Haedara Salloum",
  description: "Explore my portfolio projects - Full Stack, Frontend, and AI applications.",
};

export default function ProjectsPage() {
  return (
    <section className="min-h-screen pt-32 pb-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#e94560]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#0f3460]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#1a1a2e]/[0.02] blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4"
              style={{ 
                backgroundColor: "#1a1a2e/5",
                border: "1px solid #1a1a2e/10"
              }}
            >
              <FolderGit2 size={16} style={{ color: "#0f3460" }} />
              <span className="text-sm font-medium" style={{ color: "#1a1a2e/70" }}>
                Portfolio
              </span>
              <span 
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#e94560" }}
              />
              <span className="text-xs font-medium" style={{ color: "#e94560" }}>
                9 Projects
              </span>
            </div>

            <h1 
              className="text-5xl md:text-7xl font-black tracking-tight leading-none"
              style={{ color: "#1a1a2e" }}
            >
              My
              <span className="block md:inline-block md:ml-3" style={{ color: "#0f3460" }}>
                Projects
              </span>
            </h1>
            
            <div className="w-20 h-1 rounded-full mt-4" style={{ backgroundColor: "#0f3460" }} />
          </div>

          <div className="flex-shrink-0">
            <div 
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl text-sm"
              style={{ 
                backgroundColor: "white",
                border: "1px solid #1a1a2e/8",
                boxShadow: "0 2px 20px rgba(26, 26, 46, 0.04)"
              }}
            >
              <Sparkles size={18} style={{ color: "#e94560" }} />
              <span style={{ color: "#1a1a2e/60" }}>
                <span className="font-medium" style={{ color: "#1a1a2e" }}>9</span> projects built
              </span>
            </div>
          </div>
        </div>

        <p 
          className="text-base md:text-lg max-w-2xl mt-6 leading-relaxed"
          style={{ color: "#1a1a2e/60" }}
        >
          A collection of my recent work, from full-stack applications to AI-powered platforms.
          Each project reflects my passion for clean code and great design.
        </p>
      </div>

      {/* Filter/Category Bar */}
      <div className="relative z-10 mb-12 flex flex-wrap items-center gap-3">
        <span className="text-sm font-medium" style={{ color: "#1a1a2e/50" }}>
          Filter:
        </span>
        {["All", "Full Stack", "Frontend", "AI"].map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              category === "All" 
                ? "text-white shadow-lg" 
                : "hover:scale-105"
            }`}
            style={{
              backgroundColor: category === "All" ? "#0f3460" : "transparent",
              color: category === "All" ? "white" : "#1a1a2e/60",
              border: category === "All" ? "none" : "1px solid #1a1a2e/10"
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="relative z-10">
        <ProjectsList />
      </div>
    </section>
  );
}