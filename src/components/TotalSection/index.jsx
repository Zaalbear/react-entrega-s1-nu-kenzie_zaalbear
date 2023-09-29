import styles from './style.module.scss'

export const TotalSection = ({ entryList }) => {
  let total = 0;

  entryList.reduce((acc, crr) => {
    if (crr.type === "Entrada") {
      total = acc + parseFloat(crr.value);
    } else {
      total = acc - parseFloat(crr.value);
    }

    return total;
  }, 0);

  console.log(entryList)

  return (
    <section className={entryList.length === 0 ? styles.hidetotal__container : styles.total__container}>
      <h2 className={styles.total__title}>
        Valor total:{" "}
        <span className={styles.total__value}>
          {total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </h2>
      <p className={styles.total__text}>O valor se refere ao saldo</p>
    </section>
  );
};
