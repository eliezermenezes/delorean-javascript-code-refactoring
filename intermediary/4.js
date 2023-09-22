// Desafio Intermediário 4: Encontrar a Interseção de Dois Arrays

// Para refatorar
function encontrarIntersecaoArrays(arr1, arr2) {
  const intersecao = [];
  for (const elemento1 of arr1) {
    if (arr2.includes(elemento1) && !intersecao.includes(elemento1)) {
      intersecao.push(elemento1);
    }
  }
  return intersecao;
}

// Refatorado
function encontrarIntersecaoArrays(arr1, arr2) {
  const set1 = new Set(arr1);
  const intersecao = [
    ...new Set(arr2.filter((elemento) => set1.has(elemento))),
  ];
  return intersecao;
}

const resultado = encontrarIntersecaoArrays(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [0, 2, 4, 6, 8, 10, 15]
);
console.log(resultado);
