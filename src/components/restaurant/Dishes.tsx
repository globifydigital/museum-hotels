"use client";

import Image from "@/components/ui/Img";
import { useEffect, useRef, useState } from "react";
import { DISHES } from "@/data/restaurant";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./Dishes.module.css";

/*
 * "From the kitchen": a snap-scrolling row of dish cards. Swipe or scroll on touch; arrows and a progress line on
 * desktop. The row starts at the page's left margin and bleeds off the right edge.
 */
export default function Dishes() {
  const track = useRef<HTMLUListElement>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const update = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
      setAtStart(el.scrollLeft < 4);
      setAtEnd(el.scrollLeft > max - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const step = (dir: 1 | -1) => {
    const el = track.current;
    const card = el?.querySelector("li");
    if (!el || !card) return;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    el.scrollBy({ left: dir * (card.getBoundingClientRect().width + gap), behavior: "smooth" });
  };

  return (
    <section className={`${s.section} ${s.cream} ${styles.section}`} aria-labelledby="dishes-title">
      <div className={`${s.wrap} ${styles.head}`}>
        <div>
          <p className={`${s.eyebrow} reveal`}>From the kitchen</p>
          <h2 className={`${s.title} ${styles.title} blur-text`} id="dishes-title" style={delay(100)}>
            Plates to remember
          </h2>
        </div>
        <div className={`${styles.controls} reveal`} style={delay(200)}>
          <button type="button" className={styles.arrow} onClick={() => step(-1)} disabled={atStart}>
            <span aria-hidden="true">←</span>
            <span className="visually-hidden">Previous dishes</span>
          </button>
          <button type="button" className={styles.arrow} onClick={() => step(1)} disabled={atEnd}>
            <span aria-hidden="true">→</span>
            <span className="visually-hidden">More dishes</span>
          </button>
        </div>
      </div>

      <ul ref={track} className={`${styles.track} reveal-stagger`} aria-label="Dishes">
        {DISHES.map((d, i) => (
          <li key={d.name} className={styles.card}>
            <div className={styles.photo}>
              <Image src={d.image} alt={d.alt} fill sizes="(max-width: 767px) 78vw, 26vw" />
              <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className={styles.name}>{d.name}</h3>
            <p className={styles.note}>{d.note}</p>
          </li>
        ))}
      </ul>

      <div className={s.wrap}>
        <div className={styles.progress} aria-hidden="true">
          <span style={{ transform: `scaleX(${0.2 + progress * 0.8})` }} />
        </div>
      </div>
    </section>
  );
}
