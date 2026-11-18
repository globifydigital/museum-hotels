import Image from "next/image";
import { ANTIQUE_HALL } from "@/data/restaurant";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./AntiqueHall.module.css";

/* A wide dining-hall photo with a detail shot overlapping it, beside the story of the antique-built room. */
export default function AntiqueHall() {
  return (
    <section className={s.section} aria-labelledby="hall-title">
      <div className={`${s.wrap} ${styles.grid}`}>
        <div className={styles.visual}>
          <div className={`${styles.main} reveal-img`}>
            <div className="parallax-layer">
              <Image
                src="/images/setting-great-dining.jpg"
                alt="The gilded restaurant hall with chandeliers, carved pillars and tables laid for dinner"
                fill
                sizes="(max-width: 899px) 100vw, 52vw"
              />
            </div>
          </div>
          <div className={`${styles.detail} reveal-img`} style={delay(250)}>
            <Image
              src="/images/about-gilded-hall.jpg"
              alt="Carved gilded pillars and chandeliers in the dining hall"
              fill
              sizes="(max-width: 899px) 55vw, 22vw"
            />
          </div>
        </div>

        <div className={styles.copy}>
          <p className={`${s.eyebrow} reveal`}>{ANTIQUE_HALL.eyebrow}</p>
          <h2 className={`${s.title} blur-text`} id="hall-title" style={delay(100)}>
            {ANTIQUE_HALL.title}
          </h2>
          <div className="reveal" style={delay(250)}>
            {ANTIQUE_HALL.paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className={s.body}>
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
