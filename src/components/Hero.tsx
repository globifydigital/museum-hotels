import Image from "next/image";
import BookingBar from "./BookingBar";
import Nav from "./Nav";
import styles from "./Hero.module.css";

/* Figma node 213:148 — 1920 × 1258 hero. */
export default function Hero() {
  return (
    <section className={styles.hero} id="top" aria-labelledby="hero-title">
      <div className={styles.media}>
        <Image
          src="/images/hero.jpg"
          alt="A guest on the carved wooden balcony of Ginger House, looking out over tiled roofs to the Kochi waterfront"
          fill
          priority
          sizes="100vw"
          className={styles.image}
        />
      </div>

      <Nav />

      <div className={styles.text}>
        <p className={styles.eyebrow}>
          A Heritage Retreat by the Waterfront</p>
        <h1 className={`${styles.title} blur-text`} id="hero-title">
          <span className={styles.word}>
            <span>GINGER</span>
          </span>{" "}
          <span className={styles.word}>
            <span>HOUSE</span>
          </span>
        </h1>
        <p className={styles.eyebrow}>
          Heritage rooms &amp; suites · Waterfront location · Fort Kochi, Kerala · Enquire to book</p>
      </div>

      <BookingBar />
    </section>
  );
}
