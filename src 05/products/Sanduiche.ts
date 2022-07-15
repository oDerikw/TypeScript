import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Sanduiche{
    private _sanduicheType : SanduicheType;
    private _salad : Salad;
    private _bread : Bread;
    private _protein : Protein;
    private _sauce : Sauce[] = [];

    get sanduicheType() : SanduicheType{
        return this._sanduicheType;
    }
    set sanduicheType(value : SanduicheType){
        this._sanduicheType = value;
    }

    get salad() : Salad{
        return this._salad;
    }
    set salad(value : Salad){
        this._salad = value;
    }

    get bread() : Bread{
        return this._bread;
    }
    set bread(value : Bread){
        this._bread = value;
    }

    get protein() : Protein{
        return this._protein;
    }
    set protein(value : Protein){
        this._protein = value;
    }
    addSauce(sauce : Sauce){
        this._sauce.push(sauce);
    }
    get sauce() : Sauce[]{
        return this._sauce;
    }
    get _sauceTotal() : number{
        return this._sauce.length;
    }
}