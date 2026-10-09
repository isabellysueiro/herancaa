export class Produto {
    private id: number;
    private nome: string;
    private preco: number;

    constructor(
        id: number,
        nome: string,
        preco: number
    ) {
        this.id = id
        this.nome = nome;
        this.preco = preco;
    }

    public get getId(): number { return this.id; }
    public get getNome(): string { return this.nome; }
    public get getPreco(): number { return this.preco; }

    public set setId(novoId: number) {
        if (novoId === 0) {
            console.log("\n ERRO: O id do produto não pode ser vazio!");
            return;
        }
        this.id = novoId;
        console.log("\n Id alterado com sucesso!");
    }

    public set setNome(novoNome: string) {
        if (novoNome.trim().length === 0) {
            console.log("\n ERRO: o nome não pode ser vazio");
            return;
        }
        this.nome = novoNome;
    }

    public set setPreco(novoPreco: number) {
        if (novoPreco < 0) {
            console.log("\n ERRO: O preço não pode ser negativo!");
            return;
        }
        this.preco = novoPreco;
    }
}