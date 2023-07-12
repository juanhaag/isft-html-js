function suma(...numeros) {
  return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

function resta(...numeros) {
  return numeros.reduce((acumulador, numero) => acumulador - numero);
}

function multiplicacion(...numeros) {
  return numeros.reduce((acumulador, numero) => acumulador * numero, 1);
}

function division(...numeros) {
  return numeros.reduce((acumulador, numero) => acumulador / numero);
}

function raizCuadrada(numero) {
  return Math.sqrt(numero);
}

function potencia(base, exponente) {
  return Math.pow(base, exponente);
}

function obtenerNumeros() {
  let obtenerBotones = document.querySelectorAll("button");
  let displayValues = document.querySelector("#display");
  let numeros = [];
  let opcion = "";

  obtenerBotones.forEach((button) => {
    button.addEventListener("click", function () {
      let valor = button.textContent;
      if (valor === "=") {
        let resultado;

        if (opcion === "+") {
          resultado = suma(...numeros);
        } else if (opcion === "-") {
          resultado = resta(...numeros);
        } else if (opcion === "*") {
          resultado = multiplicacion(...numeros);
        } else if (opcion === "/") {
          resultado = division(...numeros);
        }
        displayValues.value = resultado;

        numeros = [];
        opcion = "";
      } else if (valor === "C") {
        displayValues.value = "";

        numeros = [];
        opcion = "";
      } else {
        displayValues.value += valor;

        if (!isNaN(parseFloat(valor))) {
          numeros.push(parseFloat(valor));
        } else {
          opcion = valor;
        }
      }
    });
  });
}

obtenerNumeros();
