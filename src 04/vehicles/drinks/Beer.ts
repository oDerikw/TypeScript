
import IDrink from "./interfaces/IDrink";

export default class Beer implements IDrink{
    startDelivery(): void {
        console.log("Delivery: Cerveja top a caminho!");
    }
}