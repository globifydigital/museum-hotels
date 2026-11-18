"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { enquiryHref } from "@/data/contact";
import { COLLECTION, FEATURED_ROOM, ROOM_FILTERS, roomHref } from "@/data/stay";
import { delay } from "@/lib/reveal";
import { titleCase } from "@/lib/text";
import s from "../page/Section.module.css";
import RoomCard from "./RoomCard";
import RoomSpecs from "./RoomSpecs";
import styles from "./RoomCollection.module.css";

type Filter = (typeof ROOM_FILTERS)[number];

const count = (f: Filter) => (f === "All" ? COLLECTION.length : COLLECTION.filter((r) => r.category === f).length);

/* King's Chamber as a wide feature, then the other rooms as a filterable card grid linking to each room's page. */
export default function RoomCollection() {
  const [filter, setFilter] = useState<Filter>("All");
  const rooms = filter === "All" ? COLLECTION : COLLECTION.filter((r) => r.category === filter);
  const featuredName = titleCase(FEATURED_ROOM.name);

  return (
    <>
      <section className={s.section} aria-labelledby="featured-title">
        <div className={s.wrap}>
          <article className={styles.featured} id={FEATURED_ROOM.id}>
            <Link
              href={roomHref(FEATURED_ROOM.id)}
              className={`${styles.featuredPhoto} reveal-img`}
              tabIndex={-1}
              aria-hidden="true"
            >
              <Image src={FEATURED_ROOM.image} alt="" fill sizes="(max-width: 1199px) 100vw, 94vw" />
              <span className={styles.badge}>
                {FEATURED_ROOM.category} · {FEATURED_ROOM.floor}
              </span>
            </Link>

            <div className={styles.featuredBody}>
              <div className="reveal">
                <p className={s.eyebrow}>{FEATURED_ROOM.tagline}</p>
                <h2 className={`${s.title} ${styles.featuredTitle}`} id="featured-title">
                  <Link href={roomHref(FEATURED_ROOM.id)}>{featuredName}</Link>
                </h2>
              </div>
              <p className={`${s.body} reveal`} style={delay(150)}>
                {FEATURED_ROOM.story}
              </p>
              <div className={`${styles.featuredSide} reveal`} style={delay(300)}>
                <RoomSpecs room={FEATURED_ROOM} />
                <div className={s.buttons}>
                  <Link href={roomHref(FEATURED_ROOM.id)} className={s.button}>
                    View room <span className={s.arrow}>→</span>
                  </Link>
                  <a href={enquiryHref(`Booking enquiry: ${featuredName}`)} className={s.buttonOutline}>
                    Enquire
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className={`${s.section} ${s.cream}`} id="rooms" aria-labelledby="rooms-title">
        <div className={s.wrap}>
          <div className={styles.head}>
            <div>
              <p className={`${s.eyebrow} reveal`}>The collection</p>
              <h2 className={`${s.title} ${styles.headTitle} blur-text`} id="rooms-title" style={delay(100)}>
                Rooms &amp; suites
              </h2>
            </div>
            <div className={`${styles.filters} reveal`} role="group" aria-label="Filter rooms" style={delay(200)}>
              {ROOM_FILTERS.map((f) => (
                <button
                  key={f}
                  type="button"
                  className={styles.filter}
                  aria-pressed={filter === f}
                  onClick={() => setFilter(f)}
                >
                  {f === "Royal Suite" ? "Royal Suites" : f}
                  <span className={styles.count}>{count(f)}</span>
                </button>
              ))}
            </div>
          </div>

          <p className="visually-hidden" aria-live="polite">
            Showing {rooms.length} {rooms.length === 1 ? "room" : "rooms"}
          </p>

          <ul className={styles.grid}>
            {rooms.map((room, i) => (
              <li key={`${filter}-${room.id}`} className={styles.cell}>
                <RoomCard room={room} index={i} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
