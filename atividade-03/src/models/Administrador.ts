import { Funcionario } from "./Funcionario";

export class Administrador extends Funcionario {

    private cra: number;


    constructor(
        nome: string,
        matricula: string,
        salario: number,
        telefone: number,
        endereco: string,
        dataNasc: string,
        cra: number
    ) {
        super(nome, matricula, salario, telefone, endereco, dataNasc);
        this.cra = cra;
    }

    public get getCra(): number {
        return this.cra;
    }

    public set setCra(novoCra: number) {
        if (novoCra === 0) {
            console.log("\n ERRO: O cra não pode ser vazio!");
            return;
        }
        this.cra = novoCra;
    }
}

