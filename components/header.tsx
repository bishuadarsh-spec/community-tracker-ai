"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pointer-events-none">
      <header
        className={`flex items-center justify-between px-4 sm:px-6 pointer-events-auto transition-all duration-300 ${
          scrolled
            ? "w-[min(1000px,calc(100%-1rem))] mt-2 py-3 bg-white/80 backdrop-blur-xl rounded-full shadow-lg border border-gray-200"
            : "w-full py-4 bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logos/nav_logo.png"
            alt="Community Tracker"
            className="h-6 md:h-7"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground/70 hover:text-foreground text-sm font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="http://app.communitytracker.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full font-semibold text-sm transition-colors">
              Sign Up
            </Button>
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="md:hidden p-2"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>

        {mobileOpen && (
          <div className="fixed inset-0 z-50 bg-white md:hidden">
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
              <img
                src="/logos/nav_logo.png"
                alt="Community Tracker"
                className="h-6"
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="flex flex-col px-4 pt-6 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium py-4 px-3 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              <a
                href="http://app.communitytracker.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6"
              >
                <Button className="w-full bg-black py-6 rounded-full text-base text-white font-semibold">
                  Sign Up
                </Button>
              </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
