"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { FAQS } from "@/data/site";
import styles from "./Faq.module.css";

/* Figma node 213:199 — accordion, first item open. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section className={styles.faq} id="faq" aria-labelledby="faq-title">
      <h2 className={`${styles.title} blur-text`} id="faq-title">
        Frequently Asked Questions
      </h2>
      <div className={`${styles.list} reveal-stagger`}>
        {FAQS.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.question} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
              <h3>
                <button
                  type="button"
                  id={`${baseId}-q-${i}`}
                  className={styles.question}
                  aria-expanded={isOpen}
                  aria-controls={`${baseId}-a-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span>{item.question}</span>
                  <Image src="/icons/faq-chevron.svg" alt="" width={20} height={20} className={styles.icon} />
                </button>
              </h3>
              <div
                className={styles.answerWrap}
                id={`${baseId}-a-${i}`}
                role="region"
                aria-labelledby={`${baseId}-q-${i}`}
                inert={!isOpen}
              >
                <div className={styles.answerInner}>
                  <p className={styles.answer}>{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
