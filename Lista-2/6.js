function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const chave = JSON.stringify(args);
        if (cache.has(chave)) {
            console.log("Retornando do cache:", chave);
            return cache.get(chave);
        }
        const resultado = fn.apply(this, args);
        cache.set(chave, resultado);
        return resultado;
    };
}


function somaLenta(a, b) {
    console.log("Calculando...");
    return a + b;
}

const somaMemoizada = memoize(somaLenta);

console.log(somaMemoizada(2, 3)); 
console.log(somaMemoizada(2, 3)); 
console.log(somaMemoizada(4, 1)); 
