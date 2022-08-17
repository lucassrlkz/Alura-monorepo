
import { Imprimivel } from '../interfaces/imprimivel.js';

export function imprimir(...args: Imprimivel[]): void {
    for (let objeto of args) {
        console.log(objeto.texto());
    }
}