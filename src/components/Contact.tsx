import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Linkedin, Github, Send, CheckCircle2, AlertCircle, FileText } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../data/portfolio';

interface ContactProps {
  onRequestResume?: () => void;
}

export default function Contact({ onRequestResume }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) {
      errors.message = 'Please enter your message.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      setSubmittedStatus('error');
      setStatusMessage('Please fix the errors in the form before sending.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setSubmittedStatus('success');
    setStatusMessage(
      `Thank you, ${formData.name}! Your message is prepared. Opening your email client to send to ${personalInfo.email}...`
    );

    setTimeout(() => {
      window.open(mailtoUrl, '_blank');
    }, 500);
  };

  const contactChannels = [
    {
      Icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      external: false,
    },
    {
      Icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: `mailto:${personalInfo.email}?subject=${encodeURIComponent('Inquiry regarding opportunities in Hyderabad / Remote')}`,
      external: false,
    },
    {
      Icon: Calendar,
      label: 'Schedule a call',
      value: 'Book 15 min',
      href: personalInfo.calendlyUrl,
      external: true,
    },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 scroll-mt-24">
      <Reveal>
        <div className="relative">
          {/* Ambient glow behind contact heading */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand opacity-20 blur-[80px]" />
          <SectionHeading eyebrow="Contact" title="Let's build something" className="relative z-10" />
        </div>
      </Reveal>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Connect with Me Form */}
        <Reveal className="glass rounded-2xl p-7">
          <div className="mb-5">
            <h3 className="font-display text-lg font-bold text-foreground">Connect with Me</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Have an idea, project, or role? Drop a message below and I'll get back to you shortly.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name" className="text-sm text-muted-foreground block">
                Name <span className="text-accent">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`mt-1 w-full rounded-xl border bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary ${
                  formErrors.name ? 'border-destructive' : 'border-border'
                }`}
                placeholder="Your Name"
              />
              {formErrors.name && (
                <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="size-3" /> {formErrors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-sm text-muted-foreground block">
                Email <span className="text-accent">*</span>
              </label>
              <div className="relative mt-1">
                <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full rounded-xl border bg-secondary/40 py-3 pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-primary ${
                    formErrors.email ? 'border-destructive' : 'border-border'
                  }`}
                  placeholder="your.email@example.com"
                />
              </div>
              {formErrors.email && (
                <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="size-3" /> {formErrors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="text-sm text-muted-foreground block">
                Phone <span className="text-xs text-muted-foreground/70">(Optional)</span>
              </label>
              <div className="relative mt-1">
                <Phone className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-xl border border-border bg-secondary/40 py-3 pl-10 pr-4 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  placeholder="+91 98765 43210"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="text-sm text-muted-foreground block">
                Message <span className="text-accent">*</span>
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`mt-1 w-full rounded-xl border bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary resize-none ${
                  formErrors.message ? 'border-destructive' : 'border-border'
                }`}
                placeholder="Tell me about your project, idea, or opportunity..."
              />
              {formErrors.message && (
                <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="size-3" /> {formErrors.message}
                </p>
              )}
            </div>

            {submittedStatus === 'success' && (
              <div className="rounded-xl border border-primary/40 bg-primary/10 p-4 text-sm text-primary flex items-start gap-3">
                <CheckCircle2 className="size-5 shrink-0 mt-0.5 text-primary" />
                <div>
                  <p className="font-medium">Message Prepared!</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{statusMessage}</p>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-glow hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="size-4" /> Connect with Me
            </button>
          </form>
        </Reveal>

        {/* Contact Channels & Socials */}
        <Reveal delay={120} className="space-y-5">
          {/* 3 Clickable Channels (Email, Location, Schedule a Call) in the Original Compact Card Style */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {contactChannels.map(({ Icon, label, value, href, external }) => {
              const cardContent = (
                <>
                  <span className="rounded-xl bg-secondary p-2.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-foreground break-all">{value}</p>
                  </div>
                </>
              );

              const cardClasses =
                'glass group flex flex-col items-center justify-center gap-2 rounded-2xl p-4 text-center transition-all hover:scale-[1.03] hover:border-primary hover:shadow-glow cursor-pointer';

              return (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer' : undefined}
                  className={cardClasses}
                >
                  {cardContent}
                </a>
              );
            })}
          </div>

          {/* Resume Request Callout */}
          {onRequestResume && (
            <div className="glass rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-border/80 hover:border-primary/40 transition-colors">
              <div className="text-left">
                <h4 className="font-display text-sm font-semibold text-foreground flex items-center gap-2">
                  <FileText className="size-4 text-primary" /> Looking for my resume?
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  My resume is shared upon request. Submit a quick request and I will send the latest PDF directly to your email.
                </p>
              </div>
              <button
                type="button"
                onClick={onRequestResume}
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-all cursor-pointer"
              >
                <FileText className="size-3.5" /> Request Resume
              </button>
            </div>
          )}

          {/* Social Profiles */}
          <div className="flex justify-center gap-3">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2 text-sm text-foreground transition-all duration-200 hover:scale-105 hover:border-primary hover:shadow-glow"
            >
              <Linkedin className="size-4 text-primary" /> LinkedIn
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2 text-sm text-foreground transition-all duration-200 hover:scale-105 hover:border-primary hover:shadow-glow"
            >
              <Github className="size-4 text-primary" /> GitHub
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
