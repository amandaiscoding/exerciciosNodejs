function somar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error('Favor inserir um número válido.')
    }
    const soma = num1 + num2
    return soma
}

module.exports = {somar}