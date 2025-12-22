"use client";

import { useMemo, useState } from "react";
import Reveal from "../ui/Reveal";

type Status =
  | { type: "idle"; message: "" }
  | { type: "loading"; message: "sending..." }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

export default function ContactSection() {
  const [status, setStatus] = useState<Status>({ type: "idle", message: "" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    website: "", // honeypot
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  /** validation */
  const validation = useMemo(() => {
    const name = form.name.trim();
    const email = form.email.trim();
    const subject = form.subject.trim();
    const message = form.message.trim();
    const website = form.website.trim();

    const nameOk = name.length >= 2;
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const subjectOk = subject.length >= 3;
    const messageOk = message.length >= 15;
    const honeypotOk = website.length === 0;

    const allValid = nameOk && emailOk && subjectOk && messageOk && honeypotOk;

    return {
      name: { valid: nameOk, message: nameOk ? "" : "Name must be at least 2 characters" },
      email: { valid: emailOk, message: emailOk ? "" : "Please enter a valid email" },
      subject: { valid: subjectOk, message: subjectOk ? "" : "Subject must be at least 3 characters" },
      message: { valid: messageOk, message: messageOk ? "" : "Message must be at least 15 characters" },
      honeypot: { valid: honeypotOk },
      allValid,
    };
  }, [form]);

  const canSubmit = validation.allValid && status.type !== "loading";

  function handleBlur(field: keyof typeof touched) {
    setTouched((prev) => ({ ...prev, [field]: true }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    // mark as touched so errors show
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (!validation.allValid || status.type === "loading") return;

    setStatus({ type: "loading", message: "sending..." });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          company: form.company.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          website: form.website.trim(), // keep honeypot
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || "Failed to send message.");

      setStatus({
        type: "success",
        message: "Message sent. We'll get back to you shortly.",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        company: "",
        subject: "",
        message: "",
        website: "",
      });

      setTouched({
        name: false,
        email: false,
        subject: false,
        message: false,
      });
    } catch (err: any) {
      setStatus({
        type: "error",
        message: err?.message || "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <section className="bg-white py-12 sm:py-16" id="contact">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT: INFO */}
          <Reveal className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4a4746]/70">
              contact
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#4a4746] sm:text-3xl">
              speak to our team
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#4a4746]/80">
              Share your scope and timelines. We'll respond with practical next steps and clear deliverables.
            </p>

            <div className="mt-8 space-y-5">
              <InfoLine label="phone" value="083 712 7329" href="tel:0837127329" />
              <InfoLine
                label="email"
                value="info@phogoleresources.co.za"
                href="mailto:info@phogoleresources.co.za"
              />
              <InfoLine label="location" value="South Africa" />
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="tel:0837127329"
                className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium text-white transition hover:opacity-95 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-[#989e35]/35 focus:ring-offset-2"
                style={{ backgroundColor: "#989e35" }}
              >
                call now
              </a>

              <a
                href="/docs/phogole-resources-company-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm font-medium text-[#4a4746]
                  transition
                  hover:bg-[#4a4746]/5 hover:border-[#989e35]/50
                  focus:outline-none focus:ring-2 focus:ring-[#989e35]/25 focus:ring-offset-2
                  active:scale-[0.99]
                "
                style={{ borderColor: "rgba(74,71,70,0.18)" }}
              >
                view company profile (pdf)
              </a>
            </div>

            <div className="mt-10 h-px w-full bg-[#4a4746]/10" />

            <p className="mt-6 text-sm text-[#4a4746]/75">
              For faster processing, include site location, access requirements, and reporting needs.
            </p>
          </Reveal>

          {/* RIGHT: FORM */}
          <Reveal className="lg:col-span-7" delayMs={90}>
            <div
              className="
                group rounded-3xl border bg-white
                transition
                hover:-translate-y-[1px]
                hover:border-[#989e35]/45
                focus-within:border-[#989e35]/55
                focus-within:ring-2 focus-within:ring-[#989e35]/18
              "
              style={{ borderColor: "rgba(74,71,70,0.14)" }}
            >
              <div className="px-6 py-8 sm:px-10 sm:py-10">
                <div className="flex items-center gap-3">
                  <span
                    className="h-2.5 w-2.5 rounded-full transition group-hover:scale-110"
                    style={{ backgroundColor: "#989e35" }}
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-semibold text-[#4a4746]">
                    send a message
                  </h3>
                </div>

                <p className="mt-2 text-sm text-[#4a4746]/75">
                  Fields marked * are required.
                </p>

                <form onSubmit={onSubmit} className="mt-7 space-y-5" noValidate>
                  {/* Honeypot */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      value={form.website}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, website: e.target.value }))
                      }
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="full name *"
                      value={form.name}
                      onChange={(v) => setForm((p) => ({ ...p, name: v }))}
                      onBlur={() => handleBlur("name")}
                      error={touched.name ? validation.name.message : ""}
                      placeholder="Your name"
                      required
                    />
                    <Field
                      label="email *"
                      type="email"
                      value={form.email}
                      onChange={(v) => setForm((p) => ({ ...p, email: v }))}
                      onBlur={() => handleBlur("email")}
                      error={touched.email ? validation.email.message : ""}
                      placeholder="you@email.com"
                      required
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field
                      label="phone"
                      value={form.phone}
                      onChange={(v) => setForm((p) => ({ ...p, phone: v }))}
                      placeholder="083 712 7329"
                    />
                    <Field
                      label="company"
                      value={form.company}
                      onChange={(v) => setForm((p) => ({ ...p, company: v }))}
                      placeholder="Company name"
                    />
                  </div>

                  <Field
                    label="subject *"
                    value={form.subject}
                    onChange={(v) => setForm((p) => ({ ...p, subject: v }))}
                    onBlur={() => handleBlur("subject")}
                    error={touched.subject ? validation.subject.message : ""}
                    placeholder="What is this about?"
                    required
                  />

                  <TextArea
                    label="message *"
                    value={form.message}
                    onChange={(v) => setForm((p) => ({ ...p, message: v }))}
                    onBlur={() => handleBlur("message")}
                    error={touched.message ? validation.message.message : ""}
                    placeholder="Tell us about your scope, timelines, and requirements..."
                    required
                  />

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      disabled={!canSubmit}
                      className="
                        inline-flex items-center justify-center rounded-xl px-8 py-3 text-sm font-medium text-white
                        transition
                        hover:opacity-95 active:scale-[0.99]
                        focus:outline-none focus:ring-2 focus:ring-[#989e35]/35 focus:ring-offset-2
                        disabled:opacity-60 disabled:cursor-not-allowed
                      "
                      style={{ backgroundColor: "#989e35" }}
                    >
                      {status.type === "loading" ? (
                        <span className="flex items-center gap-2">
                          <span className="h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          sending...
                        </span>
                      ) : (
                        "send message"
                      )}
                    </button>

                    <span className="text-xs text-[#4a4746]/60">
                      Response within 24–48 hours (business days).
                    </span>
                  </div>

                  {status.type !== "idle" && (
                    <div
                      className={`mt-4 rounded-xl border px-4 py-3 text-sm ${
                        status.type === "success"
                          ? "border-green-400/35 bg-green-50 text-green-800"
                          : "border-red-400/35 bg-red-50 text-red-800"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}
                </form>
              </div>

              <div className="h-1 w-full" style={{ backgroundColor: "#989e35" }} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function InfoLine({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="group">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#4a4746]/60">
        {label}
      </p>

      {href ? (
        <a
          href={href}
          className="
            mt-1 inline-block text-sm font-medium text-[#4a4746]
            transition
            hover:opacity-90
            underline underline-offset-4 decoration-transparent
            hover:decoration-[#989e35]/70
          "
        >
          {value}
        </a>
      ) : (
        <p className="mt-1 text-sm font-medium text-[#4a4746]">{value}</p>
      )}
    </div>
  );
}

interface FieldProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  error?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

function Field({
  label,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  type = "text",
  required = false,
}: FieldProps) {
  const id = `field-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="group">
      <label htmlFor={id} className="text-sm font-medium text-[#4a4746]">
        {label}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`
          mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#4a4746] outline-none
          transition
          focus:ring-2 focus:ring-[#989e35]/18
          hover:border-[#989e35]/45
          ${error ? "border-red-300" : "border-[rgba(74,71,70,0.18)]"}
        `}
        autoComplete="off"
        required={required}
      />

      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
}

function TextArea({
  label,
  value,
  onChange,
  onBlur,
  error,
  placeholder,
  required = false,
}: TextAreaProps) {
  const id = `textarea-${label.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <div className="group">
      <label htmlFor={id} className="text-sm font-medium text-[#4a4746]">
        {label}
      </label>

      <textarea
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        rows={6}
        className={`
          mt-2 w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm text-[#4a4746] outline-none
          transition
          focus:ring-2 focus:ring-[#989e35]/18
          hover:border-[#989e35]/45
          ${error ? "border-red-300" : "border-[rgba(74,71,70,0.18)]"}
        `}
        required={required}
      />

      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
