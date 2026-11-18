import Image from "next/image";
import Link from "next/link";
import { FOOD_IMAGES, RESTAURANT_PARAGRAPHS } from "@/data/site";
import styles from "./Restaurant.module.css";

/* Figma node 213:75 — dark restaurant section, 2577 tall. */
export default function Restaurant() {
  return (
    <section className={styles.restaurant} id="restaurant" aria-labelledby="restaurant-title">
      <figure className={styles.figure}>
        <div className={`${styles.frame} reveal-img`}>
          <Image
            src="/images/restaurant-dining-room.jpg"
            alt="The Ginger House Restaurant: a gilded dining hall with a crystal chandelier, carved pillars and a long table laid for supper"
            fill
            sizes="(max-width: 1199px) 100vw, 95vw"
            className={styles.frameImage}
          />
        </div>
        <figcaption className={`${styles.caption} reveal`}>The dining room -</figcaption>
      </figure>

      <h2 className={`${styles.title} blur-text`} id="restaurant-title">
        GINGER HOUSE REASTAURANT
      </h2>

      <div className={`${styles.body} reveal-stagger`}>
        {RESTAURANT_PARAGRAPHS.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>

      <ul className={`${styles.food} reveal-stagger`}>
        {FOOD_IMAGES.map((img) => (
          <li key={img.src} className={styles.foodItem}>
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 767px) 50vw, (max-width: 1199px) 25vw, 19vw" />
          </li>
        ))}
      </ul>

      <Link href="/restaurant" className={`${styles.menuLink} reveal`}>
        The full menu and a table →
      </Link>
    </section>
  );
}
