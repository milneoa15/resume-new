import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resendClient = resendApiKey ? new Resend(resendApiKey) : null;

const CONTACT_FROM_EMAIL = process.env.RESEND_FROM_EMAIL;
const CONTACT_TO_EMAIL = process.env.RESEND_TO_EMAIL;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

const MIN_MESSAGE_LENGTH = 10;
const MAX_MESSAGE_LENGTH = 5000;

export async function POST(request: Request) {
  const body: ContactPayload = await request.json().catch(() => ({}));

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
  }
  if (message.length < MIN_MESSAGE_LENGTH) {
    return NextResponse.json({ error: "Please provide a bit more detail" }, { status: 400 });
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json({ error: "Message is too long" }, { status: 400 });
  }

  if (!resendClient || !CONTACT_FROM_EMAIL || !CONTACT_TO_EMAIL) {
    console.error("Missing Resend configuration");
    return NextResponse.json({ error: "Messaging service unavailable" }, { status: 503 });
  }

  const recipients = CONTACT_TO_EMAIL.split(",").map((recipient) => recipient.trim()).filter(Boolean);

  if (recipients.length === 0) {
    console.error("RESEND_TO_EMAIL env is empty");
    return NextResponse.json({ error: "Messaging service unavailable" }, { status: 503 });
  }

  try {
    const textContent = [
      `New contact form submission from ${name}`,
      "",
      message,
      "",
      `Reply to: ${email}`,
    ].join("\n");

    const htmlContent = [
      `<h2 style=\"margin:0 0 16px;font-size:18px;font-family:Inter,system-ui,sans-serif;\">New contact form submission</h2>`,
      `<p style=\"margin:0 0 8px;font-size:14px;font-family:Inter,system-ui,sans-serif;\"><strong>Name:</strong> ${name}</p>`,
      `<p style=\"margin:0 0 8px;font-size:14px;font-family:Inter,system-ui,sans-serif;\"><strong>Email:</strong> ${email}</p>`,
      `<p style=\"margin:16px 0;font-size:14px;line-height:1.6;font-family:Inter,system-ui,sans-serif;white-space:pre-wrap;\">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>`,
    ].join("");

    await resendClient.emails.send({
      from: CONTACT_FROM_EMAIL,
      to: recipients,
      replyTo: email,
      subject: `New message from ${name}`,
      text: textContent,
      html: htmlContent,
      tags: [{ name: "source", value: "resume-site" }],
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Resend send failed", error);
    return NextResponse.json({ error: "Unable to send message right now" }, { status: 502 });
  }
}
