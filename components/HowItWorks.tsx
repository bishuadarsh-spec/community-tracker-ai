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
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-semibold mb-3">
            Walkthrough
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            How it works
          </h2>
          <p className="mt-3 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Move from setup to signal in three quick steps.
          </p>
        </header>

        <div className="space-y-12">
          <div className="relative max-w-4xl mx-auto">
            <div className={`absolute inset-0 blur-3xl opacity-80 bg-gradient-to-br ${active.accent}`} />

            <div className="relative flex flex-col items-center gap-6">
              <div className="flex items-center gap-3 bg-white/80 border border-border/60 rounded-full px-4 py-2 shadow-sm backdrop-blur">
                <span className="inline-flex items-center rounded-full bg-black text-white text-xs px-3 py-1 font-semibold shadow-lg">
                  Step {active.id}
                </span>
                <span className="text-sm text-muted-foreground font-medium">{active.title}</span>
              </div>

              <div className="relative w-full max-w-4xl mx-auto">
                <div className="relative aspect-[16/9] flex items-center justify-center">
                  {steps.map((step, index) => (
                    <img
                      key={step.id}
                      src={step.image}
                      alt={step.title}
                      className={`absolute inset-0 w-full h-full object-contain transition-all duration-500 ease-in-out ${
                        activeStep === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                      }`}
                      style={{ filter: "drop-shadow(0 24px 60px rgba(0,0,0,0.08))" }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {steps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/30 ${
                      activeStep === index
                        ? "border-black bg-black text-white shadow-md"
                        : "border-border bg-white text-muted-foreground hover:border-foreground/40"
                    }`}
                    aria-pressed={activeStep === index}
                  >
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-current">
                      {step.id}
                    </span>
                    {step.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;

              return (
                <button
                  key={step.id}
                  onMouseEnter={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                  className={`text-left group rounded-3xl border bg-white transition-all duration-200 px-5 py-6 flex flex-col gap-3 h-full ${
                    isActive
                      ? "border-foreground/70 shadow-lg shadow-black/5"
                      : "border-border hover:border-foreground/40 hover:-translate-y-[2px]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition-colors ${
                        isActive
                          ? "border-foreground bg-foreground text-white"
                          : "border-border bg-slate-50 text-foreground"
                      }`}
                      aria-hidden
                    >
                      {step.id}
                    </span>
                    <div className="flex items-center gap-2 text-foreground">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50 border border-border/80">
                        <Icon className="w-5 h-5" />
                      </span>
                      <h3 className="text-lg md:text-xl font-semibold">{step.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
