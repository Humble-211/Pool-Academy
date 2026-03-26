"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, MapPin, Phone } from "lucide-react";
import { siteSettings } from "@/content/site-settings";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0d1f14]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] bg-gold-600/5 rounded-full blur-2xl" />

        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(16,185,129,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(16,185,129,0.3) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/20 bg-gold-500/5 text-gold-400 text-sm font-medium mb-6"
        >
          <div className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-pulse" />
          Toronto&apos;s Premier Billiards Venue
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-6"
        >
          Where Precision
          <br />
          <span className="text-gradient-gold">Meets Passion</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          5 premium tables. Curated leagues. Thrilling tournaments.
          Toronto&apos;s most elevated billiards experience — open for walk-ins,
          designed for those who take their game seriously.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-xl transition-all hover:shadow-gold group text-base"
          >
            Book a Table
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white/70 hover:text-white hover:border-white/20 font-medium rounded-xl transition-all text-base"
          >
            View Events
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-sm text-white/40"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold-500/60" />
            <span>
              {siteSettings.address.city}, {siteSettings.address.state}
            </span>
          </div>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span>5 Premium Tables</span>
          </div>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gold-500/60" />
            <a
              href={`tel:${siteSettings.phone}`}
              className="hover:text-white transition-colors"
            >
              {siteSettings.phone}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-sm mx-auto"
        >
          {[
            { value: "5", label: "Tables" },
            { value: "5+", label: "Leagues" },
            { value: "#1", label: "in GTA" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-gradient-gold font-display">
                {stat.value}
              </div>
              <div className="text-white/30 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border border-white/10 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 bg-gold-500/60 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
