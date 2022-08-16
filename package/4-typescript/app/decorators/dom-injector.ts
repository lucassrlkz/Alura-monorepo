export function domInjector(selector: string) {
    return function (target: any, propertykey: string) {

        let element: HTMLElement;

        const getter = function () {
            if (!element) {
                element = <HTMLElement>document.querySelector(selector);
            }

            return element
        }
        Object.defineProperty(
            target,
            propertykey,
            { get: getter }
        )
    }
}