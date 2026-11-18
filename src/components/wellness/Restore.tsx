import Image from "next/image";
import { RESTORE } from "@/data/wellness";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./Restore.module.css";

/* Pool and lawn: two large photo cards with their caption set over the image. */
export default function Restore() {
  return (
    <section className={s.section} aria-labelledby="restore-title">
      <div className={s.wrap}>
        <p className={`${s.eyebrow} reveal`}>After your treatment</p>
        <h2 className={`${s.title} ${styles.title} blur-text`} id="restore-title" style={delay(100)}>
          Pool, lawn &amp; lake
        </h2>

        <ul className={styles.grid}>
          {RESTORE.map((item, i) => (
            <li key={item.title} className={`${styles.card} reveal-img`} style={delay(i * 180)}>
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 899px) 100vw, 47vw" />
              <div className={styles.caption}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardBody}>{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
