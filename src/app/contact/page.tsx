import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { ContactForm } from "@/components/forms/ContactForm";
import { BookingRequestForm } from "@/components/forms/BookingRequestForm";
import { siteSettings } from "@/content/site-settings";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Contact Pool Academy or request a table booking. Located in Buffalo, NY. Call, email, or submit a booking request online.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-green-glow opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-gold-400 text-sm font-semibold tracking-wider uppercase mb-4">
              Contact
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              Get in Touch.
              <br />
              <span className="text-gradient-gold">Reserve Your Table.</span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed">
              Questions, reservations, private events — we&apos;re here to help.
              Reach out via the form, by phone, or just stop in.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="py-20 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1 space-y-6">
              <div className="glass rounded-2xl p-6 border border-white/5">
                <h2 className="font-display text-xl font-bold text-white mb-5">
                  Contact Info
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                    <div className="text-white/50 text-sm">
                      {siteSettings.address.street}
                      <br />
                      {siteSettings.address.city},{" "}
                      {siteSettings.address.state}{" "}
                      {siteSettings.address.zip}
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gold-400 shrink-0" />
                    <a
                      href={`tel:${siteSettings.phone}`}
                      className="text-white/50 hover:text-gold-400 text-sm transition-colors"
                    >
                      {siteSettings.phone}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                    <a
                      href={`mailto:${siteSettings.email}`}
                      className="text-white/50 hover:text-gold-400 text-sm transition-colors"
                    >
                      {siteSettings.email}
                    </a>
                  </li>
                </ul>
              </div>

              <div className="glass rounded-2xl p-6 border border-white/5">
                <h3 className="font-semibold text-white mb-4 flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-gold-400" />
                  Hours
                </h3>
                <ul className="space-y-2">
                  {siteSettings.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between text-xs border-b border-white/5 pb-1.5 last:border-0"
                    >
                      <span className="text-white/60">{h.day}</span>
                      <span className="text-white/30">
                        {h.closed ? "Closed" : `${h.open} – ${h.close}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl overflow-hidden border border-white/5 h-56">
                <iframe
                  title="Pool Academy on Google Maps"
                  src={siteSettings.googleMapsEmbedUrl}
                  className="w-full h-full grayscale contrast-75 opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="glass rounded-2xl p-6 md:p-8 border border-white/5" id="book">
                <h2 className="font-display text-2xl font-bold text-white mb-2">
                  Request a Booking
                </h2>
                <p className="text-white/40 text-sm mb-6">
                  Submit your preferred time and table — we&apos;ll confirm
                  within a few hours.
                </p>
                <BookingRequestForm />
              </div>

              <div className="glass rounded-2xl p-6 md:p-8 border border-white/5">
                <h2 className="font-display text-2xl font-bold text-white mb-6">
                  Send a Message
                </h2>
                <ContactForm />
              </div>

            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
