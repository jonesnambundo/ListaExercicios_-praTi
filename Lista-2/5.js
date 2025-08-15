function debounce(fn, delay) {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Exemplo de uso:
function minhaAcao(texto) {
    console.log("Executando ação:", texto);
}

const acaoDebounced = debounce(minhaAcao, 1000);

// Chamadas rápidas — apenas a última será executada
acaoDebounced("Primeiro");
acaoDebounced("Segundo");
acaoDebounced("Terceiro");

