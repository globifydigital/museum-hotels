import Image from "next/image";
import { SNAKE_BOAT } from "@/data/about";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./SnakeBoat.module.css";

/* Dark story section: the lobby's snake boat and the Chettinad courtyard, with a staggered pair of photos. */
export default function SnakeBoat() {
  return (
    <section className={`${s.section} ${s.dark} ${styles.section}`} aria-labelledby="boat-title">
      <p className={`${styles.ghost} play-in-view`} aria-hidden="true">
        Thiruvaranmula · Punnamthottam No. 5 · Thiruvaranmula · Punnamthottam No. 5 ·
      </p>

      <div className={`${s.wrap} ${styles.grid}`}>
        <div className={styles.photos}>
          <figure className={`${styles.photo} ${styles.photoTall} reveal-img`}>
            <Image
              src="/images/about-courtyard.jpg"
              alt="A guest walking through the courtyard veranda, lined with plants, urns and carved pillars"
              fill
              sizes="(max-width: 899px) 60vw, 26vw"
            />
          </figure>
          <figure className={`${styles.photo} ${styles.photoWide} reveal-img`} style={delay(200)}>
            <Image
              src="/images/about-corridor.jpg"
              alt="The long red-walled veranda opening onto the courtyard"
              fill
              sizes="(max-width: 899px) 60vw, 24vw"
            />
          </figure>
          <p className={`${styles.note} reveal`} style={delay(400)}>
            Courtyard re-erected from a 120-year-old Chettinad palace
          </p>
        </div>

        <div className={styles.copy}>
          <p className={`${s.eyebrow} reveal`}>{SNAKE_BOAT.eyebrow}</p>
          <h2 className={`${s.title} blur-text`} id="boat-title" style={delay(100)}>
            {SNAKE_BOAT.title}
          </h2>
          <div className="reveal" style={delay(250)}>
            {SNAKE_BOAT.paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className={s.body}>
                {p}
              </p>
            ))}
          </div>
          <dl className={`${styles.facts} reveal-stagger`}>
            <div>
              <dt>Length</dt>
              <dd>108 ft</dd>
            </div>
            <div>
              <dt>Age</dt>
              <dd>120 years</dd>
            </div>
            <div>
              <dt>Oarsmen</dt>
              <dd>100+</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
