const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Digite a nota (0 a 10): ", (input) => {
  const nota = parseFloat(input);

  if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log("Por favor, digite uma nota válida entre 0 e 10.");
  } else if (nota >= 7) {
    console.log("Aprovado");
  } else if (nota >= 5) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }

  readline.close();
});
