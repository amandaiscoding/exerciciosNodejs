function pecas(ipi, cod1, valor1, quant1, cod2, valor2, quant2) {
    const valorTotal = (valor1 * quant1 + valor2 * quant2) * (ipi + 1)
    return valorTotal
}

module.exports = {pecas}