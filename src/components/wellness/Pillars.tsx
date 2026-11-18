"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PILLARS } from "@/data/wellness";
import s from "../page/Section.module.css";
import styles from "./Pillars.module.css";

/*
 * Sticky storytelling: on desktop the photo column stays pinned while the three practices scroll past, and the
 * photo cross-fades to whichever practice is in the middle of the screen. On phones each practice shows its own photo.
 */
export default function Pillars() {
  const [active, setActive] = useState(0);
  const blocks = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    blocks.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section className={`${s.section} ${styles.section}`} aria-labelledby="pillars-title">
      <div className={`${s.wrap} ${styles.grid}`}>
        <div className={styles.sticky} aria-hidden="true">
          <div className={`${styles.stage} reveal-img`}>
            {PILLARS.map((p, i) => (
              <div key={p.name} className={`${styles.slide} ${i === active ? styles.slideActive : ""}`}>
                <Image src={p.image} alt="" fill sizes="(max-width: 899px) 1px, 42vw" />
              </div>
            ))}
            <div className={styles.counter}>
              <span key={active} className={styles.counterNow}>
                0{active + 1}
              </span>
              <span>/ 0{PILLARS.length}</span>
            </div>
          </div>
        </div>

        <div className={styles.blocks}>
          <div className={styles.intro}>
            <p className={`${s.eyebrow} reveal`}>Three traditions</p>
            <h2 className={`${s.title} blur-text`} id="pillars-title">
              Our wellness experience
            </h2>
          </div>

          {PILLARS.map((p, i) => (
            <article
              key={p.name}
              ref={(el) => {
                blocks.current[i] = el;
              }}
              data-index={i}
              className={`${styles.block} ${i === active ? styles.blockActive : ""}`}
            >
              <div className={styles.mobilePhoto}>
                <Image src={p.image} alt={p.alt} fill sizes="(max-width: 899px) 100vw, 1px" />
              </div>
              <span className={styles.num}>0{i + 1}</span>
              <p className={styles.subtitle}>{p.subtitle}</p>
              <h3 className={styles.name}>{p.name}</h3>
              <p className={s.body}>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
