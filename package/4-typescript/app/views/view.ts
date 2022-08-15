import { ExecutionTime } from "../decorators/executionTime.js"
import { Inspect } from "../decorators/inspect.js"

export abstract class View<T> {
    protected elemento: HTMLElement

    constructor(seletor: string, escapar?: boolean) {

        const elemento = document.querySelector(seletor)
        if (elemento) {
            this.elemento = elemento as HTMLInputElement
        } else {
            throw Error(`O seletor ${seletor} não existe no DOM`)
        }
    }
    @Inspect
    @ExecutionTime()
    public update(model: T): void {
        let template = this.template(model)
        this.elemento.innerHTML = template
    }

    protected abstract template(model: T): string
};
