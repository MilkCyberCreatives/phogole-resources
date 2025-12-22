"use client";

import { useMemo, useState, type FormEvent } from "react";
import { ArrowRight } from "lucide-react";

type StatusType = "idle" | "loading" | "success" | "error";

type Touched = {
  name: boolean;
  email: boolean;
  message: boolean;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string; // honeypot
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);

  const [status, setStatus] = useState<{ type: StatusType; message: string }>({
    type: "idle",
    message: "",
  });

  const [touched, setTouched] = useState<Touched>({
    name: false,
    email: false,
    message: false,
  });

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    service: "general",
    message: "",
    website: "",
  });

  const { isValid, errors } = useMemo(() => {
    const nextErrors: Errors = {};

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();
    const website = form.website.trim();

    if (!name) nextErrors.name = "Name is required";
    else if (name.length < 2) nextErrors.name = "Name must be at least 2 characters";

    if (!email) nextErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address";
    }

    if (!message) nextErrors.message = "Message is required";
    else if (message.length < 10) nextErrors.message = "Message must be at least 10 characters";

    // Honeypot (bots)
    if (website !== "") nextErrors.website = "Spam detected";

    return {
      isValid: Object.keys(nextErrors).length === 0,
      errors: nextErrors,
    };
  }, [form]);

  const canSubmit = isValid && !submitting;

  const handleBlur = (field: keyof Touched) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const inputClasses = (field: keyof Touched) =>
    `h-11 w-full border-b bg-transparent px-0 text-sm text-brand-secondary outline-none placeholder:text-brand-secondary/35 transition ${
      errors[field] && touched[field]
        ? "border-red-500 focus:border-red-500"
        : "border-black/15 focus:border-brand-primary"
    }`;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Touch required fields (so errors show)
    setTouched({ name: true, email: true, message: true });

    if (!isValid) {
      setStatus({ type: "error", message: "Please fix the errors in the form." });
      return;
    }

    setSubmitting(true);
    setStatus({ type: "loading", message: "sending..." });

    try {
      // include website (honeypot) so your API can detect bots
      const submissionData = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        service: form.service,
        message: form.message.trim(),
        website: form.website.trim(),
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });

      const data: any = await res.json().catch(() => ({}));

      if (!res.ok) {
        const msg = data?.error || data?.message || `Error ${res.status}: Please try again.`;
        throw new Error(msg);
      }

      setStatus({
        type: "success",
        message: "Message sent successfully. We'll get back to you soon.",
      });

      setForm({
        name: "",
        email: "",
        phone: "",
        service: "general",
        message: "",
        website: "",
      });

      setTouched({ name: false, email: false, message: false });
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : "Network error. Please try again or email info@phogoleresources.co.za";

      setStatus({
        type: "error",
        message,
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 grid gap-7" noValidate>
      {/* Honeypot (hidden from users, bots may fill it) */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input
          type="text"
          id="website"
          name="website"
          value={form.website}
          onChange={(e) => setForm({ ...form, website: e.target.value })}
          tabIndex={-1}
          autoComplete="off"
          className="sr-only"
        />
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-brand-secondary/60">
              full name *
            </label>
            {errors.name && touched.name && (
              <span className="text-xs text-red-500">{errors.name}</span>
            )}
          </div>
          <input
            className={inputClasses("name")}
            placeholder="your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            onBlur={() => handleBlur("name")}
            required
            disabled={submitting}
          />
        </div>

        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-brand-secondary/60">
              email *
            </label>
            {errors.email && touched.email && (
              <span className="text-xs text-red-500">{errors.email}</span>
            )}
          </div>
          <input
            className={inputClasses("email")}
            placeholder="your email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            onBlur={() => handleBlur("email")}
            required
            disabled={submitting}
          />
        </div>
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <div className="grid gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-brand-secondary/60">
            phone
          </label>
          <input
            className="h-11 w-full border-b border-black/15 bg-transparent px-0 text-sm text-brand-secondary outline-none placeholder:text-brand-secondary/35 focus:border-brand-primary transition"
            placeholder="optional"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            disabled={submitting}
          />
        </div>

        <div className="grid gap-2">
          <label className="text-xs font-bold uppercase tracking-wider text-brand-secondary/60">
            service
          </label>
          <select
            className="h-11 w-full border-b border-black/15 bg-transparent px-0 text-sm text-brand-secondary outline-none focus:border-brand-primary transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
            disabled={submitting}
          >
            <option value="general">general enquiry</option>
            <option value="groundwater monitoring">groundwater monitoring</option>
            <option value="minerals exploration & beneficiation">
              minerals exploration & beneficiation
            </option>
            <option value="underground secondary support">
              underground secondary support
            </option>
          </select>
        </div>
      </div>

      <div className="grid gap-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold uppercase tracking-wider text-brand-secondary/60">
            message *
          </label>
          {errors.message && touched.message && (
            <span className="text-xs text-red-500">{errors.message}</span>
          )}
        </div>
        <textarea
          className={`min-h-[130px] w-full resize-none border-b bg-transparent px-0 py-2 text-sm text-brand-secondary outline-none placeholder:text-brand-secondary/35 transition ${
            errors.message && touched.message
              ? "border-red-500 focus:border-red-500"
              : "border-black/15 focus:border-brand-primary"
          }`}
          placeholder="scope • location • timeline"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          onBlur={() => handleBlur("message")}
          required
          disabled={submitting}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-brand-primary px-7 text-sm font-extrabold text-black hover:brightness-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
              sending...
            </>
          ) : (
            <>
              send message
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>

        <p className="text-xs font-semibold text-brand-secondary/55">
          response time: same day (business hours)
        </p>
      </div>

      {status.type !== "idle" && status.message && (
        <div
          className={`rounded-lg p-4 text-sm ${
            status.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : status.type === "error"
              ? "bg-red-50 text-red-800 border border-red-200"
              : "bg-black/5 text-brand-secondary border border-black/10"
          }`}
        >
          {status.message}
        </div>
      )}
    </form>
  );
}
