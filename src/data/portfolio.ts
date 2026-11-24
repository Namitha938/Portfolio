import namithaImg from '../assets/namitha.jpg';
import projCognitiveImg from '../assets/proj-cognitive.jpg';
import projTruthlensImg from '../assets/proj-truthlens.jpg';
import projResumeImg from '../assets/proj-resume.jpg';
import projEmotionImg from '../assets/proj-emotion.jpg';
import projCropguardImg from '../assets/proj-cropguard.jpg';
import projLearningImg from '../assets/proj-learning.jpg';

export interface PersonalInfo {
  name: string;
  lastName: string;
  role: string;
  professionalTitle: string;
  specialization: string;
  tagline: string;
  introduction: string;
  careerInterests: string[];
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
  coursework: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  verificationUrl?: string;
  description: string;
  skills: string[];
}

export interface AchievementItem {
  title: string;
  category: string;
  metric: string;
  description: string;
  date: string;
}

export interface SkillCategory {
  name: string;
  iconName: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  program?: string;
  dates: string;
  location: string;
  type: 'Internship' | 'Industry Program';
  responsibilities: string[];
  achievement?: string;
  tech: string[];
}

export interface ProjectDetail {
  problemStatement: string;
  solution: string;
  myContribution: string;
  architecture: string;
  technologyStack: string[];
  keyFeatures: string[];
  screenshots: string[];
  githubUrl: string;
  liveDemoUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  description: string;
  tech: string[];
  category: 'LLM/Agents' | 'Computer Vision' | 'Full-Stack';
  link: string;
  liveDemoUrl?: string;
  image: string;
  highlights: string[];
  details: ProjectDetail;
}

export const personalInfo: PersonalInfo = {
  name: 'Namitha',
  lastName: 'Singu',
  role: 'Full-Stack Developer | AI Engineer',
  professionalTitle: 'Full-Stack Developer | AI Engineer',
  specialization:
    'Specializing in Generative AI, LLM & Multi-Agent Systems, Computer Vision, and Enterprise AI Delivery.',
  tagline:
    'Building high-performance Python backends, responsive React applications, and production-ready Generative AI systems.',
  introduction:
    'I am a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning, with hands-on experience in full-stack development and applied AI. I work with Python, React, FastAPI, RAG systems, REST APIs, and modern AI frameworks to engineer scalable software solutions.',
  careerInterests: [
    'AI Engineer',
    'Python Developer',
    'Full-Stack Developer',
    'Software Developer',
  ],
  email: 'namithaaa444@gmail.com',
  location: 'Hyderabad, India',
  avatar: namithaImg,
  githubUrl: 'https://github.com/Namitha938',
  linkedinUrl: 'https://linkedin.com/in/namitha-singu-3b0515291',
  calendlyUrl: 'https://calendly.com/namithasingu',
  resumeUrl: '/Namitha_Singu_Resume.pdf',
};

export const aboutContent = {
  heading: 'Engineering with Intelligence & Purpose',
  paragraphs: [
    'I am a Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning at Swarna Bharathi Institute of Science and Technology, maintaining an 8.4/10 CGPA. My education pairs deep algorithmic and machine learning foundations with rigorous software engineering practices.',
    'I build end-to-end software applications with Python, React.js, FastAPI, and Django, combining modern full-stack architectures with applied Generative AI, LangGraph multi-agent pipelines, RAG systems, and PyTorch deep learning models. My work emphasizes clean code, sub-2-second API latencies, and observability using LangSmith.',
    'Actively seeking fresher roles as an AI Engineer, Python Developer, Full-Stack Developer, or Software Developer where I can contribute to high-velocity engineering teams building scalable, real-world systems.',
  ],
  careerInterests: [
    'AI Engineer',
    'Python Developer',
    'Full-Stack Developer',
    'Software Developer',
  ],
  stats: [
    { value: 8.4, suffix: '/10', label: 'B.Tech CGPA' },
    { value: 3, suffix: '', label: 'AI Internships' },
    { value: 7, suffix: '+', label: 'Production Apps' },
    { value: 1, suffix: '', label: 'Professional Cert' },
  ] as StatItem[],
};

