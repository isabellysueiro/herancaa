import { Funcionario } from "./Funcionario";

export class Medico extends Funcionario {

    private crm: number;


    constructor(
        nome: string,
        matricula: string,
        salario: number,
        telefone: number,
        endereco: string,
        dataNasc: string,
        crm: number
    ) {
        super(nome, matricula, salario, telefone, endereco, dataNasc);
        this.crm = crm;
    }

    public get getCrm(): number {
        return this.crm;
    }

    public setCrm(novaCrm: number) {
        if (novaCrm === 0) {
            console.log("\n ERRO: A Crm deve ser preenchida");
            return;
        }
    }
}