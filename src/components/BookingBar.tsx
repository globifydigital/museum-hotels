"use client";

import { useEffect, useId, useState, type FormEvent } from "react";
import { BOOKING_URL, MANAGE_RESERVATIONS_URL } from "@/data/site";
import styles from "./BookingBar.module.css";

const pad = (n: number) => String(n).padStart(2, "0");
/** yyyy-mm-dd, the value format of <input type="date">. */
const toIso = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
/** dd/mm/yyyy, the display format used in the design ("04/11/2026"). */
const toDisplay = (iso: string) => {
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
};
const addDays = (iso: string, days: number) => {
  const [y, m, d] = iso.split("-").map(Number);
  return toIso(new Date(y, m - 1, d + days));
};
const range = (from: number, to: number) => Array.from({ length: to - from + 1 }, (_, i) => from + i);

type DateFieldProps = { label: string; placeholder: string; value: string; min?: string; onChange: (v: string) => void };

function DateField({ label, placeholder, value, min, onChange }: DateFieldProps) {
  const id = useId();
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={`${styles.control} ${styles.date}`}>
        <span aria-hidden="true">{value ? toDisplay(value) : placeholder}</span>
        <input
          id={id}
          type="date"
          className={styles.dateInput}
          value={value}
          min={min}
          onChange={(e) => onChange(e.target.value)}
          onClick={(e) => {
            try {
              e.currentTarget.showPicker?.();
            } catch {
              /* Not supported everywhere; the native input still works. */
            }
          }}
        />
      </div>
    </div>
  );
}

type SelectFieldProps = { label: string; value: number; options: number[]; chevron?: boolean; onChange: (v: number) => void };

function SelectField({ label, value, options, chevron = true, onChange }: SelectFieldProps) {
  const id = useId();
  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <select
        id={id}
        className={`${styles.control} ${styles.select} ${chevron ? styles.chevron : ""}`}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        {options.map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
    </div>
  );
}

/* Figma node 213:168 — frosted booking panel at the bottom of the hero. */
export default function BookingBar() {
  const [today, setToday] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [message, setMessage] = useState("");

  // Set on the client so the server render never disagrees about "today".
  useEffect(() => {
    const iso = toIso(new Date());
    setToday(iso);
    setCheckIn(iso);
  }, []);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!checkIn) return setMessage("Please choose a check-in date.");
    if (!checkOut) return setMessage("Please choose a check-out date.");
    if (checkOut <= checkIn) return setMessage("Check-out must be after check-in.");
    const params = new URLSearchParams({
      checkin: checkIn,
      checkout: checkOut,
      adults: String(adults),
      children: String(childCount),
      rooms: String(rooms),
    });
    if (BOOKING_URL) {
      window.location.href = `${BOOKING_URL}${BOOKING_URL.includes("?") ? "&" : "?"}${params}`;
      return;
    }
    setMessage(
      `Online booking is not connected yet. Your request: ${toDisplay(checkIn)} to ${toDisplay(checkOut)}, ${adults} adult(s), ${childCount} child(ren), ${rooms} room(s).`,
    );
  };

  return (
    <form className={styles.panel} id="booking" onSubmit={onSubmit} noValidate aria-label="Check availability">
      <div className={styles.row}>
        <DateField
          label="CHECK-IN DATE"
          placeholder="CHECK IN"
          value={checkIn}
          min={today}
          onChange={(v) => {
            setCheckIn(v);
            if (checkOut && v && checkOut <= v) setCheckOut("");
            setMessage("");
          }}
        />
        <DateField
          label="CHECK-OUT DATE"
          placeholder="CHECK OUT"
          value={checkOut}
          min={checkIn ? addDays(checkIn, 1) : today}
          onChange={(v) => {
            setCheckOut(v);
            setMessage("");
          }}
        />
        <SelectField label="ADULT" value={adults} options={range(1, 8)} chevron={false} onChange={setAdults} />
        <SelectField label="CHILD" value={childCount} options={range(0, 6)} onChange={setChildCount} />
        <SelectField label="ROOM" value={rooms} options={range(1, 8)} onChange={setRooms} />
        <div className={styles.buttons}>
          <button type="submit" className={styles.button}>
            BOOK NOW
          </button>
          <a href={MANAGE_RESERVATIONS_URL} className={styles.button}>
            MANAGE RESERVATIONS
          </a>
        </div>
      </div>
      <p className={styles.message} role="status" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
