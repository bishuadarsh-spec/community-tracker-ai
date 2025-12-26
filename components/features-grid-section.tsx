"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Moon, Sun, Droplet, Speaker } from "lucide-react";

export function FeaturesGridSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const integrationsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });


  // Row 1: Move left to right (0% to 15%)
  
  // Integration icons with their colors - Split into two rows
  const integrationsRow1 = [
    { name: "Google Meet", color: "bg-blue-400", emoji: "📹" },
    { name: "Dash", color: "bg-purple-500", emoji: "📊" },
    { name: "DaVinci", color: "bg-pink-400", emoji: "🎬" },
    { name: "Linear", color: "bg-blue-600", emoji: "📝" },
    { name: "Figma", color: "bg-yellow-500", emoji: "🎨" },
    { name: "Trello", color: "bg-blue-300", emoji: "📋" },
    { name: "Asana", color: "bg-pink-600", emoji: "✅" },
    { name: "Calendar", color: "bg-red-400", emoji: "📅" },
  ];

  const integrationsRow2 = [
    { name: "Slack", color: "bg-orange-400", emoji: "💬" },
    { name: "Notion", color: "bg-purple-400", emoji: "🧠" },
    { name: "Zapier", color: "bg-purple-600", emoji: "⚡" },
    { name: "GitHub", color: "bg-gray-800", emoji: "🐙" },
    { name: "Stripe", color: "bg-blue-500", emoji: "💳" },
    { name: "Google Drive", color: "bg-green-500", emoji: "📁" },
    { name: "Dropbox", color: "bg-blue-700", emoji: "☁️" },
  ];

  const brandColors = [
    "#8B5A3C",
    "#9CA3AF",
    "#FBBF24",
    "#F97316",
    "#22C55E",
    "#3B82F6",
    "#6366F1",
    "#EC4899",
    "#10B981",
    "#EF4444",  
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

const featureBottomItems = [
  {
    src: "/images/ai.png",
    alt: "Feature 1",
  },
  {
    src: "/images/lead.png",
    alt: "Feature 2",
  },
  {
    src: "/images/full.png",
    alt: "Feature 3",
  },
];


  return (
    <section
      ref={containerRef}
      id="features"
      className="py-12 md:py-10 lg:py-20 px-4 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 md:mb-12 lg:mb-16"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight px-4">
          See what matters, instantly
        </h2>
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">Know which communities bring real opportunities. Spot buying intent, problems, and comparisons fast. Follow discussions as they grow. Saved views: Leads • Competitors • Support • Content ideas.</p>
      </motion.div>

      {/* Top Two Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-12">
        {/* Left Card - Personalization */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
        >
         <img
            src="/images/2nd.png"
            alt="Personalization Demo"
            className="w-full h-auto rounded-2xl"
          />
        </motion.div>

        {/* Right Card - Integrations with Scroll Animation */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all overflow-hidden"
        >
       <img
            src="/images/monitors.png"
            alt="Integrations Demo"
            className="w-full h-auto rounded-2xl"
          />

       
        </motion.div>
      </div>

    {/* Bottom Three Feature Cards */}
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
>
  {featureBottomItems.map((item, index) => (
    <motion.div
      key={index}
      variants={itemVariants}
      className="bg-white rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all"
      whileHover={{ y: -5 }}
    >
      <img
        src={item.src}
        alt={item.alt}
        className="w-full h-auto rounded-2xl"
      />
    </motion.div>
  ))}
</motion.div>

    </section>
  );
}
