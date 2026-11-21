import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResumeModal = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/30 selection:text-white">
      {/* Top Reading/Scroll Progress */}
      <ScrollProgress />

      {/* Main Navigation with Animated Slider */}
      <Navbar />

      {/* 9 Professional Sections in Strict Sequence */}
      <main>
        {/* 1. Home */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Technical Skills */}
        <Skills />

        {/* 4. Experience (Strictly 3 Internships: Infosys Pragati, Infosys Springboard, Internz Learn) */}
        <Experience />

        {/* 5. Projects (Prioritized 5 Projects + 9-Point Deep Dive Modal) */}
        <Projects />

        {/* 6. Education (B.Tech AI & ML at SBIT Khammam, 8.4/10 CGPA) */}
        <Education />

        {/* 7. Certifications (GenAI Powered Data Analytics - Forage) */}
        <Certifications />

        {/* 8. Achievements (Academic excellence, internships, multi-agent milestones) */}
        <Achievements />

        {/* 9. Contact (Let's Connect + Direct Channels + Working Form) */}
        <Contact onRequestResume={handleOpenResumeModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Request Resume Modal (Optional Email Delivery) */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={handleCloseResumeModal} />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