export const skillsCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    iconName: 'Code',
    items: ['Python', 'JavaScript (ES6+)', 'SQL', 'Java', 'HTML5', 'CSS3'],
  },
  {
    name: 'Frontend Development',
    iconName: 'Layout',
    items: ['React.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Responsive UI Design'],
  },
  {
    name: 'Backend Development',
    iconName: 'Server',
    items: ['FastAPI', 'Django', 'Flask', 'REST API Architecture', 'Async Python', 'Routing & Auth'],
  },
  {
    name: 'Databases',
    iconName: 'Database',
    items: ['MySQL', 'SQLite3', 'MongoDB', 'Data Modeling', 'Query Optimization'],
  },
  {
    name: 'AI & Machine Learning',
    iconName: 'Brain',
    items: [
      'Machine Learning',
      'Deep Learning',
      'Natural Language Processing',
      'Computer Vision',
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'OpenCV',
      'DeepFace',
      'SHAP',
    ],
  },
  {
    name: 'Generative AI & LLM Frameworks',
    iconName: 'Cpu',
    items: [
      'LangGraph Multi-Agent Systems',
      'LangChain',
      'Large Language Models (LLMs)',
      'RAG Architectures',
      'FAISS Vector Search',
      'Sentence Transformers',
      'Groq AI & LLaMA 3',
      'Prompt Engineering',
      'LangSmith Tracing',
    ],
  },
  {
    name: 'Developer Tools & Cloud',
    iconName: 'Wrench',
    items: [
      'Microsoft Azure',
      'Docker Containers',
      'Git & GitHub',
      'Hugging Face Spaces',
      'Streamlit',
      'Postman',
      'Power BI',
      'VS Code',
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'AI Intern – Cloud Infrastructure for AI/ML',
    company: 'Infosys',
    program: 'Pragati: Path to Future',
    dates: 'March 2026 – May 2026',
    location: 'Remote',
    type: 'Internship',
    responsibilities: [
      'Evaluated Azure IaaS, PaaS, and SaaS infrastructure for AI/ML workloads across 10+ deployment environments.',
      'Benchmarked compute and storage configurations to optimize resource allocation and execution efficiency.',
      'Worked on resource allocation, execution efficiency, and containerized deployment workflows.',
      'Gained hands-on experience with enterprise cloud computing, Docker virtualization, and Python engineering.',
    ],
    achievement: 'Benchmarked 10+ deployment environments and improved cloud execution efficiency by 25% on Azure.',
    tech: ['Azure', 'Docker', 'Python', 'Object-Oriented Programming'],
  },
  {
    role: 'AI Intern – LLM Systems & Agent Engineering',
    company: 'Infosys Springboard',
    dates: 'February 2026 – April 2026',
    location: 'Remote',
    type: 'Internship',
    responsibilities: [
      'Engineered an 8-step multi-agent pipeline using LangGraph and Groq AI with supervisor routing.',
      'Implemented stateful agent delegation, supervisor routing, and autonomous workflow orchestration.',
      'Integrated LangSmith for comprehensive LLM observability, latency tracing, and token monitoring.',
      'Deployed a production-grade FastAPI REST backend on Hugging Face Spaces adhering to enterprise standards.',
    ],
    achievement: 'Achieved 100% agent delegation success across 5 technical domains in an 8-step LangGraph workflow.',
    tech: ['LangGraph', 'Groq AI', 'FastAPI', 'LangSmith', 'Python'],
  },
  {
    role: 'AI & ML Intern',
    company: 'Internz Learn',
    dates: 'October 2025 – December 2025',
    location: 'Remote',
    type: 'Internship',
    responsibilities: [
      'Built an AI resume screening application using Python, Groq AI, and LLaMA 3 for automated candidate evaluation.',
      'Developed NLP-based skill extraction and candidate ranking functionality with structured output schemas.',
      'Deployed the application using FastAPI on Hugging Face Spaces for real-time inference.',
      'Integrated LangSmith tracing for performance observability and prompt accuracy tuning.',
    ],
    achievement: 'Deployed automated screening API achieving sub-2-second inference latency on Hugging Face Spaces.',
    tech: ['Python', 'Groq AI', 'LLaMA 3', 'FastAPI', 'LangSmith'],
  },
];

