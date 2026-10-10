import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { experienceData } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-5 py-24 scroll-mt-24">
      <Reveal>
        <SectionHeading eyebrow="Experience" title="What I've built" />
      </Reveal>

      {/* Timeline Container */}
      <div className="relative pl-8">
        <span className="absolute left-2 top-2 bottom-2 w-[2px] rounded-full bg-gradient-brand" />

        {experienceData.map((exp, idx) => (
          <Reveal key={exp.role} delay={idx * 90} className="relative mb-8">
            {/* Timeline bullet node */}
            <span className="absolute -left-[26px] top-7 size-3 rounded-full bg-gradient-brand ring-4 ring-background" />

            <div className="glass rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1 hover:border-primary/40">
              <h3 className="font-display text-lg font-semibold text-foreground">{exp.role}</h3>
              <p className="text-sm text-primary font-medium">{exp.company}</p>

              <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                <span className="rounded-full border border-border px-3 py-1">{exp.dates}</span>
                <span className="rounded-full border border-border px-3 py-1">{exp.location}</span>
              </div>

              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {exp.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex gap-2 leading-relaxed">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

