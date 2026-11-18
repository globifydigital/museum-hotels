import Image from "next/image";
import { OCCASIONS } from "@/data/events";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./Occasions.module.css";

/* Six occasions as portrait cards; on hover the photo darkens and the note rises under the name. */
export default function Occasions() {
  return (
    <section className={`${s.section} ${s.cream}`} aria-labelledby="occasions-title">
      <div className={s.wrap}>
        <p className={`${s.eyebrow} reveal`}>Occasions</p>
        <h2 className={`${s.title} ${styles.title} blur-text`} id="occasions-title" style={delay(100)}>
          Every reason to gather
        </h2>

        <ul className={styles.grid}>
          {OCCASIONS.map((o, i) => (
            <li key={o.name} className={`${styles.card} reveal-img`} style={delay((i % 3) * 120)}>
              <Image src={o.image} alt={o.alt} fill sizes="(max-width: 599px) 100vw, (max-width: 1199px) 50vw, 30vw" />
              <div className={styles.caption}>
                <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.name}>{o.name}</h3>
                <p className={styles.note}>
                  <span>{o.note}</span>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
