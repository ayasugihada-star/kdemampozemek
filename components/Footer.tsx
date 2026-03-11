import Link from "next/link";
import styles from "./Footer.module.css";

const NAV = [
  { label: "Služby", href: "#sluzby" },
  { label: "O nás", href: "#o-nas" },
  { label: "Odbornosti", href: "#cinnost" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "Povinné informace", href: "#" },
  { label: "Cookies", href: "#" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.logo}>
          Kde mám pozemek s.r.o.
          <small>Geodetické · Projekční · Realitní · Právní služby</small>
        </div>
        <nav className={styles.links}>
          {NAV.map((n) => (
            <Link key={n.label} href={n.href}>{n.label}</Link>
          ))}
        </nav>
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Kde mám pozemek s.r.o. · IČO 09245324 · Brno</span>
        <span>Tento web používá cookies.</span>
      </div>
    </footer>
  );
}
