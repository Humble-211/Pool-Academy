# Pool Academy

Premium billiards venue website — built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, React Hook Form + Zod.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ or 20+ LTS
- npm 9+

### Installation

```bash
npm install
```

### Environment Setup

Copy the example env file and fill in your values:

```bash
cp .env.example .env.local
```

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Google Maps API key (for embed) |
| `NEXT_PUBLIC_SITE_URL` | Production URL (e.g. `https://poolacademy.com`) |

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, meta, header/footer)
│   ├── page.tsx            # Home page
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── events/page.tsx
│   ├── gallery/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/             # Header, Footer
│   ├── forms/              # ContactForm, LeagueSignupForm, BookingRequestForm
│   ├── sections/           # HeroSection, FeaturesSection, TablesSection, EventsPreviewSection
│   ├── seo/                # LocalBusinessJsonLd
│   └── ui/                 # SectionWrapper, EventCard, ServiceCard, CTABlock, GalleryGrid
├── content/                # JSON/TS data files (CMS layer)
│   ├── site-settings.ts    # Address, hours, social, phone
│   ├── events.ts
│   ├── services.ts
│   └── gallery.ts
└── lib/
    ├── types.ts            # TypeScript interfaces
    ├── schemas.ts          # Zod validation schemas
    └── utils.ts            # Utility/formatting helpers
```

---

## 🌐 Deploy to Vercel

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → import repo
3. Add environment variables in Vercel dashboard (from `.env.example`)
4. Click **Deploy**

That's it — Vercel auto-detects Next.js and handles everything.

---

## 📝 Content Management

All content lives in `src/content/`. To update:

- **Events**: Edit `src/content/events.ts`
- **Services & Pricing**: Edit `src/content/services.ts`
- **Gallery**: Edit `src/content/gallery.ts` and add images to `public/gallery/`
- **Hours, address, phone**: Edit `src/content/site-settings.ts`

No CMS dashboard needed — it's file-based and deploy-on-save with Vercel.

---

## 🖼️ Adding Gallery Images

1. Add images to `public/gallery/` (WebP recommended, 800×600px min)
2. Update `src/content/gallery.ts` with the new entries

---

## 🔮 Future Enhancements

- **Payments**: Stripe integration for online booking deposits
- **Reservations**: Real-time table availability with a booking engine
- **E-commerce**: Equipment and merchandise store
- **CMS migration**: Moving content to Sanity for non-developer editing
- **Email forms**: Connect forms to Resend or SendGrid
