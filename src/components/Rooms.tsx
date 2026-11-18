"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { MORE_ROOMS, ROOMS } from "@/data/site";
import { delay } from "@/lib/reveal";
import styles from "./Rooms.module.css";

const ALL_ROOMS = [...ROOMS, ...MORE_ROOMS];

/* Heading 213:89 + Figma node 213:25 — room tabs with the selected room on a dark stage.
 * "View All" extends the block downward to reveal the remaining rooms. */
export default function Rooms() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const room = ALL_ROOMS[active];
  const count = expanded ? ALL_ROOMS.length : ROOMS.length;

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    const last = count - 1;
    const keys: Record<string, number> = {
      ArrowDown: i === last ? 0 : i + 1,
      ArrowRight: i === last ? 0 : i + 1,
      ArrowUp: i === 0 ? last : i - 1,
      ArrowLeft: i === 0 ? last : i - 1,
      Home: 0,
      End: last,
    };
    if (!(e.key in keys)) return;
    e.preventDefault();
    setActive(keys[e.key]);
    tabs.current[keys[e.key]]?.focus();
  };

  const toggle = () => {
    if (expanded && active >= ROOMS.length) setActive(0);
    setExpanded(!expanded);
  };

  const specs = [
    { term: "Sleeps", value: room.sleeps, termClass: styles.termSansation, valueClass: styles.valueOverpass },
    { term: "Size", value: room.size },
    { term: "Bed", value: room.bed, termClass: styles.termSansation, valueClass: styles.valueSystem },
  ].filter((s) => s.value);

  return (
    <section className={styles.rooms} id="stay" aria-labelledby="stay-title">
      <h2 className={`${styles.title} blur-text`} id="stay-title">
        STAY WITH US
      </h2>

      <div className={`${styles.block} ${expanded ? styles.blockExpanded : ""}`}>
        <div
          className={`${styles.tabs} reveal-stagger`}
          id={`${baseId}-tabs`}
          role="tablist"
          aria-label="Rooms"
          aria-orientation="vertical"
        >
          {ALL_ROOMS.map((r, i) => {
            const selected = i === active;
            const extra = i >= ROOMS.length;
            return (
              <button
                key={r.id}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`${baseId}-tab-${i}`}
                aria-selected={selected}
                aria-controls={`${baseId}-panel`}
                tabIndex={selected ? 0 : -1}
                inert={extra && !expanded}
                style={extra ? delay((i - ROOMS.length + 1) * 110) : undefined}
                className={[
                  styles.tab,
                  selected ? styles.tabActive : "",
                  extra ? styles.tabExtra : "",
                  extra && !expanded ? styles.tabHidden : "",
                ].join(" ")}
                onClick={() => setActive(i)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                <span className={styles.tabName}>{r.name}</span>
                <span className={styles.tabMore}>MORE</span>
              </button>
            );
          })}
        </div>

        <div className={`${styles.stage} reveal-img`}>
          <div className={styles.cover} aria-hidden="true">
            <Image src="/images/hero.jpg" alt="" fill sizes="(max-width: 1199px) 100vw, 72vw" />
          </div>

          <div
            key={room.id}
            className={styles.panel}
            role="tabpanel"
            id={`${baseId}-panel`}
            aria-labelledby={`${baseId}-tab-${active}`}
          >
            <div className={styles.photo}>
              <Image src={room.image} alt={room.imageAlt} fill sizes="(max-width: 1199px) 100vw, 63vw" />
              {room.floor && <span className={styles.badge}>{room.floor}</span>}
            </div>
            <p className={styles.description}>
              <span>{room.description}</span>
            </p>
            <dl className={styles.specs}>
              {specs.map((s) => (
                <div key={s.term} className={styles.spec}>
                  <dt className={s.termClass}>{s.term}</dt>
                  <dd className={s.valueClass}>{s.value}</dd>
                </div>
              ))}
            </dl>
            <div className={styles.links}>
              <Link href={`/stay/${room.id}`} className={styles.see}>
                See the room
              </Link>
              <a href="#booking" className={styles.book}>
                Book this room
              </a>
            </div>
          </div>

          <p className={styles.caption}>GINGER House / A room of your own</p>
        </div>
      </div>

      <button
        type="button"
        className={`${styles.viewAll} reveal`}
        aria-expanded={expanded}
        aria-controls={`${baseId}-tabs`}
        onClick={toggle}
      >
        {expanded ? "View Less" : "View All"}
      </button>
    </section>
  );
}
