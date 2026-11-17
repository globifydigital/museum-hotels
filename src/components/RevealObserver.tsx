"use client";

import { useEffect } from "react";

const ONCE = ".reveal, .reveal-img, .reveal-stagger, .blur-text";

/**
 * Wraps every word of a .blur-text element in <span class="bw"> with its own delay (--wd), keeping any child elements
 * (links, <br>) intact. Longer passages use a shorter step so a heading resolves in well under a second.
 */
function splitWords(el: HTMLElement) {
  if (el.dataset.split) return;
  const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
  const nodes: Text[] = [];
  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    if (node.data.trim()) nodes.push(node);
  }
  // In a flex/grid container every word span would become its own item, so first wrap that container's
  // content in one span: it then forms a single item, exactly like the anonymous text item it replaces.
  for (const parent of new Set(nodes.map((n) => n.parentElement!))) {
    if (!/flex|grid/.test(getComputedStyle(parent).display)) continue;
    const wrap = document.createElement("span");
    wrap.append(...parent.childNodes);
    parent.append(wrap);
  }
  const total = nodes.reduce((n, t) => n + t.data.trim().split(/\s+/).length, 0);
  const step = Math.min(40, 160 / Math.max(total, 1));
  let i = 0;
  for (const node of nodes) {
    const frag = document.createDocumentFragment();
    for (const part of node.data.split(/(\s+)/)) {
      if (!part) continue;
      if (/^\s+$/.test(part)) {
        frag.append(part);
        continue;
      }
      const span = document.createElement("span");
      span.className = "bw";
      span.style.setProperty("--wd", `${Math.round(i++ * step)}ms`);
      span.textContent = part;
      frag.append(span);
    }
    node.replaceWith(frag);
  }
  el.dataset.split = "1";
}

/*
 * Adds `is-visible` to `.reveal`, `.reveal-img` and `.reveal-stagger` elements the first time they scroll into view,
 * and toggles `in-view` on `.play-in-view` elements so looping animations only run while visible.
 * The hidden start states only apply under `html.js` (set by an inline script), so nothing is hidden without JS.
 * Under prefers-reduced-motion the CSS turns these into plain fades (no movement), so the same logic runs.
 *
 * One-time reveals use a rAF-throttled position check rather than IntersectionObserver: Chrome counts an element's
 * own clip-path, so an image wiped to nothing (clip-path: inset(100% 0 0 0)) would never be reported as visible.
 */
export default function RevealObserver() {
  useEffect(() => {
    document.querySelectorAll<HTMLElement>(".blur-text").forEach(splitWords);
    let pending = [...document.querySelectorAll<HTMLElement>(ONCE)];
    const live = document.querySelectorAll<HTMLElement>(".play-in-view");

    let frame = 0;
    const check = () => {
      frame = 0;
      const line = window.innerHeight * 0.95;
      pending = pending.filter((el) => {
        const r = el.getBoundingClientRect();
        // Anything at or above the reveal line counts, so jumping down the page never leaves content hidden above.
        if (r.top < line) {
          el.classList.add("is-visible");
          return false;
        }
        return true;
      });
      if (!pending.length) {
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(check);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    check();

    const loop = new IntersectionObserver((entries) => {
      for (const e of entries) e.target.classList.toggle("in-view", e.isIntersecting);
    });
    live.forEach((el) => loop.observe(el));

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      loop.disconnect();
    };
  }, []);

  return null;
}
