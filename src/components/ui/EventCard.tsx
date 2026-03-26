"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, Clock, Users, DollarSign, Tag } from "lucide-react";
import { type Event } from "@/lib/types";
import {
  formatEventDate,
  formatEventDateShort,
  getEventTypeLabel,
} from "@/lib/utils";

interface EventCardProps {
  event: Event;
  variant?: "default" | "compact";
}

const typeColors: Record<Event["type"], { bg: string; text: string; border: string }> = {
  league: {
    bg: "bg-gold-500/10",
    text: "text-gold-400",
    border: "border-gold-500/20",
  },
  tournament: {
    bg: "bg-gold-400/10",
    text: "text-gold-400",
    border: "border-gold-400/20",
  },
  "open-play": {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/20",
  },
  special: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/20",
  },
};

export function EventCard({ event, variant = "default" }: EventCardProps) {
  const colors = typeColors[event.type];

  if (variant === "compact") {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        className="glass rounded-xl p-4 border border-white/5 hover:border-white/10 transition-colors group"
      >
        <div className="flex items-start gap-4">
          <div className="shrink-0 text-center w-14 bg-white/5 rounded-lg p-2">
            <span className="text-gold-400 text-xs font-semibold uppercase tracking-wider block">
              {new Date(event.date + "T12:00:00").toLocaleDateString("en-US", {
                month: "short",
              })}
            </span>
            <span className="text-white text-2xl font-bold leading-none">
              {new Date(event.date + "T12:00:00").getDate()}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <span
              className={`inline-flex text-xs font-semibold px-2 py-0.5 rounded-full ${colors.bg} ${colors.text} border ${colors.border} mb-1`}
            >
              {getEventTypeLabel(event.type)}
            </span>
            <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-gold-400 transition-colors truncate">
              {event.title}
            </h3>
            <p className="text-white/40 text-xs mt-1">
              {event.time}
              {event.entryFee ? ` · $${event.entryFee} entry` : ""}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="glass rounded-2xl p-6 border border-white/5 hover:border-gold-500/20 transition-all duration-300 group flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-4">
        <span
          className={`inline-flex text-xs font-semibold px-3 py-1 rounded-full ${colors.bg} ${colors.text} border ${colors.border}`}
        >
          {getEventTypeLabel(event.type)}
        </span>
        {event.featured && (
          <span className="text-xs font-semibold text-gold-400 bg-gold-400/10 border border-gold-400/20 px-2 py-0.5 rounded-full">
            Featured
          </span>
        )}
      </div>

      <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
        {event.title}
      </h3>
      <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">
        {event.description}
      </p>

      <div className="space-y-2 mb-5">
        <div className="flex items-center gap-2 text-white/60 text-sm">
          <Calendar className="w-4 h-4 text-gold-500/70 shrink-0" />
          <span>{formatEventDate(event.date)}</span>
        </div>
        <div className="flex items-center gap-2 text-white/60 text-sm">
          <Clock className="w-4 h-4 text-gold-500/70 shrink-0" />
          <span>
            {event.time}
            {event.endTime ? ` – ${event.endTime}` : ""}
          </span>
        </div>
        {event.maxParticipants && (
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <Users className="w-4 h-4 text-gold-500/70 shrink-0" />
            <span>Max {event.maxParticipants} participants</span>
          </div>
        )}
        {event.entryFee != null && (
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <DollarSign className="w-4 h-4 text-gold-500/70 shrink-0" />
            <span>${event.entryFee} entry fee</span>
          </div>
        )}
      </div>

      {event.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 text-xs text-white/30 bg-white/5 rounded-md px-2 py-0.5"
            >
              <Tag className="w-2.5 h-2.5" />
              {tag}
            </span>
          ))}
        </div>
      )}

      {event.registrationOpen ? (
        <Link
          href="/events"
          className="inline-flex items-center justify-center w-full py-2.5 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm font-semibold rounded-xl hover:bg-gold-500/20 hover:border-gold-500/40 transition-all"
        >
          Register Now
        </Link>
      ) : (
        <div className="inline-flex items-center justify-center w-full py-2.5 bg-white/5 text-white/30 text-sm rounded-xl cursor-not-allowed">
          Walk-ins Welcome
        </div>
      )}
    </motion.article>
  );
}
