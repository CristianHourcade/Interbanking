class Crypto {
    constructor(icon, currentPrice, highPrice, lowPrice, volume, cantidadEnCuenta) {
        this.icon = icon;
        this.currentPrice = currentPrice;
        this.highPrice = highPrice;
        this.lowPrice = lowPrice;
        this.volume = volume;
    }
}

class Wallet {
    constructor() {
        // Cualquier objeto literal se puede crear con una clase
        let btc = new Crypto('BTC', 40000, 43000, 39000, 1000000);
        let eth = new Crypto('BTC', 40000, 43000, 39000, 1000000);
        let usdt = new Crypto('BTC', 40000, 43000, 39000, 1000000);
        let doge = new Crypto('BTC', 40000, 43000, 39000, 1000000);
        this.cryptos = [btc,eth,usdt,doge];
        this.balance = 0;
        this.adress = "0x00012312312dfasda2131";
        this.movimientos = [{id:1, amount:100, from:'1x0111', to:'0x00012312312dfasda2131'}]
    }

    transferir(){
    }

    convertirMonedas(saldoAconsultar, monedaObjetivo) {
        let monedaTarget;
        let monedaFrom;
        // saldoAconsultar = {icon:'BTC', cantidad:200}
        // monedaObjetivo = 'USDT'

        switch (monedaObjetivo) {
            case 'BTC':
                monedaTarget = this.bitcoin;
                break;
            case "ETH":
                monedaTarget = this.etherium;
                break;
            case "USDT":
                monedaTarget = this.tether;
                break;
            case "DOGE":
                monedaTarget = this.dogecoin;
                break
            default:
                break;
        }

        // La moneda que tenemos y queremos cambiar
        switch (saldoAconsultar.icon) {
            case 'BTC':
                monedaFrom = this.bitcoin;
                break;
            case "ETH":
                monedaFrom = this.etherium;
                break;
            case "USDT":
                monedaFrom = this.tether;
                break;
            case "DOGE":
                monedaFrom = this.dogecoin;
                break
            default:
                break;
        }

        console.log(monedaFrom);
        console.log(monedaTarget);

        // const resultado = (saldoAconsultar.cantidad * monedaFrom.currentPrice) / monedaTarget.currentPrice;
        console.log(resultado);
    }
}