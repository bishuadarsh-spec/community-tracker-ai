"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
    { name: "Features", href: "/" },
    { name: "Benefits", href: "/" },
    { name: "Pricing", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] flex justify-center w-full pointer-events-none">
<motion.header
  initial={false}
  animate={{
    width: scrolled ? "min(1000px, calc(100% - 0.75rem))" : "100%",
    backgroundColor:
    
    scrolled
      ? "rgba(255, 255, 255, 0.45)"   // stronger tint
      : "rgba(255, 255, 255, 0)",

    paddingTop: scrolled ? "0.45rem" : "0.8rem",
    paddingBottom: scrolled ? "0.45rem" : "0.8rem",
    borderRadius: scrolled ? "9999px" : "0px",
    marginTop: scrolled ? "0.4rem" : "0rem",

    // ✔ main blur
    backdropFilter: scrolled ? "blur(50px)" : "blur(0px)",
    boxShadow: scrolled
      ? "0 8px 30px rgba(0, 0, 0, 0.12)"
      : "0 0 0 rgba(0, 0, 0, 0)",
  }}
  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}

  style={{
    // ✔ Safari blur support
    WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
    border: scrolled
      ? "1px solid rgba(134, 134, 134, 0.45)"
      : "1px solid transparent",

    // ✔ Smooth blur animation
    transition:
      "backdrop-filter .35s ease, -webkit-backdrop-filter .35s ease, background-color .35s ease",
  }}

  // ✔ Additional baseline blur from Tailwind
  className="backdrop-blur-xl flex items-center justify-between px-3 sm:px-5 pointer-events-auto min-h-[58px]"
>


        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 min-w-0">
         
          <span className="text-foreground text-base sm:text-lg md:text-xl font-bold whitespace-nowrap">
            <img src="/logos/nav_logo.png" alt="Community Tracker" className="h-5 sm:h-6 md:h-7 inline-block" />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-foreground text-sm font-medium transition-colors whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="http://app.communitytracker.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#1d1d1f] hover:bg-[#2d2d2f] text-white px-5 lg:px-6 py-2 rounded-full font-semibold shadow-md transition-all text-sm">
              Sign Up
            </Button>
          </a>
        </div>

  {/* Mobile Menu Button */}
<button
  onClick={() => setMobileOpen(true)}
  className="md:hidden h-10 w-10 flex items-center justify-center active:scale-95"
>
  <Menu className="h-6 w-6" />
</button>

{/* Mobile Fullscreen Navigation */}
{mobileOpen && (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.25 }}
    className="fixed inset-0 z-[10000] bg-white md:hidden"
  >
    {/* Top Bar */}
    <div className="flex items-center justify-between px-4 py-4 border-b">
      <img
        src="/logos/nav_logo.png"
        alt="Community Tracker"
        className="h-6"
      />

      <button
        onClick={() => setMobileOpen(false)}
        className="text-md font-semibold"
      >
       ✕
      </button>
    </div>

    {/* Navigation */}
    <nav className="flex flex-col px-4 pt-6 gap-2 bg-gray-50 ">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          onClick={() => setMobileOpen(false)}
          className="text-lg font-medium py-4 px-3 rounded-xl hover:bg-gray-100 transition"
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
        <Button className="w-full py-6 rounded-full text-base font-semibold mb-3">
          Sign Up
        </Button>
      </a>
    </nav>
  </motion.div>
)}

      </motion.header>
    </div>
  );
}
