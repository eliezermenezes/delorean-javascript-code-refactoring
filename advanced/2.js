// Desafio Avançado 2: Calcular a Média de Notas em uma Matriz de Objetos

// Para refatorar

function calcularMediaNotasMatriz(alunos) {
  let somaNotas = 0;
  let totalAlunos = 0;
  for (let i = 0; i < alunos.length; i++) {
    for (let j = 0; j < alunos[i].length; j++) {
      somaNotas += alunos[i][j].nota;
      totalAlunos++;
    }
  }
  return somaNotas / totalAlunos;
}

// Refatorado
function calcularMediaNotasMatriz(alunos) {
  const notas = alunos.flat().map((aluno) => aluno.nota);
  return notas.reduce((soma, nota) => soma + nota, 0) / notas.length;
}

const resultado = calcularMediaNotasMatriz([
  [
    { nome: "João", nota: 8 },
    { nome: "Igor", nota: 7 },
  ],
  [
    { nome: "Marcelo", nota: 10 },
    { nome: "Pedro", nota: 9 },
  ],
]);
console.log(resultado);
