const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Quantas maçãs você quer comprar? ", (quantidadeInput) => {
  const quantidade = parseInt(quantidadeInput);

  if (isNaN(quantidade) || quantidade <= 0) {
    console.log("Por favor, digite uma quantidade válida (número inteiro positivo).");
  } else {
    let precoUnitario;

    if (quantidade < 12) {
      precoUnitario = 0.30;
    } else {
      precoUnitario = 0.25;
    }

    const total = precoUnitario * quantidade;
    console.log(`Total da compra: R$ ${total.toFixed(2)}`);
  }

  readline.close();
});
