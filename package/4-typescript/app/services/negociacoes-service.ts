import { NegociacoesDia } from "../interfaces/negociacao-dia";
import { Negociacao } from '../models/negociacao';

export class NegociacoesService {
    public ObterNegociacoesDia(): Promise<Negociacao[]> {
        const urlApi = 'http://localhost:8080/dados'
        return fetch(urlApi)
            .then(res => res.json())
            .then((res: NegociacoesDia[]) => {

                return res.map(data => {
                    return new Negociacao(new Date(), data.vezes, data.montante)
                })
            })
    }
}