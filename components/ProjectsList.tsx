// components/ProjectsList.tsx
"use client";
import { projects } from "@/data";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const ProjectsList = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
        >
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsList;