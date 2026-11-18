import Image from "next/image";
import { FORT_KOCHI } from "@/data/destinations";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./FortKochi.module.css";

/* Fort Kochi in brief: story beside a tall photo, then a cloud of landmark tags that rise in one by one. */
export default function FortKochi() {
  return (
    <section className={s.section} id="content" aria-labelledby="fort-kochi-title">
      <div className={`${s.wrap} ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`${s.eyebrow} reveal`}>{FORT_KOCHI.eyebrow}</p>
          <h2 className={`${s.title} blur-text`} id="fort-kochi-title" style={delay(100)}>
            {FORT_KOCHI.title}
          </h2>
          <p className={`${s.lead} reveal`} style={delay(200)}>
            {FORT_KOCHI.lead}
          </p>
          <div className="reveal" style={delay(300)}>
            {FORT_KOCHI.paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className={s.body}>
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className={`${styles.photo} reveal-img`}>
          <div className="parallax-layer">
            <Image
              src="/images/destination-fort-kochi.jpg"
              alt="Chinese fishing nets silhouetted against an orange Fort Kochi sunset"
              fill
              sizes="(max-width: 899px) 90vw, 36vw"
            />
          </div>
        </div>
      </div>

      <div className={`${s.wrap} ${styles.landmarks}`}>
        <h3 className={`${styles.landmarksTitle} reveal`}>Within reach</h3>
        <ul className={`${styles.tags} reveal-stagger`}>
          {FORT_KOCHI.landmarks.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
