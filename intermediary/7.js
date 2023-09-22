// Desafio Intermediário 7: Encontrar o Índice de um Elemento em um Array

// Para refatorar
function encontrarIndiceElemento(arr, elemento) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elemento) {
      return i;
    }
  }
  return -1;
}

// Refatorado
function encontrarIndiceElemento(arr, elemento) {
  return arr.indexOf(elemento);
}

const resultado = encontrarIndiceElemento([1, 2, 3, 4, 5], 3);
console.log(resultado);
