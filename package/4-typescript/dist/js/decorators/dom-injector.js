export function domInjector(selector) {
    return function (target, propertykey) {
        let element;
        const getter = function () {
            if (!element) {
                element = document.querySelector(selector);
            }
            return element;
        };
        Object.defineProperty(target, propertykey, { get: getter });
    };
}
