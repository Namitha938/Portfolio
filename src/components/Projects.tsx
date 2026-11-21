import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import ProjectDetailModal from './ProjectDetailModal';
import { projectsData, projectCategories, ProjectItem } from '../data/portfolio';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = projectsData.filter((proj) =>
    activeCategory === 'All' ? true : proj.category === activeCategory
  );

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 scroll-mt-24">
      <Reveal>
        <SectionHeading
          eyebrow="Portfolio & Engineering Systems"
          title="Featured AI & Full-Stack Projects"
        />
        <p className="mt-3 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Production-engineered applications spanning multi-agent orchestration, explainable NLP,
          computer vision diagnostics, and scalable full-stack architectures.
        </p>
      </Reveal>

      {/* Category Filter Tabs */}
      <Reveal className="mt-8 mb-10 flex flex-wrap justify-center gap-2">
        {projectCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-gradient-brand text-primary-foreground shadow-glow scale-105'
                  : 'glass text-muted-foreground hover:text-foreground hover:border-primary/40'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </Reveal>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {filteredProjects.map((proj, idx) => (
          <Reveal key={proj.id} delay={idx * 70}>
            <ProjectCard
              project={proj}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          </Reveal>
        ))}
      </div>

      {/* 9-Point Detailed Deep Dive Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
