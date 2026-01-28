"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="w-full py-20 md:py-28 px-4 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
          Join the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
            conversation
          </span>{" "}
          early
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Start tracking today and see what people are already talking about.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/adarsh-ilu/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-full font-semibold transition-colors">
              Start tracking for free
            </Button>
          </a>
          <Link href="#features">
            <Button
              variant="outline"
              className="border-2 border-gray-300 text-foreground hover:border-black px-8 py-6 text-lg rounded-full font-semibold transition-colors"
            >
              See live demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
