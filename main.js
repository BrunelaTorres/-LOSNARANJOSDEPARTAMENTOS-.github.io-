//Funcion que se ejecutara cuando haga click en el boton
function muestra_oculta(id){
    let div = document.getElementById(id); //hace referencia a lo que quiero ocultar/mostrar
    //el condicional es para saber si el div esta oculto(display none) o si esta visible
     if(div.style.display == "none"){
          div.style.display = "flex";
     }
   else{
    div.style.display ="none";
   }
}