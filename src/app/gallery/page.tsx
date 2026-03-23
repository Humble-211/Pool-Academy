import type { Metadata } from "next";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { GalleryGrid } from "@/components/ui/GalleryGrid";
import { CTABlock } from "@/components/ui/CTABlock";
import { galleryImages } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Pool Academy — our premium billiards tables, venue atmosphere, events, and tournaments. Buffalo, NY's top billiards destination.",
};

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 bg-green-glow opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-emerald-400 text-sm font-semibold tracking-wider uppercase mb-4">
              Gallery
            </span>
            <h1 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
              See It to
              <br />
              <span className="text-gradient-emerald">Believe It.</span>
            </h1>
            <p className="text-white/50 text-xl leading-relaxed">
              A venue this premium speaks for itself. Browse our tables,
              atmosphere, and events — then come experience it in person.
            </p>
          </div>
        </div>
      </section>

      <SectionWrapper className="py-16 bg-[#111111]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
