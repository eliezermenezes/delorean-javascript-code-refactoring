// Desafio Básico 7: Encontrar Números Pares em um Array

// Para refatorar
function encontrarPares(arr) {
  const pares = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      pares.push(arr[i]);
    }
  }
  return pares;
}

// Refatorado
function encontrarPares(arr) {
  return arr.filter((numero) => numero % 2 === 0);
}

const resultado = encontrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(resultado);
