import styles from "../styles.module.scss";

export const FinanceCard = ({ entryList, deleteEntry }) => {
  return (
    <>
      {entryList.length === 0 ? (
        <h2 className={styles.placeholder__title}>
          Você ainda não possui nenhum lançamento
        </h2>
      ) : (
        <></>
      )}
      {entryList.map((entry) => {
        return (
          <li className={styles.list__item} key={entry.id}>
            <div
              className={
                entry.type === "Entrada" ? styles.cardIn : styles.cardOut
              }
            >
              <div>
                <h3 className={styles.item__name}>{entry.name}</h3>

                <p className={styles.item__type}>{entry.type}</p>
              </div>
              <div>
                {entry.type === "Entrada" ? (
                  <p className={styles.item__value}>
                    R$: {entry.value.toFixed(2).replace(".", ",")}{" "}
                  </p>
                ) : (
                  <p className={styles.item__value}>
                    R$: {entry.value.toFixed(2).replace(".", ",")}
                  </p>
                )}

                <button
                  className={styles.item__bttn}
                  onClick={() => deleteEntry(entry.id)}
                >
                  Excluir
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </>
  );
};
