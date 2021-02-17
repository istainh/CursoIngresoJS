/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe=txtIdImporte.value;
	var importeP=parseInt(importe);
	var porcentaje=txtIdResultado.value;
	var porcentajeP=parseInt(porcentaje);

	var descripcion=prompt("Ingrese el nombre del producto:");

	var descuentoDivision=porcentajeP/100;
	var descuentoMultiplicacion=importeP*descuentoDivision;
	var descuentoAplicado=importeP-descuentoMultiplicacion;

	alert("Usted compró "+descripcion+" con "+porcentajeP+" % de descuento, el precio final es "+descuentoAplicado);
}
