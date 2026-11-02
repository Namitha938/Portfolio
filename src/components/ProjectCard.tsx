import { Github, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../data/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group glass flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2.5 hover:shadow-glow hover:border-primary/60">
      {/* Thumbnail with category pill & gradient overlay */}
      <div className="relative h-44 overflow-hidden border-b border-border/80">
        <img
          src={project.image}
          alt={`${project.title} project cover`}
          loading="lazy"
          width={1024}
          height={640}
          className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:brightness-105"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent pointer-events-none" />
        <span className="absolute bottom-3 left-4 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md border border-border/50 shadow-sm">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-1 text-xs text-muted-foreground">{project.period}</p>
        <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-secondary/60 border border-border/60 px-3 py-1 text-xs text-muted-foreground transition-all duration-200 hover:text-foreground hover:border-primary/40 hover:bg-secondary"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="mt-5 flex items-center gap-3">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="group/btn inline-flex w-fit items-center gap-2 rounded-full border border-border bg-secondary/30 px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:border-primary hover:bg-secondary hover:scale-105 active:scale-95"
          >
            <Github className="size-4" />
            <span>View code</span>
            <ExternalLink className="size-3 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </a>

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="group/btn inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-200 hover:bg-primary/20 hover:scale-105 active:scale-95 shadow-sm"
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
