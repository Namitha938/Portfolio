import { ArrowRight, Github, Linkedin, Mail, FileText } from 'lucide-react';
import ParticleCanvas from './ParticleCanvas';
import { personalInfo } from '../data/portfolio';

interface HeroProps {
  onRequestResume: () => void;
}

export default function Hero({ onRequestResume }: HeroProps) {
  const socialLinks = [
    { href: personalInfo.githubUrl, Icon: Github, label: 'GitHub' },
    { href: personalInfo.linkedinUrl, Icon: Linkedin, label: 'LinkedIn' },
    { href: `mailto:${personalInfo.email}`, Icon: Mail, label: 'Email' },
  ];

  return (
    <section id="home" className="relative isolate overflow-hidden scroll-mt-28 pt-36 sm:pt-44 pb-24">
      {/* Interactive particle canvas */}
      <ParticleCanvas />

      {/* Ambient background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 text-center">
        {/* Glowing Profile Avatar */}
        <div className="relative mt-4">
          <div className="animate-pulse absolute -inset-2 rounded-full bg-gradient-brand opacity-40 blur-2xl" />
          <div className="relative rounded-full bg-gradient-brand p-[3px] glow-ring">
            <img
              src={personalInfo.avatar}
              alt={`${personalInfo.name} ${personalInfo.lastName}, AI and Machine Learning engineer`}
              className="size-40 rounded-full object-cover sm:size-48"
              width="192"
              height="192"
            />
          </div>
        </div>

        {/* Hero Typography */}
        <div className="space-y-4">
          <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
            {personalInfo.name} <span className="text-gradient">{personalInfo.lastName}</span>
          </h1>
          <p className="font-display text-xl text-primary sm:text-2xl break-words whitespace-normal max-w-full px-2">
            {personalInfo.role}
          </p>
          <p className="mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            {personalInfo.tagline}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-glow hover:scale-[1.03]"
          >
            View Projects <ArrowRight className="size-4" />
          </a>
          <button
            type="button"
            onClick={onRequestResume}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-all duration-200 hover:bg-secondary hover:border-primary/50 hover:scale-[1.03] cursor-pointer"
          >
            <FileText className="size-4 text-primary" /> Request Resume
          </button>
          <a
            href="#contact"
            className="rounded-full bg-gradient-brand p-[1px] transition-transform duration-200 hover:scale-[1.03]"
          >
            <span className="block rounded-full bg-background px-6 py-3 text-sm font-semibold hover:bg-secondary/40 transition-colors">
              Get in Touch
            </span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="glass rounded-full p-3 text-muted-foreground transition-all hover:-translate-y-1 hover:text-foreground hover:border-primary/50"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

