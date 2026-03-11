"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <Link href="#uvod" className={styles.logo} onClick={close}>
        <div className={styles.logoIcon}>
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3,20 12,4 21,20" />
            <line x1="7" y1="14" x2="17" y2="14" />
          </svg>
        </div>
        <div>
          <div className={styles.logoText}>Kde mám pozemek</div>
          <div className={styles.logoSub}>s.r.o. · Brno</div>
        </div>
      </Link>

      <div className={`${styles.links} ${open ? styles.open : ""}`}>
        <Link href="#sluzby" onClick={close}>Služby</Link>
        <Link href="#o-nas" onClick={close}>O nás</Link>
        <Link href="#cinnost" onClick={close}>Činnosti</Link>
        <Link href="#kontakt" onClick={close}>Kontakt</Link>
        <Link href="#kontakt" className={styles.cta} onClick={close}>
          Nezávazná poptávka
        </Link>
      </div>

      <button
        className={styles.burger}
        onClick={() => setOpen((v) => !v)}
        aria-label="Menu"
        aria-expanded={open}
      >
        <span className={open ? styles.burgerTop : ""} />
        <span className={open ? styles.burgerMid : ""} />
        <span className={open ? styles.burgerBot : ""} />
      </button>
    </nav>
  );
}
