/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//var datoIngresado;

	//datoIngresado = prompt("Ingrese su nombre por fis")
	
    //txtIdNombre.value=datoIngresado;
	
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