import AnimationWrapper from "@/components/AnimationWrapper";
import SEO from "@/components/SEO";
import { skills } from "@/data/skills";

const About = () => (
  <main className="min-h-screen pt-32 px-6 pb-20">
    <SEO
      title="About | Siddharth Nigam"
      description="Learn about Siddharth Nigam, a motivated Full Stack Developer from Ujjain specializing in React, Django, and AI."
      path="/about"
    />

    <section className="max-w-6xl mx-auto">
      {/* Bio */}
      <AnimationWrapper>
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">About</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-8">
          Building the future,<br />
          <span className="text-muted-foreground italic font-light">one line at a time.</span>
        </h1>
        <div className="max-w-2xl">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Motivated and enthusiastic Full Stack Developer from Ujjain with a solid foundation in modern web development technologies and frameworks. As a fresher, I bring strong proficiency in both front-end and back-end development, along with a passion for building efficient, user-friendly applications.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Eager to contribute to dynamic teams, gain real-world experience, and transform innovative ideas into impactful digital solutions.
          </p>
        </div>
      </AnimationWrapper>

      {/* Skills */}
      <AnimationWrapper delay={0.2} className="mt-24">
        <h2 className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Technical Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((category, i) => (
            <AnimationWrapper key={category.title} delay={0.1 * i} className="p-6 bg-card border border-foreground/5 rounded-sm">
              <h3 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4">
                {category.title}
              </h3>
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
            </AnimationWrapper>
          ))}
        </div>
      </AnimationWrapper>
    </section>
  </main>
);

export default About;
