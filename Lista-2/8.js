const vendas = [
  { cliente: 'Ana', total: 100 },
  { cliente: 'João', total: 200 },
  { cliente: 'Ana', total: 50 },
  { cliente: 'Maria', total: 300 },
  { cliente: 'João', total: 150 }
];

const resultado = vendas.reduce((acc, venda) => {
  acc[venda.cliente] = (acc[venda.cliente] || 0) + venda.total;
  return acc;
}, {});

console.log(resultado);

