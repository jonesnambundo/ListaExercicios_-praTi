const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Digite o lado A: ", (aInput) => {
  const A = parseFloat(aInput);

  readline.question("Digite o lado B: ", (bInput) => {
    const B = parseFloat(bInput);

    readline.question("Digite o lado C: ", (cInput) => {
      const C = parseFloat(cInput);

      if ([A, B, C].some(side => isNaN(side) || side <= 0)) {
        console.log("Por favor, digite lados válidos (números positivos).");
      } else if (A + B > C && A + C > B && B + C > A) {
        // Forma triângulo, agora classificar
        if (A === B && B === C) {
          console.log("Triângulo Equilátero");
        } else if (A === B || B === C || A === C) {
          console.log("Triângulo Isósceles");
        } else {
          console.log("Triângulo Escaleno");
        }
      } else {
        console.log("Os lados fornecidos NÃO formam um triângulo.");
      }

      readline.close();
    });
  });
});
