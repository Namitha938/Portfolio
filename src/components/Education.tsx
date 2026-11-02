import { GraduationCap, Award, Calendar, MapPin, Star } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { educationData, certificationsData } from '../data/portfolio';

export default function Education() {
  const coursework = [
    'Data Structures & Algorithms',
    'Machine Learning & Deep Learning',
    'Natural Language Processing',
    'Database Management Systems (SQL & MongoDB)',
    'Full-Stack Web Development',
    'Computer Vision & PyTorch',
  ];

  return (
    <section id="education" className="mx-auto max-w-5xl px-5 py-24 scroll-mt-24">
      <Reveal>
        <SectionHeading eyebrow="Education & Credentials" title="Academic Background" />
      </Reveal>

      <div className="relative pl-6 sm:pl-8 space-y-10">
        {/* Continuous gradient vertical timeline rule */}
        <span className="absolute left-2 top-2 bottom-2 w-[2px] rounded-full bg-gradient-brand opacity-60" />

        {/* 1. University Degree Card */}
        <Reveal delay={100} className="relative">
          {/* Active timeline node with ping pulse */}
          <span className="absolute -left-[23px] sm:-left-[31px] top-6 flex size-4 items-center justify-center">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex size-4 rounded-full bg-gradient-brand ring-4 ring-background" />
          </span>

          <div className="glass rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-glow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-gradient-brand p-[2px]">
                  <div className="rounded-[14px] bg-background p-3 text-primary">
                    <GraduationCap className="size-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {educationData.degree} in {educationData.field}
                  </h3>
                  <p className="text-sm font-medium text-primary mt-0.5">
                    {educationData.institution}
                  </p>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="inline-flex items-center gap-1.5 self-start sm:self-center rounded-full bg-primary/10 border border-primary/30 px-3.5 py-1.5 text-xs font-semibold text-primary">
                <Star className="size-3.5 fill-primary text-primary" />
                <span>CGPA: {educationData.cgpa}</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground border-y border-border/50 py-3">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5 text-primary" /> {educationData.period}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="size-3.5 text-primary" /> {educationData.location}
              </span>
            </div>

            <div className="mt-5">
              <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2.5">
                Key Coursework & Domains:
              </p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-border bg-secondary/30 px-3 py-1 text-xs text-foreground/80 transition-colors hover:border-primary/40"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* 2. Professional Certification Card */}
        <Reveal delay={200} className="relative">
          {/* Timeline node */}
          <span className="absolute -left-[23px] sm:-left-[31px] top-6 size-4 rounded-full bg-gradient-brand ring-4 ring-background" />

          <div className="glass rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-glow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-gradient-brand p-[2px]">
                  <div className="rounded-[14px] bg-background p-3 text-accent">
                    <Award className="size-6" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    Certifications & Specializations
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Industry-recognized micro-credentials & practical coursework
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {certificationsData.map((cert) => (
                <div
                  key={cert.title}
                  className="rounded-2xl border border-border bg-secondary/20 p-4 transition-all hover:bg-secondary/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div>
                    <h4 className="font-display text-base font-semibold text-foreground">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Issued by <span className="text-foreground font-medium">{cert.issuer}</span>
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 self-start sm:self-center rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
                    <Calendar className="size-3 text-primary" /> {cert.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

