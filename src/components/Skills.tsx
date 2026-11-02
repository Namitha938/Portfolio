import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { skillsCategories } from '../data/portfolio';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillsCategories[0].name);

  const currentCategory = skillsCategories.find((cat) => cat.name === activeCategory) || skillsCategories[0];

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-24 scroll-mt-24">
      <Reveal>
        <SectionHeading eyebrow="Skills" title="Technical toolkit" />
      </Reveal>

      {/* Category Tabs */}
      <Reveal className="flex flex-wrap justify-center gap-2">
        {skillsCategories.map((category) => {
          const isActive = activeCategory === category.name;
          return (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-gradient-brand text-primary-foreground shadow-glow scale-105 ring-2 ring-primary/40'
                  : 'glass text-muted-foreground hover:text-foreground hover:border-primary/40 hover:scale-[1.02]'
              }`}
            >
              {category.name}
            </button>
          );
        })}
      </Reveal>

      {/* Skills Grid with Animated entrance on tab change */}
      <Reveal className="mt-10">
        <div
          key={activeCategory}
          className="glass grid gap-3 rounded-2xl p-7 sm:grid-cols-2 lg:grid-cols-3 animate-in fade-in zoom-in-95 duration-300"
        >
          {currentCategory.items.map((skill, index) => (
            <div
              key={skill}
              style={{ animationDelay: `${index * 40}ms` }}
              className="group relative overflow-hidden rounded-xl border border-border bg-secondary/30 px-4 py-3 text-sm text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-secondary/60 hover:shadow-sm"
            >
              <span className="absolute inset-y-0 left-0 w-[3px] bg-gradient-brand transition-all duration-300 group-hover:w-[5px] group-hover:shadow-glow" />
              <span className="pl-2 font-medium transition-transform duration-300 group-hover:translate-x-1 inline-block">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
