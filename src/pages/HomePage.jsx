import { useState } from "react";

import { FinanceForm } from "../components/FinanceForm";
import { TotalSection } from "../components/TotalSection";
import { FinanceSection } from "../components/FinanceSection";
import { Header } from "../components/Header";
import { Main } from "../components/Main";

export const HomePage = () => {
  const [entryList, setEntryList] = useState([]);

  const addEntry = (name, value, type) => {
    if (name === "") {
      alert("Você deve colocar um titulo na sua entrada");
    } else if (value <= 0) {
      alert("O valor da entrada deve ser maior que 0");
    } else {
      const id = crypto.randomUUID();
      const newEntry = { id: id, name: name, value: value, type: type };
      setEntryList([...entryList, newEntry]);
    }
  };

  const deleteEntry = (deletingID) => {
    const filteredList = entryList.filter((entry) => {
      if (entry.id !== deletingID) {
        return entry;
      }
    });

    setEntryList(filteredList);
  };

  return (
    <>
      <Header />
      <Main>
        <div className="form__container">
          <FinanceForm addEntry={addEntry} />
          <TotalSection entryList={entryList} />
        </div>
        <FinanceSection entryList={entryList} deleteEntry={deleteEntry} />
      </Main>
    </>
  );
};
