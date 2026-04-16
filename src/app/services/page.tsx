import type { Metadata } from "next";
import Link from "next/link";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { CTABlock } from "@/components/ui/CTABlock";
import { services } from "@/content/services";
import { TablesSection } from "@/components/sections/TablesSection";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Explore Pool Academy's full range of services — open play, private bookings, VIP suite, leagues, tournaments, and instruction. Pricing for every budget.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/gallery/SERVICE.jpg"
            alt="Pool Academy services"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
          <span className="inline-block text-gold-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Services &amp; Pricing
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Every Way
            <br />
            <span className="text-gradient-gold">to Play.</span>
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto">
            From casual walk-in play to VIP private sessions and competitive
            leagues — Pool Academy has a format for your game and your budget.
          </p>
        </div>
      </section>

      <SectionWrapper className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
              Services
            </h2>
            <p className="text-white/40 mt-3 max-w-lg mx-auto">
              Book online, call ahead, or simply walk in. We&apos;re set up to
              welcome you however you arrive.
            </p>
          </div>
          {/* Price menu images — side by side */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link href="/contact" className="relative flex-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 block hover:opacity-90 transition-opacity cursor-pointer">
              <img
                src="/gallery/price-menu.png"
                alt="Pool Academy price menu"
                className="w-full h-auto object-cover object-top"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            </Link>
            <Link href="/contact" className="relative flex-1 rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 block hover:opacity-90 transition-opacity cursor-pointer">
              <img
                src="/gallery/price-menu-1.jpg"
                alt="Pool Academy price menu continued"
                className="w-full h-auto object-cover object-top"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none" />
            </Link>
          </div>


        </div>
      </SectionWrapper>

      <TablesSection />

      <SectionWrapper className="py-20 bg-[#111111]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-white mb-3">
              Pricing at a Glance
            </h2>
            <p className="text-white/40">
              All prices listed are standard rates. Group discounts and member
              rates available — ask us for details.
            </p>
          </div>
          <div className="glass rounded-2xl border border-white/5 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left px-6 py-4 text-white/60 text-sm font-semibold">
                    Service
                  </th>
                  <th className="text-right px-6 py-4 text-white/60 text-sm font-semibold">
                    Rate
                  </th>
                  <th className="text-right px-6 py-4 text-white/60 text-sm font-semibold hidden sm:table-cell">
                    Unit
                  </th>
                </tr>
              </thead>
              <tbody>
                {services
                  .filter((s) => s.price)
                  .map((service, i) => (
                    <tr
                      key={service.id}
                      className={`border-b border-white/5 last:border-0 ${i % 2 === 0 ? "" : "bg-white/[0.02]"
                        }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-white text-sm font-medium">
                            {service.title}
                          </span>
                          {service.badge && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-gold-400/10 text-gold-400 border border-gold-400/20">
                              {service.badge}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="text-gold-400 font-bold text-lg">
                          ${service.price!.amount}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right hidden sm:table-cell">
                        <span className="text-white/30 text-sm">
                          /{service.price!.unit}
                        </span>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-white/30 text-xs mt-4">
            * Food & beverages coming soon. Prices subject to change.
          </p>
        </div>
      </SectionWrapper>

      <CTABlock
        title="Ready to Book?"
        subtitle="Reserve your table online or give us a call. Same-day bookings welcome."
        primaryLabel="Book a Table"
        primaryHref="/contact"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  );
}
