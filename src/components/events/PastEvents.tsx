import Image from "@/components/ui/Img";
import { PAST_EVENTS } from "@/data/events";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./PastEvents.module.css";

/* "Throwback treasures": past-event photos drifting sideways in an endless strip of mixed widths. */
export default function PastEvents() {
  return (
    <section className={`${s.section} ${styles.section}`} aria-labelledby="past-title">
      <div className={`${s.wrap} ${styles.head}`}>
        <p className={`${s.eyebrow} reveal`}>Throwback treasures</p>
        <h2 className={`${s.title} blur-text`} id="past-title" style={delay(100)}>
          Moments we have hosted
        </h2>
      </div>

      <div className={`${styles.viewport} play-in-view reveal`} style={delay(200)}>
        <div className={styles.track}>
          {[0, 1].map((copy) => (
            <ul key={copy} className={styles.list} aria-hidden={copy === 1 || undefined}>
              {PAST_EVENTS.map((p) => (
                <li key={p.src} className={styles.item}>
                  <Image src={p.src} alt={copy === 1 ? "" : p.alt} fill sizes="420px" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
