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
    price: { amount: 20, unit: " per hour / up to 4 people" },
    badge: "Popular",
  },
  {
    id: "vip-table",
    title: "VIP Lounge — One-Piece Slate",
    description:
      "Experience perfection on our premium one-piece slate table. The smoothest roll, the finest cloth, in a semi-private setting.",
    icon: "Star",
    features: [
      "One-piece slate table",
      "Semi-private area",
      "Premium Simonis cloth",
      "Complimentary chalk & accessories",
    ],
    price: { amount: 25, unit: "per hour" },
    badge: "Premium",
  }
];

export const tables: Table[] = [
  {
    id: "predator",
    name: "Predator Pool Tables",
    type: "standard",
    description:
      "Five Predator Diamond Pro tables — the gold standard for professional billiards. 9-foot format available.",
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
