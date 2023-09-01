function tabuadaFor(num) {
    for (let i = 0; i <= 10; i++) {
        const resultado = num * i
        return `${num} x ${i} = ${resultado}`
    }
}

module.exports = {tabuadaFor}