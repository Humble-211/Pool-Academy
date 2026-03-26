"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";
import { siteSettings } from "@/content/site-settings";

interface CTABlockProps {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  variant?: "default" | "minimal";
}

export function CTABlock({
  title = "Ready to Elevate Your Game?",
  subtitle = "Reserve a premium table, join a league, or stop in for open play. The felt is waiting.",
  primaryLabel = "Book a Table",
  primaryHref = "/contact",
  secondaryLabel = "View Events",
  secondaryHref = "/events",
  variant = "default",
}: CTABlockProps) {
  if (variant === "minimal") {
    return (
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href={primaryHref}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-black font-semibold rounded-xl text-sm transition-all hover:shadow-gold group"
        >
          {primaryLabel}
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
        <Link
          href={secondaryHref}
          className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-white/70 hover:text-white hover:border-white/20 font-medium rounded-xl text-sm transition-all"
        >
          {secondaryLabel}
        </Link>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-green-glow opacity-50" />
      <div className="absolute inset-0 bg-[#111111]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-white/50 text-lg mb-10">{subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={primaryHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-xl transition-all hover:shadow-gold group text-base"
            >
              {primaryLabel}
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href={`tel:${siteSettings.phone}`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white/70 hover:text-white hover:border-white/20 font-medium rounded-xl transition-all text-base"
            >
              <Phone className="w-4 h-4" />
              {siteSettings.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
