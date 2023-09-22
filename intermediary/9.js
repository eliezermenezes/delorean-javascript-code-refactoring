// Desafio Intermediário 9: Encontrar a Soma de Todos os Números em uma Matriz

// Para refatorar
function somaMatriz(matriz) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      soma += matriz[i][j];
    }
  }
  return soma;
}

// Refatorado
function somaMatriz(matriz) {
  return matriz.flat().reduce((soma, numero) => soma + numero, 0);
}

const resultado = somaMatriz([
  [1, 2, 3],
  [4, 5, 6],
]);
console.log(resultado);
