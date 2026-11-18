import { WELLNESS_INTRO } from "@/data/wellness";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./WellnessIntro.module.css";

/* A centred opening statement with a small lotus-like mark drawing itself in. */
export default function WellnessIntro() {
  return (
    <section className={s.section} id="content" aria-labelledby="wellness-intro-title">
      <div className={`${s.narrow} ${styles.inner}`}>
        <svg viewBox="0 0 64 40" className={`${styles.mark} reveal`} aria-hidden="true">
          <path d="M32 38C22 30 20 18 32 4c12 14 10 26 0 34Z" />
          <path d="M32 38C22 36 10 30 4 16c12 0 22 8 28 22Z" />
          <path d="M32 38c10-2 22-8 28-22-12 0-22 8-28 22Z" />
        </svg>
        <p className={`${s.eyebrow} reveal`}>{WELLNESS_INTRO.eyebrow}</p>
        <h2 className={`${s.title} blur-text`} id="wellness-intro-title" style={delay(100)}>
          {WELLNESS_INTRO.title}
        </h2>
        <p className={`${s.lead} reveal`} style={delay(200)}>
          {WELLNESS_INTRO.lead}
        </p>
        <p className={`${s.body} ${styles.body} reveal`} style={delay(300)}>
          {WELLNESS_INTRO.body}
        </p>
      </div>
    </section>
  );
}
