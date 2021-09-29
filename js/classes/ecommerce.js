class Ecommerce {
    constructor(){
        this.productos = [];
        this.carrito = [];
        this.cupones = [{codigo:'HOYVIERNES', descuento:20}];
        this.favoritos = [];
        this.costoDeEnvios = {distancia:10, precio:200, ubicacion:"Caballito", gratisDesde: 2000};
        this.formasDePago = ['Mercadopago', 'Tranferencia', 'Debito','Credito','Efectivo'];
        this.lugarRetiro = ['Belgrano', 'Nuñez'] 
        this.title = "La toto's web";
    }

    /**
     * Function para añadir nuevos elementos al carrito
     * @param {*} producto Elemento a agregar
     */
    agregarAlCarrito(producto){
        this.carrito.push(producto);
        localStorage.carrito = JSON.stringify(this.carrito); 
        this.calcularTotal();
        this.calcularCantidadElementos();
    }

    /**
     * 
     * @returns Devuelve el total del carrito
     */
    calcularCantidadElementos(){
        document.getElementById("cantidadCarrito").innerHTML = this.carrito.length;
    }

    calcularTotal(){
        let acumular = 0;
        this.carrito.forEach(producto => {
            acumular += producto.price;
        })
        document.getElementById("totalCarrito").innerHTML = `$ ${acumular}`
    }

    mostrarCards(){
    }

    /**
     * Function para borrar productos del carrito
     * @param {*} id Es la id por la que vamos a buscar un producto
     */
    sacarDelCarrito(id){
        const indice = this.carrito.findIndex(producto => producto.id === id); // findIndex no encuentra -> -1
        this.carrito.splice(indice, 1);
        localStorage.carrito = JSON.stringify(this.carrito);
    }

    calcularEnvio(){

    }

    procesarPago(carrito, cupon){
        // Realizo la venta
        this.carrito = [];
        localStorage.clear();
    }

}