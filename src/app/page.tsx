import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { EventsPreviewSection } from "@/components/sections/EventsPreviewSection";
import { TablesSection } from "@/components/sections/TablesSection";
import { CTABlock } from "@/components/ui/CTABlock";
import { siteSettings } from "@/content/site-settings";

export const metadata: Metadata = {
  title: `${siteSettings.name} — ${siteSettings.tagline}`,
  description: siteSettings.description,
  openGraph: {
    title: `${siteSettings.name} — ${siteSettings.tagline}`,
    description: siteSettings.description,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TablesSection />
      <EventsPreviewSection />
      <CTABlock />
    </>
  );
}
