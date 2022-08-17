export function Inspect(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- Méthod ${propertyKey}`);
        console.log(`--- Parameters ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`--- retorno ${JSON.stringify(args)}`);
        return result;
    };
    return descriptor;
}
//# sourceMappingURL=inspect.js.map