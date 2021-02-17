/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var marcalamparas;
    var cantidadlamparas;
    var descuento;
    var lampara=35;
    var preciototal;
    var ingresosbrutos;
    var preciocondescuento;
 

    cantidadlamparas=txtIdCantidad.value;
    cantidadlamparas=parseInt(cantidadlamparas);

    marcalamparas=Marca.value;

    if(cantidadlamparas>5)
    {
        descuento=50;
    }
    else
    {
        if(cantidadlamparas==5&&marcalamparas=="ArgentinaLuz")
        {
            descuento=40;
        }
        else if(cantidadlamparas==5)
        {
            descuento=30;
        }
        else
        {
            if(cantidadlamparas==4&&marcalamparas=="ArgentinaLuz"||marcalamparas=="FelipeLamparas")
            {
                descuento=25;
            }
            else if(cantidadlamparas==4)
                {
                    descuento=20;
                }
                else 
                {
                    if(cantidadlamparas==3&&marcalamparas=="ArgentinaLuz")
                    {
                        descuento=15;
                    }
                    else if(cantidadlamparas==3&&marcalamparas=="FelipeLamparas")
                    {
                        descuento=10;
                    }
                    else 
                    {
                        if(cantidadlamparas==3)
                    {
                        descuento=5;
                    }
                }
            }
        }
    }

    preciototal=lampara*cantidadlamparas;
    preciocondescuento=preciototal-preciototal*descuento/100;
    txtIdprecioDescuento.value=preciocondescuento;

    if(preciocondescuento>120)
    {
        ingresosbrutos=preciocondescuento*10/100;
        preciocondescuento+=ingresosbrutos;
        alert("Usted pagó "+ingresosbrutos+" pesos en IIBB y el total de su compra es "+preciocondescuento+" pesos.");
    }
    else
    {
        alert("Usted pagó un total de "+preciocondescuento);
    }



}





// 1-con if
// pedir a una persona que fue de vacaciones, la distancia que viajo y el tiempo que tardo,
// para calcular la velocidad e informar:
// 60 km/hr = muy lento
// hata 80km/h= lento
// hasta 100= buen ritmo
// hasta 120= ahi de la ley
// mas = eso no se hace

// funtion mostrar()
// {
//    var distancia;
//    var tiempo;
//    var velocidad;

//    distancia=prompt("¿Cuál es la distancia que viajó en kilometros?");
//    tiempo=prompt("¿Cuántas horas tardó para recorrer esa distancia?");

//    distancia=parseInt(distancia);
//    tiempo=parseInt(tiempo);

//    velocidad=tiempo/distancia;

//    if(velocidad<=60)
//    {
//     alert("Muy lento");
//    }
//    else
//    {
//        if(velocidad<=80)
//        {
//         alert("lento");
//        }
//        else
//        {
//            if(velocidad<=100)
//            {
//             alert("Buen ritmo");
//            }
//            else
//            {
//                if(velocidad<=120)
//                {
//                 alert("ahi de la ley");
//                }
//                else
//                {
//                 alert("eso no se hace.")
//                }
//            }
//        }
//    }

// }

// // ingresar el nombre y los datos requeridos para calcular el IMC , e informar a la persona si es:
// // Bajo peso
// // Peso normal
// // Preobesidad
// // Obesidad I
// // Obesidad II
// // Obesidad III

// //Ainhoa Osorio

// funtion mostrar()
// {
//  var nombre;
//  var peso;
//  var altura;
//  var IMC;

//  nombre=prompt("Indique su nombre.");
//  peso=prompt("Indique cuánto pesa en kilogramos.");
//  altura=prompt("Indique su altura en metros.");

//  peso=parseInt(peso);
//  altura=parseInt(altura);

// IMC=peso/altura;

// if(IMC<18)
// {
//     alert("Bajo peso.");
// }
// else
// {
//     if(IMC>18||IMC<25)
//     {
//         alert("Peso normal");
//     }
//     else
//     {
//         if(IMC>25||IMC<29)
//         {
//             alert("Preobesidad");   
//         }
//         else
//         {
//             if(IMC>30||IMC<34)
//             {
//                 alert("Obesidad I");
//             }
//             else
//             {
//                 if(IMC>35||IMC<39)
//                 {
//                     alert("Obesidad II");
//                 }
//                 else
//                 {
//                     if(IMC>40||IMC<49)
//                     {
//                         alert("Obesidad III");
//                     }
//                 }
//             }
//         }
//     }
// }
// }

// //una agencia de viajes debe sacar las tarifas de los viajes, se cobra $15.000 por cada estadia como base, 
// //se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final
// //en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata 
// //tiene un descuento del 20%
// //en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata 
// //tiene un aumento del 20%
// //en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata
// //tiene un aumento del 10% y Cordoba tiene el precio sin 

// //Ainhoa Osorio

// funtion mostrar()
// {
//     var estadia;
//     var estacion;
//     var localidad;
//     var preciofinal;
//     var porcentaje;
    
//     estadia=15000;
//     estacion=estacion.value;
//     localidad=localidad.value;

// }