//Al ingresar una edad menor a 18 años 
//y un estado civil distinto a "Soltero", 
//mostrar el siguiente mensaje: 
//'Es muy pequeño para NO ser soltero.'

function mostrar()
{
	var edad;
	var civil;

	edad=txtIdEdad.value;
	edad=parseInt(edad);

	civil=estadoCivil.value;

	if(edad<18&&civil!="Soltero")
	{
		alert("Es muy pequeño para no ser soltero.");
	}
	


}