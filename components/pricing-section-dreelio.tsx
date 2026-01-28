"use client";

import { Check } from "lucide-react";

export function PricingSectionDreelio() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "29",
      features: ["20 keywords", "5 communities", "Daily alerts"],
      popular: false,
    },
    {
      name: "Pro",
      price: "99",
      features: [
        "100 keywords",
        "Unlimited communities",
        "Real-time alerts",
        "Slack integration",
        "Team access",
      ],
      popular: true,
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              Pricing
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">Cancel anytime.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 border-2 transition-colors ${
                plan.popular
                  ? "border-black"
                  : "border-gray-100 hover:border-gray-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Popular
                </div>
              )}

              <h3 className="text-xl font-semibold text-foreground mb-4">
                {plan.name}
              </h3>

              <div className="flex items-end gap-1 mb-6">
                <span className="text-5xl font-bold text-foreground">
                  ${plan.price}
                </span>
                <span className="text-muted-foreground text-lg">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <Check className="w-5 h-5 text-foreground" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full font-semibold transition-colors ${
                  plan.popular
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-gray-100 text-foreground hover:bg-gray-200"
                }`}
              >
                {plan.name === "Starter" ? "Get started" : "Start free"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
