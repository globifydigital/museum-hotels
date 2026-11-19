import Image from "@/components/ui/Img";
import { EVENTS_INTRO } from "@/data/events";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./EventsIntro.module.css";

/* Story beside the gilded hall, with a button that jumps to the enquiry form. */
export default function EventsIntro() {
  return (
    <section className={s.section} id="content" aria-labelledby="events-intro-title">
      <div className={`${s.wrap} ${styles.grid}`}>
        <div className={`${styles.photo} reveal-img`}>
          <div className="parallax-layer">
            <Image
              src="/images/event-banquet-hall.jpg"
              alt="The long gilded hall with chandeliers and a polished floor"
              fill
              sizes="(max-width: 899px) 90vw, 34vw"
            />
          </div>
        </div>

        <div className={styles.copy}>
          <p className={`${s.eyebrow} reveal`}>{EVENTS_INTRO.eyebrow}</p>
          <h2 className={`${s.title} blur-text`} id="events-intro-title" style={delay(100)}>
            {EVENTS_INTRO.title}
          </h2>
          <p className={`${s.lead} reveal`} style={delay(200)}>
            {EVENTS_INTRO.lead}
          </p>
          <div className="reveal" style={delay(300)}>
            {EVENTS_INTRO.paragraphs.map((p) => (
              <p key={p.slice(0, 20)} className={s.body}>
                {p}
              </p>
            ))}
          </div>
          <a href="#enquire" className={`${s.button} reveal`} style={delay(400)}>
            Plan your event <span className={s.arrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
