import { GraduationCap, Calendar, MapPin, Star, BookOpen } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { educationData } from '../data/portfolio';

export default function Education() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-24 scroll-mt-24">
      <Reveal>
        <SectionHeading eyebrow="Academic Background" title="Education" />
        <p className="mt-3 text-center text-sm text-muted-foreground max-w-xl mx-auto">
          Formal engineering foundation in Computer Science with dedicated specialization in Artificial Intelligence and Machine Learning.
        </p>
      </Reveal>

      <div className="mt-12 relative pl-6 sm:pl-8">
        {/* Continuous gradient vertical timeline rule */}
        <span className="absolute left-2 top-2 bottom-2 w-[2px] rounded-full bg-gradient-brand opacity-60" />

        {/* University Degree Card */}
        <Reveal delay={100} className="relative">
          {/* Active timeline node with ping pulse */}
          <span className="absolute -left-[23px] sm:-left-[31px] top-6 flex size-4 items-center justify-center">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-4 rounded-full bg-gradient-brand ring-4 ring-background" />
          </span>

          <div className="glass rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-glow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="rounded-2xl bg-gradient-brand p-[2px] shrink-0">
                  <div className="rounded-[14px] bg-background p-3 text-primary">
                    <GraduationCap className="size-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {educationData.degree}
                  </h3>
                  <p className="text-sm font-semibold text-primary mt-0.5">
                    {educationData.field}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {educationData.institution}
                  </p>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="inline-flex items-center gap-1.5 self-start sm:self-center rounded-full bg-primary/10 border border-primary/30 px-4 py-1.5 text-xs font-bold text-primary shadow-sm">
                <Star className="size-3.5 fill-primary text-primary" />
                <span>CGPA: {educationData.cgpa}</span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground border-y border-border/50 py-3">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5 text-primary" /> {educationData.period}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3.5 text-primary" /> {educationData.location}
              </span>
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3 flex items-center gap-1.5">
                <BookOpen className="size-3.5 text-primary" /> Core Academic Coursework & Focus Areas:
              </p>
              <div className="flex flex-wrap gap-2">
                {educationData.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-border bg-secondary/35 px-3 py-1 text-xs text-foreground/85 transition-colors hover:border-primary/40"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
