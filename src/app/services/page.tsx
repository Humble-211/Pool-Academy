import type { Metadata } from "next";
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
      <section className="pt-32 pb-16 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-green-glow opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">
              Services & Pricing
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Every Way
              <br />
              <span className="text-gradient-emerald">to Play.</span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed">
              From casual walk-in play to VIP private sessions and competitive
              leagues — Pool Academy has a format for your game and your budget.
            </p>
          </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ServiceCard key={service.id} service={service} delay={i * 0.07} />
            ))}
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
                      className={`border-b border-white/5 last:border-0 ${
                        i % 2 === 0 ? "" : "bg-white/[0.02]"
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
                        <span className="text-emerald-400 font-bold text-lg">
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