export const projectCategories = ['All', 'LLM/Agents', 'Computer Vision', 'Full-Stack'] as const;

export const projectsData: ProjectItem[] = [
  {
    id: 'cognitive-engine',
    title: 'Autonomous Cognitive Engine',
    period: 'Feb 2026 – Apr 2026',
    description:
      'An autonomous AI research system designed for deep research and long-horizon task execution using multi-agent orchestration.',
    tech: ['LangGraph', 'Groq AI', 'FastAPI', 'LangSmith', 'Hugging Face'],
    category: 'LLM/Agents',
    link: 'https://github.com/Namitha938',
    image: projCognitiveImg,
    highlights: [
      'Multi-agent workflow',
      'Task planning',
      'Agent delegation',
      'Research automation',
      'Observability and tracing',
    ],
    details: {
      problemStatement:
        'Complex multi-step research queries require multi-source synthesis, task decomposition, and validation that single prompt LLM calls cannot reliably execute without hallucination or context loss.',
      solution:
        'Architected an 8-step autonomous multi-agent framework where specialized supervisor and worker agents collaboratively plan, delegate, execute, and verify research objectives across multiple technical domains.',
      myContribution:
        'Designed state graph routing using LangGraph, configured low-latency LLM inference via Groq AI, built FastAPI REST endpoints, and instrumented LangSmith for real-time trace inspection.',
      architecture:
        'StateGraph orchestrator -> Supervisor Router -> Domain Researcher Agents -> Tool Executor -> Verifier Agent -> FastAPI Backend -> Hugging Face Spaces deployment.',
      technologyStack: ['LangGraph', 'Groq AI', 'LLaMA 3', 'FastAPI', 'LangSmith', 'Python', 'Hugging Face'],
      keyFeatures: [
        '8-step autonomous research orchestration with 100% delegation success rate',
        'Stateful execution graphs with memory persistence and conditional edge routing',
        'Real-time token cost and latency observability through LangSmith',
        'Production REST API endpoints for seamless frontend integration',
      ],
      screenshots: [projCognitiveImg],
      githubUrl: 'https://github.com/Namitha938',
      liveDemoUrl: 'https://huggingface.co/spaces',
    },
  },
  {
    id: 'truthlens',
    title: 'TruthLens – AI Misinformation Detector',
    period: 'Jan 2026 – Mar 2026',
    description:
      'An AI-powered misinformation detection application that analyzes claims across credibility dimensions with explainable AI.',
    tech: ['Hugging Face Transformers', 'SHAP', 'Streamlit', 'Hugging Face'],
    category: 'LLM/Agents',
    link: 'https://github.com/Namitha938',
    image: projTruthlensImg,
    highlights: [
      'Claim analysis',
      'Credibility assessment',
      'Explainable AI',
      'SHAP integration',
    ],
    details: {
      problemStatement:
        'Online misinformation spreads rapidly, yet black-box AI classification models fail to provide clear, audit-ready reasoning behind why a claim is flagged as deceptive.',
      solution:
        'Engineered an end-to-end credibility assessment engine using pre-trained Transformer language models paired with SHAP (SHapley Additive exPlanations) to highlight word-level attribution for every prediction.',
      myContribution:
        'Fine-tuned Hugging Face transformer models for multi-factor credibility classification, built the interactive Streamlit user interface, and generated SHAP force plots for transparent explainability.',
      architecture:
        'User Claim Input -> Text Preprocessing -> Hugging Face Transformer Inference -> SHAP Attribution Engine -> Streamlit Visualization & Audit Report.',
      technologyStack: ['Hugging Face Transformers', 'PyTorch', 'SHAP', 'Streamlit', 'Python', 'Hugging Face Spaces'],
      keyFeatures: [
        'Comprehensive claim assessment across 6 credibility dimensions in under 3 seconds',
        'Explainable AI (XAI) feature importance visualization through SHAP attribution values',
        'Interactive confidence score breakdown with audit-ready transparency reports',
        'Deployed with 99.9% uptime on Hugging Face Spaces',
      ],
      screenshots: [projTruthlensImg],
      githubUrl: 'https://github.com/Namitha938',
      liveDemoUrl: 'https://huggingface.co/spaces',
    },
  },
  {
    id: 'resume-screening',
    title: 'AI Resume Screening Engine',
    period: 'Oct 2025 – Dec 2025',
    description:
      'An AI-based resume screening application that automates candidate analysis, skill extraction, and job match ranking.',
    tech: ['Python', 'Groq AI', 'LLaMA 3', 'Prompt Engineering', 'FastAPI'],
    category: 'LLM/Agents',
    link: 'https://github.com/Namitha938',
    image: projResumeImg,
    highlights: [
      'Resume analysis',
      'NLP-based skill extraction',
      'Candidate ranking',
      'Structured AI outputs',
    ],
    details: {
      problemStatement:
        'Manual resume screening for technical roles is slow and inconsistent, while traditional keyword matching misses contextual candidate competencies.',
      solution:
        'Developed an intelligent screening pipeline using LLaMA 3 via Groq AI that extracts granular candidate competencies, computes semantic relevance against job descriptions, and returns structured candidate rankings.',
      myContribution:
        'Developed the NLP skill-extraction logic, engineered zero-shot and few-shot JSON prompt templates, built FastAPI REST endpoints, and added LangSmith evaluation traces.',
      architecture:
        'PDF/Text Resume Ingestion -> NLP Text Parser -> Groq AI LLaMA 3 Evaluation -> JSON Schema Validator -> Match Scoring & Ranking Engine -> FastAPI REST Service.',
      technologyStack: ['Python', 'Groq AI', 'LLaMA 3', 'FastAPI', 'LangSmith', 'JSON Schema'],
      keyFeatures: [
        'Automated batch parsing and multi-candidate comparison against job descriptions',
        'NLP-based technical skill extraction and domain experience weighting',
        'Strict JSON schema validation preventing parsing errors in automated HR pipelines',
        'FastAPI REST endpoints for seamless integration into recruitment workflows',
      ],
      screenshots: [projResumeImg],
      githubUrl: 'https://github.com/Namitha938',
      liveDemoUrl: 'https://huggingface.co/spaces',
    },
  },
  {
    id: 'music-recommendation',
    title: 'Emotion-Based Music Recommendation System',
    period: 'Aug 2025 – Sep 2025',
    description:
      'An emotion-aware music recommendation application using webcam-based emotion detection and personalized music suggestions.',
    tech: ['Django', 'OpenCV', 'DeepFace', 'TensorFlow', 'Spotify API'],
    category: 'Full-Stack',
    link: 'https://github.com/Namitha938',
    image: projEmotionImg,
    highlights: [
      'Real-time emotion detection',
      'Computer vision',
      'Music recommendation',
      'Spotify API integration',
    ],
    details: {
      problemStatement:
        'Standard music streaming platforms rely on historical listening data and cannot adapt in real time to the user’s immediate emotional state.',
      solution:
        'Created a computer vision pipeline that captures webcam video, detects facial expressions using DeepFace/OpenCV, classifies emotions with 90%+ accuracy, and triggers dynamic playlist recommendations via the Spotify Web API.',
      myContribution:
        'Implemented the OpenCV real-time video feed processor, configured DeepFace neural network classification, built the Django backend service, and integrated Spotify OAuth/API endpoints.',
      architecture:
        'Webcam Video Stream -> OpenCV Frame Capture -> DeepFace Emotion Classifier -> Django Backend -> Spotify Web API -> Real-Time Responsive Audio UI.',
      technologyStack: ['Django', 'Python', 'OpenCV', 'DeepFace', 'TensorFlow', 'Spotify Web API', 'JavaScript'],
      keyFeatures: [
        'Real-time facial expression analysis with 90%+ emotion classification accuracy',
        'Sub-2-second latency from webcam face capture to curated Spotify playlist playback',
        'Custom Django REST views handling secure OAuth authentication with Spotify',
        'Emotion tracking dashboard reflecting emotional shifts during playback sessions',
      ],
      screenshots: [projEmotionImg],
      githubUrl: 'https://github.com/Namitha938',
    },
  },
  {
    id: 'cropguard-ai',
    title: 'CropGuard AI – Crop Disease Detection & RAG Advisory',
    period: 'Apr 2026 – May 2026',
    description:
      'An AI-powered agricultural application combining crop disease classification and retrieval-augmented recommendations.',
    tech: ['PyTorch', 'ResNet18', 'LangChain', 'FAISS', 'Sentence Transformers', 'Streamlit'],
    category: 'Computer Vision',
    link: 'https://github.com/Namitha938',
    image: projCropguardImg,
    highlights: [
      'CNN crop disease classification',
      'PlantVillage dataset (54k images)',
      'RAG-based advisory',
      'Context-aware retrieval',
    ],
    details: {
      problemStatement:
        'Smallholder farmers face severe crop yield losses due to delayed disease identification and lack of contextual, actionable treatment guidance.',
      solution:
        'Engineered a dual-pipeline AI solution combining a ResNet-18 convolutional neural network for image disease diagnosis with a LangChain + FAISS RAG system to deliver context-specific organic and chemical remedy recommendations.',
      myContribution:
        'Trained and evaluated the ResNet-18 model on 54,306 images across 38 disease classes, built FAISS vector embeddings of agricultural treatment guides, and developed the Streamlit user app.',
      architecture:
        'Leaf Image Upload -> ResNet-18 CNN -> Predicted Disease Class -> FAISS Semantic Retrieval -> LangChain Context Synthesis -> Treatment Advisory Report.',
      technologyStack: ['PyTorch', 'ResNet18', 'LangChain', 'FAISS', 'Sentence Transformers', 'Streamlit', 'Python'],
      keyFeatures: [
        '95% training accuracy across 38 distinct crop disease classifications from PlantVillage',
        'RAG-powered advisory synthesizing regional treatment guidelines and organic solutions',
        'Low-bandwidth accessible UI designed specifically for rural agricultural field usage',
        'Interactive confidence score visualization with preventive care steps',
      ],
      screenshots: [projCropguardImg],
      githubUrl: 'https://github.com/Namitha938',
    },
  },
  {
    id: 'learning-buddy',
    title: 'AI Learning Buddy',
    period: 'Jun 2026 – Jul 2026',
    description:
      'An interactive AI study companion with scored quizzes, adjustable difficulty levels, and session analytics.',
    tech: ['Streamlit', 'Gemini API', 'Python', 'Prompt Engineering'],
    category: 'LLM/Agents',
    link: 'https://github.com/Namitha938',
    image: projLearningImg,
    highlights: ['Gemini API integration', 'Adaptive quizzes', 'Session analytics', 'Streamlit UI'],
    details: {
      problemStatement:
        'Static educational content lacks adaptive feedback, personalized quiz generation, and active recall assistance for technical learners.',
      solution:
        'Built an AI tutor utilizing the Gemini API to dynamically generate structured topic quizzes, evaluate free-form answers, and provide constructive technical explanations.',
      myContribution:
        'Engineered prompt chains for dynamic quiz generation, implemented session state analytics in Streamlit, and designed downloadable study summaries.',
      architecture:
        'Topic Input -> Gemini API Prompt Engine -> Dynamic Quiz Generation -> Answer Evaluation -> Score & History Analytics.',
      technologyStack: ['Streamlit', 'Gemini API', 'Python', 'Prompt Engineering'],
      keyFeatures: [
        'Dynamic multi-topic quiz generation with adjustable difficulty levels',
        'AI evaluation of student answers with step-by-step corrections',
        'Session history export and performance analytics tracking',
      ],
      screenshots: [projLearningImg],
      githubUrl: 'https://github.com/Namitha938',
    },
  },
];

