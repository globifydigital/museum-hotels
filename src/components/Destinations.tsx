import Image from "@/components/ui/Img";
import { DESTINATIONS } from "@/data/site";
import { delay } from "@/lib/reveal";
import heading from "./Settings.module.css";
import styles from "./Destinations.module.css";

/* Heading 213:91 + Figma node 213:108 — three 566.66 × 887 cards. */
export default function Destinations() {
  return (
    <section className={styles.destinations} id="destinations" aria-labelledby="destinations-title">
      <h2 className={`${heading.heading} blur-text`} id="destinations-title">
        DESTINATIONS
      </h2>

      <div className={styles.grid}>
        {DESTINATIONS.map((d, i) => (
          <article key={d.title} className={styles.card}>
            <div className={`${styles.media} reveal-img`} style={delay(i * 140)}>
              <Image src={d.image} alt={d.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 30vw" />
            </div>
            <h3 className={`${styles.title} reveal`} style={delay(i * 140 + 250)}>
              {d.title}
            </h3>
            <p className={`${styles.body} reveal`} style={delay(i * 140 + 350)}>
              {d.body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
