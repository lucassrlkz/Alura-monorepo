export class NegociacaoController {
    private inputData
    private inputQuantidade: number
    private inputValor: number

    constructor() {
        this.inputData = document.querySelector('#data')
        this.inputQuantidade = Number(document.querySelector('#quantidade'))
        this.inputValor = Number(document.querySelector('#valor'))

    }

    adiciona() {
        console.log(
            this.inputData,
            this.inputQuantidade,
            this.inputValor
        )
    }
}