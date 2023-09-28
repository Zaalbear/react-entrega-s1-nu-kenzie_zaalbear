import { FinanceCard } from "./FinanceCard";

export const FinanceSection = ({ entryList, deleteEntry }) => {
  return (
    <section>
      <h2>Resumo financeiro</h2>
      <ul>
        <FinanceCard entryList={entryList} deleteEntry={deleteEntry} />
      </ul>
    </section>
  );
};
