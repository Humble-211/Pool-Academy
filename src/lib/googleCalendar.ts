import { google } from "googleapis";
import type { BookingRequestFormData } from "@/lib/types";

const POOL_ACADEMY_ADDRESS = "Pool Academy, 12 Bramalea Rd, Brampton, ON L6T 2X5, Canada";

/**
 * Parse time strings in either 24-hour ("14:00") or 12-hour ("2:00 PM") format.
 * The booking form sends values like "12:00 PM", "1:00 PM", … "10:00 PM".
 */
function parseTime(time: string): { hours: number; minutes: number } {
  const isPM = /pm/i.test(time);
  const isAM = /am/i.test(time);
  // Strip AM/PM label and whitespace, leaving "H:MM"
  const numeric = time.replace(/[apm\s]/gi, "");
  const [h, m] = numeric.split(":").map(Number);
  let hours = h ?? 0;
  if (isPM && hours !== 12) hours += 12; // e.g. 1 PM → 13
  if (isAM && hours === 12) hours = 0;   // 12 AM → 0 (midnight)
  return { hours, minutes: m ?? 0 };
}

/**
 * Build an ISO-8601 datetime string from a date ("YYYY-MM-DD") and time string.
 * Avoids timezone-parsing ambiguity by constructing Date parts explicitly.
 */
function toISODateTime(date: string, time: string): string {
  const [year, month, day] = date.split("-").map(Number);
  const { hours, minutes } = parseTime(time);
  // Month is 0-indexed in Date constructor
  const dt = new Date(year, (month ?? 1) - 1, day ?? 1, hours, minutes, 0, 0);
  return dt.toISOString();
}

const TABLE_LABELS: Record<string, string> = {
  any: "No preference",
  standard: "Standard (Predator)",
  slate: "3-Piece Slate",
  vip: "VIP One-Piece",
};

/**
 * Creates a Google Calendar event for a confirmed pool table booking.
 * Uses a service account with delegated write access to the target calendar.
 *
 * @returns The created event's ID.
 * @throws If the Google API request fails (caller should handle gracefully).
 */
export async function addBookingToCalendar(
  data: BookingRequestFormData
): Promise<string> {
  const privateKey = (process.env.GOOGLE_PRIVATE_KEY ?? "").replace(
    /\\n/g,
    "\n"
  );
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL ?? "";
  const calendarId = process.env.GOOGLE_CALENDAR_ID ?? "";

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  const calendar = google.calendar({ version: "v3", auth });

  // Ensure the service account is subscribed to the calendar.
  // calendarList.insert is idempotent — silently ignored if already subscribed.
  try {
    await calendar.calendarList.insert({ requestBody: { id: calendarId } });
  } catch {
    // 409 = already subscribed, any other error is non-fatal here
  }

  const startDateTime = toISODateTime(data.date, data.time);
  const endDate = new Date(startDateTime);
  endDate.setHours(endDate.getHours() + Number(data.duration));

  const tableLabel = TABLE_LABELS[data.tablePreference] ?? data.tablePreference;

  const descriptionLines = [
    `👤 Customer: ${data.name}`,
    `📞 Phone: ${data.phone}`,
    `📧 Email: ${data.email}`,
    `🎱 Table: ${tableLabel}`,
    `👥 Group size: ${data.groupSize} ${data.groupSize === 1 ? "person" : "people"}`,
    `⏱️ Duration: ${data.duration} hour${data.duration !== "1" ? "s" : ""}`,
    data.occasion ? `🎉 Occasion: ${data.occasion}` : null,
    data.specialRequests?.trim()
      ? `📝 Special requests: ${data.specialRequests.trim()}`
      : null,
  ]
    .filter(Boolean)
    .join("\n");

  const response = await calendar.events.insert({
    calendarId,
    requestBody: {
      summary: `🎱 ${data.name}`,
      description: descriptionLines,
      start: { dateTime: startDateTime },
      end: { dateTime: endDate.toISOString() },
    },
  });

  const eventId = response.data.id ?? "";
  console.log(`[googleCalendar] Event inserted → id: ${eventId}, calendarId: ${calendarId}`);
  return eventId;
}
