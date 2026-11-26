import { Briefcase, Calendar, MapPin, Building2, CheckCircle2, Trophy } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { experienceData } from '../data/portfolio';

export default function Experience() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-24 scroll-mt-24">
      <Reveal>
        <SectionHeading eyebrow="Experience" title="Professional Internships" />
        <p className="mt-3 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Industry-tested engineering experience spanning cloud AI infrastructure benchmarking, LLM multi-agent orchestration, and production FastAPI services.
        </p>
      </Reveal>

      {/* Timeline Container */}
      <div className="mt-12 relative pl-6 sm:pl-8 space-y-10">
        {/* Continuous gradient vertical timeline rule */}
        <span className="absolute left-2 top-2 bottom-2 w-[2px] rounded-full bg-gradient-brand opacity-60" />

        {experienceData.map((exp, idx) => (
          <Reveal key={exp.role} delay={idx * 100} className="relative">
            {/* Timeline bullet node with active pulse for latest */}
            <span className="absolute -left-[23px] sm:-left-[31px] top-7 flex size-4 items-center justify-center">
              {idx === 0 && (
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              )}
              <span className="relative inline-flex size-4 rounded-full bg-gradient-brand ring-4 ring-background" />
            </span>

            <div className="glass rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-glow">
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-border/50">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-gradient-brand p-[2px] shrink-0 mt-0.5">
                    <div className="rounded-[10px] bg-background p-2.5 text-primary">
                      <Briefcase className="size-5" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="rounded-full bg-primary/10 border border-primary/30 px-2.5 py-0.5 text-[10px] font-semibold text-primary uppercase tracking-wider">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-primary flex items-center gap-1.5 mt-0.5">
                      <Building2 className="size-3.5" />
                      <span>{exp.company}</span>
                      {exp.program && (
                        <span className="text-muted-foreground font-normal">
                          — {exp.program}
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 self-start sm:self-center text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-secondary/40 px-3 py-1">
                    <Calendar className="size-3 text-primary" /> {exp.dates}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-secondary/40 px-3 py-1">
                    <MapPin className="size-3 text-primary" /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Key Achievement Callout */}
              {exp.achievement && (
                <div className="mt-4 rounded-2xl border border-primary/30 bg-primary/5 p-3.5 flex items-start gap-3">
                  <Trophy className="size-4 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Quantifiable Engineering Impact:
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-foreground mt-0.5">
                      {exp.achievement}
                    </p>
                  </div>
                </div>
              )}

              {/* Responsibilities Bullets */}
              <div className="mt-5 space-y-2.5">
                <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  Core Responsibilities & Deliverables:
                </p>
                <ul className="space-y-2 text-sm text-foreground/85 leading-relaxed">
                  {exp.responsibilities.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Badges */}
              <div className="mt-6 pt-4 border-t border-border/50 flex flex-wrap items-center gap-2">
                <span className="text-xs text-muted-foreground font-medium mr-1">
                  Technologies:
                </span>
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-secondary/60 border border-border/60 px-3 py-1 text-xs font-medium text-foreground transition-all duration-200 hover:border-primary/40 hover:bg-secondary"
                  >
                    {t}
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
