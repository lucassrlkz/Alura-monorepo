export function TempoDeExecucao() {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;
        const milliseconds = 1000;
        descriptor.value = function (...args: any[]) {
            const initialTime = performance.now();
            const result = originalMethod.apply(this, args);
            const finalTime = performance.now();
            console.log(
                `${propertyKey}, execution time: ${(initialTime - finalTime) / milliseconds
                } seconds`
            );

            result;
        };
        return descriptor;
    };
}
