/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	//Declaraciones
	var nombreIngresado=txtIdNombre.value;
	var edadIngresado=txtIdEdad.value;
	var m1="Usted se llama ";
	var m2=" y tiene ";
	var m3=" años";


	//Otra manera de asignar a las variables
	//nombreIngresado=txtIdNombre.value;
	
	//edadIngresado=txtIdEdad.value;
	
	alert(m1+nombreIngresado+m2+edadIngresado+m3);
	//se puese hacer de ambas formas
	//alert("Usted se llama "+txtIdNombre.value+" y tiene "+txtIdEdad.value+" años");
}

