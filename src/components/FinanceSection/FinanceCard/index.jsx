export const FinanceCard = ({ entryList, deleteEntry }) => {
  return (
    <>
      {entryList.map((entry) => {
        return (
          <li key={entry.id}>
            <h3>{entry.name}</h3>

            <div>
              {entry.type === "Entrada" ? (
                <p>R$: {entry.value.toFixed(2).replace(".", ",")} </p>
              ) : (
                <p>R$: -{entry.value.toFixed(2).replace(".", ",")}</p>
              )}
            </div>

            <p>{entry.type}</p>
            <button onClick={() => deleteEntry(entry.id)}>Excluir</button>
          </li>
        );
      })}
    </>
  );
};
