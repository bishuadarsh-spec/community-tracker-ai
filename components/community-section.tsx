"use client";

import { ArrowRight } from "lucide-react";

export function CommunitySection() {
  const communities = [
    {
      platform: "Who it's for",
      followers: "Marketers • Founders • Agencies",
      description:
        "Marketers: find demand and trends • Founders: monitor brand mentions • Agencies: track multiple clients",
      buttonText: "Start tracking for free",
      link: "https://calendly.com/adarsh-ilu/30min",
    },
    {
      platform: "Built for teams",
      followers: "Community • Product • Support",
      description:
        "Community managers: stay present • Product teams: collect feedback • Support teams: catch issues early",
      buttonText: "See live demo",
      link: "https://calendly.com/adarsh-ilu/30min",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 max-w-6xl mx-auto bg-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
          Who it's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
            for
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {communities.map((community, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-colors"
          >
            <div className="mb-6">
              <p className="text-sm font-semibold text-muted-foreground mb-2">
                {community.followers}
              </p>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {community.platform}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {community.description}
              </p>
            </div>

            <a
              href={community.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-foreground font-semibold hover:gap-3 transition-all"
            >
              {community.buttonText}
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
