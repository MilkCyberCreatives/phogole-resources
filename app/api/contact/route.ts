import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;   // from homepage form
  subject?: string;   // optional (other forms)
  message?: string;
  website?: string;   // honeypot
};

function isEmail(value: unknown): boolean {
  if (typeof value !== "string") return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { message: "Invalid content type." },
        { status: 400 }
      );
    }

    const body = (await req.json()) as Payload;

    // Honeypot (bots fill hidden field)
    if (body.website && body.website.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const phone = (body.phone || "").trim();
    const subject = (body.subject || body.service || "General enquiry").trim();
    const message = (body.message || "").trim();

    // Validation
    if (name.length < 2) {
      return NextResponse.json({ message: "Name is required." }, { status: 400 });
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { message: "A valid email is required." },
        { status: 400 }
      );
    }

    if (subject.length < 3) {
      return NextResponse.json(
        { message: "Subject is required." },
        { status: 400 }
      );
    }

    if (message.length < 15) {
      return NextResponse.json(
        { message: "Message is too short." },
        { status: 400 }
      );
    }

    // Safety limits
    if (
      message.length > 5000 ||
      subject.length > 200 ||
      name.length > 120
    ) {
      return NextResponse.json(
        { message: "Input is too long." },
        { status: 400 }
      );
    }

    // ✅ Server-side handling (visible in Vercel logs)
    console.log("[CONTACT FORM SUBMISSION]", {
      name,
      email,
      phone,
      subject,
      message,
      ip: req.headers.get("x-forwarded-for") || "unknown",
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[CONTACT FORM ERROR]", error);

    return NextResponse.json(
      { message: "Invalid request." },
      { status: 400 }
    );
  }
}
