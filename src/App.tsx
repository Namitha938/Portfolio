import { lazy, Suspense, useEffect, useRef, useState, type ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Experience = lazy(() => import('./components/Experience'));
const Projects = lazy(() => import('./components/Projects'));
const Education = lazy(() => import('./components/Education'));
const Certifications = lazy(() => import('./components/Certifications'));
const Achievements = lazy(() => import('./components/Achievements'));
const Contact = lazy(() => import('./components/Contact'));
const ResumeModal = lazy(() => import('./components/ResumeModal'));

function DeferredSection({
  id,
  minHeight,
  children,
}: {
  id: string;
  minHeight: number;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || shouldRender) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: '1200px 0px' }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [shouldRender]);

  return (
    <div id={id} ref={ref} className="scroll-mt-24" style={shouldRender ? undefined : { minHeight }}>
      {shouldRender && <Suspense fallback={null}>{children}</Suspense>}
    </div>
  );
}

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
        <DeferredSection id="about" minHeight={720}><About /></DeferredSection>

        {/* 3. Technical Skills */}
        <DeferredSection id="skills" minHeight={720}><Skills /></DeferredSection>

        {/* 4. Experience (Strictly 3 Internships: Infosys Pragati, Infosys Springboard, Internz Learn) */}
        <DeferredSection id="experience" minHeight={1100}><Experience /></DeferredSection>

        {/* 5. Projects (Prioritized 5 Projects + 9-Point Deep Dive Modal) */}
        <DeferredSection id="projects" minHeight={1400}><Projects /></DeferredSection>

        {/* 6. Education (B.Tech AI & ML at SBIT Khammam, 8.4/10 CGPA) */}
        <DeferredSection id="education" minHeight={650}><Education /></DeferredSection>

        {/* 7. Certifications (GenAI Powered Data Analytics - Forage) */}
        <DeferredSection id="certifications" minHeight={650}><Certifications /></DeferredSection>

        {/* 8. Achievements (Academic excellence, internships, multi-agent milestones) */}
        <DeferredSection id="achievements" minHeight={650}><Achievements /></DeferredSection>

        {/* 9. Contact (Let's Connect + Direct Channels + Working Form) */}
        <DeferredSection id="contact" minHeight={800}><Contact onRequestResume={handleOpenResumeModal} /></DeferredSection>
      </main>

      {/* Footer */}
      <Footer />

      {/* Request Resume Modal (Optional Email Delivery) */}
      {isResumeModalOpen && (
        <Suspense fallback={null}>
          <ResumeModal isOpen onClose={handleCloseResumeModal} />
        </Suspense>
      )}

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
