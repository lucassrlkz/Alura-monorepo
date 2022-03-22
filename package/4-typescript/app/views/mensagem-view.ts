import { View } from "./view.js"

export default class MensagemView extends View<string> {

    template(model: string): string {
        return `
            <p class="alert alert-info"> ${model}</p>
        `
    }
};
