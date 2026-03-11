"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Services.module.css";

const SERVICES = [
  {
    title: "Geodetická činnost",
    desc: "Vytyčování hranic pozemků, vytyčování staveb, geometrické plány, polohopisné a výškopisné mapování i další zeměměřické služby dle konkrétních požadavků klienta.",
    tags: ["Vytyčování hranic", "Geometrické plány", "Mapování"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Projekční činnost",
    desc: "Geometrický plán, dokumentace stavby a projektové dokumentace pro přípojky inženýrských sítí. Podklady pro kolaudaci i stavební povolení.",
    tags: ["Geometrický plán", "Inženýrské sítě", "Dokumentace stavby"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: "Realitní činnost & správa pozemků",
    desc: "Komplexní zprostředkování prodeje a koupě nemovitostí. Provázíme vás celým procesem – od ocenění přes inzerci až po podpis smlouvy.",
    tags: ["Prodej nemovitostí", "Koupě pozemků", "Správa"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Právní služby v oblasti nemovitostí",
    desc: "Vypracování a posuzování smluv, bytové právo, věcná břemena a zástavní práva, podání na katastr nemovitostí i další právní služby dle potřeb klienta.",
    tags: ["Smlouvy", "Věcná břemena", "Katastr"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    title: "Znalecká činnost",
    desc: "Znalecké posudky v oboru geodézie a kartografie. Nejčastěji využívány při sporech o vlastnické hranice pozemků a při soudních řízeních.",
    tags: ["Znalecké posudky", "Geodézie", "Kartografie"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = ref.current?.querySelectorAll<HTMLElement>("[data-fade]");
    if (!cards) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { (e.target as HTMLElement).style.cssText = "opacity:1;transform:none"; obs.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    cards.forEach((c, i) => {
      c.style.cssText = `opacity:0;transform:translateY(28px);transition:opacity 0.6s ${i * 0.08}s ease,transform 0.6s ${i * 0.08}s ease`;
      obs.observe(c);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <section className={styles.section} id="sluzby">
      <div className={styles.inner} ref={ref}>
        <div className={styles.header}>
          <div>
            <div className={styles.label}>Co děláme</div>
            <h2 className={styles.title}>
              Komplexní<br />služby pro nemovitosti
            </h2>
          </div>
          <p className={styles.sub}>
            Poskytujeme odborné služby pro vlastníky, kupce i prodejce pozemků
            a nemovitostí po celé České republice.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <div key={s.title} className={styles.card} data-fade>
              <div className={styles.icon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <div className={styles.tags}>
                {s.tags.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}

          {/* CTA card */}
          <div className={styles.ctaCard} data-fade>
            <p className={styles.ctaText}>
              Potřebujete poradit,{" "}
              <em>která služba je pro vás ta pravá?</em>
            </p>
            <Link href="#kontakt" className={styles.ctaBtn}>
              Zeptat se zdarma
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
