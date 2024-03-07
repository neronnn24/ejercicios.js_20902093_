var radio = parseFloat(prompt("Ingrese el radio de la circunferencia:"));

if (!isNaN(radio) && radio > 0) {

  var longitudCircunferencia = 2 * Math.PI * radio;


  var areaCirculoInscrito = Math.PI * Math.pow(radio, 2);

 
  alert("Longitud de la circunferencia: " + longitudCircunferencia.toFixed(2) +
    "\nÁrea del círculo inscrito: " + areaCirculoInscrito.toFixed(2));
} else {
  alert("Por favor, ingrese un valor válido para el radio de la circunferencia.");
}