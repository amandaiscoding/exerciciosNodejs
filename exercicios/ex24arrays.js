function tabuadaFor(numero) {
    const tabuada = [];
    for (let i = 0; i <= 10; i++) {
        tabuada.push(`${numero} x ${i} = ${numero * i}`);
    }
    return tabuada;
}

module.exports = {tabuadaFor};