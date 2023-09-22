// Desafio Intermediário 6: Calcular o Fatorial de um Número

// Para refatorar
function calcularFatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let fatorial = 1;
  for (let i = 2; i <= n; i++) {
    fatorial *= i;
  }
  return fatorial;
}

// Refatorado
function calcularFatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * calcularFatorial(n - 1);
}

const resultado = calcularFatorial(5);
console.log(resultado);
