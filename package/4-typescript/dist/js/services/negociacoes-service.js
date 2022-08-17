import { Negociacao } from '../models/negociacao.js';
export class NegociacoesService {
    ObterNegociacoesDia() {
        const urlApi = 'http://localhost:8080/dados';
        return fetch(urlApi)
            .then(res => res.json())
            .then((res) => {
            return res.map(data => {
                return new Negociacao(new Date(), data.vezes, data.montante);
            });
        });
    }
}
//# sourceMappingURL=negociacoes-service.js.map