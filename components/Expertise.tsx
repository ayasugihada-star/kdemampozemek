import styles from "./Expertise.module.css";

const ITEMS = [
  {
    title: "Vytyčování hranic",
    desc: "Přesné zaměření a vyznačení vlastnických hranic v terénu dle katastru nemovitostí.",
  },
  {
    title: "Geometrické plány",
    desc: "Zpracování geometrických plánů pro dělení pozemků, vyznačení staveb a věcná břemena.",
  },
  {
    title: "Polohopis & výškopis",
    desc: "Podrobné mapové podklady pro projekční kanceláře a stavební úřady.",
  },
  {
    title: "Katastr nemovitostí",
    desc: "Zastoupení při jednáních s katastrálním úřadem a příprava vkladových listin.",
  },
  {
    title: "Realitní zprostředkování",
    desc: "Prodej a koupě pozemků i nemovitostí s odborným doprovodem od A do Z.",
  },
  {
    title: "Smluvní agenda",
    desc: "Kupní smlouvy, smlouvy o věcném břemeni, zástavní smlouvy a další dokumenty.",
  },
];

export default function Expertise() {
  return (
    <section className={styles.section} id="cinnost">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>Naše odbornosti</div>
          <h2 className={styles.title}>
            Proč svěřit pozemek<br />do našich rukou
          </h2>
          <p className={styles.sub}>
            Kombinujeme technické, právní i obchodní znalosti, které jinak
            musíte hledat u více specialistů.
          </p>
        </div>

        <div className={styles.grid}>
          {ITEMS.map((item) => (
            <div key={item.title} className={styles.item}>
              <div className={styles.dot} />
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
