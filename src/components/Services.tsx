import {
  Workflow,
  Brain,
  Eye,
  Server,
  Layers,
  BarChart3,
} from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { servicesData, ServiceItem } from '../data/portfolio';

const iconMap = {
  Workflow,
  Brain,
  Eye,
  Server,
  Layers,
  BarChart3,
};

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-24 scroll-mt-24">
      <Reveal>
        <SectionHeading eyebrow="Services" title="How I can help" />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((service: ServiceItem, idx) => {
          const IconComponent = iconMap[service.icon] || Brain;
          return (
            <Reveal key={service.title} delay={idx * 70}>
              <div className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-card">
                <span className="inline-flex rounded-xl bg-gradient-brand p-3 text-primary-foreground shadow-glow">
                  <IconComponent className="size-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {service.body}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

