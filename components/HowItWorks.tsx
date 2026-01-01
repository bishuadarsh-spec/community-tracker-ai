"use client";

import { useMemo, useState } from "react";
import { Bell, Search, Users } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Select communities",
    description: "Pick the forums, chats, and social platforms you want to monitor.",
    icon: Users,
    image:
      "https://slkkbt56njcjju1f.public.blob.vercel-storage.com/Community%20Tracker%20Assets/Screenshot%202026-01-01%20at%203.48.31%E2%80%AFPM.png",
    accent: "from-emerald-500/10 via-teal-500/10 to-sky-500/10",
  },
  {
    id: "02",
    title: "Select keywords",
    description: "Add the product names, competitors, and topics you care about.",
    icon: Search,
    image:
      "https://slkkbt56njcjju1f.public.blob.vercel-storage.com/Community%20Tracker%20Assets/Screenshot%202026-01-01%20at%203.59.38%E2%80%AFPM.png",
    accent: "from-blue-500/10 via-indigo-500/10 to-cyan-500/10",
  },
  {
    id: "03",
    title: "Active mentions",
    description: "Track live conversations and surface the most important mentions automatically.",
    icon: Bell,
    image:
      "https://slkkbt56njcjju1f.public.blob.vercel-storage.com/Community%20Tracker%20Assets/Screenshot%202026-01-01%20at%203.48.59%E2%80%AFPM.png",
    accent: "from-amber-500/10 via-orange-500/10 to-pink-500/10",
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const active = useMemo(() => steps[activeStep], [activeStep]);

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            How it works
          </h2>
          <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Move from setup to signal in three quick steps without repeating yourself.
          </p>
        </header>

        <div className="relative overflow-hidden rounded-[32px] border border-border/70 bg-gradient-to-br from-slate-50 via-white to-white shadow-xl">
          <div className={`absolute inset-0 opacity-60 blur-3xl bg-gradient-to-br ${active.accent}`} aria-hidden />

          <div className="relative grid lg:grid-cols-[1.05fr_1fr] gap-8 md:gap-12 p-6 md:p-10">
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black text-white shadow-lg">
                  {active.id}
                </span>
                <span className="rounded-full border border-border/80 bg-white/80 px-3 py-1 text-xs font-medium shadow-sm backdrop-blur">
                  {active.title}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold text-foreground leading-tight">
                See exactly what happens in each step
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Hover or click any step to preview the experience. The content updates in place so you never have to piece together duplicate cards and screenshots.
              </p>

              <div className="space-y-3">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const isActive = index === activeStep;

                  return (
                    <button
                      key={step.id}
                      onMouseEnter={() => setActiveStep(index)}
                      onFocus={() => setActiveStep(index)}
                      onClick={() => setActiveStep(index)}
                      className={`w-full text-left rounded-2xl border transition-all duration-200 px-4 py-4 flex gap-3 items-start ${
                        isActive
                          ? "bg-white border-foreground/70 shadow-md shadow-black/5"
                          : "bg-white/70 border-border hover:border-foreground/40 hover:-translate-y-[1px]"
                      }`}
                    >
                      <span
                        className={`mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-xl border text-sm font-semibold ${
                          isActive
                            ? "bg-foreground text-white border-foreground"
                            : "bg-slate-50 text-foreground border-border"
                        }`}
                        aria-hidden
                      >
                        {step.id}
                      </span>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-2 text-foreground">
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 border border-border/70">
                            <Icon className="h-4 w-4" />
                          </span>
                          <p className="text-base md:text-lg font-semibold">{step.title}</p>
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div
                className="absolute inset-1 md:inset-3 rounded-[32px] bg-gradient-to-br from-white via-slate-100 to-slate-200 opacity-80 blur-3xl"
                aria-hidden
              />

              <div className="relative w-full max-w-3xl overflow-hidden rounded-[28px] border border-white/70 bg-white shadow-[0_30px_120px_rgba(15,23,42,0.16)]">
                <div className="absolute inset-px rounded-[28px] bg-gradient-to-br from-white via-white to-transparent opacity-70" aria-hidden />

                <div className="relative p-4 sm:p-6 space-y-5 flex flex-col items-center text-center">
                  <div className="relative w-full max-w-2xl rounded-[24px] bg-slate-950/5 border border-border/70 shadow-inner overflow-hidden">
                    <div
                      className={`absolute inset-6 rounded-[24px] bg-gradient-to-br from-white/80 via-white to-white shadow-[0_24px_80px_rgba(0,0,0,0.06)] ${active.accent}`}
                      aria-hidden
                    />

                    <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-[22px] overflow-hidden">
                      {steps.map((step, index) => (
                        <img
                          key={step.id}
                          src={step.image}
                          alt={step.title}
                          className={`absolute inset-0 h-full w-full object-contain p-6 sm:p-8 transition-all duration-500 ease-in-out ${
                            activeStep === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="w-full text-center space-y-3">
                    <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 border border-border/60 text-xs font-semibold text-muted-foreground">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-xl bg-white border border-border text-foreground text-sm font-semibold">
                        {active.id}
                      </span>
                      Active step
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-semibold text-foreground">{active.title}</p>
                      <p className="text-sm md:text-base text-muted-foreground max-w-2xl">{active.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
