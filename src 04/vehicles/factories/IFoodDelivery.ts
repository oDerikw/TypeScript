import IDeliveryFactory from "./interfaces/IDeliveryFactory";
import IFood from "../foods/interfaces/IFood";
import IDrink from "../drinks/interfaces/IDrink";
import HotDog from "../foods/HotDog";
import SoftDrink from "../drinks/SoftDrink";

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryFood(): IFood {
        return new HotDog();
    }
    createDeliveryDrink(): IDrink {
        return new SoftDrink();
    }

}