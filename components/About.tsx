import styles from "./About.module.css";

const TEAM = [
  {
    initials: "JŽ",
    name: "Ing. et Ing. Jiří Žváček, Ph.D.",
    role: "Jednatel · Geodézie & Znalecká činnost",
    phone: "777 811 741",
    email: "zvacek.jiri@centrum.cz",
  },
  {
    initials: "MŽ",
    name: "Ing. Michaela Žváčková Kutá",
    role: "Projekce & Realitní činnost",
    phone: "773 552 416",
    email: "m.zvackova@centrum.cz",
  },
];

export default function About() {
  return (
    <section className={styles.section} id="o-nas">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Visual card */}
          <div className={styles.visual}>
            <div className={styles.mainCard}>
              <p className={styles.quote}>
                &ldquo;Každý pozemek má svůj příběh. My se postaráme, aby byl
                ten váš napsán správně.&rdquo;
              </p>
              <div className={styles.attr}>Kde mám pozemek s.r.o.</div>
            </div>
            <div className={styles.accent}>
              <strong>Brno</strong>
              <span>Centrum služeb</span>
            </div>
          </div>

          {/* Text */}
          <div className={styles.text}>
            <div className={styles.label}>Kdo jsme</div>
            <h2 className={styles.title}>
              Specialisté na pozemky a nemovitosti
            </h2>
            <p>
              Jsme česká firma sídlící v Brně, která propojuje odborné znalosti
              z geodézie, projekce, realit a práva do jednoho komplexního řešení
              pro vaše nemovitostní potřeby.
            </p>
            <p>
              Disponujeme zkušenostmi ve všech fázích transakce s pozemky – od
              prvního zaměření přes přípravu dokumentace až po finální právní
              zajištění převodu.
            </p>

            <div className={styles.team}>
              {TEAM.map((m) => (
                <div key={m.email} className={styles.member}>
                  <div className={styles.avatar}>{m.initials}</div>
                  <div className={styles.memberInfo}>
                    <div className={styles.memberName}>{m.name}</div>
                    <div className={styles.memberRole}>{m.role}</div>
                    <div className={styles.memberContact}>
                      <a href={`tel:+420${m.phone.replace(/\s/g, "")}`}>{m.phone}</a>
                      {" · "}
                      <a href={`mailto:${m.email}`}>{m.email}</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
