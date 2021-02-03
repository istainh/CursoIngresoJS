/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	var sueldo=txtIdSueldo.value;
	var resultado
	var sueldoP=parseInt(sueldo);
	var aumento=sueldoP*10/100;
	
	resultado=aumento+sueldoP;


	txtIdResultado.value=resultado;
}
