import SanduicheBuilder from "./buiders/SanduicheBuilder";
import Director from "./directors/Director";
import Sanduiche from "./products/Sanduiche";

const builder :SanduicheBuilder = new SanduicheBuilder();
const director : Director = new Director(builder);

director.constructHotDog();
let hotdog : Sanduiche = builder.getSanduiche();
console.log("Criando um sanduiche do tipo " + hotdog.sanduicheType);
console.log("Com carne: " + hotdog.protein);
console.log("Com salada: " + hotdog.salad);
console.log("E com a quantia de " + hotdog._sauceTotal + " pacotes de molho.");
console.log(" ");

builder.reset();

director.constructXSalada();
let xsalada : Sanduiche = builder.getSanduiche();
console.log("Criando um sanduiche do tipo " + xsalada.sanduicheType);
console.log("Com carne: " + xsalada.protein);
console.log("Com salada: " + xsalada.salad);
console.log("E com a quantia de " + xsalada._sauceTotal + " pacotes de molho.");
