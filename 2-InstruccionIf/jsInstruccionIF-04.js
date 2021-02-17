function mostrar()

//Al ingresar una edad debemos informar si la persona es adolescente,
//edad entre 13 y 17 años (inclusive)
{
   var edad=txtIdEdad.value;
   edad=parseInt(edad);

   if(edad>=13 && edad<=17){
	   alert("Eres adolescente.")
   }
   else{
	   alert("No eres adolescente.")
   }


}