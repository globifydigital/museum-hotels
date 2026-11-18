"use client";

import { useId, useState, type FormEvent } from "react";
import { CONTACT } from "@/data/contact";
import s from "./Section.module.css";
import styles from "./MailForm.module.css";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "number" | "date" | "select" | "textarea";
  required?: boolean;
  options?: string[];
  /** Half width on wide screens. */
  half?: boolean;
  autoComplete?: string;
};

type Props = {
  fields: Field[];
  /** E-mail subject; `{field}` placeholders are filled from the form, e.g. "Event enquiry: {category}". */
  subject: string;
  submitLabel: string;
  dark?: boolean;
};

/*
 * Enquiry form with floating labels. The site has no form backend yet, so submitting opens the visitor's e-mail app
 * with every answer filled in, addressed to the hotel. Swap `submit` for a fetch() to a form service later.
 */
export default function MailForm({ fields, subject, submitLabel, dark = false }: Props) {
  const id = useId();
  const [sent, setSent] = useState(false);
  const today = new Date().toISOString().slice(0, 10);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const value = (name: string) => String(data.get(name) ?? "").trim();
    const lines = fields.map((f) => `${f.label}: ${value(f.name) || "-"}`);
    const subj = subject.replace(/\{(\w+)\}/g, (_, k: string) => value(k) || "General");
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(
      lines.join("\n"),
    )}`;
    setSent(true);
  };

  return (
    <form className={`${styles.form} ${dark ? styles.dark : ""}`} onSubmit={submit}>
      <div className={styles.grid}>
        {fields.map((f) => {
          const fid = `${id}-${f.name}`;
          const common = {
            id: fid,
            name: f.name,
            required: f.required,
            autoComplete: f.autoComplete,
            className: styles.control,
            placeholder: " ",
          };
          return (
            <div key={f.name} className={`${styles.field} ${f.half ? styles.half : ""}`}>
              {f.type === "select" ? (
                <select {...common} defaultValue="">
                  <option value="" disabled>
                    Choose…
                  </option>
                  {f.options?.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              ) : f.type === "textarea" ? (
                <textarea {...common} rows={4} />
              ) : (
                <input
                  {...common}
                  type={f.type ?? "text"}
                  min={f.type === "date" ? today : f.type === "number" ? 1 : undefined}
                />
              )}
              <label htmlFor={fid} className={`${styles.label} ${f.type === "select" || f.type === "date" ? styles.labelUp : ""}`}>
                {f.label}
                {f.required && <span aria-hidden="true"> *</span>}
              </label>
              <span className={styles.line} aria-hidden="true" />
            </div>
          );
        })}
      </div>

      <div className={styles.footer}>
        <button type="submit" className={dark ? s.buttonGold : s.button}>
          {submitLabel} <span className={s.arrow}>→</span>
        </button>
        <p className={styles.note} role="status">
          {sent ? (
            <>
              Your e-mail app should now open with your message ready to send. If it didn’t, write to us at{" "}
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
            </>
          ) : (
            <>Sends from your own e-mail app, to {CONTACT.email}.</>
          )}
        </p>
      </div>
    </form>
  );
}
