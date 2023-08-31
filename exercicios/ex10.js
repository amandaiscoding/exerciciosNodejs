function imc(sexo, altura) {
    if (sexo == 'H') {
      const total = (72.7 * altura) - 58
      return total
     } else if (sexo == 'M') {
      const total = (62.1 * altura) - 44.7
      return total
     } else {
        return `Sexo inválido`
     }
}

module.exports = {imc}