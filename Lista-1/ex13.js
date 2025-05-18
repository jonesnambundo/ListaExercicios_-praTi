const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

let soma = 0;
let quantidade = 0;

function pedirNumero() {
  readline.question("Digite um número decimal (0 para encerrar): ", (input) => {
    const numero = parseFloat(input);

    if (isNaN(numero)) {
      console.log("Valor inválido. Digite um número decimal.");
      pedirNumero();
    } else if (numero === 0) {
      if (quantidade === 0) {
        console.log("Nenhum número foi inserido.");
      } else {
        const media = soma / quantidade;
        console.log(`Média aritmética dos ${quantidade} números: ${media.toFixed(2)}`);
      }
      readline.close();
    } else {
      soma += numero;
      quantidade++;
      pedirNumero();
    }
  });
}

pedirNumero();
