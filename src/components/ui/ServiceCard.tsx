"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CircleDot,
  Lock,
  Star,
  Trophy,
  Medal,
  GraduationCap,
  ChevronRight,
} from "lucide-react";
import { type Service } from "@/lib/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CircleDot,
  Lock,
  Star,
  Trophy,
  Medal,
  GraduationCap,
};

interface ServiceCardProps {
  service: Service;
  delay?: number;
}

export function ServiceCard({ service, delay = 0 }: ServiceCardProps) {
  const Icon = iconMap[service.icon] ?? CircleDot;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      className="relative glass rounded-2xl p-6 border border-white/5 hover:border-emerald-500/20 transition-all duration-300 group flex flex-col h-full overflow-hidden"
    >
      {service.badge && (
        <span className="absolute top-4 right-4 text-xs font-bold px-2.5 py-1 rounded-full bg-gold-400/10 text-gold-400 border border-gold-400/20">
          {service.badge}
        </span>
      )}

      <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 group-hover:scale-105 transition-all">
        <Icon className="w-6 h-6 text-emerald-400" />
      </div>

      <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
        {service.title}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed mb-4 flex-1">
        {service.description}
      </p>

      <ul className="space-y-2 mb-5">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-white/60">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      {service.price && (
        <div className="pt-4 border-t border-white/5">
          <p className="text-white/40 text-xs mb-0.5">Starting at</p>
          <p className="text-white font-semibold">
            <span className="text-2xl font-bold text-emerald-400">
              ${service.price.amount}
            </span>
            <span className="text-white/40 text-sm ml-1">/{service.price.unit}</span>
          </p>
        </div>
      )}

      <Link
        href="/contact"
        className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 font-medium group/link transition-colors"
      >
        Book this service
        <ChevronRight className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
      </Link>
    </motion.article>
  );
}
