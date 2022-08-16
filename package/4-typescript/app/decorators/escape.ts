export function Escape(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
        let result = originalMethod.apply(this, args)
        if (typeof result === "string") {
            // console.log(`escape em ação na classe ${this.constructor.name} para o método ${propertyKey}`);
            result = result.replace(/<script>[\s\S]*?<\/script>/, '')
        }
        return result
    }

    return descriptor
}