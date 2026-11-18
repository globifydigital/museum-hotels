import { DINING_QUOTE, GINGER_SIGNATURES } from "@/data/restaurant";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./GingerSignatures.module.css";

/* Dark section: the house's ginger specialities as a numbered list beside an outlined "Ginger", then a guest quote. */
export default function GingerSignatures() {
  return (
    <section className={`${s.section} ${s.dark} ${styles.section}`} aria-labelledby="ginger-title">
      <div className={`${s.wrap} ${styles.grid}`}>
        <div className={styles.head}>
          <p className={`${s.eyebrow} reveal`}>House signatures</p>
          <h2 className={`${s.title} blur-text`} id="ginger-title" style={delay(100)}>
            A house named for ginger
          </h2>
          <p className={`${styles.word} play-in-view`} aria-hidden="true">
            Ginger
          </p>
        </div>

        <ol className={styles.list}>
          {GINGER_SIGNATURES.map((g, i) => (
            <li key={g.name} className={`${styles.item} reveal`} style={delay(i * 140 + 150)}>
              <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.name}>{g.name}</span>
              <span className={styles.note}>{g.note}</span>
            </li>
          ))}
        </ol>
      </div>

      <figure className={`${s.narrow} ${styles.quote} reveal`}>
        <blockquote>
          <p>“{DINING_QUOTE.quote}”</p>
        </blockquote>
        <figcaption>{DINING_QUOTE.name}, guest review</figcaption>
      </figure>
    </section>
  );
}
