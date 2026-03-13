//eventos onclick, ondblclick onchange onmouseover onmouseout
function aceptar(){
    alert("Hola esto es una prueba ");
    console.log(" esto es una prueba ");
    //capturar el getElementById
    let titulo=document.getElementById("titulo");
    titulo.style.color="red";
    let tamaño=document.getElementById("tamaño");
    tamaño.style.fontSize="40px";
    tamaño.style.color="blue";
    
}
function pasar(){
    let boton=document.getElementById("boton");
    boton.style.background="blue";
    boton.style.width="70px";
    boton.style.border="none";  
    boton.style.color="white";
}
function fuera(){
    let boton=document.getElementById("boton");
    boton.style.background="gray";
    boton.style.width="70px";
    boton.style.color="black";
}

