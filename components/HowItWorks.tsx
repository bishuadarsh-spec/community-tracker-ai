"use client";

import { useMemo, useState } from "react";
import { Bell, Search, Users } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Add keywords",
    description: "Choose the topics, problems, and names you want to track.",
    icon: Search,
    image: "/new1.png",
    accent: "from-blue-500/10 via-indigo-500/10 to-cyan-500/10",
  },
  {
    id: "02",
    title: "Pick communities",
    description: "Select where you want to listen — Reddit, Slack, Discord, X, and more.",
    icon: Users,
    image: "/new2.png",
    accent: "from-emerald-500/10 via-teal-500/10 to-sky-500/10",
  },
  {
    id: "03",
    title: "Get alerts",
    description: "Receive only important posts in your dashboard, email, or Slack.",
    icon: Bell,
    image: "/new3.png",
    accent: "from-amber-500/10 via-orange-500/10 to-pink-500/10",
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const active = useMemo(() => steps[activeStep], [activeStep]);

  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10 md:mb-14">
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

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-14 items-start">
          {/* Visual */}
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-white via-white to-slate-50 shadow-xl">
            <div className={`absolute inset-0 blur-3xl opacity-70 bg-gradient-to-br ${active.accent}`} />

            <div className="relative p-6 sm:p-10 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-black text-white text-xs px-3 py-1 font-semibold shadow-lg">
                  Step {active.id}
                </span>
                <span className="text-sm text-muted-foreground">{active.title}</span>
              </div>

              <div className="overflow-hidden rounded-2xl bg-white/70 border border-border/70 shadow-lg">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-[320px] md:h-[420px] object-contain bg-gradient-to-b from-white to-slate-50"
                />
              </div>

              <div className="grid grid-cols-3 gap-3 text-sm text-muted-foreground">
                {steps.map((step, index) => (
                  <button
                    key={step.id}
                    onClick={() => setActiveStep(index)}
                    className={`rounded-2xl border px-3 py-2 text-left transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black/30 ${
                      activeStep === index
                        ? "border-black text-foreground bg-white shadow-sm"
                        : "border-border hover:border-foreground/40"
                    }`}
                    aria-pressed={activeStep === index}
                  >
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">Step {step.id}</p>
                    <p className="font-semibold leading-tight">{step.title}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;

              return (
                <button
                  key={step.id}
                  onMouseEnter={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                  className={`w-full text-left group rounded-3xl border bg-white transition-all duration-200 px-5 py-6 sm:px-6 sm:py-7 flex items-start gap-4 ${
                    isActive
                      ? "border-foreground/70 shadow-lg shadow-black/5"
                      : "border-border hover:border-foreground/40 hover:-translate-y-[2px]"
                  }`}
                >
                  <div
                    className={`mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border text-foreground transition-colors ${
                      isActive
                        ? "border-foreground bg-foreground text-white"
                        : "border-border bg-slate-50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition-colors ${
                          isActive
                            ? "border-foreground bg-foreground text-white"
                            : "border-border bg-white text-foreground"
                        }`}
                        aria-hidden
                      >
                        {step.id}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
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
