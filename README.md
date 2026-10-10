# Namitha Singu — Personal Portfolio

A fast, modern, and fully independent personal portfolio website rebuilt from scratch with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. 

This project completely removes any dependencies on Lovable, Lovable badges, and Lovable hosting while maintaining pixel-perfect fidelity to the original design, interactions, and aesthetic.

---

## 🚀 Live Demo & Features

- **Pixel-Accurate AI Engineer Visual Identity**: Deep dark theme with glowing OKLCH brand gradients, frosted glass cards (`backdrop-blur`), and glowing ring accents.
- **Dynamic Particle Canvas**: Ambient, interactive node connections that adapt smoothly to screen sizes and device pixel ratios.
- **Scroll Progress Indicator**: Top brand-gradient progress bar tracking reading completion.
- **Active Navigation & Mobile Drawer**: Smooth scrolling between sections (`#home`, `#about`, `#education`, `#skills`, `#experience`, `#projects`, `#services`, `#contact`) with real-time active link tracking and mobile menu drawer.
- **Animated Performance Counters**: Smooth cubic-eased counting animation for statistics (Internships, Production Apps, CGPA, Certifications).
- **Categorized Skills Filtering**: Interactive tabs for 8 technical domains (Programming, AI/ML Frameworks, LLM & Agents, Backend & Web, Databases, Cloud & DevOps, Analytics, Soft Skills) with animated gradient indicators.
- **Experience Timeline**: Vertical gradient timeline with illuminated bullet nodes, detailed role summaries, bullet points, and tech tags.
- **Filterable Projects Gallery**: Multi-category filter (`All`, `LLM/Agents`, `Computer Vision`, `Full-Stack`) featuring cover thumbnails, descriptions, technology badges, and direct links to GitHub repositories and live demos.
- **Services Showcase**: 6 targeted solution offerings with gradient icons and hover elevation.
- **Accessible & Validated Contact Form**: Input validation for name, email format, and message with pre-configured email client fallback (`mailto:namithaaa444@gmail.com`) and direct links to LinkedIn, GitHub, and Calendly.

---

## 🛠️ Technology Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3 with custom OKLCH color variables & utility classes
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (Headings) & Inter (Body)

---

## 📁 Project Structure

```text
namitha-singu-portfolio/
├── public/                     # Static public assets
├── src/
│   ├── assets/                 # Profile photo & project cover images
│   │   ├── namitha.jpg
│   │   ├── proj-cognitive.jpg
│   │   ├── proj-cropguard.jpg
│   │   ├── proj-emotion.jpg
│   │   ├── proj-learning.jpg
│   │   ├── proj-resume.jpg
│   │   ├── proj-truthlens.jpg
│   │   └── proj-weed.jpg
│   ├── components/             # Reusable UI components
│   │   ├── About.tsx           # Bio, stats, education & certification cards
│   │   ├── Contact.tsx         # Validated contact form & direct reach-out links
│   │   ├── CountUp.tsx         # Animated numerical counters
│   │   ├── Experience.tsx      # Vertical timeline & internship cards
│   │   ├── Footer.tsx          # Copyright & quick navigation links
│   │   ├── Hero.tsx            # Avatar glow, hero headlines, CTA & socials
│   │   ├── Navbar.tsx          # Sticky glass navigation & mobile drawer
│   │   ├── ParticleCanvas.tsx  # Dynamic interactive canvas particles
│   │   ├── ProjectCard.tsx     # Project card with tags & links
│   │   ├── Projects.tsx        # Filterable project gallery
│   │   ├── Reveal.tsx          # IntersectionObserver scroll reveal wrapper
│   │   ├── ScrollProgress.tsx  # Top scroll position progress bar
│   │   ├── SectionHeading.tsx  # Reusable section headers with gradient rule
│   │   └── Skills.tsx          # Categorized skill badges and tabs
│   ├── data/
│   │   └── portfolio.ts        # Central configuration file for all portfolio data
│   ├── App.tsx                 # Main layout component
│   ├── index.css               # Tailwind directives & CSS design tokens
│   ├── main.tsx                # React entry point
│   └── vite-env.d.ts           # Vite TypeScript declarations
├── index.html                  # HTML entry point with meta tags & fonts
├── package.json                # Dependencies and scripts
├── postcss.config.js           # PostCSS configuration
├── tailwind.config.js          # Tailwind theme & color extensions
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite configuration
```

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (version 18+ or 20+ recommended)
- npm or yarn / pnpm

### Installation

1. Navigate to the project directory:
   ```bash
   cd C:\Users\Namitha\.gemini\antigravity\scratch\namitha-singu-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://127.0.0.1:5173
   ```

### Production Build & Preview

To verify the production build locally:
```bash
npm run build
npm run preview
```

---

## ⚙️ Customization Guide

All personal data, social URLs, projects, experience items, and skills are centralized in:
`src/data/portfolio.ts`

### 1. Update Profile Photo
Place your photo in `src/assets/namitha.jpg` or import your new image file in `src/data/portfolio.ts`:
```ts
import namithaImg from '../assets/your-new-photo.jpg';
```

### 2. Update Social & Contact Links
In `src/data/portfolio.ts`:
```ts
export const personalInfo = {
  name: 'Namitha',
  lastName: 'Singu',
  email: 'namithaaa444@gmail.com',
  githubUrl: 'https://github.com/Namitha938',
  linkedinUrl: 'https://linkedin.com/in/namitha-singu-3b0515291',
  calendlyUrl: 'https://calendly.com/namithasingu',
  resumeUrl: '/Namitha_Singu_Resume.pdf', // Put your resume PDF in the public/ folder!
};
```

### 3. Add or Modify Projects
In `src/data/portfolio.ts`:
```ts
export const projectsData = [
  {
    title: 'Your Project Title',
    period: 'Dates',
    description: 'Project description...',
    tech: ['Python', 'FastAPI', 'PyTorch'],
    category: 'LLM/Agents', // 'LLM/Agents' | 'Computer Vision' | 'Full-Stack'
    link: 'https://github.com/Namitha938/your-repo',
    liveDemoUrl: 'https://your-demo-url.com', // Optional live demo button
    image: projImageImport,
  },
];
```

---

## 🌐 Free Independent Deployment (Without Lovable)

### Option 1: Vercel (Recommended)
1. Push this project to a new repository on your GitHub account (`https://github.com/Namitha938/portfolio`).
2. Visit [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **Add New Project** and select your `portfolio` repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **Deploy**. Your portfolio will be live on an HTTPS domain within 60 seconds!

### Option 2: Netlify
1. Log in to [netlify.com](https://netlify.com) with GitHub.
2. Click **Add new site** > **Import an existing project**.
3. Select your repository.
4. Set Build command to `npm run build` and Publish directory to `dist`.
5. Click **Deploy site**.

### Option 3: GitHub Pages
1. In `vite.config.ts`, add the base repository path:
   ```ts
   export default defineConfig({
     base: '/portfolio/', // replace with your repo name
     plugins: [react()],
   });
   ```
2. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```
3. Add deploy scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run `npm run deploy`.

