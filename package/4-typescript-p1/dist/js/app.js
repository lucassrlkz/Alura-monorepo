import { Negociacao } from './models/negociacao';
const negociacao = new Negociacao(new Date(), 10, 100);
console.log(negociacao.volume);
