
import IDrink from "./interfaces/IDrink";

export default class SoftDrink implements IDrink{
    startDelivery(): void {
        console.log("Delivery: Bebida top a caminho!");
    }

}