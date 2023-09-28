import { useState } from "react";
import styles from './style.module.scss'

export const FinanceForm = ({ addEntry }) => {
  const [entryName, setEntryName] = useState("");
  const [entryValue, setEntryValue] = useState(0);
  const [entryType, setEntryType] = useState("Entrada");

  const submit = (event) => {
    event.preventDefault();

    addEntry(entryName, entryValue, entryType);

    setEntryName("");
    setEntryValue(0);
    setEntryType("Entrada");
  };

  return (
    <form className={styles.form__container} onSubmit={submit}>
      <div className={styles.input__container}>
        <label className={styles.input__label} htmlFor="name">Descrição</label>
        <input
          className={styles.input__box}
          placeholder="Digite aqui uma descrição"
          type="text"
          id="name"
          value={entryName}
          onChange={(e) => setEntryName(e.target.value)}
        />

        <p className={styles.example__text}>Ex: Compra de roupas</p>
      </div>

      <div className={styles.input__container}>
        <label className={styles.input__label} htmlFor="value">Valor (R$:)</label>
        <input
          className={styles.input__box}
          placeholder="R$ 10,00"
          type="number"
          id="value"
          value={entryValue}
          onChange={(e) => setEntryValue(parseFloat(e.target.value))}
        />
      </div>

      <div className={styles.input__container}>
        <label className={styles.input__label} htmlFor="type">Tipo de valor</label>
        <select
          className={styles.input__box}
          name="type"
          id="type"
          value={entryType}
          onChange={(e) => setEntryType(e.target.value)}
        >
          <option value="Entrada">Entrada</option>
          <option value="Despesa">Despesa</option>
        </select>
      </div>

      <button className={styles.form__bttn} type="submit">Inserir Valor</button>
    </form>
  );
};
