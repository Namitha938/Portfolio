const fs = require('fs');
const path = require('path');

function escapePdf(text) {
  return String(text)
    .replace(/\\/g, '\\\\')
    .replace(/\(/g, '\\(')
    .replace(/\)/g, '\\)');
}

class PdfDoc {
  constructor() {
    this.streams = [];
    this.currentStream = '';
    this.currentY = 800;
    this.margin = 45;
    this.pageWidth = 595.28;
    this.pageHeight = 841.89;
    this.printableWidth = this.pageWidth - (this.margin * 2);
  }

  startPage() {
    if (this.currentStream) {
      this.streams.push(this.currentStream);
    }
    this.currentStream = '';
    this.currentY = 800;
  }

  drawText(text, x, y, font, size, r = 0.1, g = 0.1, b = 0.15) {
    const escaped = escapePdf(text);
    this.currentStream += `BT\n/${font} ${size} Tf\n${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} rg\n${x.toFixed(2)} ${y.toFixed(2)} Td\n(${escaped}) Tj\nET\n`;
  }

  drawLine(x1, y1, x2, y2, lineWidth = 0.75, r = 0.75, g = 0.8, b = 0.88) {
    this.currentStream += `${lineWidth.toFixed(2)} w\n${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} RG\n${x1.toFixed(2)} ${y1.toFixed(2)} m\n${x2.toFixed(2)} ${y2.toFixed(2)} l\nS\n`;
  }

  drawRect(x, y, w, h, r = 0.94, g = 0.96, b = 0.99) {
    this.currentStream += `${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)} rg\n${x.toFixed(2)} ${y.toFixed(2)} ${w.toFixed(2)} ${h.toFixed(2)} re\nf\n`;
  }

