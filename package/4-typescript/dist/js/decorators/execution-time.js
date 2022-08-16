export function ExecutionTime(seconds = false) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            let divide = 1;
            let unity = 'millisecunds';
            if (seconds) {
                divide = 1000;
                unity = 'seconds';
            }
            const initialTime = performance.now();
            const result = originalMethod.apply(this, args);
            const finalTime = performance.now();
            console.log(`${propertyKey}, execution time: ${(initialTime - finalTime) / divide} seconds`);
            return result;
        };
        return descriptor;
    };
}
