// Desafio Intermediário 2: Calcular a Soma de Dígitos de um Número

// Para refatorar
function somaDigitos(numero) {
  let soma = 0;
  while (numero > 0) {
    soma += numero % 10;
    numero = Math.floor(numero / 10);
  }
  return soma;
}

// Refatorado
function somaDigitos(numero) {
  return [...numero.toString()].reduce(
    (acc, digito) => acc + parseInt(digito), 0
  );
}

const resultado = somaDigitos(12345);
console.log(resultado);
