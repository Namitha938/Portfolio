import { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId = 0;
    let width = 0;
    let height = 0;
    let bounds = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, radius: 150 };
    let frameCount = 0;
    let isVisible = true;
    let isPageVisible = !document.hidden;

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      bounds = canvas.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const initParticles = () => {
      resize();
      particles.length = 0;
      const count = Math.min(48, Math.round((width * height) / 30000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX - bounds.left;
      mouse.y = e.clientY - bounds.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const draw = () => {
      if (!isVisible || !isPageVisible) return;
      // Keep the decorative effect smooth while using half the frame callbacks.
      if (frameCount++ % 2 === 1) {
        animId = requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, width, height);

      // Move & wrap particles
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Subtle mouse push
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const distSquared = dx * dx + dy * dy;
        if (distSquared < mouse.radius * mouse.radius && distSquared > 0) {
          const dist = Math.sqrt(distSquared);
          const force = (1 - dist / mouse.radius) * 0.5;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }
      }

      // Draw connecting lines between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSquared = dx * dx + dy * dy;
          if (distSquared < 16900) {
            const dist = Math.sqrt(distSquared);
            ctx.strokeStyle = `rgba(139, 146, 255, ${0.22 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw lines to mouse cursor
      if (mouse.x > 0 && mouse.y > 0) {
        for (const p of particles) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const distSquared = dx * dx + dy * dy;
          if (distSquared < mouse.radius * mouse.radius) {
            const dist = Math.sqrt(distSquared);
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.4 * (1 - dist / mouse.radius)})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      // Draw particle dots
      for (const p of particles) {
        ctx.fillStyle = 'rgba(160, 150, 255, 0.65)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    initParticles();
    draw();

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible && isPageVisible) animId = requestAnimationFrame(draw);
      else cancelAnimationFrame(animId);
    });
    visibilityObserver.observe(canvas);
    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
      if (isPageVisible && isVisible) animId = requestAnimationFrame(draw);
      else cancelAnimationFrame(animId);
    };

    window.addEventListener('resize', initParticles);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', initParticles);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      visibilityObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-75"
    />
  );
}
