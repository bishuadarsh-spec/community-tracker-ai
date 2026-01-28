"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TestimonialsAnimated() {
  const testimonials = [
    {
      quote:
        "We used to find important posts too late. Now we see them while they're still active.",
      author: "Growth Marketer",
      role: "",
      initials: "GM",
    },
    {
      quote:
        "I only want the posts that matter. This filters everything else out.",
      author: "Community Manager",
      role: "",
      initials: "CM",
    },
    {
      quote: "It saves us hours every week.",
      author: "Agency Lead",
      role: "",
      initials: "AL",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight max-w-4xl mx-auto">
            "We used to find important posts too late.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              Now we see them while they're still active.
            </span>
            "
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="bg-white border border-gray-200 font-semibold text-foreground">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{t.author}</p>
                  {t.role && (
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
