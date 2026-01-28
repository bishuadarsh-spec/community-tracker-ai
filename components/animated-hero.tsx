"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AnimatedHero() {
  return (
    <section className="relative bg-white pt-28 pb-16 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
          Never miss conversations{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
            that matter
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Track keywords, brand mentions, competitors, and category discussions
          across Reddit, Slack, Discord, X, GitHub, and more — all in one place.
          <br />
          <span className="font-medium text-foreground">Only relevant conversations. No noise.</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="https://calendly.com/adarsh-ilu/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="px-8 py-6 text-base font-bold rounded-full bg-black text-white shadow-md hover:bg-gray-800 transition-colors">
              Start tracking for free
            </Button>
          </a>

          <Link
            href="https://calendly.com/adarsh-ilu/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="px-8 py-6 text-base rounded-full border-2 border-gray-300 text-gray-700 hover:border-black hover:text-black transition-colors"
            >
              See live demo
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-16 max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          <img
            src="https://slkkbt56njcjju1f.public.blob.vercel-storage.com/Community%20Tracker%20Assets/dashboard.png"
            alt="Dashboard"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
