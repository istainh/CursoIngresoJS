function mostrar()
{
  var nombreUno=prompt("Ingrese su nombre");
  var nombreDos=prompt("Ingrese el nombre de su pareja");
  var pesoUno=prompt("Ingrese su peso");
  var pesoDos=prompt("Ingrese el peso de su pareja");

  var pesoUnoParse=parseInt(pesoUno);
  var pesoDosParse=parseInt(pesoDos);

  var pesoTotal=pesoUnoParse + pesoDosParse;
  var pesoPromedio=pesoTotal / 2;

  alert("Ustedes se llaman "+nombreUno+" y "+nombreDos+", pesan "+pesoUnoParse+" y "+pesoDosParse+", que sumados son "+pesoTotal+" y el promedio de peso es "+pesoPromedio);
}
