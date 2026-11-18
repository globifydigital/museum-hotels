import { SERVICES } from "@/data/stay";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./Services.module.css";

/* What is included and what can be arranged: two ruled lists under a short welcome. */
export default function Services() {
  return (
    <section className={`${s.section} ${s.cream}`} aria-labelledby="services-title">
      <div className={`${s.wrap} ${styles.grid}`}>
        <div className={styles.head}>
          <p className={`${s.eyebrow} reveal`}>Facilities &amp; amenities</p>
          <h2 className={`${s.title} blur-text`} id="services-title" style={delay(100)}>
            At your service
          </h2>
          <p className={`${s.body} reveal`} style={delay(200)}>
            {SERVICES.intro}
          </p>
        </div>

        <div className={styles.lists}>
          <div className="reveal" style={delay(150)}>
            <h3 className={styles.listTitle}>Complimentary</h3>
            <ul className={`${styles.list} ${styles.columns}`}>
              {SERVICES.complimentary.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="reveal" style={delay(300)}>
            <h3 className={styles.listTitle}>On request</h3>
            <ul className={styles.list}>
              {SERVICES.onRequest.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.note}>Charged separately.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
