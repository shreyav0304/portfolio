"use client";

import { useEffect, useRef } from "react";

export function NeuralField() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = canvas.current;
    if (!c) return;

    const ctx = c.getContext("2d");
    if (!ctx) return;

    const mobileQuery = window.matchMedia("(max-width: 640px)");
    const isMobile = mobileQuery.matches;

    let frame = 0;
    let w = 0;
    let h = 0;
    const mouse = { x: -999, y: -999 };

    const nodes = Array.from({ length: isMobile ? 44 : 92 }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * (isMobile ? 0.00018 : 0.00034),
      vy: (Math.random() - 0.5) * (isMobile ? 0.00018 : 0.00034),
      r: i % (isMobile ? 13 : 11) === 0 ? 2.8 : i % (isMobile ? 7 : 5) === 0 ? 1.8 : 1.1,
    }));

    const resize = () => {
      const ratio = devicePixelRatio || 1;
      w = c.width = innerWidth * ratio;
      h = c.height = innerHeight * ratio;
      c.style.width = `${innerWidth}px`;
      c.style.height = `${innerHeight}px`;
    };

    const move = (e: PointerEvent) => {
      const ratio = devicePixelRatio || 1;
      mouse.x = e.clientX * ratio;
      mouse.y = e.clientY * ratio;
    };

    const draw = () => {
      const ratio = devicePixelRatio || 1;
      ctx.clearRect(0, 0, w, h);

      const pts = nodes.map((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > 1) node.vx *= -1;
        if (node.y < 0 || node.y > 1) node.vy *= -1;
        return { x: node.x * w, y: node.y * h, r: node.r };
      });

      const distMax = (isMobile ? 160 : 250) * ratio;

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x;
          const dy = pts[i].y - pts[j].y;
          const distance = Math.hypot(dx, dy);

          if (distance < distMax) {
            const alpha = (isMobile ? 0.07 : 0.18) * (1 - distance / distMax);
            ctx.strokeStyle = `rgba(185,255,102,${alpha})`;
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }

      pts.forEach((point, index) => {
        const dx = point.x - mouse.x;
        const dy = point.y - mouse.y;
        const distance = Math.hypot(dx, dy);
        const twinkle = 0.5 + 0.5 * Math.sin(frame / 28 + index);
        ctx.fillStyle = distance < 170 * ratio ? "rgba(185,255,102,.9)" : `rgba(232,248,255,${isMobile ? 0.16 + twinkle * 0.14 : 0.3 + twinkle * 0.35})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.r * ratio, 0, Math.PI * 2);
        ctx.fill();
      });

      const glowPoints: Array<[number, number, number, string, number]> = [
        [0.22, 0.22, 140, "185,255,102", 0.16],
        [0.82, 0.18, 180, "126,232,255", 0.12],
        [0.74, 0.72, 220, "185,255,102", 0.1],
      ];

      glowPoints.forEach(([x, y, size, color, baseAlpha], index) => {
        const pulse = 0.7 + 0.3 * Math.sin(frame / 30 + index);
        const px = x * w;
        const py = y * h;
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, size * ratio);
        gradient.addColorStop(0, `rgba(${color},${baseAlpha * pulse})`);
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(px, py, size * ratio, 0, Math.PI * 2);
        ctx.fill();
      });

      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    addEventListener("resize", resize);
    addEventListener("pointermove", move);

    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("resize", resize);
      removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-35 sm:opacity-70"
        style={{
          background:
            "radial-gradient(circle at 50% 20%, rgba(185,255,102,.12), transparent 30%), radial-gradient(circle at 82% 18%, rgba(126,232,255,.08), transparent 26%), radial-gradient(circle at 20% 78%, rgba(185,255,102,.05), transparent 25%), linear-gradient(180deg, rgba(6,9,8,.15), rgba(6,9,8,.72))",
        }}
      />
      <div className="absolute left-[12%] top-[14%] hidden h-72 w-72 rounded-full bg-acid/15 blur-3xl sm:block" style={{ animation: "cosmic-drift 18s ease-in-out infinite" }} />
      <div className="absolute right-[10%] top-[18%] hidden h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl sm:block" style={{ animation: "cosmic-glow 22s ease-in-out infinite" }} />
      <div className="absolute bottom-[14%] left-[62%] hidden h-96 w-96 rounded-full bg-acid/8 blur-[120px] sm:block" style={{ animation: "cosmic-drift 24s ease-in-out infinite reverse" }} />
      <canvas ref={canvas} className="absolute inset-0 opacity-40 sm:opacity-85 mix-blend-screen" />
    </div>
  );
}
