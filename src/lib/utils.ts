import { Event } from "./types";

export function formatEventDate(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatEventDateShort(dateStr: string): string {
  const date = new Date(dateStr + "T12:00:00");
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export function getEventTypeLabel(type: Event["type"]): string {
  const labels: Record<Event["type"], string> = {
    league: "League",
    tournament: "Tournament",
    "open-play": "Open Play",
    special: "Special Event",
  };
  return labels[type];
}

export function getEventTypeColor(type: Event["type"]): string {
  const colors: Record<Event["type"], string> = {
    league: "emerald",
    tournament: "gold",
    "open-play": "blue",
    special: "purple",
  };
  return colors[type];
}

export function getFeaturedEvents(events: Event[]): Event[] {
  return events.filter((e) => e.featured);
}

export function getUpcomingEvents(events: Event[]): Event[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return events
    .filter((e) => new Date(e.date + "T00:00:00") >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}
