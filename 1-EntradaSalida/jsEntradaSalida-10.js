/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe=txtIdImporte.value;
	var importeP=parseInt(importe);
	var descuento=importe*25/100;
	var resultado=importeP-descuento;

	txtIdResultado.value=resultado;
}
