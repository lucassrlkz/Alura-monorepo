var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NegociacoesService } from './../services/negociacoes-service.js';
import { Negociacao } from '../models/negociacao.js';
import Negociacoes from '../models/negociacoes.js';
import NegociacoesView from '../views/negociacoes-view.js';
import MensagemView from '../views/mensagem-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { ExecutionTime } from '../decorators/execution-time.js';
import { Inspect } from '../decorators/inspect.js';
import { domInjector } from '../decorators/dom-injector.js';
import { imprimir } from '../utils/imprimir.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.NegociacoesService = new NegociacoesService();
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.diaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias uteis são aceitas');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        imprimir(negociacao, this.negociacoes);
        this.atualizaView();
        this.limparFormulario();
    }
    importarDados() {
        this.NegociacoesService.ObterNegociacoesDia()
            .then(todayNegociation => {
            return todayNegociation.filter(todayNegociation => {
                return !this.negociacoes
                    .lista()
                    .some(negociacaoExistente => negociacaoExistente.equals(todayNegociation));
            });
        })
            .then(todayNegociation => {
            for (let negociation of todayNegociation) {
                this.negociacoes.adiciona(negociation);
            }
            this.negociacoesView.update(this.negociacoes);
        });
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso');
    }
    diaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO;
    }
}
__decorate([
    domInjector('#data')
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInjector('#quantidade')
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector("#valor")
], NegociacaoController.prototype, "inputValor", void 0);
__decorate([
    Inspect,
    ExecutionTime()
], NegociacaoController.prototype, "adiciona", null);
//# sourceMappingURL=negociacao-controller.js.map