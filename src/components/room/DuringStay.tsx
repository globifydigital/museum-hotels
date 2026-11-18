import Image from "next/image";
import Link from "next/link";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./DuringStay.module.css";

const ITEMS = [
  {
    title: "Ginger House Restaurant",
    body: "Authentic Kerala cuisine in a dining hall built from antiques.",
    href: "/restaurant",
    image: "/images/setting-great-dining.jpg",
    alt: "The gilded restaurant hall with chandeliers, carved pillars and tables laid for dinner",
  },
  {
    title: "Ayurveda & wellness",
    body: "Traditional therapies, yoga and a full spa menu.",
    href: "/wellness",
    image: "/images/wellness-rejuvenation.jpg",
    alt: "Warm oil poured onto the forehead during an Ayurvedic treatment",
  },
  {
    title: "The story of the house",
    body: "A 120-year-old snake boat, a Chettinad courtyard and a founder’s collection.",
    href: "/about",
    image: "/images/about-carving.jpg",
    alt: "Close-up of an antique carved wooden figure",
  },
];

/* Dark band of three links to the rest of the hotel; each photo slides wider on hover. */
export default function DuringStay() {
  return (
    <section className={`${s.section} ${s.dark}`} aria-labelledby="during-title">
      <div className={s.wrap}>
        <p className={`${s.eyebrow} reveal`}>Beyond your room</p>
        <h2 className={`${s.title} ${styles.title} blur-text`} id="during-title" style={delay(100)}>
          During your stay
        </h2>

        <ul className={styles.list}>
          {ITEMS.map((item, i) => (
            <li key={item.href} className="reveal" style={delay(i * 120 + 150)}>
              <Link href={item.href} className={styles.item}>
                <span className={styles.photo}>
                  <Image src={item.image} alt="" fill sizes="(max-width: 899px) 30vw, 12vw" />
                </span>
                <span className={styles.text}>
                  <span className={styles.itemTitle}>{item.title}</span>
                  <span className={styles.itemBody}>{item.body}</span>
                </span>
                <span className={styles.arrow} aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
