const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Digite sua idade: ", (input) => {
  const idade = parseInt(input);

  if (isNaN(idade) || idade < 0) {
    console.log("Por favor, digite uma idade válida.");
  } else if (idade <= 12) {
    console.log("Você é uma criança.");
  } else if (idade <= 17) {
    console.log("Você é um adolescente.");
  } else if (idade <= 59) {
    console.log("Você é um adulto.");
  } else {
    console.log("Você é um idoso.");
  }

  readline.close();
});
