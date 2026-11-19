import Image from "@/components/ui/Img";
import Link from "next/link";
import { delay } from "@/lib/reveal";
import styles from "./About.module.css";

/* Figma node 215:299 — photo / text / photo. */
export default function About() {
  return (
    <section className={styles.about} id="about" aria-labelledby="about-title">
      <Link href="/about" className={`${styles.card} reveal-img`}>
        <Image
          src="/images/about-kathakali.jpg"
          alt="Two Kathakali performers in full costume on stage"
          fill
          sizes="(max-width: 1199px) 100vw, 29vw"
        />
        <span className={`${styles.cardLabel} ${styles.cardLabelLeft}`}>ABOUT HOTEL</span>
      </Link>

      <div className={styles.center}>
        <div className={styles.copy}>
          <h2 className={`${styles.title} blur-text`} id="about-title">
            ABOUT US
          </h2>
          <p className={`${styles.text} reveal`} style={delay(150)}>
            Blending history and traditional values, the Ginger House Museum Hotel combines luxury and the timeless
            appeal of heritage, with its warm ambience and indigenous architecture. Ginger House Museum Hotel’s
            advantageous location, Kochi, offers all the guest&apos;s easy access to the city’s biggest
            hotspots.Ginger House Museum Hotel offers 8 spacious rooms categorized into Royal Suite, Sea View and
            Deluxe, each one replete with luxury amenities to have the best stay in Kochi........
          </p>
        </div>
        <div className={`${styles.buttons} reveal`} style={delay(300)}>
          <a href="#booking" className={styles.primary}>
            Booking Enquiry
          </a>
          <Link href="/about" className={styles.secondary}>
            More...
          </Link>
        </div>
      </div>

      <Link href="/stay" className={`${styles.card} reveal-img`} style={delay(200)}>
        <Image
          src="/images/about-fishing-nets.jpg"
          alt="A Chinese fishing net silhouetted against the sunset over the backwaters"
          fill
          sizes="(max-width: 1199px) 100vw, 29vw"
        />
        <span className={`${styles.cardLabel} ${styles.cardLabelRight}`}>STAY WITH US</span>
      </Link>
    </section>
  );
}
