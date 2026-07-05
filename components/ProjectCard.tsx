// components/ProjectCard.tsx
"use client";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  category: string;
}

const ProjectCard = ({ title, description, tech, category }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs">
          {category}
        </span>
      </div>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((t, idx) => (
          <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;