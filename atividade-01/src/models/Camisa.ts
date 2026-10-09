import { Produto } from "./Produto.js";
export class Camisa extends Produto {

    private cor: string;
    private tecido: string;
    private tamanho: number;


    constructor(id: number, nome: string, preco: number, cor: string, tecido: string, tamanho: number) {
        super(id, nome, preco)
        this.cor = cor;
        this.tecido = tecido;
        this.tamanho = tamanho
    }


    public getCor(): string { return this.cor; }


    public setCor(novaCor: string) {
        if (novaCor.trim().length === 0) {
            console.log("\n ERRO: A cor não pode ser vazia!");
            return;
        }
        this.cor = novaCor;
    }


    public getTecido(): string { return this.tecido; }

    public setTecido(novoTecido: string) {
        if (novoTecido.trim().length === 0) {
            console.log("\n ERRO: O tecido deve ser informado!");
            return;
        }
        this.tecido = novoTecido;
    }


    public getTamanho(): number { return this.tamanho; }

    public setTamanho(novoTamanho: number) {
        if (novoTamanho === 0) {
            console.log("\n ERRO: O tamanho deve ser informado!");
            return;
        }
        this.tamanho = novoTamanho;
    }
}