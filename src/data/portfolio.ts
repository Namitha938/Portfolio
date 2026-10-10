import namithaImg from '../assets/namitha.jpg';
import projCognitiveImg from '../assets/proj-cognitive.jpg';
import projTruthlensImg from '../assets/proj-truthlens.jpg';
import projResumeImg from '../assets/proj-resume.jpg';
import projEmotionImg from '../assets/proj-emotion.jpg';
import projCropguardImg from '../assets/proj-cropguard.jpg';
import projLearningImg from '../assets/proj-learning.jpg';
import projWeedImg from '../assets/proj-weed.jpg';

export interface PersonalInfo {
  name: string;
  lastName: string;
  role: string;
  professionalTitle: string;
  tagline: string;
  email: string;
  location: string;
  avatar: string;
  githubUrl: string;
  linkedinUrl: string;
  calendlyUrl: string;
  resumeUrl: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  dates: string;
  location: string;
  bullets: string[];
  tech: string[];
}

export interface ProjectItem {
  title: string;
  period: string;
  description: string;
  tech: string[];
  category: 'LLM/Agents' | 'Computer Vision' | 'Full-Stack';
  link: string;
  liveDemoUrl?: string;
  image: string;
}

export interface ServiceItem {
  title: string;
  body: string;
  icon: 'Workflow' | 'Brain' | 'Eye' | 'Server' | 'Layers' | 'BarChart3';
}

export const personalInfo: PersonalInfo = {
  name: 'Namitha',
  lastName: 'Singu',
  role: 'Computer Science Undergraduate',
  professionalTitle: 'AI Engineer | Machine Learning Engineer | LLM Systems Developer',
  tagline:
    'Motivated Computer Science undergraduate with hands-on experience in AI/ML and Full-stack Development. Skilled in Python, MERN Stack, RAG Systems, and REST APIs — passionate about building scalable, intelligent software solutions.',
  email: 'namithaaa444@gmail.com',
  location: 'Hyderabad, India',
  avatar: namithaImg,
  githubUrl: 'https://github.com/Namitha938',
  linkedinUrl: 'https://linkedin.com/in/namitha-singu-3b0515291',
  calendlyUrl: 'https://calendly.com/namithasingu',
  resumeUrl: '#contact', // Fallback or direct resume download path
};

export const aboutContent = {
  heading: 'Delivery-focused AI engineer',
  paragraphs: [
    "I'm a Computer Science undergraduate passionate about building production-ready intelligent systems. My focus spans LLM applications, RAG architectures, computer vision, and full-stack development — technology that doesn't just process data, but reasons about it. From RAG-powered assistants with semantic search and human-in-the-loop escalation, to CNN-based crop and disease detection pipelines, to full-stack web portals with secure authentication, I care deeply about making software that works in the real world.",
  ],
  stats: [
    { value: 3, suffix: '', label: 'Internships' },
    { value: 7, suffix: '', label: 'Production Apps' },
    { value: 8.4, suffix: '', label: 'CGPA' },
    { value: 1, suffix: '', label: 'Certification' },
  ] as StatItem[],
};

export const educationData: EducationItem = {
  degree: 'B.Tech',
  field: 'Artificial Intelligence & Machine Learning',
  institution: 'Swarna Bharathi Institute of Science and Technology',
  location: 'Khammam, India',
  period: 'Aug 2023 – May 2027',
  cgpa: '8.4/10',
};

export const certificationsData: CertificationItem[] = [
  {
    title: 'GenAI Powered Data Analytics',
    issuer: 'Forage',
    date: 'Feb 2026',
  },
];

