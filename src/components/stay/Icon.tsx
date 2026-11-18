import type { ReactNode } from "react";
import type { InRoomIcon } from "@/data/stay";

/* Line icons for the in-room amenities, drawn on a 32px grid with a 1.4 stroke to match the type weight. */
const PATHS: Record<InRoomIcon | "check", ReactNode> = {
  ceiling: (
    <>
      <path d="M4 9 16 4l12 5" />
      <path d="M7 10v17M25 10v17M4 27h24" />
      <path d="M12 27v-8a4 4 0 0 1 8 0v8" />
    </>
  ),
  snow: (
    <>
      <path d="M16 4v24M5.6 10l20.8 12M5.6 22 26.4 10" />
      <path d="m13 6 3 2.5L19 6M13 26l3-2.5 3 2.5" />
    </>
  ),
  glass: (
    <>
      <path d="M9 5h14l-1.5 9a5.5 5.5 0 0 1-11 0L9 5Z" />
      <path d="M16 19.5V27M11 27h10M9.6 10h12.8" />
    </>
  ),
  bed: (
    <>
      <path d="M4 25V8M4 19h24v6M28 19v-3a4 4 0 0 0-4-4H14v7" />
      <circle cx="9" cy="14.5" r="2.5" />
    </>
  ),
  leaf: (
    <>
      <path d="M7 25C7 13 14 7 26 6c0 12-6 19-17 19" />
      <path d="M7 25 18 14" />
    </>
  ),
  spark: (
    <>
      <path d="M16 4c0 6 2 8 8 8-6 0-8 2-8 8 0-6-2-8-8-8 6 0 8-2 8-8Z" />
      <path d="M24 20c0 3 1 4 4 4-3 0-4 1-4 4 0-3-1-4-4-4 3 0 4-1 4-4Z" />
    </>
  ),
  check: <path d="m7 16.5 6 6L25 10" />,
};

export default function Icon({ name, className }: { name: InRoomIcon | "check"; className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
