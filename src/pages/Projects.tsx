import { useState } from "react";
import AnimationWrapper from "@/components/AnimationWrapper";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import SEO from "@/components/SEO";
import { projects, type Project } from "@/data/projects";

const Projects = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <main className="min-h-screen pt-32 px-6 pb-20">
      <SEO
        title="Projects | Siddharth Nigam"
        description="Explore projects by Siddharth Nigam including Video MeetPro, Juggers Store, and more."
        path="/projects"
      />

      <section className="max-w-6xl mx-auto">
        <AnimationWrapper>
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Work</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-4">
            Selected Projects
          </h1>
          <p className="text-muted-foreground max-w-lg mb-12">
            A collection of projects showcasing full-stack development, machine learning, and modern web technologies.
          </p>
        </AnimationWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <AnimationWrapper key={project.id} delay={0.1 * i}>
              <ProjectCard project={project} onSelect={setSelected} />
            </AnimationWrapper>
          ))}
        </div>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </main>
  );
};

export default Projects;
