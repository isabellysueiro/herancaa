export class Funcionario {

    private nome: string;
    private matricula: string;
    private salario: number;
    private telefone: number;
    private endereco: string;
    private dataNasc: string;

    constructor(
        nome: string,
        matricula: string,
        salario: number,
        telefone: number,
        endereco: string,
        dataNasc: string
    ) {
        this.nome = nome;
        this.matricula = matricula;
        this.salario = salario;
        this.telefone = telefone;
        this.endereco = endereco;
        this.dataNasc = dataNasc;
    }


    public get getNome(): string {
        return this.nome;
    }

    public get getMatricula(): string {
        return this.matricula;
    }

    public get getSalario(): number {
        return this.salario;
    }

    public get getTelefone(): number {
        return this.telefone;
    }

    public get getEndereco(): string {
        return this.endereco;
    }

    public get getDataNasc(): string {
        return this.dataNasc;
    }


    public set setNome(novoNome: string) {
        if (novoNome.trim().length === 0) {
            console.log("\n ERRO: O nome não pode ser vazio!");
            return;
        }

        this.nome = novoNome;
    }

    public set setMatricula(novaMatricula: string) {
        if (novaMatricula.trim().length === 0) {
            console.log("\n ERRO: A matrícula não pode ser vazia!");
            return;
        }
        this.matricula = novaMatricula;
    }

    public set setSalario(novoSalario: number) {
        if (novoSalario === 0) {
            console.log("\n ERRO: O salário não pode ser vazio!");
            return;
        }
        this.salario = novoSalario;
    }

    public set setTelefone(novoTelefone: number) {
        if (novoTelefone === 0) {
            console.log("\n ERRO: O telefone não pode ser vazio!");
            return;
        }
        this.telefone = novoTelefone;
    }

    public set setEndereco(novoEndereco: string) {
        if (novoEndereco.trim().length === 0) {
            console.log("\n ERRO: O endereço não pode ser vazio!");
            return;
        }
        this.endereco = novoEndereco;
    }

    public set setDataNasc(novaDataNasc: string) {
        if (novaDataNasc.trim().length === 0) {
            console.log("\n ERRO: A data de nascimento não pode ser vazia!");
            return;
        }
        this.dataNasc = novaDataNasc;
    }
}