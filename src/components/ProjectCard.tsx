import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { type Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const ProjectCard = ({ project, onSelect }: ProjectCardProps) => (
  <motion.div
    whileHover={{ y: -8 }}
    transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
    className="group relative bg-card border border-foreground/5 overflow-hidden rounded-sm cursor-pointer"
    onClick={() => onSelect(project)}
  >
    <div className="aspect-video overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
        loading="lazy"
      />
    </div>
    <div className="p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
            {project.category}
          </p>
          <h3 className="text-xl font-medium text-foreground">{project.title}</h3>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="p-2 border border-foreground/10 rounded-full text-muted-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
          aria-label={`Visit ${project.title}`}
        >
          <ArrowUpRight size={18} />
        </a>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-[10px] font-mono px-2 py-1 bg-foreground/5 text-foreground/80 border border-foreground/5"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default ProjectCard;
