import { Section, Card } from "./UI";
import { EXPERIENCE } from "../data/portfolioData";
import { Search, PenTool, Code, CheckSquare, Rocket, HeartHandshake, Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const processIcons = [
    Search,          // 1. Requirement gathering
    PenTool,         // 2. UI design
    Code,            // 3. Development
    CheckSquare,     // 4. Testing
    Rocket,          // 5. Deployment
    HeartHandshake   // 6. Support
  ];

  return (
    <Section
      id="experience"
      eyebrow="MY TRACK RECORD"
      title="Experience & Process"
      subtitle="A timeline of my professional roles alongside the systematic development process I follow to deliver high-quality code."
    >
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Timeline Column */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <Briefcase className="text-emerald-400" size={20} /> Work History
          </h3>

          <div className="space-y-4">
            {EXPERIENCE.timeline.map((job, idx) => (
              <Card key={idx} className="p-6">
                <div className="flex justify-between items-start gap-4 flex-wrap">
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors duration-250">
                      {job.role}
                    </h4>
                    <p className="text-xs text-emerald-400 font-mono mt-0.5">{job.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/20 px-3 py-1 text-[10px] font-mono text-slate-300">
                    <Calendar size={10} />
                    {job.period}
                  </div>
                </div>
                <p className="mt-3 text-xs md:text-sm text-slate-455 leading-relaxed">
                  {job.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Delivery Detail Column */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> Freelance & Project Highlights
          </h3>

          <Card className="p-6 h-full space-y-4 justify-between flex flex-col">
            <div className="space-y-3">
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                As a freelance developer, I manage the entire life cycle of application delivery.
                I maintain communication lines with stakeholders, establish specifications, map out database models, and choose optimal hosting services.
              </p>
              <h5 className="text-sm font-bold text-slate-200 pt-2">Key Highlights:</h5>
              <ul className="space-y-2">
                <li className="flex items-start gap-2.5 text-xs text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5" />
                  <span>Coded lightweight state stores for quick e-commerce loading speeds.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5" />
                  <span>Structured robust Mongo/MySQL tables index configurations to speed up queries.</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs text-slate-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mt-1.5" />
                  <span>Configured secure JWT tokens with automatic token refreshing.</span>
                </li>
              </ul>
            </div>
            <div className="border-t border-white/5 pt-4">
              <p className="text-[11px] font-mono text-slate-400">
                Primary stack: React • Tailwind • Node.js • Express • MongoDB • Laravel
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Process Section */}
      <div className="mt-16 border-t border-white/5 pt-12">
        <h3 className="text-2xl font-bold text-white text-center mb-10 tracking-tight">
          How I Work (My Process)
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EXPERIENCE.process.map((step, idx) => {
            const Icon = processIcons[idx] || Search;
            return (
              <div
                key={step.step}
                data-reveal
                className="reveal opacity-0 group relative rounded-2xl border border-white/10 bg-slate-900/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-emerald-500/20 hover:bg-slate-900/50"
              >
                {/* Step indicator */}
                <div className="absolute top-4 right-6 text-3xl font-black font-mono text-emerald-400/10 group-hover:text-emerald-400/20 transition-colors duration-300">
                  {`0${step.step}`}
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4 transition-all duration-300 group-hover:scale-105 group-hover:bg-emerald-500/20">
                  <Icon size={18} />
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors duration-250">
                  {step.title}
                </h4>

                <p className="mt-2 text-xs md:text-sm text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
