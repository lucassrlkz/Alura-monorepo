import { Modelo } from '../interfaces/modelo.js';

export class Negociacao implements Modelo<Negociacao> {
	constructor(
		private _data: Date,
		public readonly quantidade: number,
		public readonly valor: number
	) {
	}

	public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
		const date = new Date(dataString.replace(/-/g, ','))
		const quantidade = parseInt(quantidadeString)
		const valor = parseFloat(valorString)

		return new Negociacao(date, quantidade, valor)
	}

	get data(): Date {
		const data = new Date(this._data.getTime())
		return data
	}


	get volume(): Number {
		return this.quantidade * this.valor
	}

	public texto(): string {
		return `
			Data: ${this.data},		
			Quantidade: ${this.quantidade},
			Valor: ${this.valor}`
	}

	public equals(negociacao: Negociacao): boolean {
		return this.data.getDate() == negociacao.data.getDate() &&
			this.data.getMonth() == negociacao.data.getMonth() &&
			this.data.getFullYear() == negociacao.data.getFullYear()
	}

}
