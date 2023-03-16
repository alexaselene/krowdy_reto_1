//Evento para mostrar y desaparecer la descripción de la vacante
document.getElementById("btn").addEventListener("click", function(){
    if(document.getElementById("mostrar").style.display=="none"){
        document.getElementById("mostrar").style.display="block"
    } else{
        document.getElementById("mostrar").style.display="none"
    };
    
});
