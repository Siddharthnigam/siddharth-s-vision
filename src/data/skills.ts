export interface SkillCategory {
  title: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    items: ["HTML", "C", "C++", "Python", "JavaScript"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["Django", "REST API", "Bootstrap", "jQuery", "React JS", "Redux", "Tailwind CSS", "GSAP", "Ajax"],
  },
  {
    title: "Databases",
    items: ["SQL", "MySQL"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Linux", "AWS", "Google Spreadsheets"],
  },
];
