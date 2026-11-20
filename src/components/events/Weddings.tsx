import Image from "@/components/ui/Img";
import { EVENT_SERVICES, WEDDINGS } from "@/data/events";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./Weddings.module.css";

/* Dark weddings feature: two portraits stepped against each other beside the copy, then four services in a row. */
export default function Weddings() {
  return (
    <section className={`${s.section} ${s.dark}`} aria-labelledby="weddings-title">
      <div className={`${s.wrap} ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`${s.eyebrow} reveal`}>{WEDDINGS.eyebrow}</p>
          <h2 className={`${s.title} ${styles.title} blur-text`} id="weddings-title" style={delay(100)}>
            {WEDDINGS.title}
          </h2>
          <p className={`${s.body} ${styles.body} reveal`} style={delay(250)}>
            {WEDDINGS.body}
          </p>
          <a href="#enquire" className={`${s.buttonGold} reveal`} style={delay(350)}>
            Enquire about weddings <span className={s.arrow}>→</span>
          </a>
        </div>

        <div className={styles.photos}>
          <div className={`${styles.photo} reveal-img`}>
            <Image
              src="/images/event-bridal-2.jpg"
              alt="A bride in a cream sari with a pearl necklace"
              fill
              sizes="(max-width: 899px) 45vw, 22vw"
            />
          </div>
          <div className={`${styles.photo} ${styles.photoLow} reveal-img`} style={delay(200)}>
            <Image
              src="/images/event-bridal-3.jpg"
              alt="A bride in a cream lehenga and jewellery against a painted wall"
              fill
              sizes="(max-width: 899px) 45vw, 22vw"
            />
          </div>
        </div>
      </div>

      <ul className={`${s.wrap} ${styles.services} reveal-stagger`}>
        {EVENT_SERVICES.map((sv, i) => (
          <li key={sv.title}>
            <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
            <h3 className={styles.serviceTitle}>{sv.title}</h3>
            <p className={styles.serviceNote}>{sv.note}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
