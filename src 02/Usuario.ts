import Endereço from "./Endereço";

export default class Usuario {
  private _nome : string;
  private _cpf : number;
  private _rg : number;
  private _endereço : Endereço;
  private _sexo : number;

  constructor(nome : string, cpf : number, rg : number, endereço : Endereço, sexo : number){
      this._nome = nome;
      this._cpf = cpf;
      this._rg = rg;
      this._endereço = endereço;
      this._sexo = sexo;
  }

  get nome() : string{
      return this._nome;
  }

  set nome(nome : string){
      this._nome = nome;
  }
}