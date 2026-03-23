import { SiteSettings } from "@/lib/types";

export const siteSettings: SiteSettings = {
  name: "Pool Academy",
  tagline: "Where Precision Meets Passion",
  description:
    "Western Toronto's premier billiards venue. Premium tables, leagues, tournaments, and private play in an upscale atmosphere.",
  address: {
    street: "2979 Lakeshore Blvd West",
    city: "Etobicoke",
    state: "ON",
    zip: "M8V 1J8",
    country: "Canada",
  },
  phone: "(416) 555-0192",
  email: "djenakcr@gmail.com",
  hours: [
    { day: "Monday", open: "2:00 PM", close: "12:00 AM" },
    { day: "Tuesday", open: "2:00 PM", close: "12:00 AM" },
    { day: "Wednesday", open: "2:00 PM", close: "12:00 AM" },
    { day: "Thursday", open: "2:00 PM", close: "12:00 AM" },
    { day: "Friday", open: "2:00 PM", close: "12:00 AM" },
    { day: "Saturday", open: "2:00 PM", close: "12:00 AM" },
    { day: "Sunday", open: "2:00 PM", close: "12:00 AM" },
  ],
  social: {
    instagram: "https://instagram.com/poolacademy",
    facebook: "https://facebook.com/poolacademy",
  },
  googleMapsEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11557.21572455532!2d-79.506918!3d43.600213000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b495266e127ed%3A0x2fcb5947218cd20f!2sPool%20Academy!5e0!3m2!1sen!2sca!4v1774303052429!5m2!1sen!2sca",
};
