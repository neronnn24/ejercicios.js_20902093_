var lado = parseFloat(prompt("Ingrese la longitud del lado del cuadrado:"));

if (!isNaN(lado) && lado > 0) {
  var area = lado * lado;
  var perimetro = 4 * lado;
  alert("Área del cuadrado: " + area.toFixed(2) + "\nPerímetro del cuadrado: " + perimetro.toFixed(2));
} else {
  alert("Por favor, ingrese un valor válido para la longitud del lado.");
}