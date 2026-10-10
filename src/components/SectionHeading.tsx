interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  className?: string;
}

export default function SectionHeading({ eyebrow, title, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-12 text-center ${className}`}>
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-[3px] w-24 rounded-full bg-gradient-brand" />
    </div>
  );
}

