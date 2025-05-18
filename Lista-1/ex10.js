const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Digite um número inteiro: ", (input) => {
  const numero = parseInt(input);

  if (isNaN(numero)) {
    console.log("Por favor, digite um número inteiro válido.");
  } else {
    for (let i = 1; i <= 10; i++) {
      console.log(`${i}ª vez: ${numero}`);
    }
  }

  readline.close();
});
