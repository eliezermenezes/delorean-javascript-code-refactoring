// Desafio Básico 6: Encontrar a Média de Notas em um Array

// Para refatorar
function encontrarMedia(notas) {
  let soma = 0;
  for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
  }
  return soma / notas.length;
}

// Refatorado
function encontrarMedia(notas) {
  return notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
}

const resultado = encontrarMedia([10, 5, 7, 8, 9]);
console.log(resultado);
