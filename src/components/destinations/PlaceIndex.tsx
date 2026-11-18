"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import { PLACE_FILTERS, PLACES } from "@/data/destinations";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./PlaceIndex.module.css";

type Filter = (typeof PLACE_FILTERS)[number];

/*
 * Destinations as a museum-style index: numbered rows that expand in place (a disclosure per row) to show the photo,
 * the story and practical notes. Filter chips narrow the list by kind.
 */
export default function PlaceIndex() {
  const [filter, setFilter] = useState<Filter>("All");
  const [open, setOpen] = useState<string | null>(PLACES[0].id);
  const places = filter === "All" ? PLACES : PLACES.filter((p) => p.category === filter);

  return (
    <section className={`${s.section} ${s.cream}`} id="destinations" aria-labelledby="places-title">
      <div className={s.wrap}>
        <div className={styles.head}>
          <div>
            <p className={`${s.eyebrow} reveal`}>Destinations</p>
            <h2 className={`${s.title} ${styles.title} blur-text`} id="places-title" style={delay(100)}>
              Worth the journey
            </h2>
          </div>
          <div className={`${styles.filters} reveal`} role="group" aria-label="Filter destinations" style={delay(200)}>
            {PLACE_FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className={styles.filter}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <ol className={styles.list}>
          {places.map((p, i) => {
            const isOpen = open === p.id;
            const panelId = `place-${p.id}`;
            return (
              <li
                key={`${filter}-${p.id}`}
                id={p.id}
                className={`${styles.row} ${isOpen ? styles.open : ""}`}
                style={{ "--i": i } as CSSProperties}
              >
                <h3 className={styles.rowHead}>
                  <button
                    type="button"
                    className={styles.toggle}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : p.id)}
                  >
                    <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                    <span className={styles.name}>{p.name}</span>
                    <span className={styles.category}>{p.category}</span>
                    <span className={styles.icon} aria-hidden="true" />
                  </button>
                </h3>

                <div className={styles.panel} id={panelId} role="region" aria-label={p.name} inert={!isOpen}>
                  <div className={styles.panelInner}>
                    <div className={styles.photo}>
                      <Image src={p.image} alt={p.alt} fill sizes="(max-width: 767px) 100vw, 506px" />
                    </div>
                    <div className={styles.text}>
                      <p className={styles.summary}>{p.summary}</p>
                      {p.body.map((b) => (
                        <p key={b.slice(0, 20)} className={s.body}>
                          {b}
                        </p>
                      ))}
                      {p.facts && (
                        <dl className={styles.facts}>
                          {p.facts.map((f) => (
                            <div key={f.label}>
                              <dt>{f.label}</dt>
                              <dd>{f.value}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
