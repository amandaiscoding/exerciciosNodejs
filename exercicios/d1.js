function troca(a, b) {
    const temp = a;
    a = b;
    b = temp;
    return `a = ${a}; b = ${b}`
}

module.exports = {troca}