import { Section, Card } from "./UI";
import { SERVICES } from "../data/portfolioData";
import * as LucideIcons from "lucide-react";
import { Check } from "lucide-react";

export default function Services({ onServiceSelect }) {
  return (
    <Section
      id="services"
      eyebrow="WHAT I OFFER"
      title="My Services"
      subtitle="End-to-end full stack development, customized analytical dashboards, and ERP platforms to scale your business operations."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s) => {
          // Resolve Lucide Icon dynamically
          const IconComponent = LucideIcons[s.icon] || LucideIcons.Globe;

          return (
            <Card key={s.id} className="flex flex-col h-full justify-between p-6">
              <div className="space-y-4">
                {/* Icon & Title */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-[0_0_12px_rgba(52,211,153,0.15)] group-hover:scale-105 group-hover:bg-emerald-500/20 transition-all duration-300">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors duration-200">
                    {s.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  {s.desc}
                </p>

                {/* Features Checklist */}
                <ul className="space-y-2 pt-2">
                  {s.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-400">
                      <span className="mt-0.5 rounded bg-emerald-500/10 p-0.5 text-emerald-400 border border-emerald-500/20 shrink-0">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  onClick={() => onServiceSelect(`Inquiry about ${s.title}`)}
                  className="w-full inline-flex items-center justify-center rounded-xl border border-white/10 bg-slate-900/40 py-2.5 text-xs font-semibold text-slate-300 transition-all duration-300 hover:bg-emerald-500 hover:border-emerald-500 hover:text-slate-950 cursor-pointer"
                >
                  Get Started
                </button>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
