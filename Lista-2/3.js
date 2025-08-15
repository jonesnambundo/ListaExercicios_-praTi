let frase = "olá olá mundo mundo";

let palavras = frase.split(" ");

let unicas = [];

for (let i = 0; i < palavras.length; i++) {
    let palavra = palavras[i];
    if (!unicas.includes(palavra)) {
        unicas.push(palavra);
    }
}

console.log(unicas); 
