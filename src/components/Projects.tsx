import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { projectsData, projectCategories } from '../data/portfolio';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProjects = projectsData.filter((proj) =>
    activeCategory === 'All' ? true : proj.category === activeCategory
  );

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 scroll-mt-24">
      <Reveal>
        <SectionHeading eyebrow="Projects" title="Production-deployed work" />
      </Reveal>

      {/* Category Filter Tabs */}
      <Reveal className="mb-10 flex flex-wrap justify-center gap-2">
        {projectCategories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 cursor-pointer ${
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
      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((proj, idx) => (
          <Reveal key={proj.title} delay={idx * 80}>
            <ProjectCard project={proj} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

