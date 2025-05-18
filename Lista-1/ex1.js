// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Digite um número inteiro: ", (input) => {
  const numero = parseInt(input);

  if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
  } else if (numero % 2 === 0) {
    console.log("O número é par.");
  } else {
    console.log("O número é ímpar.");
  }

  readline.close();
});
