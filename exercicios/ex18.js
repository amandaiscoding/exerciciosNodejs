function carro(custoFabrica) {
    if (isNaN(custoFabrica)) {
        throw new Error('Favor inserir um custo válido.')
    }
    const custoConsumidor = custoFabrica * (1 + 0.28 + 0.45)
    return custoConsumidor
}

module.exports = {carro}