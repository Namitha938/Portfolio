import { useRef, useState, useEffect } from 'react';

interface CountUpProps {
  value: number;
  suffix?: string;
}

export default function CountUp({ value, suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();

        const startTime = performance.now();
        const duration = 1200;

        const animate = (time: number) => {
          const progress = Math.min((time - startTime) / duration, 1);
          // Ease-out cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(value * easeProgress);

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {Number.isInteger(value) ? Math.round(displayValue) : displayValue.toFixed(1)}
      {suffix}
    </span>
  );
}

