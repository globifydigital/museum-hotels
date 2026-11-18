import Image from "next/image";
import Link from "next/link";
import { ALL_STAY_ROOMS, roomHref, type StayRoom } from "@/data/stay";
import { delay } from "@/lib/reveal";
import { titleCase } from "@/lib/text";
import s from "../page/Section.module.css";
import RoomCard from "../stay/RoomCard";
import styles from "./MoreRooms.module.css";

/** Up to three other rooms: same category first, then the rooms that follow this one. */
const suggestions = (room: StayRoom) => {
  const i = ALL_STAY_ROOMS.findIndex((r) => r.id === room.id);
  const following = [...ALL_STAY_ROOMS.slice(i + 1), ...ALL_STAY_ROOMS.slice(0, i)];
  const same = following.filter((r) => r.category === room.category);
  return [...same, ...following.filter((r) => !same.includes(r))].slice(0, 3);
};

/* "More rooms" cards, then large previous / next links that walk through every room in order. */
export default function MoreRooms({ room }: { room: StayRoom }) {
  const i = ALL_STAY_ROOMS.findIndex((r) => r.id === room.id);
  const n = ALL_STAY_ROOMS.length;
  const prev = ALL_STAY_ROOMS[(i - 1 + n) % n];
  const next = ALL_STAY_ROOMS[(i + 1) % n];

  return (
    <>
      <section className={`${s.section} ${s.cream}`} aria-labelledby="more-title">
        <div className={s.wrap}>
          <div className={styles.head}>
            <div>
              <p className={`${s.eyebrow} reveal`}>Keep exploring</p>
              <h2 className={`${s.title} ${styles.title} blur-text`} id="more-title" style={delay(100)}>
                More rooms
              </h2>
            </div>
            <Link href="/stay#rooms" className={`${s.textLink} reveal`} style={delay(200)}>
              View all rooms →
            </Link>
          </div>
          <ul className={styles.grid}>
            {suggestions(room).map((r, idx) => (
              <li key={r.id} className={`${styles.cell} reveal`} style={delay(idx * 120)}>
                <RoomCard room={r} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <nav className={styles.pager} aria-label="Previous and next room">
        {[
          { label: "Previous room", r: prev, cls: styles.prev },
          { label: "Next room", r: next, cls: styles.next },
        ].map(({ label, r, cls }) => (
          <Link key={label} href={roomHref(r.id)} className={`${styles.pagerLink} ${cls}`}>
            <span className={styles.pagerImage} aria-hidden="true">
              <Image src={r.image} alt="" fill sizes="50vw" />
            </span>
            <span className={styles.pagerText}>
              <span className={styles.pagerLabel}>{label}</span>
              <span className={styles.pagerName}>{titleCase(r.name)}</span>
            </span>
          </Link>
        ))}
      </nav>
    </>
  );
}
