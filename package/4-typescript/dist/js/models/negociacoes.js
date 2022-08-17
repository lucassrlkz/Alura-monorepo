export default class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    texto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    equals(negociacoes) {
        return JSON.stringify(this.negociacoes) == JSON.stringify(negociacoes.lista());
    }
}
;
//# sourceMappingURL=negociacoes.js.map