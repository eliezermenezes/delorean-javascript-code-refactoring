// Desafio Básico 5: Encontrar o Mínimo e o Máximo em um Array

// Para refatorar
function encontrarMinimoEMaximo(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  return { min, max };
}

// Refatorado
function encontrarMinimoEMaximo(arr) {
  return { min: Math.min(...arr), max: Math.max(...arr) };
}

const resultado = encontrarMinimoEMaximo([1, 2, 3, 4, 5]);
console.log(resultado);
