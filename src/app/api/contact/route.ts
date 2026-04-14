import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/schemas";

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
  phone?: string;
  subject: string;
  message: string;
}): string {
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
          td { padding: 10px 8px; border-bottom: 1px solid #f0f0f0; font-size: 14px; color: #333; vertical-align: top; }
          td:first-child { font-weight: 600; color: #555; width: 28%; white-space: nowrap; }
          .message-box { background: #fafafa; border: 1px solid #eee; border-radius: 6px; padding: 12px; font-size: 14px; color: #333; line-height: 1.6; white-space: pre-wrap; }
          .footer { margin-top: 24px; font-size: 12px; color: #999; text-align: center; }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>📬 New Contact Message</h2>
          <table>
            <tr><td>Name</td><td>${data.name}</td></tr>
            <tr><td>Email</td><td>${data.email}</td></tr>
            ${data.phone ? `<tr><td>Phone</td><td>${data.phone}</td></tr>` : ""}
            <tr><td>Subject</td><td>${data.subject}</td></tr>
          </table>
          <div style="margin-top: 20px;">
            <p style="font-weight: 600; color: #555; font-size: 14px; margin-bottom: 8px;">Message</p>
            <div class="message-box">${data.message}</div>
          </div>
          <div class="footer">Pool Academy · Contact Form</div>
        </div>
      </body>
    </html>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = contactFormSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.flatten() },
        { status: 400 }
      );
    }

    const data = result.data;

    await transporter.sendMail({
      from: `"Pool Academy Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `📬 Contact: ${data.subject} — from ${data.name}`,
      html: buildEmailHtml(data),
      replyTo: data.email,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route] Failed to send email:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
