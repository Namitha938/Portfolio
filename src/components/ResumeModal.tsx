import React, { useState, useEffect } from 'react';
import { FileText, X, Send, CheckCircle2, AlertCircle, Building2, Mail, User } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const REQUEST_PURPOSES = [
  'Recruiting / Hiring',
  'Project Collaboration',
  'Freelance / Consulting',
  'Networking / Other',
];

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    purpose: REQUEST_PURPOSES[0],
    note: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close on Escape key and prevent background scrolling
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, onClose]);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setErrors({});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Construct email content for Namitha
    const subject = encodeURIComponent(
      `Resume Request: ${formData.name}${formData.company ? ` from ${formData.company}` : ''}`
    );
    const bodyContent = [
      `Hi Namitha,`,
      ``,
      `I would like to request a copy of your resume.`,
      ``,
      `--- Request Details ---`,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Company / Organization: ${formData.company || 'Not specified'}`,
      `Purpose: ${formData.purpose}`,
      formData.note.trim() ? `\nMessage / Context:\n${formData.note.trim()}` : '',
      ``,
      `Looking forward to receiving the resume!`,
      `Best regards,`,
      formData.name,
    ].join('\n');

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;

    // Optional POST endpoint if configured in .env
    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
    if (endpoint) {
      try {
        fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formType: 'resume_request',
            ...formData,
            recipient: personalInfo.email,
          }),
        }).catch(() => {
          // Fallback silently if endpoint fails
        });
      } catch {
        // Silently continue
      }
    }

    setIsSubmitted(true);

    // Trigger email client with prefilled details
    setTimeout(() => {
      window.open(mailtoUrl, '_blank');
    }, 400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-border/80 bg-card/95 p-6 sm:p-8 shadow-2xl backdrop-blur-xl animate-in zoom-in-95 duration-200 text-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow accent */}
        <div className="pointer-events-none absolute -top-12 left-1/2 h-24 w-52 -translate-x-1/2 rounded-full bg-gradient-brand opacity-25 blur-3xl" />

        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
        >
          <X className="size-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-gradient-brand p-[2px]">
                <div className="rounded-[10px] bg-background p-2">
                  <FileText className="size-5 text-primary" />
                </div>
              </div>
              <div>
                <h2 id="resume-modal-title" className="font-display text-xl font-bold tracking-tight text-foreground">
                  Request Resume
                </h2>
                <p className="text-xs text-muted-foreground">
                  Namitha's resume is available upon request
                </p>
              </div>
            </div>

            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Please share your name and email. Submitting will send a request directly to Namitha's inbox so she can share the latest PDF copy with you.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4" noValidate>
              {/* Name */}
              <div>
                <label htmlFor="req-name" className="text-xs font-medium text-muted-foreground block">
                  Full Name <span className="text-accent">*</span>
                </label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="req-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full rounded-xl border bg-secondary/30 py-2.5 pl-10 pr-3 text-sm text-foreground outline-none transition-colors focus:border-primary ${
                      errors.name ? 'border-destructive' : 'border-border'
                    }`}
                  />
                </div>
                {errors.name && (
                  <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                    <AlertCircle className="size-3" /> {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="req-email" className="text-xs font-medium text-muted-foreground block">
                  Work / Personal Email <span className="text-accent">*</span>
                </label>
                <div className="relative mt-1">
                  <Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="req-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. sarah@company.com"
                    className={`w-full rounded-xl border bg-secondary/30 py-2.5 pl-10 pr-3 text-sm text-foreground outline-none transition-colors focus:border-primary ${
                      errors.email ? 'border-destructive' : 'border-border'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                    <AlertCircle className="size-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Company / Organization */}
              <div>
                <label htmlFor="req-company" className="text-xs font-medium text-muted-foreground block">
                  Company / Organization <span className="text-xs text-muted-foreground/60">(Optional)</span>
                </label>
                <div className="relative mt-1">
                  <Building2 className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                  <input
                    id="req-company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. TechCorp / Stealth AI"
                    className="w-full rounded-xl border border-border bg-secondary/30 py-2.5 pl-10 pr-3 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  />
                </div>
              </div>

              {/* Purpose */}
              <div>
                <label htmlFor="req-purpose" className="text-xs font-medium text-muted-foreground block">
                  Purpose of Request
                </label>
                <select
                  id="req-purpose"
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="mt-1 w-full rounded-xl border border-border bg-secondary/30 px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                >
                  {REQUEST_PURPOSES.map((purpose) => (
                    <option key={purpose} value={purpose} className="bg-card text-foreground">
                      {purpose}
                    </option>
                  ))}
                </select>
              </div>

              {/* Optional Note */}
              <div>
                <label htmlFor="req-note" className="text-xs font-medium text-muted-foreground block">
                  Additional Note <span className="text-xs text-muted-foreground/60">(Optional)</span>
                </label>
                <textarea
                  id="req-note"
                  rows={2}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="e.g. Looking for an AI engineer for our LangGraph project..."
                  className="mt-1 w-full rounded-xl border border-border bg-secondary/30 px-3 py-2 text-sm text-foreground outline-none transition-colors focus:border-primary resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-brand py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all duration-200 hover:scale-[1.01] hover:brightness-110"
                >
                  <Send className="size-4" /> Send Resume Request
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-4 text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/20 text-primary">
              <CheckCircle2 className="size-8" />
            </div>
            <h3 className="mt-4 font-display text-2xl font-bold text-foreground">
              Request Sent!
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Thank you, <strong className="text-foreground">{formData.name}</strong>. Your request for Namitha's resume has been dispatched to{' '}
              <span className="text-primary font-medium">{personalInfo.email}</span>.
            </p>
            <p className="mt-2 text-xs text-muted-foreground/80">
              Your default email client was also prompted to confirm the request. She will review it and send over the PDF resume shortly.
            </p>

            <button
              onClick={onClose}
              className="mt-6 inline-flex rounded-full bg-secondary px-6 py-2.5 text-sm font-medium text-foreground hover:bg-secondary/70 transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

