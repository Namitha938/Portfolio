import { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, Layers, Cpu, Lightbulb, UserCheck, Image as ImageIcon, BookOpen } from 'lucide-react';
import { ProjectItem } from '../data/portfolio';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const { details } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-background/85 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Dialog Content */}
      <div className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-border bg-card/95 shadow-2xl shadow-primary/10 backdrop-blur-xl animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/80 px-6 py-5 bg-secondary/30">
          <div className="space-y-1 pr-6">
            <div className="flex items-center gap-2.5">
              <span className="rounded-full bg-primary/15 border border-primary/30 px-3 py-0.5 text-xs font-semibold text-primary">
                {project.category}
              </span>
              <span className="text-xs text-muted-foreground">{project.period}</span>
            </div>
            <h2 id="modal-project-title" className="font-display text-xl sm:text-2xl font-bold text-foreground">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors cursor-pointer"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 space-y-7">
          {/* Visual Architecture Banner */}
          <div className="overflow-hidden rounded-2xl border border-border bg-secondary/20 shadow-inner">
            <div className="relative aspect-video max-h-72 w-full overflow-hidden">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 flex items-center gap-2 rounded-full bg-background/80 backdrop-blur-md px-3 py-1 text-xs text-muted-foreground border border-border/60">
                <ImageIcon className="size-3.5 text-primary" />
                <span>Production Architecture & System Preview</span>
              </div>
            </div>
          </div>

          {/* 1. Project Overview */}
          <div className="rounded-2xl border border-border/80 bg-secondary/30 p-5">
            <h3 className="font-display text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
              <BookOpen className="size-4 text-primary" /> Project Overview
            </h3>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* 2. Problem Statement & Solution */}
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-5">
              <h3 className="font-display text-sm font-semibold text-destructive flex items-center gap-2 mb-2">
                <Lightbulb className="size-4" /> Problem Statement
              </h3>
              <p className="text-sm text-foreground/85 leading-relaxed">
                {details.problemStatement}
              </p>
            </div>

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <h3 className="font-display text-sm font-semibold text-primary flex items-center gap-2 mb-2">
                <CheckCircle2 className="size-4" /> Solution
              </h3>
              <p className="text-sm text-foreground/85 leading-relaxed">
                {details.solution}
              </p>
            </div>
          </div>

          {/* 3. My Contribution */}
          <div className="rounded-2xl border border-border bg-secondary/25 p-5">
            <h3 className="font-display text-sm font-semibold text-foreground flex items-center gap-2 mb-2">
              <UserCheck className="size-4 text-primary" /> My Contribution
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {details.myContribution}
            </p>
          </div>

          {/* 4. Technical Architecture */}
          <div className="rounded-2xl border border-border bg-secondary/30 p-5">
            <h3 className="font-display text-sm font-semibold text-foreground flex items-center gap-2 mb-2.5">
              <Workflow className="size-4 text-primary" /> Technical Architecture
            </h3>
            <div className="rounded-xl border border-border/80 bg-background/70 p-4 font-mono text-xs text-primary leading-relaxed break-words">
              {details.architecture}
            </div>
          </div>

          {/* 5. Tech Stack */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground flex items-center gap-2 mb-3">
              <Cpu className="size-4 text-primary" /> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {details.technologyStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-secondary/80 border border-border px-3.5 py-1 text-xs font-medium text-foreground hover:border-primary/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 6. Key Features */}
          <div>
            <h3 className="font-display text-sm font-semibold text-foreground flex items-center gap-2 mb-3">
              <Layers className="size-4 text-primary" /> Key Features
            </h3>
            <div className="grid gap-2.5 sm:grid-cols-2">
              {details.keyFeatures.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 rounded-xl border border-border/60 bg-secondary/20 p-3"
                >
                  <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-primary" />
                  <span className="text-xs text-foreground/85 leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer: GitHub Repository & Live Demo */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/80 px-6 py-4 bg-secondary/20">
          <div className="flex items-center gap-3">
            {/* GitHub Repository */}
            <a
              href={details.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-xs font-semibold text-foreground hover:bg-secondary hover:border-primary hover:scale-105 transition-all"
            >
              <Github className="size-4" />
              <span>GitHub Repository</span>
              <ExternalLink className="size-3 text-muted-foreground" />
            </a>

            {/* Live Demo */}
            {details.liveDemoUrl && (
              <a
                href={details.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="size-3" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="rounded-full border border-border px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function Workflow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="3" width="6" height="6" rx="1" />
      <rect x="9" y="15" width="6" height="6" rx="1" />
      <path d="M6 9v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9" />
      <path d="M12 13v2" />
    </svg>
  );
}
