import Endereço from "./Endereço";
import Usuario from "./Usuario";

enum Sexo {
  Famale,
  Male
}

let end1 : Endereço = new Endereço("Rua XV de Novembro", 1299, 80060000, "Centro", "Curitiba");
let user1 : Usuario = new Usuario("Hello there,", 1001, 2001, end1, Sexo.Famale);

let end2 : Endereço = new Endereço("R. das Laranjeiras", 232, 22240003, "Laranjeiras", "Rio de Janeiro");
let user2 : Usuario = new Usuario("my friend!", 1002, 2002, end2, Sexo.Famale);

let end3 : Endereço = new Endereço("Av. Profa. Laura Pacheco Bastos", 800, 85053525, "Industrial", "Guarapuava");
let user3 : Usuario = new Usuario(" =D ", 1003, 2003, end3, Sexo.Famale);


user1.nome = "Laura Sánchez García";
user2.nome = "Tanya Amara Felipe";
user3.nome = "Sílvia Amélia Bim";

console.log(" ");
console.log('Usuário 1: ' + user1.nome);
console.log('Endereço/cep: ' + end1.rua + " - " +  end1.cep);

console.log(" ");
console.log('Usuário 2: ' + user2.nome);
console.log('Endereço/cep: ' + end2.rua + " - " +  end2.cep);

console.log(" ");
console.log('Usuário 3: ' + user3.nome);
console.log('Endereço/cep: ' + end3.rua + " - " +  end3.cep);