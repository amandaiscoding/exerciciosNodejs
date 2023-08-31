function calculoJuros(capital, taxa, dias) {
    const juros = capital * taxa * dias
    const montante = capital + juros
    return `Capital: ${capital}; Juros: ${juros}; Montante: ${montante}.`
}

module.exports = {calculoJuros}