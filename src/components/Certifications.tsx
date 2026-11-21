import { Award, Calendar, ExternalLink, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { certificationsData } from '../data/portfolio';

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-5xl px-5 py-24 scroll-mt-24">
      <Reveal>
        <SectionHeading eyebrow="Professional Credentials" title="Certifications" />
        <p className="mt-3 text-center text-sm text-muted-foreground max-w-xl mx-auto">
          Verified industry micro-credentials and specialized engineering coursework.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 md:grid-cols-1 max-w-3xl mx-auto">
        {certificationsData.map((cert, idx) => (
          <Reveal key={cert.title} delay={idx * 100}>
            <div className="glass group relative overflow-hidden rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-glow">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-gradient-brand p-[2px] shrink-0 mt-1">
                    <div className="rounded-[14px] bg-background p-3.5 text-primary">
                      <Award className="size-6" />
                    </div>
                  </div>
                  <div>
                    <span className="inline-block rounded-full bg-primary/10 border border-primary/30 px-3 py-0.5 text-xs font-semibold text-primary mb-2">
                      Verified Credential
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm font-medium text-foreground/80 mt-1">
                      Issued by <span className="text-primary font-semibold">{cert.issuer}</span>
                    </p>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 self-start rounded-full bg-secondary/80 border border-border px-3.5 py-1 text-xs text-muted-foreground">
                  <Calendar className="size-3.5 text-primary" />
                  <span>{cert.date}</span>
                </div>
              </div>

              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                {cert.description}
              </p>

              {/* Skills / Topics */}
              {cert.skills && cert.skills.length > 0 && (
                <div className="mt-5 pt-4 border-t border-border/50">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2.5">
                    Skills & Concepts Mastered:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 rounded-full bg-secondary/60 border border-border/80 px-3 py-1 text-xs text-foreground/80"
                      >
                        <CheckCircle2 className="size-3 text-primary" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Verification Button */}
              {cert.verificationUrl && (
                <div className="mt-6 flex items-center justify-end">
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-xs font-semibold text-primary hover:bg-primary/20 hover:scale-105 transition-all shadow-sm"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink className="size-3" />
                  </a>
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
