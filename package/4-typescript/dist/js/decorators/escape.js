export function Escape(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        let result = originalMethod.apply(this, args);
        if (typeof result === "string") {
            result = result.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return result;
    };
    return descriptor;
}
//# sourceMappingURL=escape.js.map