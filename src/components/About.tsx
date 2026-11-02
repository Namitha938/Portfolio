import { Brain, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import CountUp from './CountUp';
import { aboutContent } from '../data/portfolio';

export default function About() {
  const highlights = [
    'Autonomous Multi-Agent Systems & LangGraph Workflows',
    'Full-Stack AI Application Development (FastAPI, React, Django)',
    'Computer Vision & Real-Time Deep Learning (PyTorch, YOLOv5)',
    'RAG Architectures, Vector Stores & Semantic Search',
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 scroll-mt-24">
      <Reveal>
        <SectionHeading eyebrow="About Me" title={aboutContent.heading} />
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start">
        {/* Left Narrative Bio Card */}
        <Reveal className="glass rounded-3xl p-8 leading-relaxed text-muted-foreground space-y-5">
          <div className="flex items-center gap-2 text-primary font-medium text-sm">
            <Brain className="size-4" />
            <span>Passion for Intelligent, Production Systems</span>
          </div>

          {aboutContent.paragraphs.map((p, idx) => (
            <p key={idx} className="text-base text-foreground/90 leading-relaxed">
              {p}
            </p>
          ))}

          {/* Core Strengths Checklist */}
          <div className="pt-2 border-t border-border/50">
            <h4 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3 flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-accent" /> Key Focus Areas
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2 text-xs text-foreground/80">
                  <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
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
                className="glass rounded-2xl p-6 text-center transition-all duration-300 hover:border-primary/50 hover:shadow-glow hover:-translate-y-1"
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

          {/* Quick Bio Highlight Callout */}
          <Reveal delay={180} className="glass rounded-2xl p-6 border border-border/70">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-primary/20 p-2.5 text-primary">
                <Cpu className="size-5" />
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-foreground">
                  AI Engineering Mindset
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Bridging cutting-edge research models with production-grade backend APIs and interactive user interfaces.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
