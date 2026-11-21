import React, { useState } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle2, AlertCircle, FileText, Download } from 'lucide-react';
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
      setStatusMessage('Please complete all required fields.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;

    setSubmittedStatus('success');
    setStatusMessage(
      `Thank you, ${formData.name}! Opening your email client to send your message directly to ${personalInfo.email}...`
    );

    setTimeout(() => {
      window.open(mailtoUrl, '_blank');
    }, 400);
  };

  const directChannels = [
    {
      Icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      external: false,
    },
    {
      Icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/namitha-singu-3b0515291',
      href: personalInfo.linkedinUrl,
      external: true,
    },
    {
      Icon: Github,
      label: 'GitHub',
      value: 'github.com/Namitha938',
      href: personalInfo.githubUrl,
      external: true,
    },
    {
      Icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: `mailto:${personalInfo.email}?subject=${encodeURIComponent('Inquiry regarding opportunities in Hyderabad / Remote')}`,
      external: false,
    },
  ];

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-24 scroll-mt-24">
      <Reveal>
        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-28 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-brand opacity-20 blur-[80px]" />
          <SectionHeading eyebrow="Get in Touch" title="Let's Connect" className="relative z-10" />
        </div>
        <p className="mt-4 text-center text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          I am actively seeking opportunities as an AI Engineer, Generative AI Developer, Full-Stack Software Developer, or Python Developer. If you have an exciting opportunity or would like to discuss potential collaborations, feel free to reach out.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {/* Working Contact Form */}
        <Reveal className="glass rounded-3xl p-6 sm:p-8">
          <div className="mb-6">
            <h3 className="font-display text-lg font-bold text-foreground">Send a Direct Message</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Fill in your details below and I will get back to you promptly.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                Name <span className="text-destructive">*</span>
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full rounded-xl border bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary ${
                  formErrors.name ? 'border-destructive' : 'border-border'
                }`}
                placeholder="Your Name"
              />
              {formErrors.name && (
                <p className="mt-1.5 text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="size-3" /> {formErrors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                Email <span className="text-destructive">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
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
                <p className="mt-1.5 text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="size-3" /> {formErrors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-muted-foreground block mb-1">
                Message <span className="text-destructive">*</span>
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full rounded-xl border bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-primary resize-none ${
                  formErrors.message ? 'border-destructive' : 'border-border'
                }`}
                placeholder="Discuss an open role, engineering collaboration, or technical project..."
              />
              {formErrors.message && (
                <p className="mt-1.5 text-xs text-destructive flex items-center gap-1">
                  <AlertCircle className="size-3" /> {formErrors.message}
                </p>
              )}
            </div>

            {submittedStatus === 'success' && (
              <div className="rounded-xl border border-primary/40 bg-primary/10 p-4 text-xs text-primary flex items-start gap-2.5">
                <CheckCircle2 className="size-4 shrink-0 mt-0.5 text-primary" />
                <span>{statusMessage}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:shadow-glow hover:scale-[1.01] flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Send className="size-4" /> Send Message
            </button>
          </form>
        </Reveal>

        {/* Direct Contact Channels & Resume Download */}
        <Reveal delay={120} className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {directChannels.map(({ Icon, label, value, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="glass group flex flex-col justify-between rounded-2xl p-5 transition-all duration-200 hover:scale-[1.02] hover:border-primary hover:shadow-glow cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    {label}
                  </span>
                  <span className="rounded-xl bg-secondary p-2 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="size-4" />
                  </span>
                </div>
                <p className="mt-3 text-sm font-semibold text-foreground break-all group-hover:text-primary transition-colors">
                  {value}
                </p>
              </a>
            ))}
          </div>

          {/* Quick Resume Download Card */}
          <div className="glass rounded-3xl p-6 border border-primary/30 bg-primary/5 hover:border-primary/60 transition-all">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h4 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                  <FileText className="size-4 text-primary" /> Download Verified Resume PDF
                </h4>
                <p className="text-xs text-muted-foreground">
                  Get the official, ATS-compliant resume with complete verified education, 3 AI internships, and project details.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="/Namitha_Singu_Resume.pdf"
                  download="Namitha_Singu_Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-2.5 text-xs font-semibold text-primary-foreground shadow-glow hover:scale-105 transition-all"
                >
                  <Download className="size-3.5" /> Download PDF
                </a>
                {onRequestResume && (
                  <button
                    type="button"
                    onClick={onRequestResume}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/60 px-3.5 py-2.5 text-xs font-medium text-foreground hover:bg-secondary hover:border-primary transition-all cursor-pointer"
                  >
                    Send to Email
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Direct Social Profile Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-xs font-semibold text-foreground transition-all duration-200 hover:scale-105 hover:border-primary hover:shadow-glow"
            >
              <Linkedin className="size-4 text-primary" /> LinkedIn Profile
            </a>
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-xs font-semibold text-foreground transition-all duration-200 hover:scale-105 hover:border-primary hover:shadow-glow"
            >
              <Github className="size-4 text-primary" /> GitHub Repositories
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-xs font-semibold text-foreground transition-all duration-200 hover:scale-105 hover:border-primary hover:shadow-glow"
            >
              <Mail className="size-4 text-primary" /> Direct Email
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
