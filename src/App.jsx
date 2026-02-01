import { useEffect, useMemo, useRef, useState } from "react";

/* =========================
   FULL-STACK DATA (EDIT HERE)
========================= */
const PROFILE = {
  role: "Full Stack Web Developer",
  name: "Huzaifa",
  headline: "Building Full-Stack Web Experiences",
  summary:
    "I build complete web applications — modern frontend UIs and robust backend systems. I work with HTML/CSS/JavaScript + React on the frontend, and PHP/Laravel with MySQL on the backend. I can develop, integrate APIs, and deploy projects.",

  stats: [
    { k: "2+", v: "Live Projects" },
    { k: "Frontend", v: "React + Tailwind" },
    { k: "Backend", v: "PHP + Laravel" },
  ],

  // chips
  skillsPills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "PHP",
    "Laravel",
    "MySQL",
    "REST APIs",
    "Git",
    "GitHub",
    "Vercel",
    "XAMPP",
  ],

  // progress meters
  skillBars: [
    { label: "Frontend (HTML/CSS/JS)", value: 90 },
    { label: "React / UI Components", value: 78 },
    { label: "PHP", value: 82 },
    { label: "Laravel", value: 76 },
    { label: "Database (MySQL)", value: 74 },
  ],

  services: [
    {
      title: "Frontend Development",
      desc: "Responsive UIs with HTML/CSS/JS, React and Tailwind — clean layout + reusable components.",
      icon: "🎨",
    },
    {
      title: "Backend Development",
      desc: "PHP & Laravel backend: routes, controllers, validation, auth basics, and scalable structure.",
      icon: "🧠",
    },
    {
      title: "Database & CRUD Systems",
      desc: "MySQL database design, relationships, migrations, and full CRUD web apps.",
      icon: "🗄️",
    },
    {
      title: "Deployment",
      desc: "Deploying on Vercel + GitHub workflow. (Can also guide shared hosting for PHP/Laravel.)",
      icon: "🚀",
    },
  ],

  projects: [
    {
      title: "TourWeb18",
      desc: "Tour/travel website UI with modern sections and responsive layout.",
      live: "https://tourweb18.vercel.app",
      tags: ["React", "Vite", "Tailwind"],
      image: "/1.jpg",
    },
    {
      title: "Dead Ivory",
      desc: "Landing page style project with polished UI and responsive design.",
      live: "https://dead-ivory.vercel.app",
      tags: ["React", "Vite", "Tailwind"],
      image: "/2.jpg",
    },
  ],

  contact: {
    email: "huzaifa77pr@gmail.com",
    phone: "+92 3140407955",
    location: "Pakistan",
    availability: "Open for Internship / Junior Role / Job",
  },
};
/* ========================= */

function useRevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("reveal-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* =========================
   MATRIX / HACKER BACKGROUND (NO BLUE)
========================= */
function MatrixBG() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const letters =
      "アァカサタナハマヤャラワン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ$#@";
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
      // Fade — black kam, bluish bilkul nahi
      ctx.fillStyle = "rgba(12, 18, 28, 0.12)";
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      ctx.font = `${fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = letters[Math.floor(Math.random() * letters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillStyle = "rgba(34,197,94,0.40)";
        ctx.fillText(char, x, y);

        if (Math.random() < 0.06) {
          ctx.fillStyle = "rgba(187,247,208,0.85)";
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
      {/* overlay: slate/grey (no blue) */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/10 to-slate-950/55" />
      <div className="absolute inset-0 [background:radial-gradient(70%_60%_at_50%_20%,transparent,rgba(0,0,0,0.35)_55%,rgba(0,0,0,0.55))]" />
    </div>
  );
}

/* =========================
   UI HELPERS
========================= */
function Container({ children }) {
  return <div className="mx-auto w-full max-w-6xl px-4">{children}</div>;
}

function Section({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="relative py-12 md:py-16">
      <Container>
        <div data-reveal className="reveal opacity-0">
          <p className="text-xs tracking-[0.22em] text-emerald-200/80">
            {eyebrow}
          </p>
          <div className="mt-2 flex items-end gap-4">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {title}
            </h2>
            <div className="hidden h-px flex-1 bg-white/10 md:block" />
          </div>
          {subtitle && (
            <p className="mt-3 max-w-3xl text-slate-200/85">{subtitle}</p>
          )}
        </div>

        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      data-reveal
      className={
        "reveal opacity-0 group rounded-2xl border border-white/10 bg-white/6 p-6 backdrop-blur-sm " +
        "shadow-[0_12px_40px_rgba(0,0,0,0.25)] " +
        "transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/10 " +
        className
      }
    >
      {children}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-full border border-white/12 bg-slate-950/20 px-3 py-1 text-xs text-slate-100/90">
      {children}
    </span>
  );
}

function SkillBar({ label, value }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-100/90">{label}</span>
        <span className="text-slate-300">{value}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/10">
        <div
          className="h-2 rounded-full bg-emerald-400/85"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function PrimaryBtn({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
    >
      {children}
    </a>
  );
}

function GhostBtn({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
    >
      {children}
    </a>
  );
}

export default function App() {
  useRevealOnScroll();
  const [menuOpen, setMenuOpen] = useState(false);

  const nav = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Services", href: "#services" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  return (
    <div className="relative min-h-screen bg-slate-900 text-slate-100">
      <MatrixBG />

      {/* local-only reveal CSS */}
      <style>{`
        .reveal-in { animation: riseIn .65s ease forwards; }
        .reveal { will-change: transform, opacity; }
      `}</style>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/55 backdrop-blur">
        <Container>
          <div className="flex items-center justify-between py-4">
            <a href="#home" className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.75)]" />
              <span className="font-semibold tracking-wide">{PROFILE.name}</span>
              <span className="hidden text-xs text-slate-300 md:inline">
                • {PROFILE.role}
              </span>
            </a>

            <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="transition hover:text-white">
                  {n.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden rounded-xl bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 md:inline-flex"
              >
                Hire Me
              </a>

              <button
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm md:hidden"
                onClick={() => setMenuOpen((s) => !s)}
                aria-label="Toggle menu"
              >
                ☰
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="mb-3 rounded-2xl border border-white/10 bg-white/6 p-3 md:hidden">
              <div className="flex flex-col">
                {nav.map((n) => (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-3 py-2 text-sm text-slate-100/90 hover:bg-white/8"
                  >
                    {n.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </Container>
      </header>

      {/* HERO */}
      <section id="home" className="relative py-14 md:py-20">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div data-reveal className="reveal opacity-0">
              <p className="text-sm text-emerald-200/85">{PROFILE.role}</p>

              <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                Hi, I’m <span className="text-emerald-300">{PROFILE.name}</span>
              </h1>

              <h2 className="mt-2 text-2xl font-semibold text-slate-200/90 md:text-3xl">
                {PROFILE.headline}
              </h2>

              <p className="mt-4 max-w-xl text-slate-200/85 md:text-lg">
                {PROFILE.summary}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <PrimaryBtn href="#contact">Hire Me</PrimaryBtn>
                <GhostBtn href="#projects">View Projects</GhostBtn>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-3">
                {PROFILE.stats.map((s) => (
                  <div
                    key={s.v}
                    className="rounded-2xl border border-white/10 bg-white/6 p-4 text-center"
                  >
                    <div className="text-2xl font-semibold text-emerald-200">
                      {s.k}
                    </div>
                    <div className="mt-1 text-xs text-slate-200/80">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right hero card */}
            <div data-reveal className="reveal opacity-0">
              <div className="relative rounded-3xl border border-white/10 bg-white/6 p-6 backdrop-blur-sm shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                <div className="rounded-2xl border border-white/10 bg-slate-950/25 p-5 [animation:floatSoft_6s_ease-in-out_infinite]">
                  <p className="text-xs tracking-[0.22em] text-slate-300">
                    QUICK INTRO
                  </p>
                  <p className="mt-3 text-sm text-slate-200/90 leading-relaxed">
                    Full-stack developer — frontend + backend. I build UI, connect
                    backend, handle DB, and deploy. If you need a complete web
                    system, let’s build it.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {PROFILE.skillsPills.slice(0, 8).map((s) => (
                      <Pill key={s}>{s}</Pill>
                    ))}
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs tracking-[0.22em] text-slate-300">STACK</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {["React", "Tailwind", "PHP", "Laravel", "MySQL"].map((x) => (
                      <Pill key={x}>{x}</Pill>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ABOUT */}
      <Section
        id="about"
        eyebrow="WHO I AM"
        title="About Me"
        subtitle="Full-stack developer focused on clean UI + strong backend."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="md:col-span-2">
            <p className="text-slate-200/90 leading-relaxed">
              I’m a Full Stack Web Developer. I build responsive frontends with
              HTML/CSS/JavaScript, React and Tailwind. On backend, I work with
              PHP and Laravel, and manage databases using MySQL. I enjoy building
              complete applications from UI to database.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {PROFILE.skillsPills.map((s) => (
                <Pill key={s}>{s}</Pill>
              ))}
            </div>
          </Card>

          <Card>
            <p className="text-xs tracking-[0.22em] text-slate-300">FOCUS</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-200/90">
              <li>• Frontend UI + UX</li>
              <li>• Laravel backend</li>
              <li>• MySQL databases</li>
              <li>• Deployment workflow</li>
            </ul>
          </Card>
        </div>
      </Section>

      {/* SKILLS */}
      <Section
        id="skills"
        eyebrow="MY EXPERTISE"
        title="Technical Proficiency"
        subtitle="Skills across frontend + backend development."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="space-y-5">
              {PROFILE.skillBars.map((s) => (
                <SkillBar key={s.label} label={s.label} value={s.value} />
              ))}
            </div>
          </Card>

          <div className="grid gap-4">
            <Card>
              <p className="text-xs tracking-[0.22em] text-slate-300">
                FRONTEND
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["HTML", "CSS", "JavaScript", "React", "Tailwind"].map((x) => (
                  <Pill key={x}>{x}</Pill>
                ))}
              </div>
            </Card>

            <Card>
              <p className="text-xs tracking-[0.22em] text-slate-300">
                BACKEND
              </p>
              <p className="mt-3 text-sm text-slate-200/90">
                PHP + Laravel backend with database driven applications.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {["PHP", "Laravel", "MySQL", "REST APIs"].map((x) => (
                  <Pill key={x}>{x}</Pill>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* SERVICES */}
      <Section
        id="services"
        eyebrow="WHAT I OFFER"
        title="My Services"
        subtitle="End-to-end web development services."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {PROFILE.services.map((s) => (
            <Card key={s.title}>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/25 bg-emerald-400/10 text-lg">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-200/85">{s.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
<Section
  id="projects"
  eyebrow="MY PORTFOLIO"
  title="Featured Projects"
  subtitle="Live projects deployed on Vercel."
>
  <div className="grid gap-6 md:grid-cols-2">
    {PROFILE.projects.map((p) => (
      <article
        key={p.title}
        className="group overflow-hidden rounded-3xl border border-white/10 bg-white/6 backdrop-blur-sm shadow-[0_18px_70px_rgba(0,0,0,0.35)] transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/10"
      >
        {/* IMAGE TOP */}
        <div className="relative h-56 md:h-60 w-full overflow-hidden">
          <img
            src={p.image}
            alt={`${p.title} preview`}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          />
          {/* subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

          {/* LIVE badge */}
          <div className="absolute left-4 top-4 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
            Live
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-6 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-200/85">{p.desc}</p>
            </div>
          </div>

          {/* TAGS */}
          <div className="mt-4 flex flex-wrap gap-2">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/12 bg-slate-950/20 px-3 py-1 text-xs text-slate-100/90"
              >
                {t}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:opacity-90"
            >
              View Live Project
            </a>

            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
            >
              Open
            </a>
          </div>
        </div>
      </article>
    ))}
  </div>
</Section>


      {/* CONTACT */}
      <Section
        id="contact"
        eyebrow="GET IN TOUCH"
        title="Let’s Connect"
        subtitle="INFO."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { label: "Email Address", value: PROFILE.contact.email },
            { label: "Phone Number", value: PROFILE.contact.phone },
            { label: "Location", value: PROFILE.contact.location },
            { label: "Availability", value: PROFILE.contact.availability },
          ].map((c) => (
            <div
              key={c.label}
              data-reveal
              className="reveal opacity-0 rounded-2xl border border-white/10 bg-white/6 p-5 transition hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/10"
            >
              <p className="text-xs tracking-[0.22em] text-slate-300">
                {c.label}
              </p>
              <p className="mt-2 text-sm text-slate-100/90">{c.value}</p>
            </div>
          ))}
        </div>
      </Section>

      <footer className="border-t border-white/10 py-8">
        <Container>
          <p className="text-sm text-slate-300">
            © {new Date().getFullYear()} {PROFILE.name} — Full Stack Web Developer
          </p>
        </Container>
      </footer>



      {/* FOOTER */}
<footer className="relative border-t border-white/10 bg-slate-900/60 backdrop-blur">
  <div className="mx-auto max-w-6xl px-4 py-10">
    <div className="grid gap-8 md:grid-cols-3">

      {/* Left */}
      <div>
        <h3 className="text-lg font-semibold tracking-tight">
          Huzaifa <span className="text-emerald-400">.dev</span>
        </h3>
        <p className="mt-2 text-sm text-slate-300">
          Full Stack Web Developer <br />
          React • PHP • Laravel • MySQL
        </p>
      </div>

      {/* Middle */}
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          Quick Links
        </h4>
        <ul className="mt-3 space-y-2 text-sm">
          <li><a href="#home" className="hover:text-emerald-400">Home</a></li>
          <li><a href="#about" className="hover:text-emerald-400">About</a></li>
          <li><a href="#projects" className="hover:text-emerald-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-emerald-400">Contact</a></li>
        </ul>
      </div>

      {/* Right */}
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
          Built With
        </h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {["React", "Tailwind", "PHP", "Laravel", "MySQL"].map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

    </div>

    {/* Bottom bar */}
    <div className="mt-8 border-t border-white/10 pt-4 text-center text-xs text-slate-400">
      © {new Date().getFullYear()} Huzaifa. All rights reserved.
    </div>
  </div>
</footer>

    </div>
  );
}
