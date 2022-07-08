import Beer from "../drinks/Beer";
import IDrink from "../drinks/interfaces/IDrink";
import Hamburguer from "../foods/Hamburguer";
import IFood from "../foods/interfaces/IFood";
import IDeliveryFactory from "./interfaces/IDeliveryFactory";

export default class AiqFomeDelivery implements IDeliveryFactory{
    createDeliveryFood(): IFood {
        return new Hamburguer();
    }
    createDeliveryDrink(): IDrink {
        return new Beer();
    }

}