import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function cleanSubject(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

export async function POST(req: Request) {
  try {
    if (!req.headers.get("content-type")?.toLowerCase().includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid request format." },
        { status: 415 }
      );
    }

    const body: unknown = await req.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { error: "Invalid request body." },
        { status: 400 }
      );
    }

    const payload = body as Record<string, unknown>;
    const website = readString(payload.website);

    if (website) {
      return NextResponse.json({ ok: true });
    }

    const name = readString(payload.name);
    const email = readString(payload.email);
    const phone = readString(payload.phone);
    const company = readString(payload.company);
    const service = readString(payload.service);
    const subject = readString(payload.subject);
    const message = readString(payload.message);

    if (name.length < 2 || name.length > 120) {
      return NextResponse.json(
        { error: "Please enter a valid name." },
        { status: 400 }
      );
    }

    if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (message.length < 10 || message.length > 5000) {
      return NextResponse.json(
        { error: "Please enter a message between 10 and 5000 characters." },
        { status: 400 }
      );
    }

    if (
      phone.length > 80 ||
      company.length > 160 ||
      service.length > 160 ||
      subject.length > 200
    ) {
      return NextResponse.json(
        { error: "One or more fields are too long." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey) {
      return NextResponse.json(
        { error: "Contact service is temporarily unavailable." },
        { status: 503 }
      );
    }

    const resend = new Resend(resendApiKey);
    const enquiryType = cleanSubject(subject || service || "general enquiry");

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "-");
    const safeCompany = escapeHtml(company || "-");
    const safeService = escapeHtml(service || "general enquiry");
    const safeSubject = escapeHtml(subject || "-");
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>");

    const { error } = await resend.emails.send({
      from: "Phogole Resources <no-reply@phogoleresources.co.za>",
      to: ["info@phogoleresources.co.za"],
      replyTo: email,
      subject: `New Website Enquiry: ${enquiryType}`,
      text: [
        "New Website Enquiry",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone || "-"}`,
        `Company: ${company || "-"}`,
        `Service: ${service || "general enquiry"}`,
        `Subject: ${subject || "-"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
          <h2>New Website Enquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Phone:</strong> ${safePhone}</p>
          <p><strong>Company:</strong> ${safeCompany}</p>
          <p><strong>Service:</strong> ${safeService}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Contact email delivery failed.");
      return NextResponse.json(
        { error: "Unable to send your message right now. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
