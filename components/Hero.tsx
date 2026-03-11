import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="uvod">
      {/* Cadastral grid overlay */}
      <div className={styles.grid} aria-hidden="true">
        <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <rect x="160" y="120" width="240" height="180" fill="none" stroke="white" strokeWidth="0.8" />
          <rect x="400" y="120" width="180" height="180" fill="none" stroke="white" strokeWidth="0.8" />
          <rect x="580" y="120" width="260" height="180" fill="none" stroke="white" strokeWidth="0.8" />
          <rect x="160" y="300" width="320" height="220" fill="none" stroke="white" strokeWidth="0.8" />
          <rect x="480" y="300" width="200" height="100" fill="none" stroke="white" strokeWidth="0.8" />
          <rect x="680" y="300" width="160" height="220" fill="none" stroke="white" strokeWidth="0.8" />
          <rect x="840" y="120" width="200" height="400" fill="none" stroke="white" strokeWidth="0.8" />
          <rect x="1040" y="200" width="300" height="180" fill="none" stroke="white" strokeWidth="0.8" />
          <circle cx="240" cy="210" r="3" fill="white" />
          <circle cx="400" cy="210" r="3" fill="white" />
          <circle cx="580" cy="210" r="3" fill="white" />
          <circle cx="840" cy="120" r="3" fill="white" />
          <circle cx="480" cy="300" r="3" fill="white" />
        </svg>
      </div>

      {/* Topographic contour lines */}
      <div className={styles.topo} aria-hidden="true">
        <svg viewBox="0 0 500 500" fill="none">
          <ellipse cx="250" cy="250" rx="220" ry="140" stroke="white" strokeWidth="0.6" />
          <ellipse cx="250" cy="250" rx="180" ry="110" stroke="white" strokeWidth="0.6" />
          <ellipse cx="250" cy="250" rx="140" ry="82" stroke="white" strokeWidth="0.6" />
          <ellipse cx="250" cy="250" rx="100" ry="56" stroke="white" strokeWidth="0.6" />
          <ellipse cx="250" cy="250" rx="60" ry="32" stroke="white" strokeWidth="0.6" />
          <ellipse cx="250" cy="250" rx="25" ry="14" stroke="white" strokeWidth="0.6" />
        </svg>
      </div>

      <div className={styles.content}>
        <div className={styles.tag}>Kde mám pozemek s.r.o. · Brno</div>
        <h1 className={styles.headline}>
          Váš pozemek<br />v&nbsp;<em>dobrých rukou</em>
        </h1>
        <p className={styles.lead}>
          Komplexní geodetické, projekční, realitní a právní služby v oblasti
          nemovitostí. Od vytyčení hranic po prodej — vše pod jednou střechou.
        </p>
        <div className={styles.btns}>
          <Link href="#sluzby" className={styles.btnPrimary}>Naše služby</Link>
          <Link href="#kontakt" className={styles.btnGhost}>Kontaktujte nás</Link>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span className={styles.scrollLine}>Přejít níže</span>
        <div className={styles.statRow}>
          <div className={styles.stat}>
            <strong>5</strong>
            <span>oblastí služeb</span>
          </div>
          <div className={styles.stat}>
            <strong>Brno</strong>
            <span>sídlo firmy</span>
          </div>
        </div>
      </div>
    </section>
  );
}
