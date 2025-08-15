function fatorial(n) {
    if (n < 0) {
        throw new Error("O número não pode ser negativo.");
    }
    if (n === 0) {
        return 1;
    }
    return n * fatorial(n - 1);
}

// Exemplos de uso:
try {
    console.log(fatorial(5)); 
    console.log(fatorial(0)); 
    console.log(fatorial(-3)); 
} catch (erro) {
    console.error("Erro:", erro.message);
}
