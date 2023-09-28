import { FinanceCard } from "./FinanceCard";
import styles from "./styles.module.scss"

export const FinanceSection = ({ entryList, deleteEntry }) => {
  return (
    <section className={styles.section__container}>
      <h2 className={styles.section__title}>Resumo financeiro</h2>
      <ul className={styles.card__list}>
        <FinanceCard entryList={entryList} deleteEntry={deleteEntry} />
      </ul>
    </section>
  );
};
