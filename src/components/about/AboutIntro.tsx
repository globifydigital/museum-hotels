import Image from "@/components/ui/Img";
import Link from "next/link";
import { ABOUT_INTRO, ABOUT_STATS } from "@/data/about";
import { enquiryHref } from "@/data/contact";
import { delay } from "@/lib/reveal";
import CountUp from "../page/CountUp";
import s from "../page/Section.module.css";
import styles from "./AboutIntro.module.css";

/* Text beside a layered pair of photos with a slowly turning seal, then a row of counting figures. */
export default function AboutIntro() {
  return (
    <section className={s.section} id="content" aria-labelledby="intro-title">
      <div className={`${s.wrap} ${styles.grid}`}>
        <div className={styles.copy}>
          <p className={`${s.eyebrow} reveal`}>Who we are</p>
          <h2 className={`${s.title} blur-text`} id="intro-title" style={delay(100)}>
            {ABOUT_INTRO.title}
          </h2>
          <p className={`${s.lead} reveal`} style={delay(200)}>
            {ABOUT_INTRO.lead}
          </p>
          <div className="reveal" style={delay(300)}>
            {ABOUT_INTRO.paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className={s.body}>
                {p}
              </p>
            ))}
          </div>
          <div className={`${s.buttons} reveal`} style={delay(400)}>
            <Link href="/stay" className={s.button}>
              Explore our rooms <span className={s.arrow}>→</span>
            </Link>
            <a href={enquiryHref()} className={s.buttonOutline}>
              Booking enquiry
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={`${styles.main} reveal-img`}>
            <Image
              src="/images/about-carving.jpg"
              alt="Close-up of an antique carved wooden figure with an ornate crown"
              fill
              sizes="(max-width: 899px) 90vw, 38vw"
            />
          </div>
          <div className={`${styles.inset} reveal-img`} style={delay(250)}>
            <Image
              src="/images/about-gilded-hall.jpg"
              alt="The gilded hall with carved pillars, chandeliers and antique furniture"
              fill
              sizes="(max-width: 899px) 60vw, 24vw"
            />
          </div>
          <div className={`${styles.seal} reveal`} style={delay(500)} aria-hidden="true">
            <svg viewBox="0 0 200 200" className={styles.ring}>
              <defs>
                <path id="seal-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
              </defs>
              <text>
                <textPath href="#seal-circle" textLength="488">
                  THE SEVENTH HEAVEN OF ART · THE SEVENTH HEAVEN OF ART ·
                </textPath>
              </text>
            </svg>
            <span className={styles.sealMark}>GH</span>
          </div>
        </div>
      </div>

      <dl className={`${s.wrap} ${styles.stats} reveal-stagger`}>
        {ABOUT_STATS.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <dt className={styles.statLabel}>{stat.label}</dt>
            <dd className={styles.statValue}>
              <CountUp value={stat.value} suffix={stat.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
