import { Veiculo } from "./Veiculo.js";

export class Moto extends Veiculo {

    private cilindrada: number;


    constructor(
        marca: string,
        modelo: string,
        ano: number,
        cor: string,
        cilindrada: number
    ) {
        super(marca, modelo, ano, cor);

        this.cilindrada = cilindrada;
    }


    public get getCilindrada(): number {
        return this.cilindrada;
    }


    public setCilindrada(novaCilindrada: number) {
        if (novaCilindrada === 0) {
            console.log("\n ERRO: A cilindrada deve ser informada!");
            return;
        }

        this.cilindrada = novaCilindrada;
    }
}
