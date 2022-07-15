import IBuilder from "../buiders/IBuilder";
import Bread from "../components/Bread";
import Protein from "../components/Protein";
import Salad from "../components/Salad";
import SanduicheType from "../components/SanduicheType";
import Sauce from "../components/Sauce";

export default class Director{
    constructor(private builder : IBuilder){}

    constructHotDog(){
        this.builder.setSanduicheType(SanduicheType.HOTDOG);
        this.builder.setBread(Bread.HOTDOG);
        this.builder.setSalad(Salad.TOMATE);
        this.builder.setProtein(Protein.SALSIÇA);
        this.builder.addSauce(new Sauce(1));

    }
    constructXSalada(){
        this.builder.setSanduicheType(SanduicheType.XBURGUER);
        this.builder.setBread(Bread.VEGAN);
        this.builder.setSalad(Salad.ALFACE);
        this.builder.setProtein(Protein.BIFE);
        this.builder.addSauce(new Sauce(1));
        this.builder.addSauce(new Sauce(1));
        this.builder.addSauce(new Sauce(1));
    }
}