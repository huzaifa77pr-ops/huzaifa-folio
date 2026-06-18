export function Container({ children, className = "" }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 ${className}`}>{children}</div>;
}

export function Section({ id, eyebrow, title, subtitle, children, className = "" }) {
  return (
    <section id={id} className={`relative py-14 md:py-20 border-b border-white/5 ${className}`}>
      <Container>
        <div data-reveal className="reveal opacity-0 mb-10">
          <p className="text-xs font-semibold tracking-[0.25em] text-emerald-400/90 uppercase">
            {eyebrow}
          </p>
          <div className="mt-2 flex items-end gap-4">
            <h2 className="text-2xl font-bold tracking-tight text-white md:text-4xl">
              {title}
            </h2>
            <div className="hidden h-px flex-1 bg-white/10 md:block mb-2" />
          </div>
          {subtitle && (
            <p className="mt-3 max-w-3xl text-sm md:text-base text-slate-300/90 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-6">{children}</div>
      </Container>
    </section>
  );
}

export function Card({ children, className = "" }) {
  return (
    <div
      data-reveal
      className={`reveal opacity-0 group rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-md 
        shadow-[0_12px_40px_rgba(0,0,0,0.35)] 
        transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/35 hover:bg-slate-900/60
        hover:shadow-[0_16px_50px_rgba(16,185,129,0.1)] ${className}`}
    >
      {children}
    </div>
  );
}

export function Pill({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs font-medium text-slate-300 transition-colors duration-200 hover:border-emerald-400/30 hover:text-emerald-300 ${className}`}>
      {children}
    </span>
  );
}

export function SkillBar({ label, value }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-200">{label}</span>
        <span className="font-mono text-emerald-400">{value}%</span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-slate-950/60 border border-white/5 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(52,211,153,0.5)]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

export function PrimaryBtn({ href, onClick, children, className = "", type = "button" }) {
  const baseClass = `inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-400 to-emerald-500 
    px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_4px_20px_rgba(52,211,153,0.3)]
    transition-all duration-300 hover:scale-[1.02] hover:from-emerald-300 hover:to-emerald-400 
    hover:shadow-[0_6px_25px_rgba(52,211,153,0.5)] active:scale-[0.98] cursor-pointer ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}

export function GhostBtn({ href, onClick, children, className = "", type = "button" }) {
  const baseClass = `inline-flex items-center justify-center rounded-xl border border-white/15 
    bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-all duration-300 
    hover:bg-white/10 hover:border-white/30 hover:text-white active:scale-[0.98] cursor-pointer ${className}`;

  if (href) {
    return (
      <a href={href} className={baseClass}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClass}>
      {children}
    </button>
  );
}
