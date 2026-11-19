import Image from "@/components/ui/Img";
import { SETTINGS } from "@/data/site";
import { delay } from "@/lib/reveal";
import styles from "./Settings.module.css";

const rowClass = [styles.rowOne, styles.rowTwo, styles.rowThree];

/* Heading 213:90 + Figma node 213:92 — three alternating image / text rows. */
export default function Settings() {
  return (
    <section className={styles.settings} id="settings" aria-labelledby="settings-title">
      <h2 className={`${styles.heading} blur-text`} id="settings-title">
        MOST RELAXING AND SERENE SETTINGS
      </h2>

      <div className={styles.rows}>
        {SETTINGS.map((item, i) => (
          <article key={item.title} className={`${styles.row} ${rowClass[i]}`}>
            <div className={`${styles.media} reveal-img`}>
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 1199px) 100vw, 55vw" />
            </div>
            <div className={`${styles.text} reveal`} style={delay(200)}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
