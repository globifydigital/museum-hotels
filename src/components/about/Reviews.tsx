import { REVIEWS } from "@/data/about";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./Reviews.module.css";

/* Guest reviews drifting sideways in an endless row; hover or focus pauses it. The second copy is decorative. */
export default function Reviews() {
  return (
    <section className={`${s.section} ${s.cream} ${styles.section}`} aria-labelledby="reviews-title">
      <div className={`${s.wrap} ${styles.head}`}>
        <p className={`${s.eyebrow} reveal`}>Guest book</p>
        <h2 className={`${s.title} blur-text`} id="reviews-title" style={delay(100)}>
          What our guests say
        </h2>
      </div>

      <div className={`${styles.viewport} play-in-view reveal`} style={delay(250)}>
        <div className={styles.track}>
          {[0, 1].map((copy) => (
            <ul key={copy} className={styles.list} aria-hidden={copy === 1 || undefined}>
              {REVIEWS.map((r) => (
                <li key={r.name} className={styles.card}>
                  <figure>
                    <blockquote className={styles.quote}>
                      <p>{r.quote}</p>
                    </blockquote>
                    <figcaption className={styles.name}>{r.name}</figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
