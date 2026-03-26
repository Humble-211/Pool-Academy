import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import { siteSettings } from "@/content/site-settings";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "/events" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gold-500 rounded-full opacity-20" />
                <div className="relative w-8 h-8 border-2 border-gold-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-gold-400 rounded-full" />
                </div>
              </div>
              <span className="font-display text-lg font-bold text-white">
                Pool <span className="text-gradient-gold">Academy</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {siteSettings.description}
            </p>
            <div className="flex gap-3">
              {siteSettings.social.instagram && (
                <a
                  href={siteSettings.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-400 hover:border-gold-500/30 transition-all"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {siteSettings.social.facebook && (
                <a
                  href={siteSettings.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-gold-400 hover:border-gold-500/30 transition-all"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-white/50 hover:text-gold-400 text-sm transition-colors group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Hours
            </h3>
            <ul className="space-y-2">
              {siteSettings.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-start gap-2 text-sm text-white/50"
                >
                  <Clock className="w-3 h-3 mt-0.5 text-gold-500/60 shrink-0" />
                  <span>
                    <span className="text-white/70 font-medium">{h.day}:</span>{" "}
                    {h.closed ? "Closed" : `${h.open} – ${h.close}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm leading-snug">
                  {siteSettings.address.street}
                  <br />
                  {siteSettings.address.city}, {siteSettings.address.state}{" "}
                  {siteSettings.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <a
                  href={`tel:${siteSettings.phone}`}
                  className="text-white/50 hover:text-gold-400 text-sm transition-colors"
                >
                  {siteSettings.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a
                  href={`mailto:${siteSettings.email}`}
                  className="text-white/50 hover:text-gold-400 text-sm transition-colors"
                >
                  {siteSettings.email}
                </a>
              </li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-6 px-4 py-2 bg-gold-500/10 border border-gold-500/20 text-gold-400 text-sm rounded-lg hover:bg-gold-500/20 transition-colors"
            >
              Book a Table
              <ChevronRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-sm">
            © {currentYear} {siteSettings.name}. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Premium Billiards · {siteSettings.address.city},{" "}
            {siteSettings.address.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
