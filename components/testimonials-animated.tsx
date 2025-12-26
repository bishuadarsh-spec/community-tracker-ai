"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function TestimonialsAnimated() {
  const ref = useRef(null);
  const trackRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      quote:
        "We finally see Reddit, Discord, and X mentions before they blow up. The AI summaries save me hours every week.",
      author: "Leah Daniel",
      role: "Community Manager",
      initials: "LD",
    },
    {
      quote:
        "I get Slack alerts when our brand is mentioned on Hacker News or niche forums. No more digging through tabs.",
      author: "Jaylen Moss",
      role: "Growth Marketer",
      initials: "JM",
    },
    {
      quote:
        "The noise filters are great. I only get alerted when competitors or important keywords show up.",
      author: "Amos Chen",
      role: "Product Lead",
      initials: "AC",
    },
    {
      quote:
        "One dashboard for Reddit, GitHub, and Slack communities makes it easy to respond quickly and win trust.",
      author: "Sofia Martinez",
      role: "Agency Lead",
      initials: "SM",
    },
    {
      quote:
        "Real-time alerts help us jump on support issues before they spread. It keeps our users happy.",
      author: "Liam O'Connor",
      role: "Customer Success Manager",
      initials: "LO",
    },
  ];

  // ⭐ GSAP infinite marquee effect
  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;

    gsap.to(track, {
      x: -totalWidth,
      duration: 30,
      ease: "none",
      repeat: -1,
    });
  }, []);

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 px-4 max-w-7xl mx-auto relative"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Trusted by teams who can&apos;t afford to miss a mention
        </h2>
        <div className="flex justify-center">
          <Avatar className="mr-3">
            <AvatarFallback className="bg-gray-300">MP</AvatarFallback>
          </Avatar>
        </div>
        <p className="mt-2 text-sm text-muted-foreground">
          Martha Punla · Community Lead
        </p>
      </motion.div>

      {/* Fade Mask (Left & Right) */}
      <div className="pointer-events-none absolute inset-0 z-20">
        <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-white via-white/80 to-transparent" />
        <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-white via-white/80 to-transparent" />
      </div>

      {/* Marquee Track */}
      <div className="overflow-hidden w-full">
        <div ref={trackRef} className="flex gap-6 w-max">
          {/* Duplicate for seamless loop */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <motion.div
              key={i}
              className="bg-white w-[350px] shrink-0 p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all"
            >
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-4">
                <Avatar>
                  <AvatarFallback className="bg-blue-200 font-semibold">
                    {t.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{t.author}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
