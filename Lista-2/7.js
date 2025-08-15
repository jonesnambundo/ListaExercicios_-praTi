function nomesOrdenadosPorPreco(produtos) {
    return produtos
        .slice()
        .sort((a, b) => a.preco - b.preco) 
        .map(produto => produto.nome); 
}

const produtos = [
    { nome: "Teclado", preco: 120 },
    { nome: "Mouse", preco: 60 },
    { nome: "Monitor", preco: 800 },
    { nome: "Fone", preco: 150 }
];

const nomesOrdenados = nomesOrdenadosPorPreco(produtos);
console.log(nomesOrdenados); 

console.log(produtos); 
