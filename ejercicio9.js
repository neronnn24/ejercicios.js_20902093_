var numero = parseFloat(prompt("Ingrese un número:"));


if (!isNaN(numero)) {
 
  if (numero > 0) {
    alert("El número ingresado es positivo.");
  } else if (numero < 0) {
    alert("El número ingresado es negativo.");
  } else {
    alert("El número ingresado es cero.");
  }
} else {
  alert("Por favor, ingrese un valor numérico válido.");
}