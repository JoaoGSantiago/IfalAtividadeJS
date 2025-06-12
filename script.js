// 1) MAIOR_MENOR
function MaiorMenor() {
  let a = parseInt(prompt("digite o primeiro numero:"), 10);
  let b = parseInt(prompt("Digite o segundo numero:"), 10);
  let c = parseInt(prompt("Digite o terceiro numero:"), 10);
  let d = parseInt(prompt("Digite o quarto numero:"), 10);
  let e = parseInt(prompt("Digite o quinto numero:"), 10);

  let valores = [a, b, c, d, e];
  let maior = Math.max(...valores);
  let menor = Math.min(...valores);

  document.getElementById("output").innerText = `o numero maior: ${maior}, o numero menor: ${menor}`;
}

// 2) VOGAL
function Vogal() {
  let c = prompt("digite uma letra:");

  if (
    c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u'
  ) {
    document.getElementById("output").innerText = "é uma vogal.";
  } else {
    document.getElementById("output").innerText = "não é uma vogal.";
  }
}


// 3) LIMITES
function Limites() {
  let limite_inferior = parseInt(prompt("digite o limite inferior:"), 10);
  let limite_superior = parseInt(prompt("digite o limite superior:"), 10);
  let pares = [];
  let soma = 0;

  for (let i = limite_inferior + 1; i < limite_superior; i++) {
    if (i % 2 === 0) {
      pares.push(i);
      soma += i;
    }
  }

  document.getElementById("output").innerText = `Pares: ${pares.join(", ")}\nSomatório: ${soma}`;
}

// 4) ORDEM
function Ordem() {
  let a = parseInt(prompt("Digite o 1º número:"), 10);
  let b = parseInt(prompt("Digite o 2º número:"), 10);
  let c = parseInt(prompt("Digite o 3º número:"), 10);

  let ordenados = [a, b, c].sort((x, y) => x - y);
  document.getElementById("output").innerText = `a ordem crescente: ${ordenados.join(", ")}`;
}

// 5) POSITIVO_NEGATIVO
function PositivoNegativo() {
  let x = parseInt(prompt("digite um número:"), 10);

  if (x >= 0) {
    document.getElementById("output").innerText = "positivo ou zero.";
  } else {
    document.getElementById("output").innerText = "negativo.";
  }
}


// 6) PAR_IMPAR
function executarParImpar() {
  let x = parseInt(prompt("Digite um número:"), 10);

  if (x % 2 === 0) {
    document.getElementById("output").innerText = "par";
  } else {
    document.getElementById("output").innerText = "ímpar";
  }
}

