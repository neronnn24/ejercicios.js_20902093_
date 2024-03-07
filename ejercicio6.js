var radio = parseFloat(prompt("Ingrese el radio del cilindro:"));

var altura = parseFloat(prompt("Ingrese la altura del cilindro:"));


if (!isNaN(radio) && !isNaN(altura) && radio > 0 && altura > 0) {

  var areaBase = Math.PI * Math.pow(radio, 2);
  var volumen = areaBase * altura;

  alert("Área del cilindro: " + areaBase.toFixed(2) + "\nVolumen del cilindro: " + volumen.toFixed(2));
} else {
  alert("Por favor, ingrese valores válidos para el radio y la altura del cilindro.");
}