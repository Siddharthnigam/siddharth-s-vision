import { Download, Code, Database, Wrench, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimationWrapper from "@/components/AnimationWrapper";
import SEO from "@/components/SEO";
import { education } from "@/data/education";
import { skills } from "@/data/skills";

const skillIcons: Record<string, React.ReactNode> = {
  Languages: <Code size={18} />,
  "Frameworks & Libraries": <Globe size={18} />,
  Databases: <Database size={18} />,
  "Tools & Platforms": <Wrench size={18} />,
};

const Resume = () => (
  <main className="min-h-screen pt-32 px-6 pb-20">
    <SEO
      title="Resume | Siddharth Nigam"
      description="Education and experience of Siddharth Nigam, Full Stack Developer from Ujjain."
      path="/resume"
    />

    <section className="max-w-6xl mx-auto">
      {/* Header */}
      <AnimationWrapper>
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Resume</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground">
            Education & <br />
            <span className="text-muted-foreground italic font-light">Experience</span>
          </h1>
          <Button variant="hero" size="lg" className="gap-2 w-fit" asChild>
            <a href="https://customer-assets.emergentagent.com/job_nigam-portfolio/artifacts/956z9r30_SiddharthLatestResume.pdf" target="_blank" rel="noopener noreferrer">
              <Download size={16} /> Download Resume
            </a>
          </Button>
        </div>
      </AnimationWrapper>

      {/* Professional Summary */}
      <AnimationWrapper delay={0.1} className="mb-16">
        <div className="p-6 md:p-8 bg-card border border-foreground/5 rounded-sm">
          <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Professional Summary</h2>
          <p className="text-foreground/80 leading-relaxed">
            Motivated and enthusiastic Full Stack Developer from Ujjain with a solid foundation in modern web development technologies and frameworks. Strong proficiency in both front-end and back-end development, with hands-on experience in React, Django, and machine learning. Passionate about building efficient, user-friendly applications and transforming innovative ideas into impactful digital solutions.
          </p>
        </div>
      </AnimationWrapper>

      {/* Technical Skills */}
      <AnimationWrapper delay={0.15} className="mb-16">
        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((category, i) => (
            <AnimationWrapper key={category.title} delay={0.1 * i}>
              <div className="p-5 bg-card border border-foreground/5 rounded-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-muted-foreground">{skillIcons[category.title]}</span>
                  <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono px-3 py-1.5 bg-foreground/5 text-foreground/80 border border-foreground/5 hover:bg-foreground/10 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </AnimationWrapper>

      {/* Education Timeline */}
      <AnimationWrapper delay={0.15} className="mb-16">
        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">Education Timeline</h2>
      </AnimationWrapper>

      <div className="relative">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-foreground/10 transform md:-translate-x-1/2" />

        {education.map((item, i) => (
          <AnimationWrapper
            key={item.period}
            delay={0.1 * i}
            className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ${
              i % 2 === 0 ? "" : "md:direction-rtl"
            }`}
          >
            <div className={`pl-8 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
              <div className="p-6 bg-card border border-foreground/5 rounded-sm hover:border-foreground/10 transition-colors">
                <p className="font-mono text-xs text-muted-foreground mb-2">{item.period}</p>
                <h3 className="text-lg font-medium text-foreground mb-1">{item.degree}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.institution}</p>
                <p className="text-sm text-muted-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            </div>

            <div className="absolute left-0 md:left-1/2 top-8 w-3 h-3 bg-foreground rounded-full transform -translate-x-1/2 border-2 border-background" />
          </AnimationWrapper>
        ))}
      </div>

      {/* Highlights */}
      <AnimationWrapper delay={0.2} className="mt-8">
        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Key Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Full Stack Projects", desc: "Built 4+ production-ready apps with React, Django & ML" },
            { title: "Modern Tech Stack", desc: "React, Tailwind, Framer Motion, Django REST, LiveKit" },
            { title: "Quick Learner", desc: "From BBA to PGDFE — self-driven pivot into tech" },
          ].map((h, i) => (
            <AnimationWrapper key={h.title} delay={0.1 * i}>
              <div className="p-5 bg-card border border-foreground/5 rounded-sm">
                <h3 className="text-sm font-medium text-foreground mb-2">{h.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
              </div>
            </AnimationWrapper>
          ))}
        </div>
      </AnimationWrapper>
    </section>
  </main>
);

export default Resume;
