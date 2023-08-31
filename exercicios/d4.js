function bissexto(ano) {
    if ((ano % 400 == 0)) {
        return `${ano} é um ano bissexto.`
    } else {
        return `${ano} não é um ano bissexto.`
    }
}

module.exports = {bissexto}