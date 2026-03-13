let empresa={
    nombre:"ABC1243",
    direccion:"calle 1 abc",
    emple:[
        {area:"administrativa",empleados: 20},
        {area:"operativa",empleados: 10},
        {area:"planeacion",empleados: 15}
    ]
}
empresa.emple.forEach((e)=>{
    if(e.area=="operativa"){
        console.log(e.area);
        console.log(e.empleados);

    }
})
//posiciones
console.log(empresa.emple[1].area+" "+empresa.emple[1].empleados);
// cambiar dato
empresa.emple[1].area="Domiciliaria";
console.log(empresa.emple)//forma del arreglo
// agregar un nuevo elemento en la estructura empresa usando pocisiones
empresa.emple.push({area:"Ventas",empleados: 5});
console.log(empresa.emple)
let nuevoElemento={area:"presidencia",empleados: 2}
let emplea=[...empresa.emple,nuevoElemento]
console.log(emplea)// forma del arreglo
empresa.emple[4]=nuevoElemento
console.log(empresa.emple)// forma del arreglo
//splice

