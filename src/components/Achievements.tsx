import { Trophy, CheckCircle, TrendingUp, Cpu, Award } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { achievementsData } from '../data/portfolio';

const categoryIcons: { [key: string]: typeof Trophy } = {
  'Academic Honor': Award,
  'Industry Selection': TrendingUp,
  'Engineering Architecture': Cpu,
  'Cloud & API Delivery': CheckCircle,
  'Professional Certification': Trophy,
};

export default function Achievements() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-24 scroll-mt-24">
      <Reveal>
        <SectionHeading eyebrow="Milestones & Impact" title="Key Achievements" />
        <p className="mt-3 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Verified academic excellence, competitive industry selections, and engineering milestones.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievementsData.map((item, idx) => {
          const Icon = categoryIcons[item.category] || Trophy;

          return (
            <Reveal key={item.title} delay={idx * 60}>
              <div className="glass group flex h-full flex-col justify-between rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-glow">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full bg-primary/10 border border-primary/25 px-3 py-0.5 text-xs font-semibold text-primary">
                      {item.category}
                    </span>
                    <span className="text-[11px] text-muted-foreground">{item.date}</span>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="rounded-xl bg-secondary p-2.5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <div className="font-display text-xl font-extrabold text-foreground tracking-tight">
                        {item.metric}
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-3 font-display text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-border/40 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1.5 text-primary font-medium">
                    <CheckCircle className="size-3" /> Verified Milestone
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
