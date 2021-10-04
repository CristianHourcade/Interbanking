// Creacion de ordenes de compra y venta
const ordenes = [
    {idMovimiento: 18396741378561, type:'short', ammount:2000 },
    {idMovimiento: 18396741378123, type:'short', ammount:210 },
    {idMovimiento: 23178613786912, type:'long', ammount:7900 },
    {idMovimiento: 25151378478101, type:'short', ammount:400 },
]

// 9

// Renderizar HTML
let acumulador = ``;

// ordenes.forEach((orden) => {

// });

// ordenes.forEach(function(orden){
//    acumulador += `
//     <tr>
//         <th scope="row">1</th>
//         <td>${orden.idMovimiento}</td>
//         <td>${orden.type}</td>
//         <td>${orden.ammount}</td>
//     </tr>
//     `
// }); 


// document.getElementById('movimientos').innerHTML = acumulador;


const notas = [10, 4, 7, 8, 1, 5];

const notasAMostrar = notas.map(function(nota){
    if(nota > 6){
        return "Aprobado";
    }else{
        return "Desaprobado";
    }
})

console.log(notasAMostrar);

// STORAGE: 

//Acciones
/** ABM
 * 
 * Tipos de datos se pueden guardar: TEXTOS -> JSON
 * Guardar Datos -> setItem o la asignacion a la propiedad
 * Borrar Datos -> removeItem - clear
 * Tomar Datos -> getItem
 * 
 * 'Cristian' No se necesita parsear ni convertir
 * 
 *                            // guardar       //traer
 * [{id:1,nombre:'zapa}] -> JSON.Stringify -> JSON.Parse
 * {id:1, nombre:'toto'} -> JSON.Stringify -> JSON.Parse
 * new Producto(2, "toto") -> JSON.stringify -> JSON.parse
 */

// Guardado de un objeto en el LS
const producto = new Producto(2, 'niky');
localStorage.setItem("producto", JSON.stringify(producto));

// La traida de un objeto del LS
const resultado = localStorage.getItem("producto");
console.log(JSON.parse(resultado));