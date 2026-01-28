"use client";

import { FileText, Wallet, LineChart, Link2 } from "lucide-react";

export function FinancialManagementSection() {
  const features = [
    { label: "Keyword and competitor tracking", icon: FileText },
    { label: "Advanced noise filtering", icon: Wallet },
    { label: "Real-time alerts", icon: LineChart },
    { label: "Quick summaries", icon: Link2 },
    { label: "Team notes and tags", icon: FileText },
    { label: "Shared inbox for follow-ups", icon: Wallet },
    { label: "Exports and integrations", icon: LineChart },
    { label: "Searchable history", icon: Link2 },
  ];

  return (
    <section className="py-20 md:py-28 px-4 max-w-7xl mx-auto bg-gray-50">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-muted-foreground font-semibold text-sm mb-6 uppercase tracking-widest">
            Key features
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            What you{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              get
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Find high-intent posts early. Avoid endless scrolling. Understand
            context, not just links. Reply while conversations are still active.
            Keep an eye on competitors automatically.
          </p>

          <a
            href="https://calendly.com/adarsh-ilu/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition-colors mb-8">
              Try Community Tracker free
            </button>
          </a>

          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-4 border border-gray-200 rounded-xl hover:border-gray-300 transition-colors bg-white"
              >
                <div className="flex items-center gap-3">
                  <feature.icon className="w-5 h-5 text-muted-foreground" />
                  <p className="font-medium text-foreground text-sm">
                    {feature.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
          <img
            src="/images/project_budget.jpg"
            alt="Financial Management Dashboard"
            className="rounded-xl w-full"
          />
        </div>
      </div>
    </section>
  );
}
