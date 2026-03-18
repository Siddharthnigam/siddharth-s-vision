export interface Education {
  period: string;
  degree: string;
  institution: string;
  description: string;
}

export const education: Education[] = [
  {
    period: "2024 – 2025",
    degree: "PGDFE — Post Graduate Diploma in Full Stack Engineering",
    institution: "Miracle IT Career Academy",
    description: "Intensive program covering modern full-stack web development, cloud technologies, and industry best practices.",
  },
  {
    period: "2021 – 2024",
    degree: "Bachelor of Business Administration",
    institution: "Prashanti College of Professional Studies",
    description: "Comprehensive business administration program with focus on management and technology.",
  },
  {
    period: "2020 – 2021",
    degree: "Higher Secondary School (12th)",
    institution: "Imperial International School",
    description: "Higher secondary education with strong academic foundation.",
  },
  {
    period: "2018 – 2019",
    degree: "Secondary School (10th)",
    institution: "Imperial International School",
    description: "Secondary education with distinction in core subjects.",
  },
];
