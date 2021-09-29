/**
 * Productos done!
 * Carrito done!
 * 
 * Funcionalidades
 * 
 * agregarAlCarrito Done!
 * SacarDelCarrito
 * SumarTotal Done!
 * Contarelementos Done!
 * 
 * mostrarLascards Done!
 */

const CARRITO = [];

const PRODUCTOS = [
    {id:1, name:"toto1", price:900},
    {id:2, name:"toto2", price:978},
    {id:3, name:"toto3", price:345},
    {id:4, name:"toto4", price:89123},
    {id:5, name:"toto5", price:111}
]

mostrarCards();

function mostrarCards(){
    let acumular = ``;
    PRODUCTOS.forEach(producto => {
        acumular += `<div>
            <h1>${producto.name}</h1>
            <h2>$${producto.price}</h2>
            <button onclick='agregarAlCarrito(${producto.id})'>Agregar al carrito</button>
            <button onclick='eliminarDelCarrito(${producto.id})'>Eliminar</button>
        </div>`
    });
    document.getElementById("productos").innerHTML = acumular;
}

function eliminarDelCarrito(id){
    const index = CARRITO.findIndex(producto => producto.id === id);
    if(index !== -1){
        CARRITO.splice(index,1);
    }
    
     // Total del carrito
     let total = 0;
     CARRITO.forEach(producto => {
         total += producto.price
     });
     document.getElementById("total").innerHTML = "$"+total;
 
     document.getElementById("cantidad").innerHTML = `Cantidad: ${CARRITO.length}`
}

function agregarAlCarrito(id){
    const productoAAgregar = PRODUCTOS.find(producto => producto.id === id);
    CARRITO.push(productoAAgregar);
    
    // Total del carrito
    let total = 0;
    CARRITO.forEach(producto => {
        total += producto.price
    });
    document.getElementById("total").innerHTML = "$"+total;

    document.getElementById("cantidad").innerHTML = `Cantidad: ${CARRITO.length}`
}