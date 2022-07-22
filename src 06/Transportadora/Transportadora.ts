import ITransportadora from "./ITransportadora";

export default class Transportadora implements ITransportadora{
    send(): void {
       console.log("Transportadora: enviando pacote via transportadora.");
    }
    receive(): void {
        console.log("Transportadora: recebendo pacote via transportadora.");
    }
}