/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo=txtIdLargo.value;
    var ancho=txtIdAncho.value;
    
    var largoPar=parseInt(largo);
    var anchoPar=parseInt(ancho);

    var largoTotal=largoPar * 2;
    var anchoTotal=anchoPar * 2;
    
    var perimetro=largoTotal + anchoTotal;
    var alambre=perimetro * 3;

    alert("Se requiere "+alambre+" de alambre para cubrir el perimetro tres veces.")

}
function Circulo () 
{
    var radio=txtIdRadio.value;
    radioParse=parseInt(radio);

    var diametro=radioParse * 2;
    var perimetro=diametro * Math.PI;

    var alambre=perimetro * 3;

    alert("La cantidad de alambre necesaria para cubrir el perimetro es "+alambre);
    
}
function Materiales () 
{
	var largo=txtIdLargo.value;
    var ancho=txtIdAncho.value;
    var largoPar=parseInt(largo);
    var anchoPar=parseInt(ancho);

    var area=largoPar * anchoPar;
    
    var cal=3;
    var cemento=2;

    var calTotal=area * cal;
    var cementoTotal=area * cemento;

    alert("Se necesita "+calTotal+" bolsas de cal y "+cementoTotal+" bolsas de cemento para realizar un contrapiso con un area de "+area+" m.");
}