import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CTABlock } from "@/components/ui/CTABlock";
import { siteSettings } from "@/content/site-settings";
import { Clock, MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Pool Academy — GTA's premier billiards venue. Our story, our mission, and our commitment to the game.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-green-glow opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">
              About Us
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              More Than a Pool Hall.
              <br />
              <span className="text-gradient-emerald">A Community.</span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed">
              Pool Academy was built on a simple belief: GTA deserves a
              premium billiards destination. Not a dive bar with dusty tables —
              a venue where serious players, casual enthusiasts, and first-timers
              alike feel at home and inspired to improve.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-white/50 leading-relaxed">
                <p>
                  Founded by lifelong billiards enthusiasts, Pool Academy opened
                  its doors with a mission to bring world-class billiards culture
                  to the GTA. We spent months sourcing the finest
                  equipment — Predator Diamond Pro tables, three-piece slate
                  tables, and our crown jewel: a one-piece slate VIP table that
                  rivals anything you&apos;d find at a national championship.
                </p>
                <p>
                  The result is a venue that feels different the moment you walk
                  in. The lighting, the layout, the sound — everything is
                  calibrated for concentration, competition, and the pure joy of
                  the game.
                </p>
                <p>
                  We&apos;re more than tables. We host leagues that run all year,
                  tournaments with real cash prizes, clinics for beginners, and
                  private events for groups who want an unforgettable evening of
                  billiards.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "5", label: "Premium Tables", sub: "4 Predator + 1 VIP" },
                { value: "5+", label: "Active Leagues", sub: "Running year-round" },
                { value: "100+", label: "Members", sub: "And growing" },
                { value: "2025", label: "Established", sub: "Etobicoke, ON" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl p-5 border border-white/5"
                >
                  <div className="font-display text-3xl font-bold text-gradient-emerald mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white font-semibold text-sm mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-white/30 text-xs">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="py-20 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-10 text-center">
            Visit Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass rounded-2xl p-8 border border-white/5">
              <h3 className="font-semibold text-white text-lg mb-6 flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-400" />
                Hours of Operation
              </h3>
              <ul className="space-y-3">
                {siteSettings.hours.map((h) => (
                  <li
                    key={h.day}
                    className="flex justify-between text-sm border-b border-white/5 pb-2 last:border-0 last:pb-0"
                  >
                    <span className="text-white/70">{h.day}</span>
                    <span className="text-white/40">
                      {h.closed ? "Closed" : `${h.open} – ${h.close}`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-8 border border-white/5 space-y-5">
              <h3 className="font-semibold text-white text-lg mb-2">
                Contact & Location
              </h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                <div className="text-white/50 text-sm">
                  {siteSettings.address.street}
                  <br />
                  {siteSettings.address.city}, {siteSettings.address.state}{" "}
                  {siteSettings.address.zip}
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${siteSettings.phone}`}
                  className="text-white/50 hover:text-emerald-400 text-sm transition-colors"
                >
                  {siteSettings.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-400 shrink-0" />
                <a
                  href={`mailto:${siteSettings.email}`}
                  className="text-white/50 hover:text-emerald-400 text-sm transition-colors"
                >
                  {siteSettings.email}
                </a>
              </div>
              <div className="mt-4 rounded-xl overflow-hidden border border-white/5 h-48">
                <iframe
                  title="Pool Academy Location"
                  src={siteSettings.googleMapsEmbedUrl}
                  className="w-full h-full grayscale contrast-75 opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <CTABlock
        title="Come See What We Built"
        subtitle="Walk in any day. No reservation required for open play."
        primaryLabel="Get Directions"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
