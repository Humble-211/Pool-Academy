import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { CTABlock } from "@/components/ui/CTABlock";
import { galleryImages } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Pool Academy — our premium billiards tables, venue atmosphere, events, and tournaments. GTA's top billiards destination.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/gallery/atmosphere-2.jpg"
            alt="Pool Academy atmosphere"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center">
          <span className="inline-block text-gold-400 text-sm font-semibold tracking-wider uppercase mb-4">
            Gallery
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            See It to
            <br />
            <span className="text-gradient-gold">Believe It.</span>
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto">
            A venue this premium speaks for itself. Browse our tables,
            atmosphere, and events — then come experience it in person.
          </p>
        </div>
      </section>

      <SectionWrapper className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* ── YouTube Feature Video ──────────────────────────────────────
              Replace YOUTUBE_VIDEO_ID with the actual YouTube video ID.
              e.g. for https://www.youtube.com/watch?v=dQw4w9WgXcQ → dQw4w9WgXcQ
          ──────────────────────────────────────────────────────────────── */}
          <div className="mb-14">
            <div className="text-center mb-6">
              <span className="inline-block text-gold-400 text-sm font-semibold tracking-wider uppercase mb-2">
                Watch
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                Experience Pool Academy
              </h2>
            </div>
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/TfHOi37BR0Q?autoplay=1&mute=1&loop=1&playlist=TfHOi37BR0Q&controls=1&rel=0&modestbranding=1"
                title="Pool Academy Feature Video"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
          <GalleryGrid images={galleryImages} />
        </div>
      </SectionWrapper>

      <CTABlock
        title="Like What You See?"
        subtitle="The real thing is even better. Stop in any day — no reservation needed for open play."
        primaryLabel="Book a Table"
        primaryHref="/contact"
        secondaryLabel="View Services"
        secondaryHref="/services"
      />
    </>
  );
}
