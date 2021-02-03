/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var suma;
	var n1=txtIdNumeroUno.value;	
	var n2=txtIdNumeroDos.value;

	var n1p=parseInt(n1);
	var n2p=parseInt(n2);

	suma=n1p + n2p;

	alert("La suma es " +suma);

}

function restar()
{
	var n1=txtIdNumeroUno.value;
	var n2=txtIdNumeroDos.value;

	var n1p=parseInt(n1);
	var n2p=parseInt(n2);

	resta=(n1p - n2p);

	alert("La resta es "+resta);
}

function multiplicar()
{ 
	var n1=txtIdNumeroUno.value;
	var n2=txtIdNumeroDos.value;

	var n1p=parseInt(n1);
	var n2p=parseInt(n2);

	multiplicacion=(n1p * n2p);

	alert("La multiplicacion es "+multiplicacion)
}

function dividir()
{
	var n1=txtIdNumeroUno.value;
	var n2=txtIdNumeroDos.value;

	var n1p=parseInt(n1);
	var n2p=parseInt(n2);

	divicion=(n1p / n2p);

	alert("La divicion es "+divicion);
}

