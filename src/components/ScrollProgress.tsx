import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = totalScroll > 0 ? window.scrollY / totalScroll : 0;
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${Math.min(progress, 1)})`;
        }
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent pointer-events-none">
      <div
        ref={progressRef}
        className="h-full bg-gradient-brand"
        style={{ width: '100%', transform: 'scaleX(0)', transformOrigin: 'left' }}
      />
    </div>
  );
}

