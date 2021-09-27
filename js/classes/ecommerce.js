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

    agregarAlCarrito(producto){
        this.carrito.push(producto);
        console.log(this.carrito);
        console.log(this.carrito.join("--"))
        localStorage.carrito = this.carrito.join('*'); // Despues del break ;)
    }

    calcularCantidadElementos(){
        return this.carrito.length;
    }

    calcularTotal(){
        let acumular = 0;
        for(let i = 0; i< this.carrito.length; i++){
            acumular += this.carrito[i].price;
        }

        this.carrito.forEach(producto => {
            acumular += producto.price;
        })
        return acumular;
    }

    mostrarCards(){

    }

    sacarDelCarrito(){
        const indice = this.carrito.findIndex(producto => producto.id === id); // findIndex no encuentra -> -1
        this.carrito.splice(indice, 1);
        localStorage.carrito = this.carrito;
    }

    calcularEnvio(){

    }

    procesarPago(carrito, cupon){
        // Realizo la venta
        
        this.carrito = [];
        localStorage.carrito = [];
        localStorage.clear();
    }

}