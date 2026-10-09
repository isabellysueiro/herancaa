import { Sorvete } from "./models/Sorvete.js";
import { Camisa } from "./models/Camisa.js";
import readline from "readline-sync";
import { Produto } from "./models/Produto.js";


console.log("=== PEDIDO DO PRODUTO ===");


let id = Number(readline.question("Informe o id do produto: "));
let nome = readline.question("Informe a categoria do produto, ex: Camisa ou Sorvete: ")
let preco = Number(readline.question("Preço: "));


let produto = new Produto(id, nome, preco);


console.log(produto);
console.log("========================");


console.log("\n === PEDIDO DO SORVETE ===");


let ids = Number(readline.question("ID do sorvete: "));
let nomes = readline.question("Sabor do sorvete: ");
let precos = Number(readline.question("Informe o preço: "));
let temps = Number(readline.question("Informe a temperatura ideal do seu sorvete: "));

let sorvete = new Sorvete(
    ids,
    nomes,
    precos,
    temps
);


console.log(sorvete);
console.log("========================")


console.log("\n=== PEDIDO DA CAMISA ===");


let idc = Number(readline.question("Informe o id da camisa: "));
let nomec = readline.question("Informe a marca: ")
let precoc = Number(readline.question("Informe o preço: "));
let cor = readline.question("Informe a cor da camisa: ");
let tecido = readline.question("Informe o tecido desejável: ");
let tamanho = Number(readline.question("Informe o tamanho: "));


let camisa = new Camisa(
    idc,
    nomec,
    precoc,
    cor,
    tecido,
    tamanho

)


console.log(camisa);
console.log("========================");

