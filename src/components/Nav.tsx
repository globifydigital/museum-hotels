"use client";

import Image from "@/components/ui/Img";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "@/data/site";
import styles from "./Nav.module.css";

/* Figma node 213:155 — rounded translucent navigation pill over the hero. */
export default function Nav() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  /** Page links ("/about") are marked current on their own page; section links ("/#restaurant") never are. */
  const current = (href: string) => (href === pathname ? "page" : undefined);

  useEffect(() => {
    if (!open) return;
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={styles.bar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Ginger House Museum Hotel, home">
          <Image src="/images/logo.png" alt="" fill sizes="76px" priority />
        </Link>

        <nav className={styles.links} aria-label="Main">
          {NAV_LINKS.map((link) => (
            <Link key={link.label} href={link.href} aria-current={current(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          ref={button}
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${styles.burger} ${open ? styles.burgerOpen : ""}`} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <nav
        id="mobile-menu"
        className={`${styles.sheet} ${open ? styles.sheetOpen : ""}`}
        aria-label="Menu"
        inert={!open}
      >
        {NAV_LINKS.map((link) => (
          <Link key={link.label} href={link.href} aria-current={current(link.href)} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
