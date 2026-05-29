"use client";

import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import { Eyebrow, SectionTitle } from "./primitives";

/** Shape of the booking form. */
type FormState = {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  guests: string;
  date: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;
type Status = "idle" | "submitting" | "success";

const EVENT_TYPES = ["Wedding", "Private Dinner", "Corporate", "Birthday", "Other"] as const;

const EMPTY: FormState = {
  name: "",
  email: "",
  phone: "",
  eventType: "",
  guests: "",
  date: "",
  message: "",
};

/** Shared input styling. */
const FIELD =
  "w-full rounded-sm border border-charcoal/15 bg-cream px-4 py-3 font-body text-sm text-charcoal placeholder:text-soft-brown/60 transition-colors focus:border-terracotta focus:outline-none focus:ring-2 focus:ring-terracotta/20";

export function ContactForm() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState<FormState>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>("idle");

  const update =
    (key: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((f) => ({ ...f, [key]: e.target.value }));
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    };

  function validate(values: FormState): Errors {
    const next: Errors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Please enter a valid email.";
    if (!values.eventType) next.eventType = "Please choose an event type.";
    if (values.guests && Number(values.guests) <= 0)
      next.guests = "Guest count must be positive.";
    return next;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // never reload the page
    const found = validate(form);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }
    setStatus("submitting");
    // Simulate a network request — no real backend.
    await new Promise((resolve) => setTimeout(resolve, 1100));
    setStatus("success");
  }

  // Success state
  if (status === "success") {
    return (
      <section id="contact" className="bg-cream py-24 sm:py-32">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center rounded-sm border border-honey/30 bg-warm-white p-12 text-center shadow-lg"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-terracotta text-cream">
              <Check className="h-8 w-8" />
            </span>
            <h2 className="mt-6 font-display text-3xl font-medium uppercase tracking-[0.1em] text-charcoal">
              Thank You
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-soft-brown">
              Your booking request is in, {form.name.split(" ")[0] || "friend"}.
              We&apos;ll be in touch shortly to start crafting your menu.
            </p>
            <p className="mt-6 font-display text-xl italic text-terracotta">
              Rooted in heritage.
            </p>
            <button
              type="button"
              onClick={() => {
                setForm(EMPTY);
                setStatus("idle");
              }}
              className="mt-8 rounded-full border border-terracotta px-7 py-3 font-body text-xs font-semibold uppercase tracking-[0.18em] text-terracotta transition-colors hover:bg-terracotta hover:text-cream"
            >
              Send Another Request
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <Eyebrow rules>Let&apos;s Talk</Eyebrow>
          <SectionTitle className="mt-5">Book Your Event</SectionTitle>
          <p className="mx-auto mt-6 max-w-xl font-body text-base leading-relaxed text-soft-brown">
            Share a few details and we&apos;ll reach out to design a menu around
            your celebration.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-12 grid gap-6 sm:grid-cols-2">
          {/* Name */}
          <Field label="Name" htmlFor="name" error={errors.name} required>
            <input
              id="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={update("name")}
              aria-invalid={!!errors.name}
              className={FIELD}
              placeholder="Your full name"
            />
          </Field>

          {/* Email */}
          <Field label="Email" htmlFor="email" error={errors.email} required>
            <input
              id="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={update("email")}
              aria-invalid={!!errors.email}
              className={FIELD}
              placeholder="you@email.com"
            />
          </Field>

          {/* Phone */}
          <Field label="Phone" htmlFor="phone">
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={update("phone")}
              className={FIELD}
              placeholder="(000) 000-0000"
            />
          </Field>

          {/* Event Type */}
          <Field label="Event Type" htmlFor="eventType" error={errors.eventType} required>
            <select
              id="eventType"
              value={form.eventType}
              onChange={update("eventType")}
              aria-invalid={!!errors.eventType}
              className={`${FIELD} appearance-none`}
            >
              <option value="" disabled>
                Select an event type
              </option>
              {EVENT_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>

          {/* Guest Count */}
          <Field label="Guest Count" htmlFor="guests" error={errors.guests}>
            <input
              id="guests"
              type="number"
              min={1}
              value={form.guests}
              onChange={update("guests")}
              aria-invalid={!!errors.guests}
              className={FIELD}
              placeholder="e.g. 50"
            />
          </Field>

          {/* Event Date */}
          <Field label="Event Date" htmlFor="date">
            <input
              id="date"
              type="date"
              value={form.date}
              onChange={update("date")}
              className={FIELD}
            />
          </Field>

          {/* Message */}
          <div className="sm:col-span-2">
            <Field label="Message" htmlFor="message">
              <textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={update("message")}
                className={`${FIELD} resize-none`}
                placeholder="Tell us about your event, your vision, and any dietary needs…"
              />
            </Field>
          </div>

          {/* Submit */}
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-8 py-4 font-body text-xs font-semibold uppercase tracking-[0.18em] text-cream shadow-md transition-colors hover:bg-rust disabled:cursor-not-allowed disabled:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-charcoal"
            >
              {status === "submitting" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                "Request Your Date"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

/** Labeled field wrapper with inline error messaging. */
function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-charcoal"
      >
        {label}
        {required && <span className="ml-1 text-terracotta">*</span>}
      </label>
      {children}
      {error && (
        <span role="alert" className="font-body text-xs text-rust">
          {error}
        </span>
      )}
    </div>
  );
}
