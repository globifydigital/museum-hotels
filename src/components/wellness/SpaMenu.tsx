"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { enquiryHref } from "@/data/contact";
import { TREATMENTS } from "@/data/wellness";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./SpaMenu.module.css";

/* Spa menu as tabs: treatment groups on the left, that group's treatments on the right, each with an enquiry link. */
export default function SpaMenu() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const id = useId();
  const group = TREATMENTS[active];

  const onKeyDown = (e: KeyboardEvent, i: number) => {
    const last = TREATMENTS.length - 1;
    const map: Record<string, number> = {
      ArrowDown: i === last ? 0 : i + 1,
      ArrowRight: i === last ? 0 : i + 1,
      ArrowUp: i === 0 ? last : i - 1,
      ArrowLeft: i === 0 ? last : i - 1,
      Home: 0,
      End: last,
    };
    if (!(e.key in map)) return;
    e.preventDefault();
    setActive(map[e.key]);
    tabs.current[map[e.key]]?.focus();
  };

  return (
    <section className={`${s.section} ${s.cream}`} id="spa" aria-labelledby="spa-title">
      <div className={s.wrap}>
        <div className={styles.head}>
          <div>
            <p className={`${s.eyebrow} reveal`}>Spa menu</p>
            <h2 className={`${s.title} ${styles.title} blur-text`} id="spa-title" style={delay(100)}>
              Treatments &amp; therapies
            </h2>
          </div>
          <p className={`${s.body} ${styles.note} reveal`} style={delay(200)}>
            Prices and availability on request. Tell us what you would like and when, and we will arrange it around your
            stay.
          </p>
        </div>

        <div className={`${styles.layout} reveal`} style={delay(250)}>
          <div className={styles.tabs} role="tablist" aria-label="Treatment groups" aria-orientation="vertical">
            {TREATMENTS.map((g, i) => (
              <button
                key={g.name}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`${id}-tab-${i}`}
                aria-selected={i === active}
                aria-controls={`${id}-panel`}
                tabIndex={i === active ? 0 : -1}
                className={styles.tab}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                <span className={styles.tabName}>{g.name}</span>
                <span className={styles.tabCount}>{g.treatments.length}</span>
              </button>
            ))}
          </div>

          <div
            key={active}
            className={styles.panel}
            role="tabpanel"
            id={`${id}-panel`}
            aria-labelledby={`${id}-tab-${active}`}
          >
            <p className={styles.intro}>{group.intro}</p>
            <ul className={styles.list}>
              {group.treatments.map((t, i) => (
                <li key={t.name} className={styles.row} style={{ animationDelay: `${i * 70}ms` }}>
                  <div>
                    <h3 className={styles.name}>{t.name}</h3>
                    <p className={styles.desc}>{t.note}</p>
                  </div>
                  <a href={enquiryHref(`Spa enquiry: ${t.name}`)} className={styles.enquire}>
                    Enquire<span className="visually-hidden"> about {t.name}</span>
                    <span aria-hidden="true"> →</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
