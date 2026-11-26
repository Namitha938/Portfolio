import { Github, ExternalLink, Info, CheckCircle2 } from 'lucide-react';
import { ProjectItem } from '../data/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenDetails: (project: ProjectItem) => void;
}

export default function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  return (
    <article className="group glass flex h-full flex-col overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-glow hover:border-primary/50">
      {/* Thumbnail with category pill & gradient overlay */}
      <div className="relative h-52 overflow-hidden border-b border-border/80">
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          loading="lazy"
          width={768}
          height={480}
          decoding="async"
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent pointer-events-none" />
        
        {/* Category Pill */}
        <span className="absolute top-3 left-4 rounded-full bg-background/80 backdrop-blur-md px-3 py-1 text-xs font-semibold text-primary border border-border/60 shadow-sm">
          {project.category}
        </span>

        {/* Date badge */}
        <span className="absolute top-3 right-4 rounded-full bg-background/80 backdrop-blur-md px-3 py-1 text-[11px] text-muted-foreground border border-border/60">
          {project.period}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold text-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>
        </div>

        <p className="mt-2.5 flex-1 text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-4 space-y-1.5 border-t border-border/40 pt-3">
            {project.highlights.slice(0, 3).map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-foreground/80">
                <CheckCircle2 className="size-3.5 text-primary shrink-0" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-secondary/60 border border-border/60 px-2.5 py-0.5 text-xs text-muted-foreground transition-all duration-200 hover:text-foreground hover:border-primary/40 hover:bg-secondary"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-3 border-t border-border/50">
          {/* Detailed View Button */}
          <button
            type="button"
            onClick={() => onOpenDetails(project)}
            className="inline-flex items-center gap-1.5 rounded-full bg-secondary/80 border border-border/80 px-3.5 py-1.5 text-xs font-medium text-foreground hover:bg-secondary hover:border-primary hover:text-primary transition-all cursor-pointer"
          >
            <Info className="size-3.5" />
            <span>Architecture & Details</span>
          </button>

          {/* GitHub button */}
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="group/btn inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/30 px-3.5 py-1.5 text-xs font-medium text-foreground transition-all duration-200 hover:border-primary hover:bg-secondary hover:scale-105 active:scale-95"
          >
            <Github className="size-3.5" />
            <span>Code</span>
            <ExternalLink className="size-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>

          {/* Live Demo button */}
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="group/btn inline-flex items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary transition-all duration-200 hover:bg-primary/20 hover:scale-105 active:scale-95 shadow-sm ml-auto"
            >
              <span>Live Demo</span>
              <ExternalLink className="size-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
