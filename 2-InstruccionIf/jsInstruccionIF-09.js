//Al presionar el Botón, 
//mostrar un número Random del 1 al 10 inclusive


function mostrar()
{
	var aleatorio;
	aleatorio=Math.floor(Math.random() * 100) + 1;

	if(aleatorio<=10)
	{
	  alert(aleatorio);
	}


}