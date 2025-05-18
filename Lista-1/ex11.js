const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

let soma = 0;
let contador = 0;

function pedirNumero() {
  readline.question(`Digite o ${contador + 1}º número: `, (input) => {
    const numero = parseFloat(input);

    if (isNaN(numero)) {
      console.log("Por favor, digite um número válido.");
      pedirNumero(); // repete a mesma posição
    } else {
      soma += numero;
      contador++;

      if (contador < 5) {
        pedirNumero();
      } else {
        console.log(`A soma total dos 5 números é: ${soma}`);
        readline.close();
      }
    }
  });
}

pedirNumero();
