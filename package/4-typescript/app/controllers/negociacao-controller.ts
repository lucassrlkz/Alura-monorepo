import { NegociacoesService } from './../services/negociacoes-service';
import { Negociacao } from '../models/negociacao.js';
import Negociacoes from '../models/negociacoes.js';
import NegociacoesView from '../views/negociacoes-view.js';
import MensagemView from '../views/mensagem-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { ExecutionTime } from '../decorators/execution-time.js';
import { Inspect } from '../decorators/inspect.js';
import { domInjector } from '../decorators/dom-injector.js';
import { NegociacoesDia } from '../interfaces/negociacao-dia.js';

export class NegociacaoController {
    @domInjector('#data')
    private inputData: HTMLInputElement

    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement

    @domInjector("#valor")
    private inputValor: HTMLInputElement

    private negociacoes = new Negociacoes()
    private negociacoesView = new NegociacoesView('#negociacoesView')
    private mensagemView = new MensagemView('#mensagemView')
    private NegociacoesService = new NegociacoesService()

    constructor() {
        this.negociacoesView.update(this.negociacoes)
    }

    @Inspect
    @ExecutionTime()
    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )

        if (!this.diaUtil(negociacao.data)) {
            this.mensagemView.update('Apenas negociações em dias uteis são aceitas')
            return
        }

        this.negociacoes.adiciona(negociacao)
        console.log(this.negociacoes.lista())
        this.atualizaView();
        this.limparFormulario()
    }

    public importarData(): void {
        this.NegociacoesService.ObterNegociacoesDia()
            .then(todayNegociation => {
                for (let negociation of todayNegociation) {
                    this.negociacoes.adiciona(negociation)
                }
                this.negociacoesView.update(this.negociacoes)
            })
    }
    private limparFormulario(): void {
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus()
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update('Negociação adicionada com sucesso')
    }

    private diaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO
    }
}