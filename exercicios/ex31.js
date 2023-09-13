function combustivel(numero) {
    switch (numero) {
        case 1:
            return "Álcool";
        case 2:
            return "Gasolina";
        case 3:
            return "Diesel";
        default:
            return "Número inválido";
    }
}

module.exports = {combustivel};