export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        this.elemento = document.querySelector(seletor);
        if (escapar)
            this.escapar = escapar;
    }
    update(model) {
        let template = this.template(model);
        this.elemento.innerHTML = template;
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
    }
}
;
