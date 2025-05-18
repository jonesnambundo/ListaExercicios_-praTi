const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Digite um número inteiro para calcular o fatorial: ", (input) => {
  const numero = parseInt(input);

  if (isNaN(numero) || numero < 0) {
    console.log("Por favor, digite um número inteiro não negativo.");
  } else {
    let fatorial = 1;
    for (let i = 1; i <= numero; i++) {
      fatorial *= i;
    }
    console.log(`O fatorial de ${numero} é: ${fatorial}`);
  }

  readline.close();
});
