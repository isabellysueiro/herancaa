import { Automovel } from "./models/Automovel.js";
import { Moto } from "./models/Moto.js";
import { Veiculo } from "./models/Veiculo.js";
import readline from "readline-sync";


console.log("=== PEDIDO DO VEÍCULO ===");


let marca = readline.question("Informe a marca: ");
let modelo = readline.question("Informe o modelo: ");
let ano = Number(readline.question("Informe o ano: "));
let cor = readline.question("Informe a cor: ");


let veiculo = new Veiculo(
    marca,
    modelo,
    ano,
    cor
);


console.log(veiculo);
console.log("========================");


console.log("\n=== PEDIDO DO AUTOMÓVEL ===");


let marcaA = readline.question("Informe a marca: ");
let modeloA = readline.question("Informe o modelo: ");
let anoA = Number(readline.question("Informe o ano: "));
let corA = readline.question("Informe a cor: ");
let numeroPortas = Number(readline.question("Informe o número de portas: "));
let motor = readline.question("Informe o motor: ");


let automovel = new Automovel(
    marcaA,
    modeloA,
    anoA,
    corA,
    numeroPortas,
    motor
);


console.log(automovel);
console.log("========================");


console.log("\n=== PEDIDO DA MOTO ===");


let marcaM = readline.question("Informe a marca: ");
let modeloM = readline.question("Informe o modelo: ");
let anoM = Number(readline.question("Informe o ano: "));
let corM = readline.question("Informe a cor: ");
let cilindrada = Number(readline.question("Informe a cilindrada: "));


let moto = new Moto(
    marcaM,
    modeloM,
    anoM,
    corM,
    cilindrada
);


console.log(moto);
console.log("========================");
