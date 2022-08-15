export function ExecutionTime(seconds: Boolean = false) {
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            let divide = 1
            let unity = 'millisecunds'

            if (seconds) {
                divide = 1000
                unity = 'seconds'
            }
            const initialTime = performance.now();
            const result = originalMethod.apply(this, args);
            const finalTime = performance.now();
            console.log(`${propertyKey}, execution time: ${(initialTime - finalTime) / divide} seconds`);

            result;
        };
        return descriptor;
    };
}
