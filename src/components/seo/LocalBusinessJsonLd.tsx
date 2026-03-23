import { siteSettings } from "@/content/site-settings";

export function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    name: siteSettings.name,
    description: siteSettings.description,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://poolacademy.com",
    telephone: siteSettings.phone,
    email: siteSettings.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteSettings.address.street,
      addressLocality: siteSettings.address.city,
      addressRegion: siteSettings.address.state,
      postalCode: siteSettings.address.zip,
      addressCountry: siteSettings.address.country,
    },
    openingHoursSpecification: siteSettings.hours
      .filter((h) => !h.closed)
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: `https://schema.org/${h.day}`,
        opens: h.open,
        closes: h.close,
      })),
    sameAs: [
      siteSettings.social.instagram,
      siteSettings.social.facebook,
    ].filter(Boolean),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
