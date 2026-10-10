import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Services from './components/Services';
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
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Top Reading/Scroll Progress */}
      <ScrollProgress />

      {/* Main Navigation */}
      <Navbar onRequestResume={handleOpenResumeModal} />

      {/* Page Sections */}
      <main>
        <Hero onRequestResume={handleOpenResumeModal} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Contact onRequestResume={handleOpenResumeModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Request Resume Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={handleCloseResumeModal} />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}

