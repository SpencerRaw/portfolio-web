import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { SiPytorch } from "react-icons/si";
import { LuGraduationCap } from "react-icons/lu";
import reverseEngineeringImg from "@/public/reverseEngineeringImg.png";
import gnnMedicalImg from "@/public/gnnMedicalImg.png";
import medicalLlmAgentImg from "@/public/medicalLlmAgentImg.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Began Studying AI",
    location: "Suzhou, Jiangsu",
    description:
      "I started my journey into artificial intelligence in 2019, diving deep into the field's theories and applications during my university studies. This foundational period set the stage for my future endeavors in AI.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "AI Developer and Freelancer",
    location: "Suzhou, Jiangsu",
    description:
      "From 2019 to 2023, I evolved into an AI developer and freelancer, undertaking various projects that sharpened my skills in machine learning, deep learning, and other AI technologies. This period was marked by significant personal development and professional growth in artificial intelligence.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2023",
  },
  {
    title: "Research Assistant and AI Consultant",
    location: "Suzhou, Jiangsu",
    description:
      "In 2023, I stepped into the role of a research assistant and AI consultant at a higher education institution. My responsibilities include guiding AI research, assisting in academic projects, and providing expert consultation on artificial intelligence applications.",
    icon: React.createElement(SiPytorch),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "ReversePatch",
    description:
      "Developed algorithms to reverse-engineer target structures for self-assembling patchy particle units, enhancing material science and nanotechnology applications.",
    tags: ["GA", "BO",  "Python", "MD","HOOMD blue"],
    imageUrl: reverseEngineeringImg,
  },
  {
    title: "GraphMed",
    description:
      "Implemented GNN to study and learn from high-missing-rate medical data, contributing to advancements in medical research and healthcare analytics.",
    tags: ["GNN", "Graph Embeddings", "Representation Learning"],
    imageUrl: gnnMedicalImg,
  },
  {
    title: "PrivateMed",
    description:
      "This project involved developing a custom LLM tailored for specific medical knowledge, providing professionals with enhanced decision-making support and streamlining patient care processes.",
    tags: ["LLM", "RAG", "streamlit", "Langchain"],
    imageUrl: medicalLlmAgentImg,
  },
] as const;

export const skillsData = [
  "Deep Learning",
  "Machine Learning",
  "Large Language Models (LLMs)",
  "Autonomous Agents",
  "Reinforcement Learning",
  "Supervised Learning",
  "Unsupervised Learning",
  "Natural Language Processing (NLP)",
  "Computer Vision",
  "Generative Adversarial Networks (GANs)",
  "Transfer Learning",
  "Neural Network Architecture Design",
  "Model Optimization and Tuning",
  "Feature Engineering",
  "Data Augmentation Techniques",
  "TensorFlow",
  "PyTorch",
  "Keras",
  "Scikit-Learn",
  "Pandas",
  "NumPy",
  "SciPy",
  "Matplotlib",
  "OpenAI Gym",
  "Robot Operating System (ROS)",
] as const;