function mediaPomderada(nota1, nota2, nota3) {
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        throw new Error('Favor inserir um número válido.')
    }
    const media = (nota1 * 2 + nota2 * 3 + nota3 * 5) / 10
    return media
}

module.exports = {mediaPomderada}


