// Desafio Avançado 1: Encontrar o Maior Elemento em uma Matriz

// Para refatorar
function encontrarMaiorElementoMatriz(matriz) {
  let maior = matriz[0][0];
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      if (matriz[i][j] > maior) {
        maior = matriz[i][j];
      }
    }
  }
  return maior;
}

// Refatorado
function encontrarMaiorElementoMatriz(matriz) {
  return Math.max(...matriz.flat());
}

const resultado = encontrarMaiorElementoMatriz([
  [1, 2, 3],
  [4, 5, 6],
  [4, 5, 6],
]);
console.log(resultado);
