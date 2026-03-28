"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronRight } from "lucide-react";
import { siteSettings } from "@/content/site-settings";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5 shadow-xl"
          : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gold-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative w-8 h-8 border-2 border-gold-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gold-400 rounded-full" />
                </div>
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white tracking-wide">
                  Pool{" "}
                  <span className="text-gradient-gold">Academy</span>
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-lg font-medium tracking-wide transition-colors duration-200 relative group ${isActive
                      ? "text-gold-400"
                      : "text-white/70 hover:text-white"
                      }`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 h-px bg-gold-500 transition-all duration-300 ${isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                        }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-black font-semibold text-sm rounded-lg transition-all duration-200 group overflow-hidden"
              >
                <span className="relative z-10">Book a Table</span>
                <ChevronRight className="relative z-10 w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                <div className="absolute inset-0 bg-gold-400 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-[#111111] border-l border-white/10 flex flex-col p-6 pt-20">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <Link
                        href={link.href}
                        className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors ${isActive
                          ? "bg-gold-500/10 text-gold-400 border border-gold-500/20"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                          }`}
                      >
                        {link.label}
                        <ChevronRight className="w-4 h-4 opacity-50" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
              <div className="mt-auto pt-6 border-t border-white/10">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gold-500 hover:bg-gold-400 text-black font-semibold text-sm rounded-lg transition-colors"
                >
                  Book a Table
                  <ChevronRight className="w-4 h-4" />
                </Link>
                <p className="text-center text-white/40 text-base mt-4">
                  {siteSettings.phone}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
