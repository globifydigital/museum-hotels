"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { GALLERY, GALLERY_CATEGORIES } from "@/data/gallery";
import { delay } from "@/lib/reveal";
import s from "../page/Section.module.css";
import styles from "./GalleryGrid.module.css";

type Filter = (typeof GALLERY_CATEGORIES)[number];

/*
 * Filterable masonry gallery with a lightbox. The lightbox is a modal <dialog> (focus trapped, Escape closes it) with
 * previous / next buttons, arrow keys and swipe, cycling through the photos of the current filter.
 */
export default function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [index, setIndex] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);
  const images = filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter);
  const current = index === null ? null : images[index];

  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    const d = dialog.current;
    if (index !== null && d && !d.open) d.showModal();
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, step]);

  const count = (f: Filter) => (f === "All" ? GALLERY.length : GALLERY.filter((g) => g.category === f).length);

  return (
    <section className={s.section} id="content" aria-labelledby="gallery-title">
      <div className={s.wrap}>
        <div className={styles.head}>
          <div>
            <p className={`${s.eyebrow} reveal`}>Gallery</p>
            <h2 className={`${s.title} ${styles.title} blur-text`} id="gallery-title" style={delay(100)}>
              A house full of stories
            </h2>
          </div>
          <div className={`${styles.filters} reveal`} role="group" aria-label="Filter photos" style={delay(200)}>
            {GALLERY_CATEGORIES.map((f) => (
              <button
                key={f}
                type="button"
                className={styles.filter}
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
              >
                {f}
                <span className={styles.count}>{count(f)}</span>
              </button>
            ))}
          </div>
        </div>

        <p className="visually-hidden" aria-live="polite">
          Showing {images.length} photos
        </p>

        <ul className={styles.masonry}>
          {images.map((img, i) => (
            <li
              key={`${filter}-${img.src}`}
              className={styles.item}
              style={{ "--i": Math.min(i, 12) } as CSSProperties}
            >
              <button
                type="button"
                className={styles.thumb}
                style={{ aspectRatio: `${img.width} / ${img.height}` }}
                onClick={() => setIndex(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 599px) 50vw, (max-width: 1199px) 33vw, 25vw"
                />
                <span className={styles.tag} aria-hidden="true">
                  {img.category}
                </span>
                <span className={styles.zoom} aria-hidden="true" />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <dialog
        ref={dialog}
        className={styles.lightbox}
        aria-label="Photo viewer"
        onClose={() => setIndex(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) e.currentTarget.close();
        }}
        onTouchStart={(e) => {
          touchX.current = e.touches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        {current && index !== null && (
          <>
            <figure className={styles.figure} key={current.src}>
              <div
                className={styles.frame}
                style={
                  {
                    aspectRatio: `${current.width} / ${current.height}`,
                    "--ar": current.width / current.height,
                  } as CSSProperties
                }
              >
                <Image src={current.src} alt={current.alt} fill sizes="90vw" />
              </div>
              <figcaption className={styles.caption}>
                <span className={styles.captionTag}>{current.category}</span>
                {current.alt}
              </figcaption>
            </figure>

            <p className={styles.counter}>
              {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
            </p>
            <button type="button" className={`${styles.nav} ${styles.prev}`} onClick={() => step(-1)}>
              <span aria-hidden="true">←</span>
              <span className="visually-hidden">Previous photo</span>
            </button>
            <button type="button" className={`${styles.nav} ${styles.next}`} onClick={() => step(1)}>
              <span aria-hidden="true">→</span>
              <span className="visually-hidden">Next photo</span>
            </button>
            <button type="button" className={styles.close} onClick={() => dialog.current?.close()}>
              <span aria-hidden="true">×</span>
              <span className="visually-hidden">Close</span>
            </button>
          </>
        )}
      </dialog>
    </section>
  );
}
