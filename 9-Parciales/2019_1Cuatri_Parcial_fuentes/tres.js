function mostrar()
{
var precio=prompt("Ingrese aquí el precio");
var porcentaje=prompt("Ingrese aquí el porcemtaje de descuento");

var precioParseado=parseInt(precio);
var porcentajeParseado=parseInt(porcentaje);

var descuento=precioParseado * porcentajeParseado / 100;
var precioFinal=precioParseado - descuento;

elPrecioFinal.value=precioFinal;
}
