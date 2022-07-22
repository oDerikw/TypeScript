import ICorreio from "./ICorreio";

export  default class Correios implements ICorreio{
   sendCorreios(): void {
      console.log("Correio: enviando pacote via correio.");
   }
   receiveCorreios(): void {
      console.log("Correio: recebendo pacote via correio.");
   }
}