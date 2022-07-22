import ICorreio from "../Correios/ICorreio";
import Transportadora from "../Transportadora/Transportadora";

export default class TransportadoraAdapter implements ICorreio{

    constructor(private transportadora :Transportadora){
        console.log("Adaptando trasportadora em correio.")
    }
    sendCorreios(): void {
        this.transportadora.send();
    }
    receiveCorreios(): void {
      this.transportadora.receive();
    }
}