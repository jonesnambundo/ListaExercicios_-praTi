const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("===== MENU =====");
console.log("1. Dizer Olá");
console.log("2. Mostrar Data Atual");
console.log("3. Sair");

readline.question("Escolha uma opção (1, 2 ou 3): ", (opcao) => {
  switch (opcao) {
    case "1":
      console.log("Olá! Seja bem-vindo 😄");
      break;

    case "2":
      const dataAtual = new Date();
      console.log("Data e hora atual: " + dataAtual.toLocaleString());
      break;

    case "3":
      console.log("Saindo do programa...");
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
  }

  readline.close();
});
