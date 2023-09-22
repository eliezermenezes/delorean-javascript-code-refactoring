// Desafio Básico 3: Contar Vogais em uma String

// Para refatorar
function contarVogais(str) {
  let contador = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      contador++;
    }
  }
  return contador;
}

// Refatorado
function contarVogais(str) {
  return str
    .toLowerCase()
    .split("")
    .filter((char) => "aeiou".includes(char)).length;
}

const resultado = contarVogais("JavaScript");
console.log(resultado);
