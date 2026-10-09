import { Produto } from "./Produto.js";
export class Sorvete extends Produto {

    private temp: number; //tempAdequada

    constructor(id: number, nome: string, preco: number, temp: number) {
        super(id, nome, preco);
        this.temp = temp;
    }


    public get getTemp(): number { return this.temp; }


    public setTemp(novaTemp: number) {
        if (novaTemp === 0) {
            console.log("\n ERRO: A temperatura não pode ser vazia!")
            return;
        }
        this.temp = novaTemp;
    }
}
