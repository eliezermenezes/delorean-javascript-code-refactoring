// Desafio Básico 4: Somar Elementos de um Array

// Para refatorar
function somarArray(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
  }
  return soma;
}

// Refatorado
function somarArray(arr) {
  return arr.reduce((soma, elemento) => soma + elemento, 0);
}

const resultado = somarArray([1, 2, 3, 4, 5]);
console.log(resultado);
