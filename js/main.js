const miTienda = new Ecommerce();
// arrancariamos desde 0

// if(localStorage.carrito){
//     miTienda.carrito = localStorage.carrito;
// }

const producto = { id: 1, name: 'toto', price: 999, stock: 10, category: "zapatillas" };
const producto2 = { id: 2, name: 'toto2', price: 999, stock: 10, category: "zapatillas" };
const producto3 = { id: 3, name: 'toto3', price: 911111, stock: 10, category: "chanclas" };

miTienda.agregarAlCarrito(producto);
miTienda.agregarAlCarrito(producto2);
miTienda.agregarAlCarrito(producto3);

localStorage.clase = "Interbanking";

// terminariamos en 3
const totalPrecioCarrito = miTienda.calcularTotal();
const cantidadDeElementos = miTienda.calcularCantidadElementos();

// El filtro
const nuevoArrayFiltrado = miTienda.carrito.filter(producto => producto.category === "chanclas")