  build() {
    if (this.currentStream) {
      this.streams.push(this.currentStream);
    }

    const objects = [];
    // 1: font regular
    objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
    // 2: font bold
    objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');
    // 3: font italic
    objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>');

    const contentObjIds = [];
    const pageObjIds = [];

    // Placeholder for pages object
    const pagesObjNum = 4;
    objects.push(''); // placeholder at index 3

    this.streams.forEach((st) => {
      const cNum = objects.length + 1;
      const buf = Buffer.from(st, 'latin1');
      objects.push(`<< /Length ${buf.length} >>\nstream\n${st}\nendstream`);
      contentObjIds.push(cNum);

      const pNum = objects.length + 1;
      objects.push(`<< /Type /Page /Parent ${pagesObjNum} 0 R /MediaBox [0 0 ${this.pageWidth} ${this.pageHeight}] /Resources << /Font << /F1 1 0 R /F2 2 0 R /F3 3 0 R >> >> /Contents ${cNum} 0 R >>`);
      pageObjIds.push(pNum);
    });

    // Replace placeholder for pages object
    const pagesObj = `<< /Type /Pages /Kids [${pageObjIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pageObjIds.length} >>`;
    objects[pagesObjNum - 1] = pagesObj;

    // Catalog
    const catalogObjNum = objects.length + 1;
    objects.push(`<< /Type /Catalog /Pages ${pagesObjNum} 0 R >>`);

    // Serialize
    let pdf = '%PDF-1.4\n';
    const offsets = [0];
    let offset = Buffer.byteLength(pdf, 'latin1');

    for (let i = 0; i < objects.length; i++) {
      const objNum = i + 1;
      offsets.push(offset);
      const str = `${objNum} 0 obj\n${objects[i]}\nendobj\n`;
      pdf += str;
      offset += Buffer.byteLength(str, 'latin1');
    }

    const startXref = offset;
    pdf += `xref\n0 ${objects.length + 1}\n`;
    pdf += '0000000000 65535 f \n';
    for (let i = 1; i <= objects.length; i++) {
      const offStr = String(offsets[i]).padStart(10, '0');
      pdf += `${offStr} 00000 n \n`;
    }
    pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogObjNum} 0 R >>\nstartxref\n${startXref}\n%%EOF`;
    return Buffer.from(pdf, 'latin1');
  }
}

function generateResume() {
  const doc = new PdfDoc();
  doc.startPage();

  const M = doc.margin;
  const R = doc.pageWidth - doc.margin;
  let y = 800;

  // Header
  doc.drawText('NAMITHA SINGU', M, y, 'F2', 20, 0.08, 0.16, 0.35);
  y -= 16;
  doc.drawText('Full-Stack Software Developer | AI Engineer', M, y, 'F2', 11, 0.15, 0.42, 0.72);
  y -= 14;
  doc.drawText('Hyderabad, India | namithaaa444@gmail.com | linkedin.com/in/namitha-singu-3b0515291 | github.com/Namitha938', M, y, 'F1', 8.5, 0.35, 0.38, 0.45);
  y -= 10;
  doc.drawLine(M, y, R, y, 1.2, 0.15, 0.42, 0.72);
  y -= 16;

  function sectionHeader(title) {
    if (y < 90) {
      doc.startPage();
      y = 800;
    }
    doc.drawRect(M, y - 3, R - M, 16, 0.94, 0.96, 0.99);
    doc.drawText(title.toUpperCase(), M + 6, y + 1, 'F2', 9.5, 0.1, 0.3, 0.6);
    doc.drawLine(M, y - 3, R, y - 3, 0.5, 0.8, 0.85, 0.92);
    y -= 16;
  }

  // Summary
  sectionHeader('Professional Summary');
  const summaryLines = [
    'Computer Science undergraduate specializing in Artificial Intelligence and Machine Learning with hands-on engineering',
    'experience in AI/ML, multi-agent LLM systems, computer vision, and full-stack software development. Proficient in Python,',
    'MERN Stack, RAG architectures, FastAPI/Django, and modern AI frameworks to build scalable, intelligent applications.',
  ];
  summaryLines.forEach((line) => {
    doc.drawText(line, M + 4, y, 'F1', 8.8, 0.2, 0.22, 0.26);
    y -= 11.5;
  });
  y -= 4;

  // Experience
  sectionHeader('Professional Experience');

  // Exp 1
  doc.drawText('AI Intern – Cloud Infrastructure for AI/ML', M + 4, y, 'F2', 9.5, 0.1, 0.12, 0.15);
  doc.drawText('March 2026 – May 2026', R - 110, y, 'F3', 8.5, 0.4, 0.42, 0.48);
  y -= 11;
  doc.drawText('Infosys – Pragati: Path to Future', M + 4, y, 'F2', 8.8, 0.15, 0.42, 0.72);
  doc.drawText('Remote', R - 50, y, 'F1', 8.5, 0.4, 0.42, 0.48);
  y -= 11;
  const exp1Bullets = [
    'Evaluated Azure IaaS, PaaS, and SaaS infrastructure for AI/ML workloads across 10+ deployment architectures.',
    'Benchmarked compute, GPU, and storage configurations to optimize resource allocation and execution efficiency by 25%.',
    'Containerized AI/ML workflows using Docker and Python under enterprise engineering standards.',
  ];
  exp1Bullets.forEach((b) => {
    doc.drawText('•', M + 10, y, 'F1', 9, 0.15, 0.42, 0.72);
    doc.drawText(b, M + 20, y, 'F1', 8.5, 0.22, 0.25, 0.3);
    y -= 11;
  });
  doc.drawText('Technologies: Azure, Docker, Python, Object-Oriented Programming', M + 20, y, 'F3', 8, 0.4, 0.42, 0.48);
  y -= 14;

  // Exp 2
  doc.drawText('AI Intern – LLM Systems & Agent Engineering', M + 4, y, 'F2', 9.5, 0.1, 0.12, 0.15);
  doc.drawText('February 2026 – April 2026', R - 110, y, 'F3', 8.5, 0.4, 0.42, 0.48);
  y -= 11;
  doc.drawText('Infosys Springboard', M + 4, y, 'F2', 8.8, 0.15, 0.42, 0.72);
  doc.drawText('Remote', R - 50, y, 'F1', 8.5, 0.4, 0.42, 0.48);
  y -= 11;
  const exp2Bullets = [
    'Engineered an 8-step multi-agent research pipeline using LangGraph and Groq AI with 100% delegation success.',
    'Implemented stateful agent delegation, supervisor routing, and workflow orchestration across 5 domains.',
    'Integrated LangSmith for end-to-end observability, latency tracing, and token monitoring.',
    'Deployed production-grade FastAPI REST backend on Hugging Face Spaces with robust error handling.',
  ];
  exp2Bullets.forEach((b) => {
    doc.drawText('•', M + 10, y, 'F1', 9, 0.15, 0.42, 0.72);
    doc.drawText(b, M + 20, y, 'F1', 8.5, 0.22, 0.25, 0.3);
    y -= 11;
  });
  doc.drawText('Technologies: LangGraph, Groq AI, FastAPI, LangSmith, Python, Hugging Face', M + 20, y, 'F3', 8, 0.4, 0.42, 0.48);
  y -= 14;

  // Exp 3
  doc.drawText('AI & ML Intern', M + 4, y, 'F2', 9.5, 0.1, 0.12, 0.15);
  doc.drawText('October 2025 – December 2025', R - 130, y, 'F3', 8.5, 0.4, 0.42, 0.48);
  y -= 11;
  doc.drawText('Internz Learn', M + 4, y, 'F2', 8.8, 0.15, 0.42, 0.72);
  doc.drawText('Remote', R - 50, y, 'F1', 8.5, 0.4, 0.42, 0.48);
  y -= 11;
  const exp3Bullets = [
    'Built an AI resume screening engine (Python, Groq AI, LLaMA 3) with NLP-based skill extraction and candidate scoring.',
    'Improved AI match accuracy by 40% through structured JSON schemas and few-shot prompt engineering.',
    'Deployed via FastAPI on Hugging Face Spaces with LangSmith observability.',
  ];
  exp3Bullets.forEach((b) => {
    doc.drawText('•', M + 10, y, 'F1', 9, 0.15, 0.42, 0.72);
    doc.drawText(b, M + 20, y, 'F1', 8.5, 0.22, 0.25, 0.3);
    y -= 11;
  });
  doc.drawText('Technologies: Python, Groq AI, LLaMA 3, FastAPI, LangSmith', M + 20, y, 'F3', 8, 0.4, 0.42, 0.48);
  y -= 14;

  // Key Projects
  sectionHeader('Featured Engineering Projects');

  const projects = [
    {
      title: 'Autonomous Cognitive Engine',
      tech: 'LangGraph, Groq AI, FastAPI, LangSmith, Hugging Face',
      bullets: [
        'Autonomous multi-agent research framework for deep research and long-horizon task execution.',
        'Features multi-agent orchestration, dynamic task decomposition, supervisor delegation, and full observability.',
      ],
    },
    {
      title: 'TruthLens – AI Misinformation Detector',
      tech: 'Hugging Face Transformers, SHAP, Streamlit, Hugging Face',
      bullets: [
        'Real-time claim analysis pipeline assessing credibility dimensions in under 3 seconds with explainable AI (SHAP).',
      ],
    },
    {
      title: 'AI Resume Screening Engine',
      tech: 'Python, Groq AI, LLaMA 3, Prompt Engineering, FastAPI',
      bullets: [
        'Automated batch candidate ranking, NLP skill extraction, and structured match scoring for HR workflow automation.',
      ],
    },
    {
      title: 'CropGuard AI – Crop Disease Detection & RAG Advisory',
      tech: 'PyTorch, ResNet18, LangChain, FAISS, Sentence Transformers, Streamlit',
      bullets: [
        'CNN pipeline (ResNet18) on 54k PlantVillage images (95% accuracy) paired with FAISS RAG for agricultural advisory.',
      ],
    },
    {
      title: 'Emotion-Based Music Recommendation System',
      tech: 'Django, OpenCV, DeepFace, TensorFlow, Spotify API',
      bullets: [
        'Webcam real-time emotion recognition pipeline (OpenCV/DeepFace) linked to Spotify Web API for instant playlists.',
      ],
    },
  ];

  projects.forEach((proj) => {
    doc.drawText(proj.title, M + 4, y, 'F2', 9, 0.1, 0.12, 0.15);
    doc.drawText(`[${proj.tech}]`, M + 215, y, 'F3', 7.8, 0.3, 0.4, 0.55);
    y -= 10.5;
    proj.bullets.forEach((b) => {
      doc.drawText('•', M + 10, y, 'F1', 9, 0.15, 0.42, 0.72);
      doc.drawText(b, M + 20, y, 'F1', 8.2, 0.22, 0.25, 0.3);
      y -= 10;
    });
    y -= 3;
  });

  // Technical Skills
  sectionHeader('Technical Skills');
  const skillCategories = [
    { name: 'Programming Languages', items: 'Python, JavaScript, HTML, CSS, Java, SQL' },
    { name: 'Frontend', items: 'React.js, HTML5, CSS3, JavaScript, Tailwind CSS' },
    { name: 'Backend', items: 'FastAPI, Django, Flask, REST API Development' },
    { name: 'AI & Machine Learning', items: 'Machine Learning, Deep Learning, NLP, Computer Vision, Generative AI, LLMs' },
    { name: 'AI Frameworks & Libraries', items: 'LangGraph, LangChain, PyTorch, TensorFlow, Hugging Face, SHAP, DeepFace, OpenCV, FAISS, Groq' },
    { name: 'Databases & Cloud', items: 'MySQL, SQLite3, MongoDB | Microsoft Azure, Docker, Git, GitHub, Hugging Face Spaces' },
    { name: 'Analytics & Tools', items: 'Streamlit, Power BI, Tableau, Excel, Postman, LangSmith' },
  ];

  skillCategories.forEach((sc) => {
    doc.drawText(`${sc.name}:`, M + 4, y, 'F2', 8.2, 0.15, 0.42, 0.72);
    doc.drawText(sc.items, M + 140, y, 'F1', 8.2, 0.2, 0.22, 0.26);
    y -= 10.5;
  });
  y -= 4;

  // Education & Certification
  sectionHeader('Education & Certifications');
  doc.drawText('Bachelor of Technology (B.Tech) in Artificial Intelligence & Machine Learning', M + 4, y, 'F2', 9, 0.1, 0.12, 0.15);
  doc.drawText('Aug 2023 – May 2027', R - 100, y, 'F3', 8.5, 0.4, 0.42, 0.48);
  y -= 11;
  doc.drawText('Swarna Bharathi Institute of Science and Technology, Khammam, India | CGPA: 8.4 / 10', M + 4, y, 'F1', 8.5, 0.25, 0.28, 0.35);
  y -= 13;
  doc.drawText('Certification: GenAI Powered Data Analytics – Forage (February 2026)', M + 4, y, 'F2', 8.8, 0.15, 0.42, 0.72);

  const pdfBytes = doc.build();
  const outPath = path.join(__dirname, '../public/Namitha_Singu_Resume.pdf');
  fs.writeFileSync(outPath, pdfBytes);
  console.log('Successfully generated resume PDF at:', outPath, 'Bytes:', pdfBytes.length);
}

generateResume();
