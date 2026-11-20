import Image from "@/components/ui/Img";
import { FOUNDER } from "@/data/about";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./Founder.module.css";

/* Founder story: portrait of the collection on the left, story and pull quote on the right. */
export default function Founder() {
  return (
    <section className={`${s.section} ${s.cream}`} aria-labelledby="founder-title">
      <div className={`${s.wrap} ${styles.grid}`}>
        <div className={styles.media}>
          <div className={`${styles.photo} reveal-img`}>
            <div className="parallax-layer">
              <Image
                src="/images/about-antique-hall.jpg"
                alt="Antique carved doors, mirrors and a laid dining table inside the hotel"
                fill
                sizes="(max-width: 899px) 90vw, 34vw"
              />
            </div>
          </div>
          <p className={`${styles.caption} reveal`} style={delay(300)}>
            Almost every antique in the hotel is for sale
          </p>
        </div>

        <div className={styles.copy}>
          <p className={`${s.eyebrow} reveal`}>{FOUNDER.eyebrow}</p>
          <h2 className={`${s.title} blur-text`} id="founder-title" style={delay(100)}>
            {FOUNDER.title}
          </h2>
          <div className="reveal" style={delay(250)}>
            {FOUNDER.paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className={s.body}>
                {p}
              </p>
            ))}
          </div>
          <blockquote className={`${styles.quote} reveal`} style={delay(350)}>
            <p>{FOUNDER.quote}</p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
