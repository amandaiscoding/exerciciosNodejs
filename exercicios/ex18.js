function carro(custoFabrica) {
    const custoConsumidor = custoFabrica * (1 + 0.28 + 0.45)
    return custoConsumidor
}

module.exports = {carro}