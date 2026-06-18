import { useEffect, useRef } from "react";

export default function MatrixBG() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const letters = "アァカサタナハマヤャラワン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@";
    const fontSize = 14;
    const speedMin = 0.7;
    const speedMax = 1.6;

    let drops = [];
    let speeds = [];
    let raf = 0;

    const resize = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(canvas.clientWidth * dpr);
      canvas.height = Math.floor(canvas.clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.floor(canvas.clientWidth / fontSize);
      drops = Array.from({ length: cols }, () => Math.random() * 60);
      speeds = Array.from(
        { length: cols },
        () => speedMin + Math.random() * (speedMax - speedMin)
      );
    };

    resize();
    window.addEventListener("resize", resize);

    const tick = () => {
      ctx.fillStyle = "rgba(12, 18, 28, 0.12)";
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = letters[Math.floor(Math.random() * letters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = "rgba(34, 197, 94, 0.40)";
        ctx.fillText(char, x, y);

        if (Math.random() < 0.06) {
          ctx.fillStyle = "rgba(187, 247, 208, 0.85)";
          ctx.fillText(char, x, y);
        }

        drops[i] += speeds[i];

        if (y > canvas.clientHeight && Math.random() > 0.985) {
          drops[i] = 0;
          speeds[i] = speedMin + Math.random() * (speedMax - speedMin);
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="h-full w-full opacity-60" />
      {/* overlay: slate/grey */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/10 to-slate-950/55" />
      <div className="absolute inset-0 [background:radial-gradient(70%_60%_at_50%_20%,transparent,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.55))]" />
    </div>
  );
}
