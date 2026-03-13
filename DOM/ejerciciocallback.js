function aceptar(){
    alert("calback");
}
//callback 
//addEventListener 
let name=document.getElementById("name");
name.addEventListener("click",()=>{
    console.log(name.value);
});
//onchange
let ape=document.getElementById("ape");
ape.addEventListener("change",(event)=>{
    event.target.value
    console.log(event.target.value);
});