export const educationData: EducationItem = {
  degree: 'Bachelor of Technology (B.Tech)',
  field: 'Artificial Intelligence and Machine Learning',
  institution: 'Swarna Bharathi Institute of Science and Technology',
  location: 'Khammam, India',
  period: 'August 2023 – May 2027',
  cgpa: '8.4/10',
  coursework: [
    'Data Structures & Algorithms',
    'Machine Learning & Deep Learning',
    'Natural Language Processing',
    'Computer Vision & Neural Networks',
    'Database Management Systems (SQL & MongoDB)',
    'Object-Oriented Programming (Python & Java)',
    'Operating Systems & System Architecture',
    'Full-Stack Web Development',
  ],
};

export const certificationsData: CertificationItem[] = [
  {
    title: 'GenAI Powered Data Analytics',
    issuer: 'Forage',
    date: 'February 2026',
    verificationUrl: 'https://www.theforage.com/',
    description:
      'Practical engineering simulation program focused on applying Generative AI to enterprise data analytics workflows, AI-assisted business intelligence modeling, and data visualization.',
    skills: ['Generative AI', 'Data Analytics', 'Prompt Engineering', 'Business Intelligence', 'Data Modeling'],
  },
];

export const achievementsData: AchievementItem[] = [
  {
    title: 'Academic Excellence in AI & ML',
    category: 'Academic Honor',
    metric: '8.4 / 10 CGPA',
    description:
      'Maintained consistent top-tier academic standing across 6 semesters in B.Tech Artificial Intelligence & Machine Learning at Swarna Bharathi Institute of Science and Technology.',
    date: '2023 – Present',
  },
  {
    title: 'Three Competitive AI Engineering Internships',
    category: 'Industry Selection',
    metric: '3 Internships',
    description:
      'Selected for and successfully completed three remote engineering internships at Infosys (Pragati: Path to Future), Infosys Springboard, and Internz Learn focused on Cloud AI and LLM agents.',
    date: '2025 – 2026',
  },
  {
    title: '100% Multi-Agent Delegation Milestone',
    category: 'Engineering Architecture',
    metric: '100% Success',
    description:
      'Engineered an 8-step autonomous research orchestration pipeline using LangGraph and Groq AI, hitting 14/14 milestones and achieving 100% delegation success across 5 technical domains.',
    date: 'April 2026',
  },
  {
    title: 'Production-Grade AI Deployments',
    category: 'Cloud & API Delivery',
    metric: '7+ Applications',
    description:
      'Built and deployed 7+ production AI applications on Hugging Face Spaces and FastAPI with real-time inference under 2 seconds and full LangSmith observability.',
    date: '2025 – 2026',
  },
  {
    title: 'Verified GenAI Data Analytics Credential',
    category: 'Professional Certification',
    metric: 'Forage Certified',
    description:
      'Earned credential in GenAI Powered Data Analytics through Forage, mastering prompt-driven analytical modeling and automated insight extraction.',
    date: 'February 2026',
  },
];

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Technical Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];
