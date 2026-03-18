import Video from "./images/videomeet.png";
import Jugglers from "./images/juuglers.png";
import Student from "./images/student.png";
import Vision from "./images/vision.png";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tech: string[];
  link: string;
  image: string;
}

export const projects: Project[] = [
  {
    id: "video-meetpro",
    title: "Video MeetPro",
    category: "AI & WebRTC",
    description: "Real-time video conferencing with distraction detection using FaceMesh.",
    fullDescription: "A full-stack, real-time video conferencing system designed to elevate virtual collaboration by intelligently detecting user distraction. Built with React JS, Tailwind CSS, LiveKit, FaceMesh, Django, and Python, it seamlessly blends responsive UI with backend intelligence to ensure every participant stays engaged.",
    tech: ["React JS", "Tailwind CSS", "LiveKit", "FaceMesh", "Django", "Python"],
    link: "https://video-congressing-web.vercel.app/",
    image: Video,
  },
  {
    id: "juggers-ecommerce",
    title: "Juggers Store",
    category: "Full Stack E-commerce",
    description: "High-performance store with Framer Motion and Django REST Framework.",
    fullDescription: "A comprehensive full-stack e-commerce platform that redefines online shopping through a seamless fusion of cutting-edge frontend design and robust backend architecture. Built with React (Vite), Tailwind CSS, Framer Motion, and Django REST Framework, this system delivers a fast, responsive, and visually engaging shopping experience while ensuring secure user authentication and scalable data management.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Django REST"],
    link: "https://jugglers-shop-omg1.vercel.app/",
    image: Jugglers,
  },
  {
    id: "student-predictor",
    title: "Performance Predictor",
    category: "Machine Learning",
    description: "Decision Tree model predicting student scores with 90%+ accuracy.",
    fullDescription: "A full-stack machine learning application that predicts student performance scores (0-100) based on culturally relevant inputs from the Indian education context. The system uses supervised learning with a Decision Tree model and provides detailed explanations and recommendations.",
    tech: ["Python", "Machine Learning", "Scikit-Learn", "Decision Tree"],
    link: "https://student-performance-predictor-phi.vercel.app/",
    image: Student,
  },
  {
    id: "vision-academy",
    title: "Vision Computer Academy",
    category: "EdTech",
    description: "Modern educational portal with dynamic UI and fast performance.",
    fullDescription: "A responsive educational website built using React, Vite, Tailwind CSS, and modern React libraries, offering dynamic UI, fast performance, and seamless navigation for tech-driven learning.",
    tech: ["React", "Vite", "Tailwind CSS", "React Libraries"],
    link: "https://vision-computer-academy.vercel.app/",
    image: Vision,
  },
];
