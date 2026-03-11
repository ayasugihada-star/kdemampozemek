"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

const SERVICES = [
  "Geodetická činnost",
  "Projekční činnost",
  "Realitní činnost a správa pozemků",
  "Právní služby v oblasti nemovitostí",
  "Znalecká činnost",
  "Nevím / potřebuji poradit",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [toast, setToast] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = () => {
    if (!form.name.trim() || !form.email.trim()) {
      setError("Vyplňte prosím alespoň jméno a e-mail.");
      return;
    }
    setError("");
    setToast(true);
    setForm({ name: "", phone: "", email: "", service: "", message: "" });
    setTimeout(() => setToast(false), 3500);
  };

  return (
    <section className={styles.section} id="kontakt">
      <div className={styles.inner}>
        <div className={styles.label}>Kontakt</div>
        <h2 className={styles.title}>Pojďme to řešit společně</h2>
        <p className={styles.sub}>
          Poptejte nezávazně nebo se rovnou objednejte. Odpovídáme zpravidla do 24 hodin.
        </p>

        <div className={styles.grid}>
          {/* Info column */}
          <div className={styles.info}>
            <div className={styles.block}>
              <h3>Ing. et Ing. Jiří Žváček, Ph.D.</h3>
              <a href="tel:+420777811741" className={styles.phone}>777 811 741</a>
              <a href="mailto:zvacek.jiri@centrum.cz">zvacek.jiri@centrum.cz</a>
            </div>
            <hr className={styles.divider} />
            <div className={styles.block}>
              <h3>Ing. Michaela Žváčková Kutá</h3>
              <a href="tel:+420773552416" className={styles.phone}>773 552 416</a>
              <a href="mailto:m.zvackova@centrum.cz">m.zvackova@centrum.cz</a>
            </div>
            <hr className={styles.divider} />
            <div className={styles.block}>
              <h3>Adresa</h3>
              <p>Kde mám pozemek s.r.o.<br />Stará 101/21<br />602 00 Brno</p>
            </div>

            <div className={styles.meta}>
              <div className={styles.metaItem}><span>IČO</span><strong>09245324</strong></div>
              <div className={styles.metaItem}><span>Datová schránka</span><strong>t4d923p</strong></div>
              <div className={styles.metaItem}><span>Bankovní spojení</span><strong>2901824639/2010</strong></div>
              <div className={styles.metaItem}><span>Banka</span><strong>Fio banka a.s.</strong></div>
            </div>
          </div>

          {/* Form */}
          <div className={styles.form}>
            <h3>Nezávazná poptávka</h3>
            <p>Popište váš požadavek a my se vám ozveme.</p>

            <div className={styles.row}>
              <div className={styles.group}>
                <label>Jméno</label>
                <input type="text" placeholder="Jan Novák" value={form.name} onChange={set("name")} />
              </div>
              <div className={styles.group}>
                <label>Telefon</label>
                <input type="tel" placeholder="777 123 456" value={form.phone} onChange={set("phone")} />
              </div>
            </div>
            <div className={styles.group}>
              <label>E-mail</label>
              <input type="email" placeholder="jan@priklad.cz" value={form.email} onChange={set("email")} />
            </div>
            <div className={styles.group}>
              <label>Typ služby</label>
              <select value={form.service} onChange={set("service")}>
                <option value="">Vyberte službu…</option>
                {SERVICES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className={styles.group}>
              <label>Zpráva</label>
              <textarea placeholder="Stručně popište váš požadavek…" value={form.message} onChange={set("message")} />
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <button className={styles.submit} onClick={submit}>
              Odeslat poptávku →
            </button>
          </div>
        </div>
      </div>

      <div className={`${styles.toast} ${toast ? styles.toastShow : ""}`}>
        ✓ Zpráva odeslána. Ozveme se co nejdříve!
      </div>
    </section>
  );
}
