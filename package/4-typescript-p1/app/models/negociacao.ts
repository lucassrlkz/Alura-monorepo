export class Negociacao {
	constructor(
		private _data: Date,
		private _quantidade: number,
		private _valor: number) {
	}

	get data(): Date {
		return this._data
	}

	get quantidade(): Number {
		return this._quantidade
	}

	get valor(): Number {
		return this._valor
	}

	get volume(): Number {
		return this._quantidade * this._valor
	}
}
