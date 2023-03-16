export function generateId() {
    return `${generateIdSection()}-${generateIdSection()}-${generateIdSection()}`
}

function generateIdSection() {
    return Math.floor(Math.random() * 9999) + 9999
}
