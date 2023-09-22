// Desafio Intermediário 3: Encontrar a Média de Idades em um Array de Objetos

// Para refatorar
function encontrarMediaIdades(pessoas) {
  let somaIdades = 0;
  for (const pessoa of pessoas) {
    somaIdades += pessoa.idade;
  }
  return somaIdades / pessoas.length;
}

// Refatorado
function encontrarMediaIdades(pessoas) {
  const somaIdades = pessoas.reduce((soma, pessoa) => soma + pessoa.idade, 0);
  return somaIdades / pessoas.length;
}

const resultado = encontrarMediaIdades([
  { nome: "João", idade: 10 },
  { nome: "Maria", idade: 20 },
  { nome: "José", idade: 30 },
]);
console.log(resultado);
