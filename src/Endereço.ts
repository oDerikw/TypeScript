export default class Endereço {
  private _rua : string;
  private _numero : number;
  private _cep : number;
  private _bairro: string;
  private _cidade: string;

  constructor(rua : string, numero : number, cep : number, bairro : string, cidade : string){
      this._rua = rua;
      this._numero = numero;
      this._cep = cep;
      this._bairro = bairro;
      this._cidade = cidade;
  }

  get rua() : string{
    return this._rua;
  }

  set rua(rua : string){
    this._rua = rua;
  }

  get cep() : number{
    return this._cep;
  }

  set cep(cep : number){
    this._cep = cep;
  }
}