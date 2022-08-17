import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export default class Negociacoes implements Modelo<Negociacoes> {
    private negociacoes: Negociacao[] = []

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao)
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes
    }

    public texto(): string {
        return JSON.stringify(this.negociacoes, null, 2);
    }

    public equals(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) == JSON.stringify(negociacoes.lista())
    }
};
