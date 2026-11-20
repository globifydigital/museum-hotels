import Image from "@/components/ui/Img";
import { RESTAURANT_FACTS, RESTAURANT_INTRO } from "@/data/restaurant";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./RestaurantIntro.module.css";

/* Lead and story beside a tall terrace photo with a floating dish, then four quick facts. */
export default function RestaurantIntro() {
  return (
    <section className={s.section} id="content" aria-labelledby="restaurant-intro-title">
      <div className={`${s.wrap} ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`${s.eyebrow} reveal`}>{RESTAURANT_INTRO.eyebrow}</p>
          <h2 className={`${s.title} blur-text`} id="restaurant-intro-title" style={delay(100)}>
            {RESTAURANT_INTRO.title}
          </h2>
          <p className={`${s.lead} reveal`} style={delay(200)}>
            {RESTAURANT_INTRO.lead}
          </p>
          <div className="reveal" style={delay(300)}>
            {RESTAURANT_INTRO.paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className={s.body}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.visual}>
          <div className={`${styles.tall} reveal-img`}>
            <div className="parallax-layer">
              <Image
                src="/images/restaurant-terrace.jpg"
                alt="Grilled prawns served on the terrace, with the backwaters behind"
                fill
                sizes="(max-width: 899px) 80vw, 30vw"
              />
            </div>
          </div>
          <div className={`${styles.round} reveal-img`} style={delay(300)}>
            <Image src="/images/food-4.jpg" alt="Kerala prawn curry served with parottas" fill sizes="(max-width: 899px) 40vw, 16vw" />
          </div>
        </div>
      </div>

      <dl className={`${s.wrap} ${styles.facts} reveal-stagger`}>
        {RESTAURANT_FACTS.map((f) => (
          <div key={f.label} className={styles.fact}>
            <dt>{f.label}</dt>
            <dd>{f.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
