import { ExecutionTime } from "../decorators/executionTime.js"

export abstract class View<T> {
    protected elemento: HTMLElement
    private escapar = false

    constructor(seletor: string, escapar?: boolean) {

        const elemento = document.querySelector(seletor)
        if (elemento) {
            this.elemento = elemento as HTMLInputElement
        } else {
            throw Error(`O seletor ${seletor} não existe no DOM`)
        }

        if (escapar) this.escapar = escapar
    }

    @ExecutionTime()
    public update(model: T): void {
        let template = this.template(model)
        this.elemento.innerHTML = template

        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }
    }

    protected abstract template(model: T): string
};
