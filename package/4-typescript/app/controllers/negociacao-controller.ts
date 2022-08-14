import { Negociacao } from '../models/negociacao.js';
import Negociacoes from '../models/negociacoes.js';
import NegociacoesView from '../views/negociacoes-view.js';
import MensagemView from '../views/mensagem-view.js';
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { TempoDeExecucao } from '../decorators/tempo-de-execucao.js';

export class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes = new Negociacoes()
    private negociacoesView = new NegociacoesView('#negociacoesView', true)
    private mensagemView = new MensagemView('#mensagemView')

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement
        this.inputValor = document.querySelector('#valor') as HTMLInputElement
        this.negociacoesView.update(this.negociacoes)
    }

    @TempoDeExecucao()
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