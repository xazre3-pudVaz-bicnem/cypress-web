"use client";

import { useEffect, useRef } from "react";

interface Props {
  theme?: "dark" | "light";
}

export default function ParticleCanvas({ theme = "light" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0,
      h = 0,
      animId: number;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
    }> = [];

    const init = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      particles.length = 0;
      const count = Math.min(Math.floor((w * h) / 22000), 50);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.6 + 0.4,
          a: Math.random() * 0.28 + 0.06,
        });
      }
    };

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x = (p.x + p.vx + w) % w;
        p.y = (p.y + p.vy + h) % h;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle =
          theme === "dark"
            ? `rgba(96, 165, 250, ${p.a})`
            : `rgba(10, 10, 10, ${p.a * 0.6})`;
        ctx.fill();
      }

      if (theme === "dark") {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          for (let j = i + 1; j < particles.length; j++) {
            const q = particles[j];
            const dx = p.x - q.x;
            const dy = p.y - q.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < 12100) {
              const alpha = (1 - Math.sqrt(d2) / 110) * 0.08;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(q.x, q.y);
              ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
              ctx.lineWidth = 0.4;
              ctx.stroke();
            }
          }
        }
      }

      animId = requestAnimationFrame(tick);
    };

    init();
    tick();

    const onResize = () => init();
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: theme === "dark" ? 0.75 : 0.4 }}
    />
  );
}
