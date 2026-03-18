import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimationWrapper from "@/components/AnimationWrapper";
import SEO from "@/components/SEO";
import { education } from "@/data/education";

const Resume = () => (
  <main className="min-h-screen pt-32 px-6 pb-20">
    <SEO
      title="Resume | Siddharth Nigam"
      description="Education and experience of Siddharth Nigam, Full Stack Developer from Ujjain."
      path="/resume"
    />

    <section className="max-w-6xl mx-auto">
      <AnimationWrapper>
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Resume</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
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

      {/* Timeline */}
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
            {/* Content */}
            <div className={`pl-8 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"}`}>
              <div className="p-6 bg-card border border-foreground/5 rounded-sm">
                <p className="font-mono text-xs text-muted-foreground mb-2">{item.period}</p>
                <h3 className="text-lg font-medium text-foreground mb-1">{item.degree}</h3>
                <p className="text-sm text-muted-foreground mb-3">{item.institution}</p>
                <p className="text-sm text-muted-foreground/70 leading-relaxed">{item.description}</p>
              </div>
            </div>

            {/* Dot */}
            <div className="absolute left-0 md:left-1/2 top-8 w-3 h-3 bg-foreground rounded-full transform -translate-x-1/2 border-2 border-background" />
          </AnimationWrapper>
        ))}
      </div>
    </section>
  </main>
);

export default Resume;
