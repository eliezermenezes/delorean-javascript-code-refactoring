// Desafio Intermediário 3: Embaralhar um Array Aleatoriamente

// Para refatorar
function embaralharArray(arr) {
  const copia = [...arr];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

// Refatorado
function embaralharArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

const resultado = embaralharArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(resultado);
