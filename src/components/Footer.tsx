import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-12 bg-background/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:justify-between">
        <p>
          © {currentYear} {personalInfo.name} {personalInfo.lastName}. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="#home" className="hover:text-foreground transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

