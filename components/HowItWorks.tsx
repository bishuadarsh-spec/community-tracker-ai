"use client";

import { useState } from 'react';
import { Bell, Search, Users } from 'lucide-react';

type Step = {
  title: string;
  description: string;
  image: string;
  icon: typeof Search;
  accent: string;
  number: string;
};

const steps: Step[] = [
  {
    title: "Add keywords",
    description: "Choose the topics, problems, and names you want to track.",
    image: "/new1.png",
    icon: Search,
    accent: "from-indigo-500/15 via-indigo-500/5 to-transparent",
    number: "01",
  },
  {
    title: "Pick communities",
    description: "Select where you want to listen — Reddit, Slack, Discord, X, and more.",
    image: "/new2.png",
    icon: Users,
    accent: "from-emerald-500/15 via-emerald-500/5 to-transparent",
    number: "02",
  },
  {
    title: "Get alerts",
    description: "Receive only important posts in your dashboard, email, or Slack.",
    image: "/new3.png",
    icon: Bell,
    accent: "from-amber-500/15 via-amber-500/5 to-transparent",
    number: "03",
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-white py-16 md:py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="text-sm md:text-base font-semibold text-slate-500 uppercase tracking-[0.2em] mb-3">
            Guided setup
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            How it works
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg text-slate-600">
            Go from idea to alerts in minutes with a simple three-step flow.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-10 items-start">
          <div className="space-y-4 md:space-y-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;

              return (
                <button
                  key={step.title}
                  type="button"
                  onMouseEnter={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                  onClick={() => setActiveStep(index)}
                  className={`relative w-full text-left overflow-hidden rounded-3xl border transition-all duration-200 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900 ${
                    isActive
                      ? "border-slate-900 bg-slate-900 text-white shadow-xl"
                      : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-slate-300"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.accent} pointer-events-none transition-opacity duration-200 ${
                      isActive ? "opacity-80" : "opacity-0"
                    }`}
                  />

                  <div className="relative flex flex-col md:flex-row gap-4 md:gap-6 p-5 md:p-6 lg:p-7">
                    <div
                      className={`flex-shrink-0 h-14 w-14 md:h-16 md:w-16 rounded-2xl flex items-center justify-center text-slate-900 shadow-sm transition-all ${
                        isActive ? "bg-white/90" : "bg-slate-100"
                      }`}
                    >
                      <Icon className={`w-7 h-7 md:w-8 md:h-8 ${isActive ? "text-slate-900" : "text-slate-700"}`} />
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <span
                          className={`inline-flex items-center justify-center rounded-full text-xs font-semibold px-3 py-1 tracking-wide ${
                            isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {step.number}
                        </span>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-semibold hidden md:block">
                          Step {index + 1}
                        </p>
                      </div>
                      <h3
                        className={`text-2xl md:text-3xl font-semibold leading-tight ${
                          isActive ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`text-base md:text-lg leading-relaxed ${
                          isActive ? "text-white/80" : "text-slate-600"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="relative w-full">
            <div className="sticky top-8 rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
              <div className="relative p-2 sm:p-4 lg:p-6 flex items-center justify-center">
                <img
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full h-full max-h-[520px] object-contain rounded-2xl"
                />
              </div>
            </div>
            <div className="mt-4 text-sm text-slate-500 text-center">
              Hover or tap on a step to preview what you\'ll see.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
