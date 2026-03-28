"use client";

import { motion } from "framer-motion";
import {
  CircleDot,
  Trophy,
  Clock,
  Users,
  Shield,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: CircleDot,
    title: "5 Premium Tables",
    description:
      "5 Predator Diamond Pro tables and 1 VIP one-piece slate — the finest selection in GTA.",
  },
  {
    icon: Trophy,
    title: "Competitive Leagues",
    description:
      "Join weekly leagues in 8-ball, 9-ball, and doubles formats. Skill-based handicaps keep every match fair and exciting.",
  },
  {
    icon: Clock,
    title: "Open 7 Days",
    description:
      "Flexible hours mean you can play when it suits you — weekday afternoons to late-night weekends.",
  },
  {
    icon: Users,
    title: "All Skill Levels",
    description:
      "From your first game to tournament-level play, Pool Academy welcomes everyone. Instruction available for beginners.",
  },
  {
    icon: Shield,
    title: "No Bar, Just Billiards",
    description:
      "A dedicated, upscale billiards venue — not a sports bar. The atmosphere is focused, premium, and distraction-free.",
  },
  {
    icon: Zap,
    title: "Walk-Ins Always Welcome",
    description:
      "No reservation? No problem. Grab a table and play. Reservations available for peak times and VIP bookings.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(16,185,129,0.8) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gold-400 text-sm font-semibold tracking-wider uppercase mb-3">
            Why Pool Academy
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Built for the Serious Player
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            Every detail — from our table selection to the light above them — is
            chosen to elevate your game.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 border border-white/5 hover:border-gold-500/20 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-4 group-hover:bg-gold-500/20 transition-colors">
                <feature.icon className="w-5 h-5 text-gold-400" />
              </div>
              <h3 className="font-semibold text-white text-lg mb-2 group-hover:text-gold-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
