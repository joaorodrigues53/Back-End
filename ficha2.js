function imc(peso, altura) {
  imc = peso / (altura * altura)
  if (imc < 18.5) {
    return "Abaixo do peso"
  } else if (imc >= 18.5 && imc < 25) {
    return "Peso normal"
  } else if (imc >= 25 && imc < 30) {
    return "Peso normal"
  } else {
    return "Obeso"
  }

}
console.log(imc(170, 1.80))

function inv(frase) {
  tamanho = frase.length
  nfrase = "";
  for (i = tamanho - 1; i >= 0; i--) {
    nfrase += frase[i]
  }
  return nfrase
}
console.log(inv("Hoje e domingo"))

function contarvogais(frase) {
  nvogais = 'aeiouAEIOU';
  conta = 0;
  for (x = 0; x < frase.length; x++) {
    if (nvogais.indexOf(frase[x]) !== -1) {
      conta += 1;
    }
  }
  return conta;
}
console.log(contarvogais("eu sou o joao"));

function contaletras(str, letra) {

  var conta = 0;
  for (var i = 0; i <= str.length; i++) {
    if (str.charAt(i) === letra)
      conta++;
  }
  return conta;
}
console.log(contaletras("ola o guilherme esta a olhar para ", "o"))

function horas() {
  entrada = new Date(2020, 02, 28, 8, 0, 0);
  saida = new Date(2020, 02, 28, 18, 0, 0);
  horas = saida.getHours() - entrada.getHours();
  return horas;
}
console.log(horas());

function retangulo() {
  linhas = 10;
  colunas = 5;
  asteriscos = "";
  for (i = 0; i <= linhas - 1; i++) {
    asteriscos = "";
    for (l = 0; l <= colunas - 1; l++) {
      asteriscos += "*";
    }
    console.log(asteriscos)
  }
}
retangulo()

function triangulo() {
  linhas = 10;
  colunas = 1;
  asteriscos = "";
  for (i = 0; i <= linhas - 1; i++) {
    for (l = 0; l <= colunas - 1; l++) {
      asteriscos += "*";
    }
    console.log(asteriscos)
  }
}
triangulo()

function caixa() {
  linhas = 10;
  asteriscos = "";
  for (i = 1; i <= linhas; i++) {
    asteriscos = "";
    for (l = 1; l <= linhas; l++) {
      if (i == 1 || i == 10) {
        asteriscos += "*";
      }
      else {
        if (l == 1 || l == 10) {
          asteriscos += "*";
        }
        else {
          asteriscos += " ";
        }
      }
    }
    console.log(asteriscos)
  }
}
caixa()