export const skillsCategories: SkillCategory[] = [
  {
    name: 'Programming',
    items: ['Python', 'Java', 'SQL', 'HTML/CSS/JS'],
  },
  {
    name: 'AI/ML Frameworks',
    items: [
      'PyTorch',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'HuggingFace Transformers',
      'SHAP',
      'DeepFace',
      'OpenCV',
      'YOLOv5',
      'NLTK',
      'Pandas',
      'NumPy',
    ],
  },
  {
    name: 'LLM & Agents',
    items: [
      'LangGraph',
      'LangChain',
      'FAISS',
      'Groq AI',
      'LLaMA 3',
      'Sentence Transformers',
      'LangSmith',
      'Gemini API',
      'Prompt Engineering',
    ],
  },
  {
    name: 'Backend & Web',
    items: [
      'Django',
      'FastAPI',
      'Flask',
      'REST API design',
      'MERN stack',
      'Streamlit',
      'HTML/CSS/JS',
    ],
  },
  {
    name: 'Databases',
    items: ['MySQL', 'SQLite3', 'MongoDB'],
  },
  {
    name: 'Cloud & DevOps',
    items: ['Microsoft Azure', 'Hugging Face Spaces', 'Docker', 'Git/GitHub'],
  },
  {
    name: 'Analytics',
    items: ['Power BI', 'Tableau', 'Excel'],
  },
  {
    name: 'Soft Skills',
    items: [
      'Analytical thinking',
      'Structured troubleshooting',
      'Rapid prototyping',
      'Communication',
      'Adaptability',
      'Self-directed learning',
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'AI Intern — LLM Systems & Agent Engineering',
    company: 'Infosys Springboard',
    dates: 'Feb 2026 – Apr 2026',
    location: 'Remote',
    bullets: [
      'Engineered an 8-step multi-agent pipeline using LangGraph and Groq AI, achieving 100% delegation success with LangSmith observability.',
      'Deployed a production-grade FastAPI REST backend on Hugging Face Spaces meeting enterprise delivery standards.',
    ],
    tech: ['LangGraph', 'Groq AI', 'FastAPI', 'OOP'],
  },
  {
    role: 'AI Intern — Cloud Infrastructure for AI/ML',
    company: 'Infosys (Pragati: Path to Future)',
    dates: 'Mar 2026 – May 2026',
    location: 'Remote',
    bullets: [
      'Evaluated Azure IaaS/PaaS/SaaS infrastructure across 10+ deployments, boosting execution efficiency by 25% and earning top program scores.',
    ],
    tech: ['Cloud Computing', 'Docker', 'Python', 'OOP'],
  },
  {
    role: 'AI & ML Intern',
    company: 'Internz Learn',
    dates: 'Oct 2025 – Dec 2025',
    location: 'Remote',
    bullets: [
      'Built a client-deployable AI resume screening app (Python + Groq AI + LLaMA 3) with NLP skill-extraction logic improving AI response accuracy by 40%.',
      'Deployed via FastAPI on Hugging Face Spaces with LangSmith tracing.',
    ],
    tech: ['Python', 'Groq AI', 'LLaMA 3', 'OOP'],
  },
];

export const projectCategories = ['All', 'LLM/Agents', 'Computer Vision', 'Full-Stack'] as const;

export const projectsData: ProjectItem[] = [
  {
    title: 'Autonomous Cognitive Engine',
    period: 'Feb 2026 – Apr 2026',
    description:
      '8-step multi-agent research framework with 100% delegation success across 5 domains, 14/14 milestones hit. Deployed via FastAPI on Hugging Face Spaces with full LangSmith observability.',
    tech: ['LangGraph', 'Groq AI', 'FastAPI', 'LangSmith', 'Hugging Face'],
    category: 'LLM/Agents',
    link: 'https://github.com/Namitha938',
    image: projCognitiveImg,
  },
  {
    title: 'TruthLens — AI Misinformation Detector',
    period: 'Jan 2026 – Mar 2026',
    description:
      'Real-time claim analysis pipeline across 6 credibility dimensions, predictions in under 3 seconds with 99.9% uptime; SHAP-based explainability for audit-ready transparency.',
    tech: ['HuggingFace Transformers', 'SHAP', 'Streamlit', 'Hugging Face'],
    category: 'LLM/Agents',
    link: 'https://github.com/Namitha938',
    image: projTruthlensImg,
  },
  {
    title: 'AI Resume Screening Engine',
    period: 'Oct 2025 – Dec 2025',
    description:
      'Automated batch candidate ranking using LLaMA 3 prompt engineering with structured AI match scores and reusable schemas for enterprise HR automation.',
    tech: ['Python', 'Groq AI', 'LLaMA 3', 'Prompt Engineering'],
    category: 'LLM/Agents',
    link: 'https://github.com/Namitha938',
    image: projResumeImg,
  },
  {
    title: 'Emotion-Based Music Recommendation System',
    period: 'Aug 2025 – Sep 2025',
    description:
      'Django backend for real-time webcam emotion detection (OpenCV, TensorFlow) with 90%+ accuracy; Spotify Web API integration for personalized playlists under 2-second latency.',
    tech: ['Django', 'OpenCV', 'DeepFace', 'TensorFlow', 'Spotify API'],
    category: 'Full-Stack',
    link: 'https://github.com/Namitha938',
    image: projEmotionImg,
  },
  {
    title: 'CropGuard AI — Crop Disease Detection & RAG Advisory',
    period: 'Apr 2026 – May 2026',
    description:
      'CNN pipeline (ResNet18) trained on 54,306 PlantVillage images across 38 disease classes, 95% training accuracy; LangChain + FAISS RAG pipeline for real-time agricultural treatment advisory.',
    tech: [
      'PyTorch',
      'ResNet18',
      'LangChain',
      'FAISS',
      'Sentence Transformers',
      'Streamlit',
    ],
    category: 'Computer Vision',
    link: 'https://github.com/Namitha938',
    image: projCropguardImg,
  },
  {
    title: 'AI Learning Buddy',
    period: 'Jun 2026 – Jul 2026',
    description:
      'Streamlit study companion powered by the Gemini API with scored quizzes, adjustable difficulty levels, dark/light themes, and downloadable session history.',
    tech: ['Streamlit', 'Gemini API', 'Python', 'Prompt Engineering'],
    category: 'LLM/Agents',
    link: 'https://github.com/Namitha938',
    image: projLearningImg,
  },
  {
    title: 'Crop & Weed Detection System',
    period: 'May 2026 – Jun 2026',
    description:
      'YOLOv5s object-detection pipeline fine-tuned on 1,300 field images with Albumentations augmentation and Colab GPU training for precision-agriculture weed targeting.',
    tech: ['YOLOv5', 'PyTorch', 'Albumentations', 'Google Colab'],
    category: 'Computer Vision',
    link: 'https://github.com/Namitha938',
    image: projWeedImg,
  },
];

export const servicesData: ServiceItem[] = [
  {
    title: 'AI Agent & Multi-Agent Systems',
    body: 'Designing stateful multi-agent architectures (LangGraph, Groq AI) with supervisor delegation, memory management, and end-to-end observability (LangSmith).',
    icon: 'Workflow',
  },
  {
    title: 'LLM & RAG Solutions',
    body: 'Building custom Retrieval-Augmented Generation pipelines using LangChain, FAISS, and vector embeddings for context-aware, domain-specific solutions.',
    icon: 'Brain',
  },
  {
    title: 'AI/ML & Computer Vision',
    body: 'Developing and fine-tuning deep learning models (PyTorch, TensorFlow, ResNet18, OpenCV, DeepFace) for emotion recognition, object detection, and disease classification.',
    icon: 'Eye',
  },
  {
    title: 'Backend & API Development',
    body: 'Architecting scalable RESTful APIs and microservices using FastAPI, Django, and Flask with SQL/NoSQL database integration.',
    icon: 'Server',
  },
  {
    title: 'Full-Stack AI Applications',
    body: 'Building production-ready, interactive AI web apps with Python frameworks, Streamlit, HTML/CSS/JS, and third-party API integrations.',
    icon: 'Layers',
  },
  {
    title: 'Data Analytics & Explainable AI',
    body: 'Implementing EDA, ETL pipelines, and audit-ready explainability (SHAP) alongside business dashboards in Power BI and Tableau.',
    icon: 'BarChart3',
  },
];

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

