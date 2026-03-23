export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  endTime?: string;
  type: "league" | "tournament" | "open-play" | "special";
  featured: boolean;
  registrationOpen: boolean;
  maxParticipants?: number;
  entryFee?: number;
  image?: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: {
    amount: number;
    unit: string;
  };
  badge?: string;
}

export interface Table {
  id: string;
  name: string;
  type: "standard" | "slate" | "vip";
  description: string;
  count: number;
  features: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category: "tables" | "atmosphere" | "events" | "venue";
  featured: boolean;
}

export interface SiteSettings {
  name: string;
  tagline: string;
  description: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  phone: string;
  email: string;
  hours: {
    day: string;
    open: string;
    close: string;
    closed?: boolean;
  }[];
  social: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
    youtube?: string;
  };
  googleMapsEmbedUrl: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export interface LeagueSignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  skillLevel: "beginner" | "intermediate" | "advanced" | "professional";
  preferredDays: string[];
  teamName?: string;
  additionalNotes?: string;
}

export interface BookingRequestFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  duration: "1" | "2" | "3" | "4";
  tablePreference: "standard" | "slate" | "vip" | "any";
  groupSize: number;
  occasion?: string;
  specialRequests?: string;
}
