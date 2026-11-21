import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo, navItems } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-16 bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/60">
          <div>
            <a href="#home" className="font-display text-lg font-bold tracking-tight text-foreground hover:text-primary transition-colors">
              {personalInfo.name} <span className="text-primary">{personalInfo.lastName}</span>
            </a>
            <p className="text-xs text-muted-foreground mt-1">
              {personalInfo.role}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-border bg-secondary/40 p-2.5 text-muted-foreground hover:text-foreground hover:border-primary hover:bg-secondary transition-all"
            >
              <Github className="size-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-border bg-secondary/40 p-2.5 text-muted-foreground hover:text-foreground hover:border-primary hover:bg-secondary transition-all"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="rounded-full border border-border bg-secondary/40 p-2.5 text-muted-foreground hover:text-foreground hover:border-primary hover:bg-secondary transition-all"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>

        {/* Quick Navigation Links */}
        <div className="py-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-primary transition-colors py-1"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Copyright Notice & Tech Stack */}
        <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>
            © {currentYear} {personalInfo.name} {personalInfo.lastName}. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5">
            Built with React, Vite, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
