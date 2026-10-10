import { useState, useEffect } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { navItems, personalInfo } from '../data/portfolio';

interface NavbarProps {
  onRequestResume: () => void;
}

export default function Navbar({ onRequestResume }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + 140;

      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#home"
          className="font-display text-lg font-bold tracking-tight transition-transform hover:scale-105"
        >
          {personalInfo.name} <span className="text-gradient">{personalInfo.lastName}</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`rounded-full px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? 'text-foreground bg-secondary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onRequestResume}
            className="hidden items-center gap-2 rounded-full bg-gradient-brand p-[1px] sm:inline-flex transition-transform hover:scale-105 cursor-pointer"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-medium">
              <FileText className="size-4" /> Request Resume
            </span>
          </button>

          <button
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-full border border-border p-2 md:hidden text-foreground hover:bg-secondary/40 transition-colors"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <ul className="glass flex flex-col gap-1 px-5 pb-4 md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                  activeSection === item.id
                    ? 'bg-secondary text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestResume();
              }}
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-brand p-[1px] w-full cursor-pointer"
            >
              <span className="flex items-center justify-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-medium w-full">
                <FileText className="size-4" /> Request Resume
              </span>
            </button>
          </li>
        </ul>
      )}
    </header>
  );
}

