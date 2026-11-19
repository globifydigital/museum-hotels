import Image from "@/components/ui/Img";
import { STAY_INTRO } from "@/data/stay";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import InRoom from "./InRoom";
import styles from "./StayIntro.module.css";

/* A large opening line, the story in two columns beside two photos, then what every room shares. */
export default function StayIntro() {
  return (
    <section className={s.section} id="content" aria-labelledby="stay-intro-title">
      <div className={s.wrap}>
        <p className={`${s.eyebrow} reveal`}>{STAY_INTRO.title}</p>
        <h2 className={`${styles.statement} blur-text`} id="stay-intro-title" style={delay(100)}>
          {STAY_INTRO.lead}
        </h2>

        <div className={styles.grid}>
          <div className={`${styles.copy} reveal`} style={delay(200)}>
            {STAY_INTRO.paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className={s.body}>
                {p}
              </p>
            ))}
          </div>
          <div className={styles.photos}>
            <div className={`${styles.photo} reveal-img`}>
              <Image
                src="/images/stay-mezzanine.jpg"
                alt="A guest stepping out from a carved pillar onto the mezzanine veranda, lined with flowering plants"
                fill
                sizes="(max-width: 899px) 45vw, 22vw"
              />
            </div>
            <div className={`${styles.photo} ${styles.photoLow} reveal-img`} style={delay(180)}>
              <Image
                src="/images/stay-bathroom.jpg"
                alt="A bathroom with blue peacock-painted tiles and a carved brass-framed mirror"
                fill
                sizes="(max-width: 899px) 45vw, 22vw"
              />
            </div>
          </div>
        </div>

        <InRoom />
      </div>
    </section>
  );
}
