import Client from "./vehicles/clients/Client";
import Company from "./vehicles/consts/Company";
import IDeliveryFactory from "./vehicles/factories/interfaces/IDeliveryFactory";
import IFoodDv from "./vehicles/factories/IFoodDelivery";
import AiqFolmeDv from "./vehicles/factories/AiqFomeDelivery";
import TypeT from "./vehicles/consts/Company";

const currentCompany = Company.IFOOD;
const currentType = TypeT.FOOD;
let factory :IDeliveryFactory;


switch(currentCompany){
    case Company.IFOOD :
        factory = new IFoodDv();
        break;
    case Company.AIQFOME:
        factory = new AiqFolmeDv();
        break;
    default:
        console.log("Companhia nao definida");   
}
const cliente = new Client(factory!, currentType);
cliente.startDelivery(currentType);