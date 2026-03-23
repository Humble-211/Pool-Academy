import { Service, Table } from "@/lib/types";

export const services: Service[] = [
  {
    id: "open-play",
    title: "Open Play",
    description:
      "Walk in and play on your schedule. No reservations required for open play. Our 9 premium tables are first-come, first-served.",
    icon: "CircleDot",
    features: [
      "No reservation needed",
      "All skill levels welcome",
      "Equipment provided",
      "Table coaching available",
    ],
    price: { amount: 12, unit: "per hour / per person" },
  },
  {
    id: "private-table",
    title: "Private Table Booking",
    description:
      "Reserve a dedicated table for your group. Perfect for date nights, corporate outings, or focused practice sessions.",
    icon: "Lock",
    features: [
      "Guaranteed table availability",
      "Tables from 1–4 hours",
      "Choose your preferred table type",
      "Online booking available",
    ],
    price: { amount: 20, unit: "per hour" },
    badge: "Popular",
  },
  {
    id: "vip-table",
    title: "VIP Suite — One-Piece Slate",
    description:
      "Experience perfection on our premium one-piece slate table. The smoothest roll, the finest cloth, in a semi-private setting.",
    icon: "Star",
    features: [
      "One-piece slate table",
      "Semi-private area",
      "Premium Simonis cloth",
      "Complimentary chalk & accessories",
    ],
    price: { amount: 35, unit: "per hour" },
    badge: "Premium",
  },
  {
    id: "leagues",
    title: "League Play",
    description:
      "Join one of our structured leagues for consistent competition, skill development, and a tight-knit billiards community.",
    icon: "Trophy",
    features: [
      "Weekly scheduled matches",
      "Handicap system for fair play",
      "Multiple formats: 8-ball, 9-ball, doubles",
      "End-of-season prizes",
    ],
    price: { amount: 10, unit: "per week" },
  },
  {
    id: "tournaments",
    title: "Tournaments",
    description:
      "Test your skills against WNY's best. We host regular tournaments with cash prizes and regional qualifiers.",
    icon: "Medal",
    features: [
      "Multiple bracket formats",
      "Cash prizes for top finishers",
      "Handicap & open divisions",
      "Professional tournament director",
    ],
    price: { amount: 25, unit: "entry fee (varies)" },
  },
  {
    id: "coaching",
    title: "Instruction & Clinics",
    description:
      "Accelerate your game with certified instruction. Private lessons and group clinics for all skill levels.",
    icon: "GraduationCap",
    features: [
      "ACS certified instructors",
      "Private 1-on-1 sessions",
      "Group clinics (up to 8)",
      "Video analysis available",
    ],
    price: { amount: 65, unit: "per hour (private)" },
    badge: "New",
  },
];

export const tables: Table[] = [
  {
    id: "predator",
    name: "Predator Pool Tables",
    type: "standard",
    description:
      "Five Predator Diamond Pro tables — the gold standard for professional billiards. 7-foot and 9-foot formats available.",
    count: 5,
    features: [
      "Simonis 860 cloth",
      "Diamond-precise leveling",
      "Pro-cut pockets",
      "Predator break cues available",
    ],
  },
  {
    id: "three-piece-slate",
    name: "Three-Piece Slate Tables",
    type: "slate",
    description:
      "Premium three-piece slate tables providing a class-above playing surface. Consistent roll, superior durability.",
    count: 4,
    features: [
      "3-piece 1\" slate bed",
      "Tournament-grade cloth",
      "Precision leveled",
      "Classic styling",
    ],
  },
  {
    id: "vip-slate",
    name: "VIP One-Piece Slate Table",
    type: "vip",
    description:
      "Our crown jewel. A single one-piece slate table delivering the ultimate billiards experience. No seams, perfect roll.",
    count: 1,
    features: [
      "One-piece 1½\" slate",
      "Simonis 860HR cloth",
      "Semi-private VIP setting",
      "Premium cue selection included",
    ],
  },
];
