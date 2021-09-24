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

        // let resultado = this.carrito.reduce((valorAnterior, valorActual) => {
        //     return valorAnterior.price + valorActual.price
        // })
        return acumular;
    }

    mostrarCards(){

    }

    sacarDelCarrito(){

    }

    calcularEnvio(){

    }

    procesarPago(carrito, cupon){
        // function validarTotal(cupon){
        //     //... es verdad el cupon ...
        //     return total;
        //     return 100 * 0.1;

        //     //...
        // }
        // const total = validarTotal(cupon);

        // MERCADOPAGO
    }

}