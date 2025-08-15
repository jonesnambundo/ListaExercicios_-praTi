const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Gerar número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

console.log("🎯 Jogo de Adivinhação");
console.log("Tente adivinhar o número entre 1 e 100.");

function perguntar() {
    rl.question("Digite seu palpite: ", (resposta) => {
        const palpite = parseInt(resposta, 10);
        tentativas++;

        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            console.log("⚠️ Por favor, digite um número válido entre 1 e 100.");
            perguntar();
        } else if (palpite < numeroSecreto) {
            console.log("🔼 Mais alto!");
            perguntar();
        } else if (palpite > numeroSecreto) {
            console.log("🔽 Mais baixo!");
            perguntar();
        } else {
            console.log(`🎉 Parabéns! Você acertou em ${tentativas} tentativas.`);
            rl.close();
        }
    });
}

perguntar();
