import { useState } from "react";

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
    <form onSubmit={submit}>
      <div>
        <label htmlFor="name">Descrição</label>
        <input
          type="text"
          id="name"
          value={entryName}
          onChange={(e) => setEntryName(e.target.value)}
        />

        <p>Ex: Compra de roupas</p>
      </div>

      <div>
        <label htmlFor="value">Valor (R$:)</label>
        <input
          type="number"
          id="value"
          value={entryValue}
          onChange={(e) => setEntryValue(parseFloat(e.target.value))}
        />
      </div>

      <div>
        <label htmlFor="type">Tipo de valor</label>
        <select
          name="type"
          id="type"
          value={entryType}
          onChange={(e) => setEntryType(e.target.value)}
        >
          <option value="Entrada">Entrada</option>
          <option value="Despesa">Despesa</option>
        </select>
      </div>

      <button type="submit">Inserir Valor</button>
    </form>
  );
};
