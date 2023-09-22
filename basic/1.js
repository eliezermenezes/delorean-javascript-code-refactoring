// Desafio Básico 1: Verificar se um número é par ou ímpar

// Para refatorar
function eParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

// Refatorado
function eParOuImpar(numero) {
  return numero % 2 === 0 ? "Par" : "Ímpar";
}

const resultado = eParOuImpar(2);
console.log(resultado);
