import Image from "@/components/ui/Img";
import Link from "next/link";
import { WELLNESS } from "@/data/site";
import { delay } from "@/lib/reveal";
import styles from "./Wellness.module.css";

/* Figma nodes 213:136 (banner) + 213:144 (three photos overlapping its bottom edge). */
export default function Wellness() {
  return (
    <section className={styles.wellness} id="wellness" aria-labelledby="wellness-title">
      <div className={`${styles.banner} reveal-img`}>
        <Image src="/images/wellness-banner.jpg" alt="" fill sizes="(max-width: 1199px) 100vw, 94vw" className={styles.bannerImage} />
        <div className={`${styles.head}`}>
          <h2 className={`${styles.title} blur-text`} id="wellness-title" style={delay(150)}>
            OUR WELLNESS EXPERIENCE
          </h2>
          <Link href="/wellness" className={`${styles.button} reveal`} style={delay(300)}>
            SEE OUR SERVICES
          </Link>
        </div>
      </div>

      <ul className={styles.items}>
        {WELLNESS.map((item, i) => (
          <li key={item.label} className={`${styles.item} ${styles[`item${i + 1}`]}`}>
            <span className={`${styles.label} reveal`} style={delay(i * 140 + 250)}>
              {item.label}
            </span>
            <div className={`${styles.photo} reveal-img`} style={delay(i * 140)}>
              <Image src={item.image} alt={item.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1199px) 33vw, 27vw" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
