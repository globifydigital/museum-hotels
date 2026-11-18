import { ADDRESS } from "@/data/contact";
import s from "../page/Section.module.css";
import styles from "./MapSection.module.css";

/* Full-width map (muted until hovered) with an address card floating over its left side. */
export default function MapSection() {
  return (
    <section className={styles.map} aria-labelledby="map-title">
      <iframe
        className={styles.frame}
        src={ADDRESS.embedUrl}
        title="Map showing Ginger House Museum Hotel on Jew Street, Mattancherry"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <div className={`${s.wrap} ${styles.overlay}`}>
        <div className={`${styles.card} reveal`}>
          <p className={`${s.eyebrow}`}>Find us</p>
          <h2 className={styles.title} id="map-title">
            In the heart of Jew Town
          </h2>
          <p className={styles.address}>{ADDRESS.lines.join(", ")}</p>
          <a href={ADDRESS.mapUrl} target="_blank" rel="noopener noreferrer" className={s.button}>
            Open in Google Maps <span className={s.arrow}>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
