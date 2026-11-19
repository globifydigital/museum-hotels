import Image from "@/components/ui/Img";
import { ATTRACTIONS } from "@/data/destinations";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./Attractions.module.css";

/* "On our doorstep": a bento grid of the neighbourhood, one large tile and four smaller ones, captions over photos. */
export default function Attractions() {
  return (
    <section className={s.section} id="attractions" aria-labelledby="attractions-title">
      <div className={`${s.wrap} ${styles.head}`}>
        <div>
          <p className={`${s.eyebrow} reveal`}>Attractions</p>
          <h2 className={`${s.title} ${styles.title} blur-text`} id="attractions-title" style={delay(100)}>
            On our doorstep
          </h2>
        </div>
        <p className={`${s.body} ${styles.intro} reveal`} style={delay(200)}>
          Ginger House stands on Jew Street in Mattancherry. Step outside and the neighbourhood’s shops, synagogue, murals
          and galleries are all around you.
        </p>
      </div>

      <ul className={`${s.wrap} ${styles.grid}`}>
        {ATTRACTIONS.map((a, i) => (
          <li key={a.title} className={`${styles.tile} reveal-img`} style={delay(i * 110)}>
            <Image
              src={a.image}
              alt={a.alt}
              fill
              sizes={i === 0 ? "(max-width: 767px) 100vw, 50vw" : "(max-width: 767px) 100vw, 25vw"}
            />
            <div className={styles.caption}>
              <h3 className={styles.tileTitle}>{a.title}</h3>
              <p className={styles.note}>{a.note}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
