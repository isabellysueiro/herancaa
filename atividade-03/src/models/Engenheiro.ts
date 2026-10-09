import { Funcionario } from "./Funcionario";

export class Engenheiro extends Funcionario {

    private numCrea: number;


    constructor(
        nome: string,
        matricula: string,
        salario: number,
        telefone: number,
        endereco: string,
        dataNasc: string,
        numCrea: number
    ) {
        super(nome, matricula, salario, telefone, endereco, dataNasc);
        this.numCrea = numCrea;
    }

    public get getNumCrea(): number {
        return this.numCrea;
    }

    public setNumCrea(novaNumCrea: number) {
        if (novaNumCrea === 0) {
            console.log("\n ERRO: O campo deve ser preenchido!");
            return;
        }
        this.numCrea = novaNumCrea;
    }
}