export function CustomElement(name) {
    return function(constructor) {
        customElements.define(`x3proofer-${name}`, constructor);
        return constructor;
    }
}