import Image from "@/components/ui/Img";
import { EXPERIENCE } from "@/data/about";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./Experience.module.css";

/* Heading row, then three tall image cards; the middle card sits lower for rhythm. */
export default function Experience() {
  return (
    <section className={s.section} id="experience" aria-labelledby="experience-title">
      <div className={`${s.wrap} ${styles.head}`}>
        <div>
          <p className={`${s.eyebrow} reveal`}>{EXPERIENCE.eyebrow}</p>
          <h2 className={`${s.title} ${styles.title} blur-text`} id="experience-title" style={delay(100)}>
            {EXPERIENCE.title}
          </h2>
        </div>
        <p className={`${s.body} ${styles.intro} reveal`} style={delay(250)}>
          {EXPERIENCE.intro}
        </p>
      </div>

      <ol className={`${s.wrap} ${styles.cards}`}>
        {EXPERIENCE.cards.map((card, i) => (
          <li key={card.title} className={styles.card}>
            <div className={`${styles.photo} reveal-img`} style={delay(i * 150)}>
              <Image src={card.image} alt={card.alt} fill sizes="(max-width: 899px) 90vw, 30vw" />
              <span className={styles.index}>0{i + 1}</span>
            </div>
            <div className="reveal" style={delay(i * 150 + 200)}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardBody}>{card.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
