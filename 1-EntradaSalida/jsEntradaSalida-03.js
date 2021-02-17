/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//var nombreIngresado;
	//nombreIngresado=txtIdNombre.value;
	//alert("El nombre es "+txtIdNombre.value);

	var precio;
	var descripcion;
	var precioNumero;
    var porcentaje;
	var precioAumento;
	
	precio=txtIdNombre.value;
	precioNumero=parseInt(precio);

	porcentaje=precioNumero*30/100;
	precioAumento=precioNumero+porcentaje;

	descripcion=prompt("Ingrese la descripción del producto:");

	alert("El precio con aumento del producto "+descripcion+" es "+precioAumento+" pesos.");

}


