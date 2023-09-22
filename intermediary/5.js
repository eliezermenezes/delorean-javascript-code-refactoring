// Desafio Intermediário 5: Verificar se Todos os Elementos de um Array Satisfazem uma Condição

// Para refatorar
function todosSatisfazem(arr, condicao) {
  for (const elemento of arr) {
    if (!condicao(elemento)) {
      return false;
    }
  }
  return true;
}

// Refatorado
function todosSatisfazem(arr, condicao) {
  return arr.every(condicao);
}

const resultado = todosSatisfazem([1, 2, 3, 4, 5], (elemento) => elemento > 0);
console.log(resultado);
