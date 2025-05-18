const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Digite seu peso em kg: ", (pesoInput) => {
  const peso = parseFloat(pesoInput);

  readline.question("Digite sua altura em metros (ex: 1.75): ", (alturaInput) => {
    const altura = parseFloat(alturaInput);

    if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
      console.log("Por favor, digite valores válidos para peso e altura.");
    } else {
      const imc = peso / (altura * altura);
      console.log(`Seu IMC é: ${imc.toFixed(2)}`);

      if (imc < 18.5) {
        console.log("Categoria: Baixo peso");
      } else if (imc < 25) {
        console.log("Categoria: Peso normal");
      } else if (imc < 30) {
        console.log("Categoria: Sobrepeso");
      } else {
        console.log("Categoria: Obesidade");
      }
    }

    readline.close();
  });
});
