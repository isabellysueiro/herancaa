export class Veiculo {

    private marca: string;
    private modelo: string;
    private ano: number;
    private cor: string;

    constructor(
        marca: string,
        modelo: string,
        ano: number,
        cor: string
    ) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }


    public get getMarca(): string {
        return this.marca;
    }

    public get getModelo(): string {
        return this.modelo;
    }

    public get getAno(): number {
        return this.ano;
    }

    public get getCor(): string {
        return this.cor;
    }


    public set setMarca(novaMarca: string) {
        if (novaMarca.trim().length === 0) {
            console.log("\n ERRO: A marca não pode ser vazia!");
            return;
        }

        this.marca = novaMarca;
    }


    public set setModelo(novoModelo: string) {
        if (novoModelo.trim().length === 0) {
            console.log("\n ERRO: O modelo não pode ser vazio!");
            return;
        }

        this.modelo = novoModelo;
    }


    public set setAno(novoAno: number) {
        if (novoAno === 0) {
            console.log("\n ERRO: O ano deve ser informado!");
            return;
        }

        this.ano = novoAno;
    }


    public set setCor(novaCor: string) {
        if (novaCor.trim().length === 0) {
            console.log("\n ERRO: A cor não pode ser vazia!");
            return;
        }

        this.cor = novaCor;
    }
}
