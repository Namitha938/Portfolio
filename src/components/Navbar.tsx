import { useState, useEffect, useRef } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { navItems, personalInfo } from '../data/portfolio';

interface NavbarProps {
  onRequestResume: () => void;
}

export default function Navbar({ onRequestResume }: NavbarProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const navLinksRef = useRef<{ [key: string]: HTMLAnchorElement | null }>({});

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPos = window.scrollY + 160;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update sliding pill position whenever active section changes or window resizes
  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = navLinksRef.current[activeSection];
      if (activeEl) {
        setIndicatorStyle({
          left: activeEl.offsetLeft,
          width: activeEl.offsetWidth,
          opacity: 1,
        });
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeSection]);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/80 shadow-card py-3'
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick('home')}
          className="font-display text-lg font-bold tracking-tight transition-transform hover:scale-105 shrink-0"
        >
          {personalInfo.name} <span className="text-gradient">{personalInfo.lastName}</span>
        </a>

        {/* Desktop Animated Segmented Pill Slider Bar */}
        <div className="hidden lg:flex items-center">
          <div className="relative rounded-full border border-border/70 bg-secondary/35 p-1 backdrop-blur-md shadow-inner">
            {/* The Animated Sliding Pill Indicator */}
            <span
              aria-hidden="true"
              className="absolute top-1 bottom-1 rounded-full bg-gradient-brand shadow-glow transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                left: `${indicatorStyle.left}px`,
                width: `${indicatorStyle.width}px`,
                opacity: indicatorStyle.opacity,
              }}
            />

            {/* Nav Items */}
            <ul className="relative flex items-center gap-0.5">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      ref={(el) => (navLinksRef.current[item.id] = el)}
                      href={`#${item.id}`}
                      onClick={() => handleNavClick(item.id)}
                      className={`relative z-10 block rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-200 cursor-pointer ${
                        isActive
                          ? 'text-primary-foreground font-semibold'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onRequestResume}
            className="btn-shimmer hidden items-center gap-2 rounded-full bg-gradient-brand p-[1px] sm:inline-flex transition-transform hover:scale-105 active:scale-95 cursor-pointer shadow-sm"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-background px-4 py-2 text-xs font-semibold text-foreground">
              <FileText className="size-3.5 text-primary" /> Request Resume
            </span>
          </button>

          <button
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-full border border-border p-2 lg:hidden text-foreground hover:bg-secondary/40 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="glass mx-4 mt-3 rounded-2xl p-4 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200 border border-border">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`block rounded-xl px-4 py-2.5 text-sm transition-all ${
                      isActive
                        ? 'bg-gradient-brand text-primary-foreground font-semibold shadow-glow'
                        : 'text-muted-foreground hover:bg-secondary/40 hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
            <li className="pt-2 border-t border-border/60 mt-1">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestResume();
                }}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-brand p-[1px] w-full cursor-pointer"
              >
                <span className="flex items-center justify-center gap-2 rounded-xl bg-background px-4 py-2.5 text-sm font-semibold w-full">
                  <FileText className="size-4 text-primary" /> Request Resume
                </span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
