"use client";

import type React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqData = [
  {
    question: "What does CommunityTracker do?",
    answer:
      "It monitors online communities and alerts you when important conversations happen.",
  },
  {
    question: "Which platforms are supported?",
    answer:
      "Reddit, Hacker News, Slack, Discord, X, GitHub, Product Hunt, Stack Overflow, and niche forums.",
  },
  {
    question: "Will I get too many alerts?",
    answer: "No. You control keywords, filters, and alert frequency.",
  },
  {
    question: "Can alerts go to Slack or email?",
    answer: "Yes.",
  },
  {
    question: "Can teams use it together?",
    answer: "Yes. Team features are included in Pro.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onToggle();
  };

  return (
    <div
      className="w-full bg-gray-50 rounded-xl border border-gray-100 overflow-hidden cursor-pointer hover:border-gray-200 transition-colors"
      onClick={handleClick}
    >
      <div className="w-full px-6 py-5 flex justify-between items-center gap-4">
        <div className="flex-1 text-foreground font-medium">{question}</div>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5">
          <p className="text-muted-foreground">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 md:py-28 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              FAQs
            </span>
          </h2>
          <p className="text-muted-foreground">
            Quick answers about CommunityTracker.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              isOpen={openItems.has(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
