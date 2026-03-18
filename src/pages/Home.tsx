import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Linkedin, Github, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import AnimationWrapper from "@/components/AnimationWrapper";
import SEO from "@/components/SEO";
import { useState } from "react";
import { type Project } from "@/data/projects";
import { skills } from "@/data/skills";

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

        {/* Quick Stats */}
        <AnimationWrapper delay={0.2} className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "4+", label: "Projects Built" },
              { value: "6+", label: "Technologies" },
              { value: "PGDFE", label: "Certification" },
              { value: "Ujjain", label: "Based In" },
            ].map((stat) => (
              <div key={stat.label} className="p-5 bg-card border border-foreground/5 rounded-sm text-center">
                <p className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimationWrapper>

        {/* Featured Projects */}
        <AnimationWrapper delay={0.3} className="mt-24 md:mt-28">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard key={project.id} project={project} onSelect={setSelected} compact />
            ))}
          </div>
        </AnimationWrapper>

        {/* Skills Snapshot */}
        <AnimationWrapper delay={0.2} className="mt-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Core Skills
            </h2>
            <Link
              to="/about"
              className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
            >
              More About Me <ArrowRight size={12} />
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.flatMap(c => c.items).slice(0, 12).map((skill) => (
              <span
                key={skill}
                className="text-xs font-mono px-3 py-1.5 bg-foreground/5 text-foreground/80 border border-foreground/5"
              >
                {skill}
              </span>
            ))}
          </div>
        </AnimationWrapper>

        {/* Resume Teaser */}
        <AnimationWrapper delay={0.2} className="mt-24">
          <div className="p-8 md:p-12 bg-card border border-foreground/5 rounded-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-2">
                Check Out My Resume
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
                PGDFE from Miracle IT Career Academy, BBA from Prashanti College, and hands-on experience with Django, React, and ML projects.
              </p>
            </div>
            <Link to="/resume">
              <Button variant="hero" size="lg" className="gap-2 shrink-0">
                <FileText size={16} /> View Resume
              </Button>
            </Link>
          </div>
        </AnimationWrapper>

        {/* Contact CTA */}
        <AnimationWrapper delay={0.2} className="mt-24 pb-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-foreground mb-4">
              Let's Work Together
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-8">
              Available for freelance projects, full-time roles, and exciting collaborations. Reach out anytime.
            </p>
            <div className="flex justify-center gap-3 mb-8">
              {[
                { icon: Github, href: "https://github.com/Siddharthnigam", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/siddharth-nigam-33b039257", label: "LinkedIn" },
                { icon: Mail, href: "mailto:siddharthjinigam@gmail.com", label: "Email" },
                { icon: Phone, href: "tel:9098613462", label: "Phone" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 border border-foreground/10 rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/5 transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Get In Touch <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </AnimationWrapper>
      </section>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </main>
  );
};

export default Home;
