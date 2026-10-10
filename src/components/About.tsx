import { GraduationCap, Award } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import CountUp from './CountUp';
import { aboutContent, educationData, certificationsData } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 scroll-mt-24">
      <Reveal>
        <SectionHeading eyebrow="About" title={aboutContent.heading} />
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        {/* Left Bio + Stats Column */}
        <Reveal className="glass rounded-2xl p-7 leading-relaxed text-muted-foreground">
          {aboutContent.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          {/* Stats Grid */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {aboutContent.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-secondary/20 p-4 text-center transition-all hover:border-primary/40 hover:-translate-y-1"
              >
                <div className="font-display text-2xl font-bold text-gradient">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Right Education & Certification Cards */}
        <div className="space-y-6">
          <Reveal delay={100} className="glass rounded-2xl p-6 transition-all hover:border-primary/40" id="education">
            <GraduationCap className="size-6 text-primary" />
            <h3 className="mt-3 font-display text-lg font-semibold text-foreground">Education</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              {educationData.degree} — {educationData.field}
              <br />
              {educationData.institution}, {educationData.location}
              <br />
              {educationData.period} · CGPA {educationData.cgpa}
            </p>
          </Reveal>

          <Reveal delay={180} className="glass rounded-2xl p-6 transition-all hover:border-accent/40">
            <Award className="size-6 text-accent" />
            <h3 className="mt-3 font-display text-lg font-semibold text-foreground">Certification</h3>
            {certificationsData.map((cert) => (
              <p key={cert.title} className="mt-2 text-sm text-muted-foreground">
                {cert.title} — {cert.issuer} ({cert.date})
              </p>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

