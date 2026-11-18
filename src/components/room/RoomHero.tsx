import Image from "next/image";
import Link from "next/link";
import { enquiryHref } from "@/data/contact";
import { ALL_STAY_ROOMS, type StayRoom } from "@/data/stay";
import { titleCase } from "@/lib/text";
import Nav from "../Nav";
import MaskedTitle from "../page/MaskedTitle";
import s from "../page/Section.module.css";
import styles from "./RoomHero.module.css";

/*
 * Room hero. The hotel's room photos are ~670 px wide, so instead of stretching one full-bleed, the sharp photo sits
 * in a frame at about its own size, over a blurred, enlarged copy of itself that fills the screen with its colours.
 */
export default function RoomHero({ room }: { room: StayRoom }) {
  const name = titleCase(room.name);
  const number = ALL_STAY_ROOMS.findIndex((r) => r.id === room.id) + 1;

  return (
    <section className={styles.hero} id="top" aria-labelledby="room-title">
      <div className={styles.backdrop} aria-hidden="true">
        <Image src={room.image} alt="" fill sizes="30vw" quality={40} className={styles.blur} />
      </div>

      <Nav />

      <div className={`${s.wrap} ${styles.inner}`}>
        <div className={styles.text}>
          <nav className={styles.crumbs} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/stay">Stay</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{name}</span>
          </nav>

          <p className={styles.eyebrow}>
            {room.category}
            {room.floor ? ` · ${room.floor}` : ""}
          </p>
          <MaskedTitle lines={[name]} className={styles.title} id="room-title" start={0.3} />
          <p className={styles.tagline}>{room.tagline}</p>

          <ul className={styles.facts}>
            <li>
              Sleeps <strong>{room.sleeps}</strong>
            </li>
            <li>
              <strong>{room.bed}</strong> bed
            </li>
            {room.size && (
              <li>
                <strong>{room.size}</strong>
              </li>
            )}
          </ul>

          <div className={`${s.buttons} ${styles.buttons}`}>
            <a href={enquiryHref(`Booking enquiry: ${name}`)} className={s.buttonGold}>
              Enquire about this room <span className={s.arrow}>→</span>
            </a>
            <Link href="/stay#rooms" className={`${s.buttonOutline} ${styles.ghost}`}>
              All rooms
            </Link>
          </div>
        </div>

        <figure className={styles.frame}>
          <div className={styles.photo}>
            <Image src={room.image} alt={room.imageAlt} fill priority sizes="(max-width: 899px) 100vw, 46vw" />
          </div>
          <figcaption className={styles.caption}>
            <span>
              No. {String(number).padStart(2, "0")} / {String(ALL_STAY_ROOMS.length).padStart(2, "0")}
            </span>
            <span>Ginger House Museum Hotel</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
