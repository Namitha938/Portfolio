import { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, FileText, Sparkles } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import { personalInfo } from '../data/portfolio';

interface HeroProps {
  onRequestResume: () => void;
}

const ROTATING_ROLES = [
  'AI & Machine Learning Engineer',
  'LLM & Multi-Agent Systems Developer',
  'Computer Vision & Deep Learning Specialist',
  'Full-Stack AI Application Developer',
];

export default function Hero({ onRequestResume }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentFullText = ROTATING_ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText === currentFullText) {
      // Pause at full text
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === '') {
      // Switch to next text
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROTATING_ROLES.length);
    } else {
      // Typing or deleting
      const speed = isDeleting ? 30 : 60;
      timeout = setTimeout(() => {
        setDisplayedText(
          currentFullText.substring(0, displayedText.length + (isDeleting ? -1 : 1))
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  const socialLinks = [
    { href: personalInfo.githubUrl, Icon: Github, label: 'GitHub' },
    { href: personalInfo.linkedinUrl, Icon: Linkedin, label: 'LinkedIn' },
    { href: `mailto:${personalInfo.email}`, Icon: Mail, label: 'Email' },
  ];

  return (
    <section id="home" className="relative isolate overflow-hidden scroll-mt-28 pt-32 sm:pt-40 pb-20 sm:pb-28">
      {/* Interactive particle canvas */}
      <ParticleCanvas />

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/4 top-10 -z-10 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[130px] animate-pulse-glow" />
      <div className="pointer-events-none absolute right-10 top-32 -z-10 h-80 w-80 rounded-full bg-accent/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          {/* Left Column: Hero Content & CTAs */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-secondary/40 px-4 py-1.5 text-xs font-medium text-foreground backdrop-blur-md transition-all hover:border-primary/60 hover:scale-105">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="flex items-center gap-1 text-muted-foreground">
                <Sparkles className="size-3 text-primary animate-spin" style={{ animationDuration: '6s' }} />
                Open to AI/ML & Engineering Roles
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Hi, I'm {personalInfo.name}{' '}
                <span className="text-gradient block sm:inline">{personalInfo.lastName}</span>
              </h1>

              {/* Dynamic Animated Typing Role */}
              <div className="h-8 sm:h-9 flex items-center justify-center lg:justify-start">
                <p className="font-display text-xl font-medium text-primary sm:text-2xl">
                  {displayedText}
                  <span className="inline-block w-[2px] h-5 sm:h-6 ml-1 bg-accent animate-pulse align-middle" />
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="max-w-xl text-base text-muted-foreground leading-relaxed sm:text-lg">
              {personalInfo.tagline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
              <a
                href="#projects"
                className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-glow hover:scale-[1.04] active:scale-95"
              >
                View Projects <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>

              <button
                type="button"
                onClick={onRequestResume}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-200 hover:bg-secondary hover:border-primary/50 hover:scale-[1.04] active:scale-95 cursor-pointer"
              >
                <FileText className="size-4 text-primary" /> Request Resume
              </button>

              <a
                href="#contact"
                className="rounded-full bg-gradient-brand p-[1px] transition-transform duration-200 hover:scale-[1.04] active:scale-95"
              >
                <span className="block rounded-full bg-background px-6 py-3 text-sm font-semibold hover:bg-secondary/40 transition-colors">
                  Get in Touch
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground mr-1 hidden sm:inline">
                Connect:
              </span>
              {socialLinks.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="glass rounded-full p-2.5 text-muted-foreground transition-all duration-300 hover:-translate-y-1.5 hover:text-foreground hover:border-primary/60 hover:shadow-glow hover:scale-110"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Profile Image with Floating & Glow Framing */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group animate-float">
              {/* Multi-layer ambient animated pulse glow */}
              <div className="absolute -inset-4 rounded-full bg-gradient-brand opacity-35 blur-2xl transition-all duration-700 group-hover:opacity-65 animate-pulse-glow" />
              <div className="absolute -inset-1 rounded-full bg-gradient-brand opacity-60 blur-md" />

              {/* Circular Picture Frame */}
              <div className="relative rounded-full bg-gradient-brand p-[3px] shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                <div className="size-64 sm:size-80 lg:size-96 overflow-hidden rounded-full bg-background p-1.5 backdrop-blur-xl">
                  <img
                    src={personalInfo.avatar}
                    alt={`${personalInfo.name} ${personalInfo.lastName}`}
                    className="size-full rounded-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width="384"
                    height="384"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
