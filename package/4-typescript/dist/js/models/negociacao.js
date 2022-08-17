export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    static criaDe(dataString, quantidadeString, valorString) {
        const date = new Date(dataString.replace(/-/g, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date, quantidade, valor);
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    texto() {
        return `
			Data: ${this.data},		
			Quantidade: ${this.quantidade},
			Valor: ${this.valor}`;
    }
    equals(negociacao) {
        return this.data.getDate() == negociacao.data.getDate() &&
            this.data.getMonth() == negociacao.data.getMonth() &&
            this.data.getFullYear() == negociacao.data.getFullYear();
    }
}
//# sourceMappingURL=negociacao.js.map