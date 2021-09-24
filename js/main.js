const producto = { id: 1, name: 'toto', price: 999, stock: 10 };
const producto2 = { id: 2, name: 'niky', price: 1231, stock: 10 };
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


const totalPrecioCarrito  = miTienda.calcularTotal();
console.log(totalPrecioCarrito);

const cantidadDeElementos = miTienda.calcularCantidadElementos();
console.log(cantidadDeElementos);