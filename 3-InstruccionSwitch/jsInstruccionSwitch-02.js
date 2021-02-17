function mostrar()
{
	var mesDelAño =txtIdMes.value;

	switch (mesDelAño) {
		case "Abril":
		case "Mayo":
			alert("Falta para el invierno.");
			break;
		case "Julio":
		case "Agosto":	
			alert("Abrigate que hace frio.");
			break;
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;		
		default:
			alert("Cualquier mes");
			break;
	}
	}
