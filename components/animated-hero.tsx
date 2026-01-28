"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function AnimatedHero() {
  const highlights = [
    "Track Reddit, Discord, Slack & more",
    "AI-powered noise filtering",
    "Real-time alerts",
  ];

  return (
    <section className="relative bg-white pt-24 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-full text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-muted-foreground">
                Now tracking 50+ communities
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
              Never miss conversations{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                that matter
              </span>
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              Track keywords, brand mentions, and competitors across Reddit,
              Slack, Discord, X, and more — all in one place.
            </p>

            {/* Highlights */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href="https://calendly.com/adarsh-ilu/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="px-6 py-5 text-sm font-semibold rounded-full bg-black text-white hover:bg-gray-800 transition-colors">
                  Start tracking for free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>

              <a
                href="https://calendly.com/adarsh-ilu/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="px-6 py-5 text-sm rounded-full border border-gray-200 text-foreground hover:bg-gray-50 transition-colors"
                >
                  See live demo
                </Button>
              </a>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-3 md:p-4 shadow-2xl border border-gray-200">
              <img
                src="/images/community-pulse.png"
                alt="CommunityTracker — Community Pulse Dashboard"
                className="w-full h-auto rounded-xl"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-xl shadow-lg border border-gray-100 p-4 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-lg font-bold">400</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Total mentions
                  </p>
                  <p className="text-xs text-green-600 font-medium">+12.5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
