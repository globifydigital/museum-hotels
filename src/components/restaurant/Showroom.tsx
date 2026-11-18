import Image from "next/image";
import { enquiryHref } from "@/data/contact";
import { SHOWROOM } from "@/data/restaurant";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./Showroom.module.css";

/* The Heritage Arts antique showroom: story and an enquiry link beside a tall photo with a "for sale" tag. */
export default function Showroom() {
  return (
    <section className={`${s.section} ${s.cream}`} aria-labelledby="showroom-title">
      <div className={`${s.wrap} ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`${s.eyebrow} reveal`}>{SHOWROOM.eyebrow}</p>
          <h2 className={`${s.title} blur-text`} id="showroom-title" style={delay(100)}>
            {SHOWROOM.title}
          </h2>
          <p className={`${s.lead} reveal`} style={delay(200)}>
            {SHOWROOM.body}
          </p>
          <a href={enquiryHref("Antique enquiry: Heritage Arts showroom")} className={`${s.textLink} reveal`} style={delay(300)}>
            Ask about a piece →
          </a>
        </div>

        <div className={styles.visual}>
          <div className={`${styles.photo} reveal-img`}>
            <div className="parallax-layer">
              <Image
                src="/images/about-antique-hall.jpg"
                alt="Carved antique doors and mirrors around a laid dining table"
                fill
                sizes="(max-width: 899px) 90vw, 32vw"
              />
            </div>
          </div>
          <p className={`${styles.tag} reveal`} style={delay(400)}>
            <span>Every piece</span> for sale
          </p>
        </div>
      </div>
    </section>
  );
}
