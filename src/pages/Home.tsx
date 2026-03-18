import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import AnimationWrapper from "@/components/AnimationWrapper";
import SEO from "@/components/SEO";
import { useState } from "react";
import { type Project } from "@/data/projects";

const Home = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <main className="min-h-screen pt-32 px-6">
      <SEO path="/" />

      {/* Hero */}
      <section className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter text-foreground mb-8 leading-[0.9]">
            SIDDHARTH <br />
            <span className="text-muted-foreground italic font-light">NIGAM</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-md">
              AI-Driven Full Stack Developer building high-performance
              digital interfaces with Django and React.
            </p>
            <div className="flex gap-4">
              <Link to="/projects">
                <Button variant="hero" size="lg">
                  View Projects
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="hero-outline" size="lg">
                  Contact
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Featured Projects */}
        <AnimationWrapper delay={0.3} className="mt-24 md:mt-32">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Featured Work
            </h2>
            <Link
              to="/projects"
              className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              View All <ArrowRight size={12} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={setSelected} />
            ))}
          </div>
        </AnimationWrapper>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </main>
  );
};

export default Home;
