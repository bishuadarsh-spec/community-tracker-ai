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
        "We used to find important posts too late. Now we see them while they’re still active.",
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
          “We used to find important posts too late. Now we see them while they’re still active.”
        </h2>
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
                  <AvatarFallback className="bg-muted font-semibold">
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
