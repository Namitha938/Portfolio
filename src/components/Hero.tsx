import { ArrowRight, Download, Mail, Github, Linkedin, Sparkles } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import { personalInfo } from '../data/portfolio';
import avatarMedium from '../assets/namitha-512.webp';

export default function Hero() {
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
                Open to AI & Full-Stack Opportunities
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                {personalInfo.name}{' '}
                <span className="text-gradient block sm:inline">{personalInfo.lastName}</span>
              </h1>

              {/* Main Headline */}
              <p className="font-display text-xl sm:text-2xl font-semibold text-primary tracking-tight">
                {personalInfo.professionalTitle}
              </p>
            </div>

            {/* Professional Introduction */}
            <p className="max-w-xl text-sm sm:text-base text-foreground/85 leading-relaxed">
              Computer Science graduate specializing in Artificial Intelligence and Machine Learning. Building high-performance Python backends, responsive React applications, and production-ready Generative AI systems.
            </p>

            {/* 3 Prominent CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2 lg:justify-start">
              {/* Button 1: View Projects */}
              <a
                href="#projects"
                className="btn-shimmer inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all duration-200 hover:scale-[1.04] active:scale-95"
              >
                <span>View Projects</span>
                <ArrowRight className="size-4" />
              </a>

              {/* Button 2: Download Resume (Direct PDF Download) */}
              <a
                href={personalInfo.resumeUrl}
                download="Namitha_Singu_Resume.pdf"
                className="btn-shimmer inline-flex items-center gap-2 rounded-full border border-primary/40 bg-secondary/60 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-200 hover:bg-secondary hover:border-primary hover:scale-[1.04] active:scale-95 shadow-sm"
              >
                <Download className="size-4 text-primary" />
                <span>Download Resume</span>
              </a>

              {/* Button 3: Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-200 hover:border-primary/60 hover:bg-secondary/40 hover:scale-[1.04] active:scale-95"
              >
                <span>Contact Me</span>
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
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    srcSet={`${avatarMedium} 512w, ${personalInfo.avatar} 768w`}
                    sizes="(min-width: 1024px) 384px, (min-width: 640px) 320px, 256px"
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
