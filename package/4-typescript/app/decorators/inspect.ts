export function Inspect(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value
    descriptor.value = function (...args: any[]) {

        console.log(`--- Méthod ${propertyKey}`);
        console.log(`--- Parameters ${JSON.stringify(args)}`);

        const result = originalMethod.applay(this, args)
        console.log(`--- retorno ${JSON.stringify(args)}`);
        return result
    }
    return descriptor
}