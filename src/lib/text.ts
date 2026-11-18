const SMALL_WORDS = new Set(["of", "the", "and"]);

/** "RHYTHM OF MALABAR DELUXE" → "Rhythm of Malabar Deluxe". */
export const titleCase = (name: string) =>
  name
    .toLowerCase()
    .split(" ")
    .map((w, i) => (i > 0 && SMALL_WORDS.has(w) ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
