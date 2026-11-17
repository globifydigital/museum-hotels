import type { CSSProperties } from "react";

/** Stagger delay for a `.reveal` / `.reveal-img` element, e.g. style={delay(120)}. */
export const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
