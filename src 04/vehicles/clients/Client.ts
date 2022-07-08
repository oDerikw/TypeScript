import IDrink from "../drinks/interfaces/IDrink";
import IDeliveryFactory from "../factories/interfaces/IDeliveryFactory";
import IFood from "../foods/interfaces/IFood";

export default class Client{
    private food : IFood;
    private drink : IDrink;

    constructor(factory: IDeliveryFactory, typeT : string){
        if(typeT=="FOOD"){
            this.food = factory.createDeliveryFood();
        }
        else if (typeT=="DRINK"){
            this.drink = factory.createDeliveryDrink();
        }
        else{
            this.food = factory.createDeliveryFood();
            this.drink = factory.createDeliveryDrink();
        }
        
    }
    startDelivery(typeT : string):void{
        if(typeT=="FOOD"){
            this.food.startDelivery();
        }
        else if (typeT=="DRINK"){
            this.drink.startDelivery();
        }
        else{
            this.food.startDelivery();
            this.drink.startDelivery();
        }
        
    }
    
}