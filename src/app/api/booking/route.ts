import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { bookingRequestSchema } from "@/lib/schemas";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

function buildEmailHtml(data: {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  duration: string;
  tablePreference: string;
  groupSize: number;
  specialRequests?: string;
  occasion?: string;
}): string {
  const tableLabels: Record<string, string> = {
    any: "No preference",
    standard: "Standard (Predator)",
    slate: "3-Piece Slate",
    vip: "VIP One-Piece",
  };

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <style>
          body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 24px; }
          .card { background: #fff; border-radius: 10px; max-width: 560px; margin: 0 auto; padding: 32px; border-top: 4px solid #c9a84c; }
          h2 { margin: 0 0 24px; color: #111; font-size: 22px; }
          table { width: 100%; border-collapse: collapse; }
          td { padding: 10px 8px; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #333; }
          td:first-child { font-weight: 600; color: #555; width: 38%; }
          .badge { display: inline-block; background: #c9a84c; color: #fff; border-radius: 4px; padding: 2px 8px; font-size: 12px; font-weight: bold; }
          .footer { margin-top: 24px; font-size: 12px; color: #999; text-align: center; }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>🎱 New Booking Request</h2>
          <table>
            <tr><td>Name</td><td>${data.name}</td></tr>
            <tr><td>Email</td><td>${data.email}</td></tr>
            <tr><td>Phone</td><td>${data.phone}</td></tr>
            <tr><td>Date</td><td>${data.date}</td></tr>
            <tr><td>Time</td><td>${data.time}</td></tr>
            <tr><td>Duration</td><td>${data.duration} hour${data.duration !== "1" ? "s" : ""}</td></tr>
            <tr><td>Table Type</td><td>${tableLabels[data.tablePreference] ?? data.tablePreference}</td></tr>
            <tr><td>Group Size</td><td>${data.groupSize} ${data.groupSize === 1 ? "person" : "people"}</td></tr>
            ${data.occasion ? `<tr><td>Occasion</td><td>${data.occasion}</td></tr>` : ""}
            <tr><td>Special Requests</td><td>${data.specialRequests?.trim() || "None"}</td></tr>
          </table>
          <div class="footer">Pool Academy · Booking Notification</div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = bookingRequestSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    await transporter.sendMail({
      from: `"Pool Academy Bookings" <${process.env.GMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `🎱 New Booking Request — ${data.name} on ${data.date} at ${data.time}`,
      html: buildEmailHtml(data),
      replyTo: data.email,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[booking/route] Failed to send email:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
