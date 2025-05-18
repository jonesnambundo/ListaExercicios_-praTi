// Gera e imprime os 10 primeiros números da sequência de Fibonacci

let n1 = 0, n2 = 1;

console.log("Sequência de Fibonacci (10 primeiros números):");

for (let i = 0; i < 10; i++) {
  console.log(n1);
  let proximo = n1 + n2;
  n1 = n2;
  n2 = proximo;
}
