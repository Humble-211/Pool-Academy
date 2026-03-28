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
      <section className="pt-32 pb-16 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-green-glow opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <span className="inline-block text-gold-400 text-sm font-semibold tracking-wider uppercase mb-4">
                Gallery
              </span>
              <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
                See It to
                <br />
                <span className="text-gradient-gold">Believe It.</span>
              </h1>
              <p className="text-white/50 text-xl leading-relaxed">
                A venue this premium speaks for itself. Browse our tables,
                atmosphere, and events — then come experience it in person.
              </p>
            </div>
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl ring-1 ring-white/10">
              <img
                src="/gallery/atmosphere-2.jpg"
                alt="Pool Academy atmosphere"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
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
