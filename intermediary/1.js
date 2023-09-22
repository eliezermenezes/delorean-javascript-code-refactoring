// Desafio Intermediário 1: Encontrar Elementos Duplicados em um Array

// Para refatorar
function encontrarDuplicados(arr) {
  const duplicados = [];
  const contagem = {};
  for (const elemento of arr) {
    contagem[elemento] = (contagem[elemento] || 0) + 1;
    if (contagem[elemento] === 2) {
      duplicados.push(elemento);
    }
  }
  return duplicados;
}

// Refatorado
function encontrarDuplicados(arr) {
  return arr.filter((elemento, index) => arr.indexOf(elemento) !== index);
}

const resultado = encontrarDuplicados([1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10]);
console.log(resultado);
