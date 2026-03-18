import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { type Project } from "@/data/projects";
import { Button } from "@/components/ui/button";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => (
  <AnimatePresence>
    {project && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.19, 1, 0.22, 1] }}
          className="bg-card border border-foreground/10 rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start mb-2">
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {project.category}
              </p>
              <button
                onClick={onClose}
                className="p-1 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">{project.title}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {project.fullDescription}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono px-2 py-1 bg-foreground/5 text-foreground/80 border border-foreground/5"
                >
                  {t}
                </span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg" className="gap-2">
                Visit Project <ArrowUpRight size={16} />
              </Button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ProjectModal;
