// Converte array de pares para objeto
function paresParaObjeto(pares) {
  return pares.reduce((obj, [chave, valor]) => {
    obj[chave] = valor;
    return obj;
  }, {});
}

function objetoParaPares(obj) {
  return Object.entries(obj);
}

const pares = [['nome', 'Ana'], ['idade', 30], ['cidade', 'São Paulo']];
const objeto = paresParaObjeto(pares);
console.log(objeto);

const paresNovos = objetoParaPares(objeto);
console.log(paresNovos);

