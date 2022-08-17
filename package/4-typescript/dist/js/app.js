import { NegociacaoController } from './controllers/negociacao-controller.js';
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error('Não foi possibel iniciar a aplicação. Verifica se o form existe');
}
const btnImport = document.querySelector('#importar');
if (btnImport) {
    btnImport.addEventListener('click', () => {
        controller.importarDados();
    });
}
else {
    throw Error('botão importa não foi encontrado');
}
//# sourceMappingURL=app.js.map