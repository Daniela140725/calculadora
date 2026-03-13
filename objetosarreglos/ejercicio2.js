let productos={
    tienda:"tiendita",
    direccion:"calle 2 abc",
    producticos:[
        {nombre:"carne", presentacion:"1libra",precio:15000},
        {nombre:"pollo", presentacion:"1libra",precio:7000},
        {nombre:"uva", presentacion:"1kilo",precio:16000},
        {nombre:"papaya", presentacion:"1libra",precio:15000}
    ]
}
//recorrer
//for
let suma=0;
for(let i=0;i<productos.producticos.length;i++){
    suma=suma+productos.producticos[i].precio;
  
}
  console.log(suma);
  let sum=0;
  productos.producticos.forEach((p)=>{
    sum=p.precio+sum;
  })
  console.log(sum);
  //map
  let arregloR=productos.producticos.map((prod)=>{
    return prod.precio=prod.precio+200;
  })
  console.log(arregloR);
