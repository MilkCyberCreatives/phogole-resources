import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const phone = String(body?.phone || "").trim();
    const service = String(body?.service || "").trim();
    const message = String(body?.message || "").trim();

    // Honeypot (bots usually fill it)
    const website = String(body?.website || "").trim();
    if (website) {
      return NextResponse.json({ ok: true }); // silently succeed
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Send to your business inbox
    await resend.emails.send({
      from: "Phogole Resources <no-reply@phogoleresources.co.za>",
      to: ["info@phogoleresources.co.za"],
      replyTo: email,
      subject: `New Website Enquiry: ${service || "general"}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6">
          <h2>New Website Enquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "-"}</p>
          <p><strong>Service:</strong> ${service || "general"}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: "Server error. Please try again." },
      { status: 500 }
    );
  }
}
