const producto = { id: 1, name: 'toto', price: 999, stock: 10 };
const producto2 = { toto: 'holaaaa', ...producto };
const producto3 = { id: 3, name: 'toto', price: 911111, stock: 10 };
const producto4 = { id: 4, name: 'toto', price: 10, stock: 10 };
const producto5 = { id: 5, name: 'toto', price: 23232, stock: 10 };

const miTienda = new Ecommerce();
miTienda.agregarAlCarrito(producto);
miTienda.agregarAlCarrito(producto2);
miTienda.agregarAlCarrito(producto3);
miTienda.agregarAlCarrito(producto4);
miTienda.agregarAlCarrito(producto5);
miTienda.agregarAlCarrito(producto);
miTienda.agregarAlCarrito(producto);
miTienda.agregarAlCarrito(producto2);
miTienda.agregarAlCarrito(producto3);


// console.log(miTienda.carrito.join(':)'))


const totalPrecioCarrito = miTienda.calcularTotal();
// console.log(totalPrecioCarrito);

const cantidadDeElementos = miTienda.calcularCantidadElementos();
// console.log(cantidadDeElementos);




const array1 = [1, 2, 3];

console.log(typeof saludar)

const array2 = [3, 4, 5];
const array3 = [6, 23, 125];
const array4 = [53, 954, 58];

// console.log(array1);
// console.log(...array1);


function saludar(){

}

const resultado = ['hola', ...array1, ...array2, ...array3, ...array4, 'hola'];
console.log("|---------------------------------------------------------------|")
resultado.forEach((element) => {
    console.log(element + ',');
})
console.log("|---------------------------------------------------------------|")

console.log(resultado.slice(0, 2));
// Spread operator