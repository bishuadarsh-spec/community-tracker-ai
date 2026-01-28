"use client";

import { useState } from "react";
import { Bell, Search, Users, ArrowRight } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Select communities",
    description:
      "Pick the forums, chats, and social platforms you want to monitor.",
    icon: Users,
    image:
      "https://slkkbt56njcjju1f.public.blob.vercel-storage.com/Community%20Tracker%20Assets/Screenshot%202026-01-01%20at%203.48.31%E2%80%AFPM.png",
  },
  {
    id: "02",
    title: "Add keywords",
    description:
      "Add the product names, competitors, and topics you care about.",
    icon: Search,
    image:
      "https://slkkbt56njcjju1f.public.blob.vercel-storage.com/Community%20Tracker%20Assets/Screenshot%202026-01-01%20at%203.59.38%E2%80%AFPM.png",
  },
  {
    id: "03",
    title: "Get notified",
    description:
      "Track live conversations and surface the most important mentions automatically.",
    icon: Bell,
    image:
      "https://slkkbt56njcjju1f.public.blob.vercel-storage.com/Community%20Tracker%20Assets/Screenshot%202026-01-01%20at%203.48.59%E2%80%AFPM.png",
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-4">
            Start tracking in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              3 steps
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Set up once. Get relevant conversations delivered to you.
          </p>
        </div>

        {/* Steps Navigation - Horizontal Pills */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-full p-1.5 border border-gray-200 shadow-sm">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = index === activeStep;

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? "bg-black text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{step.title}</span>
                  <span className="sm:hidden">{step.id}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - Text Content */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm font-bold">
                  {steps[activeStep].id}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">
                  Step {activeStep + 1} of {steps.length}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {steps[activeStep].title}
              </h3>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {steps[activeStep].description}
              </p>

              {/* Progress Dots */}
              <div className="flex items-center gap-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeStep
                        ? "w-8 bg-black"
                        : "w-2 bg-gray-200 hover:bg-gray-300"
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right - Image */}
            <div className="bg-gray-50 p-6 md:p-8 lg:p-10 flex items-center justify-center min-h-[300px] lg:min-h-[450px]">
              <div className="relative w-full">
                {steps.map((step, index) => (
                  <img
                    key={step.id}
                    src={step.image}
                    alt={step.title}
                    className={`w-full h-auto rounded-xl shadow-2xl transition-all duration-500 ${
                      activeStep === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 absolute inset-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <a
            href="https://calendly.com/adarsh-ilu/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            Get started free
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
