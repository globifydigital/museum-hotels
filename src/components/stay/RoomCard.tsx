import Image from "@/components/ui/Img";
import Link from "next/link";
import type { CSSProperties } from "react";
import { enquiryHref } from "@/data/contact";
import { roomHref, type StayRoom } from "@/data/stay";
import { titleCase } from "@/lib/text";
import s from "../page/Section.module.css";
import styles from "./RoomCard.module.css";

type Props = { room: StayRoom; index?: number; className?: string; style?: CSSProperties };

/* Photo, category, name, tagline and quick specs; the photo and name open the room's page. */
export default function RoomCard({ room, index = 0, className = "", style }: Props) {
  const name = titleCase(room.name);
  return (
    <article className={`${styles.card} ${className}`} id={room.id} style={{ "--i": index, ...style } as CSSProperties}>
      <Link href={roomHref(room.id)} className={styles.photo} tabIndex={-1} aria-hidden="true">
        <Image src={room.image} alt="" fill sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 30vw" />
        <span className={styles.hover}>View room</span>
      </Link>
      <div className={styles.body}>
        <p className={styles.category}>{room.category}</p>
        <h3 className={styles.title}>
          <Link href={roomHref(room.id)}>{name}</Link>
        </h3>
        <p className={styles.tagline}>{room.tagline}</p>
        <p className={styles.meta}>
          Sleeps {room.sleeps} · {room.bed} bed{room.floor ? ` · ${room.floor}` : ""}
        </p>
        <div className={styles.actions}>
          <Link href={roomHref(room.id)} className={s.textLink}>
            View room<span className="visually-hidden">: {name}</span>
          </Link>
          <a href={enquiryHref(`Booking enquiry: ${name}`)} className={s.textLink}>
            Enquire<span className="visually-hidden"> about {name}</span>
          </a>
        </div>
      </div>
    </article>
  );
}
