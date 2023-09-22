// Desafio Intermediário 8: Remover Elementos Duplicados de um Array

// Para refatorar
function removerDuplicados(arr) {
  const resultado = [];
  for (const elemento of arr) {
    if (!resultado.includes(elemento)) {
      resultado.push(elemento);
    }
  }
  return resultado;
}

// Refatorado
function removerDuplicados(arr) {
  return [...new Set(arr)];
}

const resultado = removerDuplicados([1, 2, 3, 4, 5, 5, 5, 5, 5]);
console.log(resultado);
