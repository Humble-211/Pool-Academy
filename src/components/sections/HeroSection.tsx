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
          className="font-display text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] tracking-tight mb-4 sm:mb-6"
        >
          Where Precision
          <br />
          <span className="text-gradient-gold">Meets Passion</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-white/50 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 sm:px-0"
        >
          5 premium tables. Curated leagues. Thrilling tournaments.
          Toronto&apos;s most elevated billiards experience — open for walk-ins,
          designed for those who take their game seriously.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-14"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-xl transition-all hover:shadow-gold group text-sm sm:text-base"
          >
            Book a Table
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border border-white/10 text-white/70 hover:text-white hover:border-white/20 font-medium rounded-xl transition-all text-sm sm:text-base"
          >
            View Events
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-23 text-lg text-white/40"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-gold-500/60" />
            <span className="text-gold-400 font-medium">
              {siteSettings.address.city}, {siteSettings.address.state}
            </span>
          </div>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-400 font-medium">5 Premium Tables</span>
          </div>
          <div className="w-px h-4 bg-white/10 hidden sm:block" />
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-gold-500/60" />
            <a
              href={`tel:${siteSettings.phone}`}
              className="text-gold-400 font-medium hover:text-gold-300 transition-colors"
            >
              {siteSettings.phone}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-2 sm:mt-4 grid grid-cols-3 gap-6 max-w-sm mx-auto"
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

      {/* Cinematic venue image banner — full hero background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <img
          src="/gallery/tables-row-1.jpg"
          alt="Pool Academy – premium billiard tables"
          className="w-full h-full object-cover object-bottom sm:object-center"
        />
        {/* heavy top overlay so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/70 sm:via-[#0a0a0a]/60 to-[#0a0a0a]/40 sm:to-[#0a0a0a]/30 pointer-events-none" />
        {/* left & right edge fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/60 pointer-events-none" />
        {/* subtle label */}
        <div className="absolute inset-0 flex items-end justify-center pb-6 pointer-events-none">
          <span className="text-white/25 text-xs tracking-[0.25em] uppercase font-medium">
            Pool Academy
          </span>
        </div>
      </motion.div>

    </section>
  );
}
