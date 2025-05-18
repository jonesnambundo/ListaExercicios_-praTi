const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Digite o primeiro valor: ", (valor1Input) => {
  const valor1 = parseFloat(valor1Input);

  readline.question("Digite o segundo valor (diferente do primeiro): ", (valor2Input) => {
    const valor2 = parseFloat(valor2Input);

    if (isNaN(valor1) || isNaN(valor2)) {
      console.log("Por favor, digite valores numéricos válidos.");
    } else if (valor1 === valor2) {
      console.log("Os valores não podem ser iguais.");
    } else {
      const menor = Math.min(valor1, valor2);
      const maior = Math.max(valor1, valor2);

      console.log(`Valores em ordem crescente: ${menor}, ${maior}`);
    }

    readline.close();
  });
});
