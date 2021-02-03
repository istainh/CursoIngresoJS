function mostrar()
{
    var precio=prompt("Ingrese precio")
    var porcentaje=prompt("Ingrese porcentaje")
    var precioParseado=parseInt(precio)
    var porcentajeParseado=parseInt(porcentaje)
    var descuento=precioParseado * porcentajeParseado / 100
    var precioFinal=precioParseado - descuento

    elPrecioFinal.value=precioFinal
}
