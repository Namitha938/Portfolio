import { useState } from 'react';
import { Code, Layout, Server, Brain, Cpu, Database, Wrench, Sparkles, Check } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { skillsCategories } from '../data/portfolio';

const categoryIcons: { [key: string]: any } = {
  'Programming Languages': Code,
  'Frontend Development': Layout,
  'Backend Development': Server,
  'Databases': Database,
  'AI & Machine Learning': Brain,
  'Generative AI & LLM Frameworks': Cpu,
  'Developer Tools & Cloud': Wrench,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredCategories =
    selectedCategory === 'All'
      ? skillsCategories
      : skillsCategories.filter((cat) => cat.name === selectedCategory);

  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-24 scroll-mt-24">
      <Reveal>
        <SectionHeading eyebrow="Technical Skills" title="Core Engineering Toolkit" />
        <p className="mt-3 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Comprehensive full-stack and artificial intelligence competencies organized across core architectural domains.
        </p>
      </Reveal>

      {/* Category Filter Pills */}
      <Reveal className="flex flex-wrap justify-center gap-2 mt-8 mb-10">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 cursor-pointer ${
            selectedCategory === 'All'
              ? 'bg-gradient-brand text-primary-foreground shadow-glow scale-105 ring-2 ring-primary/40'
              : 'glass text-muted-foreground hover:text-foreground hover:border-primary/40 hover:scale-[1.02]'
          }`}
        >
          All Skills ({skillsCategories.reduce((acc, cat) => acc + cat.items.length, 0)})
        </button>

        {skillsCategories.map((category) => {
          const isActive = selectedCategory === category.name;
          return (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`rounded-full px-3.5 py-2 text-xs font-medium transition-all duration-300 cursor-pointer ${
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

      {/* Categorized Skills Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredCategories.map((category, idx) => {
          const IconComponent = categoryIcons[category.name] || Sparkles;
          return (
            <Reveal key={category.name} delay={idx * 50}>
              <div className="glass rounded-3xl p-6 h-full border border-border/80 transition-all duration-300 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1 flex flex-col justify-between">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-4 border-b border-border/50">
                    <div className="rounded-xl bg-primary/15 p-2.5 text-primary">
                      <IconComponent className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-foreground">
                        {category.name}
                      </h3>
                      <p className="text-[11px] text-muted-foreground">
                        {category.items.length} verified technologies
                      </p>
                    </div>
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-secondary/35 px-2.5 py-1 text-xs font-medium text-foreground/90 transition-all duration-200 hover:border-primary/50 hover:bg-secondary/70 hover:scale-105"
                      >
                        <Check className="size-3 text-primary shrink-0" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-border/30 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="text-primary font-medium">Domain Verified</span>
                  <span>{category.items.length} Skills</span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
