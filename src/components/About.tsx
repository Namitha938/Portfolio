import { Brain, Sparkles, Target, Compass } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import CountUp from './CountUp';
import { aboutContent } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 scroll-mt-24">
      <Reveal>
        <SectionHeading eyebrow="About Me" title={aboutContent.heading} />
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr] items-start">
        {/* Left Narrative Bio Card */}
        <Reveal className="glass rounded-3xl p-7 sm:p-8 leading-relaxed space-y-4">
          <div className="flex items-center gap-2 text-primary font-semibold text-sm">
            <Brain className="size-4" />
            <span>AI & Full-Stack Software Engineer</span>
          </div>

          {aboutContent.paragraphs.map((p, idx) => (
            <p key={idx} className="text-sm sm:text-base text-foreground/90 leading-relaxed">
              {p}
            </p>
          ))}

          {/* Career Interests Tag Pills */}
          <div className="pt-3 border-t border-border/50">
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3 flex items-center gap-1.5">
              <Compass className="size-3.5 text-accent" /> Target Career Interests
            </h4>
            <div className="flex flex-wrap gap-2">
              {aboutContent.careerInterests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full border border-border/80 bg-secondary/50 px-3 py-1.5 text-xs font-medium text-foreground transition-all duration-200 hover:border-primary hover:bg-secondary hover:scale-105"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Right Stats Grid */}
        <div className="space-y-6">
          <Reveal delay={100} className="grid grid-cols-2 gap-4">
            {aboutContent.stats.map((stat) => (
              <div
                key={stat.label}
                className="glass rounded-2xl p-5 sm:p-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1"
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-gradient">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </Reveal>

          {/* Quick Engineering Philosophy Callout */}
          <Reveal delay={180} className="glass rounded-2xl p-6 border border-border/70">
            <div className="flex items-start gap-3.5">
              <div className="rounded-xl bg-primary/20 p-2.5 text-primary shrink-0 mt-0.5">
                <Target className="size-5" />
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-foreground flex items-center gap-1.5">
                  <Sparkles className="size-3.5 text-primary" /> Engineering Focus
                </h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  Combining robust full-stack software architecture with applied machine learning and multi-agent systems to deliver real-world production value.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
