/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precioProducto1=txtIdPrecioUno.value;
    var precioProducto2=txtIdPrecioDos.value;
    var precioProducto3=txtIdPrecioTres.value;

    precioProducto1Parseado=parseInt(precioProducto1);
    precioProducto2Parseado=parseInt(precioProducto2);
    precioProducto3Parseado=parseInt(precioProducto3);

    var resultado=precioProducto1Parseado + precioProducto2Parseado + precioProducto3Parseado;

    alert("Total de la compra: "+resultado);
}
function Promedio () 
{
	var precioProducto1=txtIdPrecioUno.value;
    var precioProducto2=txtIdPrecioDos.value;
    var precioProducto3=txtIdPrecioTres.value;

    precioProducto1Parseado=parseInt(precioProducto1);
    precioProducto2Parseado=parseInt(precioProducto2);
    precioProducto3Parseado=parseInt(precioProducto3);

    var precioTotal=precioProducto1Parseado + precioProducto2Parseado + precioProducto3Parseado;
    var promedio=precioTotal / 3;

    alert("El promedio de su compra: "+promedio);
}
function PrecioFinal () 
{
	var precioProducto1=txtIdPrecioUno.value;
    var precioProducto2=txtIdPrecioDos.value;
    var precioProducto3=txtIdPrecioTres.value;

    precioProducto1Parseado=parseInt(precioProducto1);
    precioProducto2Parseado=parseInt(precioProducto2);
    precioProducto3Parseado=parseInt(precioProducto3);

    var precioTotal=precioProducto1Parseado + precioProducto2Parseado + precioProducto3Parseado;
    var iva= 21;
    var porcentajeIva=precioTotal * iva / 100;
    var precioIva=precioTotal + porcentajeIva;

    alert("El precio de su compra con IVA es: "+precioIva);
}