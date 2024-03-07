
var numero1 = parseFloat(prompt("Ingrese el primer número:"));
var numero2 = parseFloat(prompt("Ingrese el segundo número:"));
var numero3 = parseFloat(prompt("Ingrese el tercer número:"));


if (!isNaN(numero1) && !isNaN(numero2) && !isNaN(numero3)) {
  
  var promedio = (numero1 + numero2 + numero3) / 3;


  alert("El promedio de los tres números es: " + promedio.toFixed(2));
} else {
  alert("Por favor, ingrese valores numéricos válidos.");
}