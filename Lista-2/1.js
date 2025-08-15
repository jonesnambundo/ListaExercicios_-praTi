function ehDataValida(dia, mes, ano) {
    const data = new Date(ano, mes - 1, dia);

    return (
        data.getFullYear() === ano &&
        data.getMonth() === mes - 1 &&
        data.getDate() === dia
    );
}

// Exemplos de uso:
console.log(ehDataValida(29, 2, 2024)); // true (bissexto)
console.log(ehDataValida(29, 2, 2023)); // false
console.log(ehDataValida(31, 4, 2023)); // false
console.log(ehDataValida(31, 12, 2023)); // true
