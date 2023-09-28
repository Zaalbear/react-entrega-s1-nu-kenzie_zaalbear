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

  return (
    <section>
      <h2>
        Valor total:{" "}
        <span>
          {total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
      </h2>
      <p>O valor se refere ao saldo</p>
    </section>
  );
};
