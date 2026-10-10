import { Github, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../data/portfolio';

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glass flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-glow hover:border-primary/50">
      {/* Thumbnail with category pill & gradient overlay */}
      <div className="relative h-44 overflow-hidden border-b border-border">
        <img
          src={project.image}
          alt={`${project.title} project cover`}
          loading="lazy"
          width={1024}
          height={640}
          className="size-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent pointer-events-none" />
        <span className="absolute bottom-3 left-4 rounded-full bg-background/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-foreground">{project.title}</h3>
        <p className="mt-1 text-xs text-muted-foreground">{project.period}</p>
        <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Tech Badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span
              key={item}
              className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
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
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-foreground transition-all duration-200 hover:border-primary hover:bg-secondary/40"
          >
            <Github className="size-4" /> View code <ExternalLink className="size-3" />
          </a>

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm text-primary transition-all duration-200 hover:bg-primary/20"
            >
              Live Demo <ExternalLink className="size-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

