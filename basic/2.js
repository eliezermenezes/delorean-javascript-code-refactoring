// Desafio Básico 2: Inverter uma String

// Para refatorar
function inverterString(str) {
  let resultado = "";
  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }
  return resultado;
}

// Refatorado
function inverterString(str) {
  return str.split("").reverse().join("");
}

const resultado = inverterString("JavaScript");
console.log(resultado);
